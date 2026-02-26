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

  const toUrlNode = (loc) => `
  <url>
    <loc>${escapeXml(loc)}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;

  const res = await fetch(
    "https://backend.b2bcampus.com/api/B2Badmin/blogs?page=1&limit=5000",
    { cache: "no-store" }
  );

  const data = await res.json();

  const blogs =
    data?.blogs ||
    data?.data ||
    [];

  const urls = blogs
    .map((b) => b?.slugUrl)
    .filter(Boolean)
    .map((slug) => `${baseUrl}/blog/${slug}`)
    .map(toUrlNode)
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" }
  });
}