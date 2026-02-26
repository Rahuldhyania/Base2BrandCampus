// export const runtime = "nodejs";
// export const dynamic = "force-dynamic";

// export async function GET() {
//   const baseUrl = "https://b2bcampus.com";

//   const staticPages = [
//     "",
//     "about-us",
//     "ai-course",
//     "blogs",
//     "career",
//     "contact-us",
//     "cookies-policy",
//     "privacy-policy",
//     "placement/page",
//     "cyber-security-course",
//     "devops-course",
//     "digital-marketing-course",
//     "freight-broker",
//     "freight-broker-training",
//     "full-stack-development",
//     "graphic-design-course",
//     "iot",
//     "knowledgecenter",
//     "knowledge-center",
//     "personality-development",
//     "python-java-course",
//     "truck-dispatcher-training",
//     "truck-dispatching",
//     "video-editing",
//     "web-designing-course",
//     "web-development-course",
//     "wordpress-training-course",
//     "shopify-app-development-course",
//     "shopify-theme-development-course",
//     "flutter",
//     "react-js-course",
//     "react-native"
//   ];

//   const escapeXml = (str = "") =>
//     String(str)
//       .replaceAll("&", "&amp;")
//       .replaceAll("<", "&lt;")
//       .replaceAll(">", "&gt;")
//       .replaceAll('"', "&quot;")
//       .replaceAll("'", "&apos;");

//   const safeJoin = (a, b) =>
//     `${a.replace(/\/+$/, "")}/${String(b || "").replace(/^\/+/, "")}`;

//   const toUrlNode = (loc, changefreq = "weekly", priority = "0.8") => `
//   <url>
//     <loc>${escapeXml(loc)}</loc>
//     <changefreq>${changefreq}</changefreq>
//     <priority>${priority}</priority>
//   </url>`;

//   const fetchJson = async (url) => {
//     try {
//       const res = await fetch(url, {
//         cache: "no-store",
//         headers: { Accept: "application/json" }
//       });
//       if (!res.ok) return null;
//       return await res.json();
//     } catch {
//       return null;
//     }
//   };

//   const [blogsData, kcData] = await Promise.all([
//     fetchJson("https://backend.b2bcampus.com/api/B2Badmin/blogs?page=1&limit=5000"),
//     fetchJson("https://backend.b2bcampus.com/api/B2Badmin/public/knowledge-center?page=1&limit=5000")
//   ]);

//   const blogsArray =
//     blogsData?.blogs ||
//     blogsData?.data ||
//     blogsData?.items ||
//     [];

//   const kcArray =
//     kcData?.knowledgeCenters ||
//     kcData?.knowledgeCentersList ||
//     kcData?.data ||
//     [];

//   const blogUrls = (Array.isArray(blogsArray) ? blogsArray : [])
//     .map((b) => b?.slugUrl)
//     .filter(Boolean)
//     .map((slug) => safeJoin(baseUrl, `blogs/${slug}`));

//   const knowledgeCenterUrls = (Array.isArray(kcArray) ? kcArray : [])
//     .map((k) => k?.slugUrl)
//     .filter(Boolean)
//     .map((slug) => safeJoin(baseUrl, `knowledge-center/${slug}`));

//   const staticUrls = staticPages.map((p) => safeJoin(baseUrl, p));

//   const allUrls = Array.from(
//     new Set([...staticUrls, ...blogUrls, ...knowledgeCenterUrls])
//   );

//   const urlsXml = allUrls.map((u) => toUrlNode(u)).join("");

//   const xml = `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
// ${urlsXml}
// </urlset>`;

//   return new Response(xml, {
//     headers: {
//       "Content-Type": "application/xml; charset=utf-8",
//       "Cache-Control": "no-store"
//     }
//   });
// }


export const runtime = "nodejs";

export async function GET() {
  const baseUrl = "https://b2bcampus.com";

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap-pages.xml</loc>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-blogs.xml</loc>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-kc.xml</loc>
  </sitemap>
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}