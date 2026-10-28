# Modifier le site

Trois façons, de la plus simple à la plus technique. Après chaque modification, le site se met à jour tout seul en 1 à 2 minutes.

## 1. Avec l'interface d'édition (recommandé au quotidien)

**Une seule fois, pour s'installer :**
1. Aller sur **app.pagescms.org** et cliquer sur *Sign in with GitHub*.
2. Autoriser Pages CMS à accéder au dépôt du site.
3. Choisir le dépôt `site` dans la liste.

**Ajouter un article au blog :**
1. Menu *Actualités (blog)* puis *Add an entry*.
2. Remplir le titre, la date, le résumé (2 phrases), et coller ou écrire le texte.
3. Facultatif : ajouter une image (format paysage) et sa description, le lien du post LinkedIn.
4. Cliquer sur *Save*. L'article est en ligne 1 à 2 minutes plus tard.
5. Pour préparer un article sans le publier : cocher *Brouillon*.

**Ajouter un partenaire, un signataire, un membre du Bureau, une publication PDF :**
Menu *Contenu des pages*, puis choisir la page. Chaque texte a une case *fr*, une case *en* et une case *es* (espagnol). Si une case reste vide, le texte français s'affiche à la place.
Pour ajouter un élément à une liste, cliquer sur *Add an entry* au bas de la liste.

**Ajouter une image ou un PDF :** menu *Media*, puis *Upload*.

**Inviter Ghislain Le Ray ou un autre membre :** il lui faut un compte GitHub, ajouté au dépôt
(*Settings > Collaborators* sur GitHub) ou invité depuis Pages CMS.

## 2. En le demandant à Claude
Pour les gros changements (nouvelle page, nouvelle section, nouveau design) : décrire le changement à Claude,
en joignant le dossier du site. Claude respecte les règles de `CLAUDE.md`.

## 3. Directement sur GitHub
Ouvrir le fichier sur github.com (par exemple `src/_data/partenaires.yml`), cliquer sur le crayon, modifier, puis *Commit changes*.
Attention : dans les fichiers `.yml`, mettre entre guillemets un texte qui contient une virgule ou deux-points.

## Où se trouve quoi
| Je veux changer... | Fichier |
|---|---|
| un article du blog | `src/actualites/` (un fichier par article) |
| les 11 propositions | `src/_data/propositions.yml` |
| le Bureau, les soutiens, les documents | `src/_data/projet.yml` |
| les partenaires, les signataires, l'image des logos | `src/_data/partenaires.yml` |
| les pétitions, le contact | `src/_data/agir.yml` |
| les PDF et articles de presse | `src/_data/publications.yml` |
| la page d'accueil | `src/_data/accueil.yml` |
| le menu, les titres Google, l'adresse du site | `src/_data/site.yml` |

## Si quelque chose ne marche plus
Sur GitHub, onglet *Actions* : une croix rouge indique que la dernière modification a une erreur
(souvent une virgule ou un deux-points sans guillemets dans un `.yml`). Le site en ligne reste sur la version précédente,
rien n'est cassé pour les visiteurs. Corriger le fichier ou annuler la modification, ou demander à Claude.
