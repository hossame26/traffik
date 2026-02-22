# Project Brief — Sprint Clarté & Messaging

## Type de projet
**Brownfield** — Amélioration site existant (traffik-web.fr)

## Contexte
Audit externe d'un utilisateur réel. Le design, la perf et l'UX globale sont validés (note visuelle : "100/10"). Les problèmes identifiés sont **tous liés à la clarté du message et des offres**.

## Source
Retour audit ami de Heuss (2026-02-21)

---

## Problèmes identifiés

### P1 — Hero : Manque de clarté au premier coup d'oeil
**Gravité : Haute**
- On ne comprend pas immédiatement ce que Traffik fait
- "Sites web qui génèrent du chiffre d'affaires. Pas juste des pixels." → trop abstrait
- Pas de mention de la cible (PME, indépendants, artisans, etc.)
- Le badge "Agence Web & Marketing" est trop générique

**Fichiers impactés :**
- `src/components/sections/Hero.jsx` (mobile L214, L232-234 + desktop L344, L357-359, L396-399, L404-406, L422-425)

### P2 — Tarifs : Offres pas assez détaillées
**Gravité : Haute**
- "E-commerce, vitrine ou sur mesure" reste trop vague
- On ne comprend pas ce qui est inclus dans chaque offre (création complète ? design seul ? hébergement ?)
- Le configurateur homepage (`Pricing.jsx`) manque de contexte sur ce que chaque option couvre concrètement

**Fichiers impactés :**
- `src/components/sections/Pricing.jsx` (descriptions L22-42)
- `src/pages/Tarifs.jsx` (webPlans L148-174, features)

### P3 — Badge "Top" / "Best-Seller" : Non justifié
**Gravité : Moyenne**
- Le badge "Top" existe sur Tarifs.jsx (L246) et "Best-Seller" sur ReactDev.jsx
- Aucune explication de pourquoi c'est "Top"
- Le visiteur ne sait pas si c'est le plus vendu, le meilleur rapport qualité/prix, ou le plus complet

**Fichiers impactés :**
- `src/pages/Tarifs.jsx` (L244-247)
- `src/pages/services/ReactDev.jsx` (L520-526)

### P4 — Features : Descriptions trop vagues
**Gravité : Moyenne**
- "Jusqu'à 20 produits intégrés" → c'est nous qui les ajoutons ? limite technique ?
- "Jusqu'à 5 pages optimisées" → optimisées comment ? SEO ? vitesse ?
- "Hébergement guide inclus" → c'est quoi un "guide" ? on configure ou on donne un PDF ?
- Chaque feature doit être explicite pour éviter les questions pré-achat

**Fichiers impactés :**
- `src/pages/Tarifs.jsx` (features arrays L153, L162, L170)
- `src/components/sections/Pricing.jsx` (descriptions L22, L29, L36)

---

## Points positifs confirmés (NE PAS TOUCHER)
- Design visuel : excellent
- Performance : aucun lag, site fluide
- Organisation du contenu : cohérente
- Couleurs & typographie : validées
- Bouton WhatsApp : fort point de conversion
- Animations : fluides, pas intrusives
- Structure de page : logique

---

## Objectifs du sprint
1. Rendre le message hero immédiatement clair (qui on est, pour qui, ce qu'on fait)
2. Détailler chaque offre pour qu'un visiteur comprenne exactement ce qu'il achète
3. Justifier les badges "Top" / "Best-Seller" avec une raison concrète
4. Rendre chaque feature explicite et sans ambiguïté

## Contraintes
- **NE PAS** modifier le design/layout/animations
- **NE PAS** modifier les couleurs/typo/spacings
- **NE PAS** push — validation locale par Heuss
- Changements = **copy/texte uniquement** (sauf si un petit ajout HTML est nécessaire pour la justification du badge)

---

## Métriques de succès
- Un nouveau visiteur comprend en < 5 secondes ce que Traffik fait et pour qui
- Chaque offre est auto-explicative sans avoir besoin de contacter
- Les badges sont justifiés de manière crédible
- Zéro question type "ça inclut quoi exactement ?"

---

## Next step
Rédaction du PRD avec les changements précis par fichier.
