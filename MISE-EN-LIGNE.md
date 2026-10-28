# Mettre le site en ligne et le faire remonter sur Google

## Étape 1 : choisir un nom de domaine (à décider avec M. Le Ray)
Environ 10 à 15 € par an chez OVHcloud, Gandi ou Infomaniak. Exemples à vérifier : `nouvelle-fondation.org`, `nouvellefondation.org`, `newfoundation-un.org`.
Le domaine doit être au nom du projet ou de Pax Christi France, pas d'une personne seule.

## Étape 2 : publier sur GitHub (gratuit)
1. Créer un compte GitHub au nom du projet (ex. `nouvelle-fondation`), avec une adresse mail partagée.
2. **New repository**, nom `site`, visibilité **Public**.
3. **Add file > Upload files** : glisser tout le contenu du dossier `site-web` (sauf `node_modules` s'il existe). **Commit changes**.
   Attention : les dossiers cachés `.github` et le fichier `.pages.yml` doivent aussi être envoyés
   (sur Mac, Cmd+Maj+point les rend visibles dans le Finder).
4. **Settings > Pages > Build and deployment > Source** : choisir **GitHub Actions**.
5. Onglet **Actions** : la publication démarre. Au bout de 1 à 2 minutes, le site est en ligne
   à l'adresse `https://<compte>.github.io/site/`.

## Étape 3 : brancher le nom de domaine
1. GitHub : **Settings > Pages > Custom domain**, saisir `www.votre-domaine.org`, **Save**.
2. Chez le registrar, zone DNS :
   - 4 enregistrements **A** sur le domaine nu, vers `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - 1 enregistrement **CNAME** `www` vers `<compte>.github.io`
3. Attendre la validation (quelques minutes à 24 h), puis cocher **Enforce HTTPS**.
4. Dans `src/_data/site.yml`, remplir `url: https://www.votre-domaine.org` (avec Pages CMS ou sur GitHub).
   Cela active le plan du site (`sitemap.xml`), les liens canoniques et l'image d'aperçu sur LinkedIn.

## Étape 4 : déclarer le site à Google et Bing
1. **Google Search Console** : *Ajouter une propriété > Domaine*, valider avec l'enregistrement TXT proposé.
2. **Sitemaps** : soumettre `sitemap.xml`.
3. **Inspection de l'URL** : demander l'indexation de la page d'accueil et de `/en/`.
4. **Bing Webmaster Tools** : *Importer depuis Google Search Console* (alimente aussi DuckDuckGo et Ecosia).

## Étape 5 : obtenir des liens vers le site (le plus important pour remonter)
Demander un lien vers le site à :
- **signesdestemps.me** : en haut de l'ancienne page, « Le projet a désormais son site : [lien] ».
- **Pax Christi France** et **Pax Christi International**, sur leurs pages consacrées au projet.
- **Article 109** et **IPB**, dans leurs listes de membres.
- Chaque **association signataire**, et le **CCIC-UNESCO**.
- La **page LinkedIn** (*Modifier la page > Site web*) et chaque nouveau post.
- Les **signatures mail** des membres du Bureau.

## Étape 6 : faire vivre le site
- Publier régulièrement dans *Actualités* : chaque article est une nouvelle porte d'entrée depuis Google.
- Utiliser les mots que les gens cherchent : « réforme de l'ONU », « Conseil de sécurité », « droit de veto », « Charte des Nations unies ».
- Générer un nouveau QR code vers la nouvelle adresse.

## Ce qu'on peut attendre
- Recherche du nom du projet : en tête en quelques jours à quelques semaines après l'étape 4.
- Recherches générales (« réforme de l'ONU ») : concurrence très forte (ONU, Wikipédia, grands médias). Il faut des mois, des articles réguliers et des liens d'autres sites. Personne ne peut garantir la première place.
