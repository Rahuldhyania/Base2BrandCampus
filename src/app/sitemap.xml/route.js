export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const baseUrl = "https://b2bcampus.com";

  const escapeXml = (str = "") =>
    String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&apos;");

  const createUrlNode = (loc, changefreq = "monthly", priority = "1.0") => `
  <url>
    <loc>${escapeXml(loc)}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

  /* ---------------- STATIC PAGES ---------------- */

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
    "knowledge-center",
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
    "react-native"
  ];

  const staticUrls = staticPages
    .map((p) => `${baseUrl}/${p}`)
    .map((url) => createUrlNode(url, "monthly", "1.0"))
    .join("");

  /* ---------------- BLOGS ---------------- */

  let blogUrls = "";

  try {
    const res = await fetch(
      "https://backend.b2bcampus.com/api/B2Badmin/blogs?page=1&limit=5000",
      { cache: "no-store" }
    );

    const data = await res.json();

    const blogs = data?.blogs || data?.data || [];

    blogUrls = blogs
      .map((b) => b?.slugUrl)
      .filter(Boolean)
      .map((slug) => `${baseUrl}/blog/${slug}`)
      .map((url) => createUrlNode(url, "weekly", "0.8"))
      .join("");
  } catch (err) {
    console.log("Blog Sitemap Error", err);
  }

  /* ---------------- KNOWLEDGE CENTER ---------------- */

  let kcUrls = "";

  try {
    const res = await fetch(
      "https://backend.b2bcampus.com/api/B2Badmin/public/knowledge-center?page=1&limit=5000",
      { cache: "no-store" }
    );

    const data = await res.json();

    const kc = data?.knowledgeCenters || data?.data || [];

    kcUrls = kc
      .map((k) => k?.slugUrl)
      .filter(Boolean)
      .map((slug) => `${baseUrl}/knowledge-center/${slug}`)
      .map((url) => createUrlNode(url, "weekly", "0.8"))
      .join("");
  } catch (err) {
    console.log("KC Sitemap Error", err);
  }

  /* ---------------- FINAL XML ---------------- */

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${staticUrls}

${blogUrls}

${kcUrls}

</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}