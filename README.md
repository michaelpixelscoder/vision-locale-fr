# Vision Locale Tourisme

Site statique pour `vision-locale.fr`, heberge via GitHub Pages.

## Pages

- `index.html` : landing page du guide.
- `guide.html` : guide HTML.
- `merci.html` : page de confirmation.
- `offre.html` : page offres.
- `privacy.html` : confidentialite et mentions provisoires.
- `ads/` : sources HTML/CSS des creatives Meta.
- `assets/ads/` : exports PNG des publicites.

## Publication GitHub Pages

Configurer GitHub Pages sur la branche principale, dossier racine.

Ajouter les enregistrements DNS recommandes par GitHub pour le domaine `vision-locale.fr`.

## Tracking

Renseigner les IDs dans `tracking.js` :

- `googleTagId`
- `metaPixelId`

## Backend Convex

Le formulaire envoie les leads vers Convex via `form.js`.

Deployment utilise :

- Convex deployment : `dev/michael-delaporte`
- HTTP endpoint : `https://colorful-condor-335.convex.site`

Le token de deploiement doit rester dans le secret GitHub `CONVEX_DEPLOY_KEY`.

## Formulaire

Le formulaire capture :

- email
- type d'etablissement
- source
- page

En cas d'erreur reseau, l'utilisateur est quand meme redirige vers `merci.html` pour ne pas casser l'experience.
