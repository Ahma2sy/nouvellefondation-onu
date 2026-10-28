# CLAUDE.md : site Nouvelle Fondation

Instructions pour toute IA (Claude, Cursor...) ou personne qui modifie ce site.
Principe repris de vibecodex (règle A2) : le contenu vit à part du code.

## Ce qu'est ce site
Site statique trilingue (FR/EN/ES) du projet Nouvelle Fondation des institutions internationales,
généré par Eleventy 3 et publié automatiquement sur GitHub Pages (.github/workflows/deploy.yml).
Aucun serveur, aucune base de données. Contenu modifiable sans code via Pages CMS (.pages.yml).

## Structure
```
src/_data/*.yml        TOUT le texte des pages, en { fr: ..., en: ..., es: ... }
  site.yml             adresse du site, menu, titres et descriptions Google de chaque page, petits textes
  accueil.yml          page d'accueil
  propositions.yml     les 11 propositions en 3 temps
  projet.yml           Bureau, personnalités, documents
  partenaires.yml      partenaires et signataires
  agir.yml             pétitions et contact
  publications.yml     PDF et articles hébergés ailleurs
src/actualites/*.md    un fichier = un article du blog (en-tête YAML + texte en Markdown)
src/pages/*.njk        une page = un gabarit, généré en FR, EN et ES (pagination sur site.langs)
src/_includes/         base.njk (gabarit commun), article.njk, partials/
src/assets/            css, js, images, polices (hébergées localement), logos
src/medias/            fichiers ajoutés depuis Pages CMS
eleventy.config.js     filtres : t(lang), dateLongue(lang), dateIso, head, hote, trierParDate
```

## Règles
1. **Jamais de texte en dur dans les gabarits.** Tout texte visible vient de src/_data ou d'un article.
2. **Toujours trilingue** pour les pages : `{ fr, en, es }` (si une traduction manque, le français s'affiche). Les articles peuvent être dans une seule langue (champ `lang` : fr, en ou es).
3. **YAML : mettre entre guillemets** toute valeur qui contient une virgule, deux-points ou guillemet dans un `{ ... }`.
4. **Fidélité au fond.** Propositions, noms et chiffres sont validés par le Bureau. Ne pas reformuler sans validation.
5. **Liens internes** : écrire `/chemin/` (le préfixe GitHub Pages est ajouté automatiquement par le plugin HTML Base).
6. **SEO** : un seul `<h1>` par page ; titre et description de chaque page dans site.yml (titre < 65 caractères, description < 160).
7. **Accessibilité** : texte alternatif sur chaque image, focus clavier visible, contrastes suffisants, prefers-reduced-motion respecté.
8. **Responsive** : vérifier à 390 px, aucun défilement horizontal. Thème sombre automatique : couleurs uniquement via les variables de :root.
9. **Images** : < 300 Ko, format paysage pour les articles. Photos de personnes publiques : uniquement avec droits.
10. **Pas de dépendance externe** au chargement de la page (polices et images hébergées sur le site).

## Commandes
```
npm install        # une fois
npm start          # aperçu local sur http://localhost:8080
npm run build      # génère _site/
```
