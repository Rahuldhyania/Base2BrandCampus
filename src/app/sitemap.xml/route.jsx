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
    "wordpress-training-course"
  ];

  const urls = staticPages
    .map(
      (page) => `
      <url>
        <loc>${baseUrl}/${page}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
