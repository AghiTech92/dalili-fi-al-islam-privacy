# دَلِيلِي فِي الإِسْلَام — Dalili fi al-Islam — politique de confidentialité

Site public indépendant des projets Android et iOS/iPadOS. Ce dépôt contient uniquement les textes de confidentialité et d’assistance, leur générateur et les fichiers statiques du site. Aucun code d’application, texte religieux, base de données, identifiant publicitaire de production ou secret n’y est nécessaire.

Site : https://aghitech92.github.io/dalili-fi-al-islam-privacy/

Contact public : aghitech92@gmail.com

Nom public du développeur Google Play : `Aghiles Tech`.

Pseudo du profil Google associé : `AghiTech92`.

## Langues et adresses

| Plateforme | Langue | Politique |
| --- | --- | --- |
| Android | Français | https://aghitech92.github.io/dalili-fi-al-islam-privacy/fr/ |
| Android | English | https://aghitech92.github.io/dalili-fi-al-islam-privacy/en/ |
| Android | العربية | https://aghitech92.github.io/dalili-fi-al-islam-privacy/ar/ |
| iOS / iPadOS | Français | https://aghitech92.github.io/dalili-fi-al-islam-privacy/ios/fr/ |
| iOS / iPadOS | English | https://aghitech92.github.io/dalili-fi-al-islam-privacy/ios/en/ |
| iOS / iPadOS | العربية | https://aghitech92.github.io/dalili-fi-al-islam-privacy/ios/ar/ |

La racine conserve la politique Android française complète. `/ios/` affiche la politique iOS/iPadOS française. Le sélecteur de plateforme conserve la langue choisie et le sélecteur de langue conserve la plateforme. Les URL Android existantes restent utilisables.

Aucune connexion, aucun JavaScript et aucune redirection automatique ne sont nécessaires. L’arabe utilise une mise en page RTL. Les pages n’ajoutent ni publicité, ni formulaire, ni outil de mesure d’audience, ni cookie du développeur ; les traitements techniques de GitHub sont expliqués dans la politique.

### Assistance et App Store Connect

Les pages iOS proposent une rubrique d’assistance avec le contact public déjà utilisé par le site. Après publication, utiliser l’URL de la politique iOS de la langue concernée pour la confidentialité, et la même URL suivie de `#contact` pour l’assistance :

- Français : https://aghitech92.github.io/dalili-fi-al-islam-privacy/ios/fr/#contact
- English : https://aghitech92.github.io/dalili-fi-al-islam-privacy/ios/en/#contact
- العربية : https://aghitech92.github.io/dalili-fi-al-islam-privacy/ios/ar/#contact

## Mise à jour

Node.js suffit, sans installation de dépendances :

```sh
node scripts/build.mjs
node scripts/validate.mjs
git diff --check
```

Les textes Android restent dans `content/fr-en.json` et `content/ar.json`. Les textes iOS/iPadOS sont dans `content/ios.json`. Modifier les textes et leur date localisée, puis la date ISO de la plateforme concernée dans `scripts/build.mjs`, et régénérer les fichiers HTML. Le style commun et l’icône sont dans `docs/styles.css` et `docs/icon.svg`.

Le validateur vérifie les huit pages : plateforme, langue, direction, nom de l’application, dix rubriques, contact, ancres, liens locaux, alternatives linguistiques et absence de scripts, formulaires, contenus intégrés ou redirections. Il contrôle aussi les liens Google propres à chaque plateforme et les six entrées du sitemap. Il ne remplace pas les déclarations de confidentialité de Google Play ou d’App Store Connect.

## Publication GitHub Pages

Source prévue : dépôt public `AghiTech92/dalili-fi-al-islam-privacy`, branche `main`, dossier `/docs`, HTTPS activé. Les fichiers HTML générés sont suivis par Git ; aucun serveur applicatif ni service payant n’est requis. Un push sur `main` déclenche la publication.

L’application Android et Play Console utilisent les adresses Android. L’application iOS et App Store Connect utilisent les adresses `/ios/`. Les formulaires de confidentialité AdMob/UMP de chaque application doivent référencer la politique de leur plateforme. La publication du site ne configure pas les déclarations des stores ni les réglages AdMob/UMP.

Les nouvelles adresses iOS deviennent publiques après la publication de ces fichiers sur GitHub Pages.

## Base de rédaction Android — 21 septembre 2026

La politique correspond à l’état inspecté de Dalili fi al-Islam : trois langues, contenus religieux disponibles hors ligne, préférences et favoris locaux, progression de lecture et d’adhkâr locale, position de premier plan pour les prières et la qibla, géocodage Android facultatif, notifications et alarmes locales, sauvegarde automatique et transfert entre appareils désactivés, Google Mobile Ads 25.4.0 et UMP 4.0.0.

La documentation publique Google consultée décrit actuellement Google Mobile Ads 25.5.0, tandis que l’application utilise 25.4.0. Les réglages réalisés dans AdMob/UMP et Play Console ne sont pas vérifiables depuis ce dépôt. Toute évolution des SDK, ajout de compte, serveur, analytique, médiation publicitaire, export/sauvegarde ou changement de traitement impose une révision des trois textes.

## Base de rédaction iOS / iPadOS — 1 octobre 2026

La politique iOS correspond au code inspecté : préférences, favoris et progression locaux ; absence de compte et de synchronisation exploitée par le développeur ; position de premier plan pour les calculs locaux de prière et de qibla ; recherche du nom de ville par le géocodeur Apple lorsque nécessaire ; notifications de prière locales ; AdMob et UMP ; absence de demande ATT dans la version actuelle.

Les sauvegardes gérées par Apple peuvent inclure les données de l’application selon les réglages de l’utilisateur. La politique iOS décrit cette possibilité et la distingue du service de synchronisation que l’application ne fournit pas. Aucun réglage de sauvegarde, de permission ou de SDK de l’application n’est modifié par ce site.

Sources officielles iOS :

- [Google Mobile Ads iOS — Données collectées](https://developers.google.com/admob/ios/privacy/data-disclosure)
- [Google UMP — iOS](https://developers.google.com/admob/ios/privacy)
- [Google Mobile Ads iOS — IDFA et confidentialité](https://developers.google.com/admob/ios/privacy/strategies)
- [Apple — Localisation et confidentialité](https://www.apple.com/legal/privacy/data/en/location-services/)
- [Apple — Données incluses dans une sauvegarde iCloud](https://support.apple.com/en-us/108770)
- [Apple — Champs App Store Connect, dont URL d’assistance](https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information/)

Sources officielles Android et communes :

- [Google Play — Données utilisateur](https://support.google.com/googleplay/android-developer/answer/10144311?hl=fr)
- [Google Mobile Ads — Données collectées](https://developers.google.com/admob/android/privacy/play-data-disclosure)
- [Google UMP — Android](https://developers.google.com/admob/android/privacy)
- [Android — Sauvegarde automatique](https://developer.android.com/identity/data/autobackup)
- [Google — Confidentialité](https://policies.google.com/privacy)
- [Google — Applications partenaires](https://policies.google.com/technologies/partner-sites)
- [Google — Conservation](https://policies.google.com/technologies/retention)
- [GitHub — Confidentialité](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement)
- [GitHub Pages — Configuration de la source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
