import { writeFileSync } from "node:fs";
import { SITE_URL, locationPages } from "../src/lib/seo-data.ts";

const lastmod = new Date().toISOString().split("T")[0];

const urls = [
  { loc: `${SITE_URL}/`, priority: "1.0" },
  ...locationPages.map((p) => ({
    loc: `${SITE_URL}${p.path}`,
    priority: p.city === "Porto" || p.city === "Guimarães" || p.city === "Braga" ? "0.95" : "0.85",
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

writeFileSync("public/sitemap.xml", xml);
console.log(`sitemap.xml gerado com ${urls.length} URLs`);
