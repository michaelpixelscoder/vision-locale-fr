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

## Formulaire

Le formulaire est configure en `GET` vers `merci.html` pour fonctionner sur GitHub Pages sans serveur.

Pour capturer les emails en production, connecter ensuite un outil externe comme Formspree, Brevo, Tally ou ConvertKit.
