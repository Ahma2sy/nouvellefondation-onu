// Plan du site pour Google : créé seulement quand site.url est rempli dans _data/site.yml.
export const data = {
  eleventyExcludeFromCollections: true,
  eleventyComputed: { permalink: (data) => (data.site.url ? "/sitemap.xml" : false) }
};
export function render({ site, collections }) {
  const urls = collections.all
    .filter((p) => p.url && p.url !== "/404.html")
    .map((p) => `  <url><loc>${site.url}${p.url}</loc><lastmod>${p.date.toISOString().slice(0, 10)}</lastmod></url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}
