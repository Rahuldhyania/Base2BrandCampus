export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const baseUrl = "https://www.b2bcampus.com";
  const nowIso = new Date().toISOString();

  const staticPages = [
    "",
    "about-us",
    "ai-course",
    "blogs",
    "career",
    "contact-us",
    "cookies-policy",
    "privacy-policy",
    "placement/page",
    "cyber-security-course",
    "devops-course",
    "digital-marketing-course",
    "freight-broker",
    "freight-broker-training",
    "full-stack-development",
    "graphic-design-course",
    "iot",
    "knowledgecenter",
    "personality-development",
    "python-java-course",
    "truck-dispatcher-training",
    "truck-dispatching",
    "video-editing",
    "web-designing-course",
    "web-development-course",
    "wordpress-training-course",
    "shopify-app-development-course",
    "shopify-theme-development-course",
    "flutter",
    "react-js-course",
    "react-native",
    "knowledge-center",
  ];

  const escapeXml = (str = "") =>
    String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&apos;");

  const safeJoin = (a, b) =>
    `${a.replace(/\/+$/, "")}/${String(b || "").replace(/^\/+/, "")}`;

  const toUrlNode = (loc, lastmod = nowIso, changefreq = "weekly", priority = "0.8") => `
  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${escapeXml(lastmod)}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

  // Fetch BOTH in parallel, single page, big limit
  const [blogsRes, kcRes] = await Promise.allSettled([
    fetch("https://backend.b2bcampus.com/api/B2Badmin/blogs?page=1&limit=5000", {
      next: { revalidate: 3600 },
      headers: { Accept: "application/json" },
    }),
    fetch("https://backend.b2bcampus.com/api/B2Badmin/public/knowledge-center?page=1&limit=5000", {
      next: { revalidate: 3600 },
      headers: { Accept: "application/json" },
    }),
  ]);

  let blogsData = { blogs: [] };
  let kcData = { knowledgeCenters: [] };

  if (blogsRes.status === "fulfilled" && blogsRes.value.ok) {
    try { blogsData = await blogsRes.value.json(); } catch {}
  }
  if (kcRes.status === "fulfilled" && kcRes.value.ok) {
    try { kcData = await kcRes.value.json(); } catch {}
  }

  const staticUrls = staticPages.map((p) => safeJoin(baseUrl, p));

  const blogUrls = (blogsData.blogs || [])
    .map((b) => b?.slugUrl)
    .filter(Boolean)
    .map((slug) => safeJoin(baseUrl, `blogs/${slug}`));

  const knowledgeCenterUrls = (kcData.knowledgeCenters || [])
    .map((k) => k?.slugUrl)
    .filter(Boolean)
    .map((slug) => safeJoin(baseUrl, `knowledge-center/${slug}`));

  const allUrls = Array.from(new Set([...staticUrls, ...blogUrls, ...knowledgeCenterUrls]));
  const urlsXml = allUrls.map((u) => toUrlNode(u)).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}