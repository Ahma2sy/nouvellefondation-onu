// Plan du site pour Google : créé seulement quand site.url est rempli dans _data/site.yml.
// Contient chaque page dans les trois langues, plus tous les articles.
export const data = {
  eleventyExcludeFromCollections: true,
  eleventyComputed: { permalink: (data) => (data.site.url ? "/sitemap.xml" : false) }
};
export function render({ site, collections }) {
  const jour = new Date().toISOString().slice(0, 10);
  const pages = [];
  for (const cle of Object.keys(site.pages)) {
    for (const lang of site.langs) {
      const url = site.pages[cle].url && site.pages[cle].url[lang];
      if (url) pages.push({ url, date: jour });
    }
  }
  for (const a of collections.articles || []) {
    pages.push({ url: a.url, date: a.date.toISOString().slice(0, 10) });
  }
  const vus = new Set();
  const urls = pages
    .filter((p) => !vus.has(p.url) && vus.add(p.url))
    .map((p) => `  <url><loc>${site.url}${p.url}</loc><lastmod>${p.date}</lastmod></url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}
