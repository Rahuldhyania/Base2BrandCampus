export async function GET() {
  const baseUrl = "https://www.b2bcampus.com";

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

  // ---------- helpers ----------
  const escapeXml = (str = "") =>
    String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&apos;");

  const toUrlNode = (loc, changefreq = "weekly", priority = "0.8") => `
    <url>
      <loc>${escapeXml(loc)}</loc>
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>`;

  const safeJoin = (a, b) =>
    `${a.replace(/\/+$/, "")}/${String(b || "").replace(/^\/+/, "")}`;

  async function fetchAllPages(urlBuilder, arrayKey) {
    const all = [];
    let page = 1;
    let totalPages = 1;

    while (page <= totalPages) {
      const url = urlBuilder(page);

      const res = await fetch(url, {
        // next: { revalidate: 3600 }, // optional cache
        cache: "no-store", // sitemap usually should be fresh
      });

      if (!res.ok) break;

      const data = await res.json();

      // try to read totalPages (fallback safe)
      totalPages = Number(data?.totalPages || totalPages || 1);

      const items = Array.isArray(data?.[arrayKey]) ? data[arrayKey] : [];
      all.push(...items);

      // safety break (avoid infinite loop if API sends wrong totalPages)
      if (items.length === 0 && page > 1) break;

      page += 1;
      if (page > 300) break; // hard safety
    }

    return all;
  }

  // ---------- fetch dynamic slugs ----------
  // BLOGS
  const blogItems = await fetchAllPages(
    (page) => `https://backend.b2bcampus.com/api/B2Badmin/blogs?page=${page}&limit=2000`,
    "blogs"
  );

  const blogUrls = blogItems
    .map((b) => b?.slugUrl)
    .filter(Boolean)
    .map((slug) => safeJoin(baseUrl, `blogs/${slug}`)); // <-- change path if needed

  // KNOWLEDGE CENTER
  const kcItems = await fetchAllPages(
    (page) =>
      `https://backend.b2bcampus.com/api/B2Badmin/public/knowledge-center?page=${page}&limit=2000`,
    "knowledgeCenters"
  );

  const knowledgeCenterUrls = kcItems
    .map((k) => k?.slugUrl)
    .filter(Boolean)
    .map((slug) => safeJoin(baseUrl, `knowledge-center/${slug}`)); // <-- change path if needed

  // ---------- build final url list (dedupe) ----------
  const staticUrls = staticPages.map((p) => safeJoin(baseUrl, p));

  const allUrls = Array.from(new Set([...staticUrls, ...blogUrls, ...knowledgeCenterUrls]));

  const urlsXml = allUrls.map((u) => toUrlNode(u)).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urlsXml}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}