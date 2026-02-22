# PRD — Sprint Clarté & Messaging

## Référence
Brief: `docs/brief.md`
Date: 2026-02-21

---

## Story 1 — Hero : Message clair dès la première seconde

### Changements

**Badge (mobile + desktop)**
- Avant : `Agence Web & Marketing`
- Après : `Freelance Création Web & Marketing`

**Tagline principale (mobile + desktop)**
- Avant : `Sites web qui génèrent du chiffre d'affaires. Pas juste des pixels.`
- Après : `On crée votre site web. Vous gagnez des clients.`

**Sous-tagline (mobile + desktop)**
- Avant : `Performance. Conversion. Résultats.`
- Après : `Sites vitrines, e-commerce & SEO pour indépendants et PME.`

**Phase 1 scroll (desktop)**
- Avant : `Votre site web est votre meilleur commercial. 24/7.`
- Après : `Votre site web est votre meilleur commercial. 24/7.` (on garde — c'est clair)

**Phase 2 scroll (desktop)**
- Avant : `Dans le bruit digital, seule la performance convertit`
- Après : `Un site rapide, bien référencé, qui transforme les visiteurs en clients.`

**Phase 4 (desktop)**
- Avant : `Des sites web performants, du design au ROI, livrés en 2 semaines`
- Après : `Site livré clé en main en 2 semaines. Design, code, SEO — tout inclus.`

### Fichiers
- `src/components/sections/Hero.jsx`

---

## Story 2 — Pricing homepage : Descriptions explicites

### Changements dans SITES array

**Shopify**
- Avant description : `E-commerce prêt à vendre`
- Après : `Boutique en ligne clé en main — on configure tout pour vous`

**WordPress**
- Avant description : `Site vitrine professionnel`
- Après : `Site vitrine 5 pages — design, contenu et mise en ligne inclus`

**Custom**
- Avant description : `Performance maximale`
- Après : `Site sur mesure React — design unique, animations, performance 90+`

### Fichiers
- `src/components/sections/Pricing.jsx` (SITES array L18-43)

---

## Story 3 — Page Tarifs : Features claires et badge justifié

### Badge "Top" → Justification
- Avant : `⭐ Top` (sans explication)
- Après : `⭐ Le + demandé` (pour le Site Sur Mesure et le SEO)
- Ajouter un petit texte sous le badge ou dans la description qui justifie : "Notre formule la plus demandée par les indépendants et PME."

### Features WordPress (L162)
- Avant : `["Jusqu'à 5 pages optimisées", "Design responsive mobile/tablette", "SEO de base (meta, sitemap, robots)", "Formulaire de contact intégré", "Hébergement guide inclus"]`
- Après : `["5 pages créées et rédigées par nos soins", "Design responsive (mobile, tablette, desktop)", "SEO technique de base (balises meta, sitemap, robots.txt)", "Formulaire de contact fonctionnel intégré", "Guide de mise en ligne + accompagnement hébergement"]`

### Features Shopify (L170)
- Avant : `["Configuration complète de la boutique", "Jusqu'à 20 produits intégrés", "Paiement sécurisé (Stripe, PayPal)", "Livraison & suivi configurés", "Thème premium personnalisé"]`
- Après : `["Boutique Shopify configurée de A à Z", "20 produits ajoutés et mis en page par nos soins", "Paiement sécurisé configuré (Stripe, PayPal)", "Livraison, suivi de commande et emails paramétrés", "Thème premium installé et personnalisé à votre image"]`

### Features Custom (L153)
- Avant : `["Design unique sur mesure", "Animations fluides (Framer Motion)", "Performance optimale (score 90+)", "Intégration API sur mesure", "Code source livrée"]`
- Après : `["Design créé sur mesure selon votre identité visuelle", "Animations fluides et professionnelles", "Score performance Google 90+ garanti", "Intégrations sur mesure (API, CRM, paiement...)", "Code source livré — le site vous appartient"]`

### Descriptions plans
**Custom (L152)**
- Avant : `React / Next.js — Design unique, animations fluides, performance maximale.`
- Après : `Site React / Next.js codé à la main. Design unique, animations pro, performance Google 90+ garantie. Notre formule la plus demandée.`

**WordPress (L161)**
- Avant : `Site vitrine professionnel`
- Après : `Site vitrine clé en main : 5 pages créées, design responsive, SEO de base et formulaire inclus.`

**Shopify (L169)**
- Avant : `E-commerce prêt à vendre`
- Après : `Boutique en ligne prête à vendre : 20 produits intégrés, paiements et livraison configurés.`

### Fichiers
- `src/pages/Tarifs.jsx` (webPlans L148-174)

---

## Story 4 — Page ReactDev : Badge Best-Seller justifié

### Changement
- Avant : `Best-Seller`
- Après : `Le + demandé`
- Ajouter justification dans le hero ou dans la card

### Fichiers
- `src/pages/services/ReactDev.jsx` (L379, L523)

---

## Ordre d'exécution
1. Story 1 (Hero) — impact le plus fort, première chose que voit le visiteur
2. Story 3 (Page Tarifs) — les détails des offres
3. Story 2 (Pricing homepage) — le configurateur
4. Story 4 (ReactDev) — page secondaire

## Validation
- Heuss review en local sur chaque story avant passage à la suivante
