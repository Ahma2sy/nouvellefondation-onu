// Configuration du générateur de site (Eleventy).
// Rôle : lire les fichiers de src/_data (YAML) et src/actualites (Markdown),
// et produire le site final dans le dossier _site.
import yaml from "js-yaml";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  eleventyConfig.addDataExtension("yml,yaml", (contents) => yaml.load(contents));
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/medias": "medias" });
  eleventyConfig.addPassthroughCopy({ "src/favicon.ico": "favicon.ico" });

  // {{ texte | t(lang) }} : renvoie la version fr ou en d'un texte bilingue.
  eleventyConfig.addFilter("t", (value, lang) => {
    if (value == null) return "";
    if (typeof value !== "object") return value;
    return value[lang] ?? value.fr ?? "";
  });

  // {{ date | dateLongue(lang) }} : « 31 août 2026 » / « 31 August 2026 »
  eleventyConfig.addFilter("dateLongue", (value, lang) => {
    const d = value instanceof Date ? value : new Date(value);
    return d.toLocaleDateString(lang === "en" ? "en-GB" : "fr-FR", {
      day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Paris"
    });
  });
  eleventyConfig.addFilter("dateIso", (value) => {
    const d = value instanceof Date ? value : new Date(value);
    return d.toISOString().slice(0, 10);
  });
  eleventyConfig.addFilter("head", (list, n) => (list || []).slice(0, n));
  eleventyConfig.addFilter("hote", (url) => new URL(url).hostname.replace(/^www\./, ""));
  eleventyConfig.addFilter("trierParDate", (list) =>
    [...(list || [])].sort((a, b) => new Date(b.date) - new Date(a.date))
  );

  // Articles du blog, du plus récent au plus ancien (les brouillons sont exclus).
  eleventyConfig.addCollection("articles", (api) =>
    api.getFilteredByTag("articles").filter((p) => !p.data.brouillon).sort((a, b) => b.date - a.date)
  );

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    pathPrefix: process.env.PATH_PREFIX || "/",
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk"
  };
}
