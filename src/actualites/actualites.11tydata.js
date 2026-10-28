// Réglages communs à tous les articles du dossier « actualites ».
// Un article = un fichier .md. Champs : titre, date, resume, image (facultatif),
// image_alt, linkedin (facultatif), lang (fr par défaut), brouillon (true pour masquer).
export default {
  layout: "article.njk",
  lang: "fr",
  tags: ["articles"],
  cle: "actualites",
  schema: "article",
  hreflangAbsent: true,
  eleventyComputed: {
    lang: (data) => (["en", "es"].includes(data.lang) ? data.lang : "fr"),
    permalink: (data) => {
      if (data.brouillon) return false;
      const base = { en: "/en/news/", es: "/es/noticias/" }[data.lang] || "/actualites/";
      return base + data.page.fileSlug.replace(/^\d{4}-\d{2}-\d{2}-/, "") + "/";
    },
    titreSeo: (data) => data.titre,
    descriptionSeo: (data) => data.resume,
    imageSeo: (data) => data.image || "/assets/img/partage.jpg"
  }
};
