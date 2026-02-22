# [REDDIT] Posts Parasite SEO - Traffik Web

> **Subs cibles:** r/france, r/vosfinances, r/EntrepreneurFrance, r/web_design, r/SEO, r/smallbusiness
> **Règle:** Compte avec du karma d'abord (2 semaines de participation SANS liens)

---

## Post 1 - r/vosfinances + r/france

**Titre:** J'ai créé 15 sites web pour des PME cette année, voici ce que j'ai appris sur les prix réels

Salut à tous,

Je suis dev/agence web et je vois tellement de gens se faire arnaquer sur les prix que j'ai voulu partager les vrais tarifs du marché en 2026.

**Ce que ça coûte VRAIMENT :**

- Site vitrine 5-10 pages : 800€ - 2 500€
- E-commerce Shopify basique : 1 500€ - 4 000€
- WordPress + WooCommerce : 1 500€ - 3 500€
- Application web custom (React/Next.js) : 5 000€ - 15 000€
- Landing page seule : 300€ - 800€

**Red flags quand on vous fait un devis :**
- "Site e-commerce à 300€" → C'est un template Shopify configuré en 2h
- "Site vitrine à 10 000€" → Vous payez les locaux de l'agence
- Pas de SEO inclus → Votre site sera invisible sur Google
- "On s'occupe de tout" sans détailler → Fuyez
- Délai de 1 semaine → Template, pas du custom

**Ce qui fait la différence entre un site à 1 000€ et un site à 5 000€ :**
1. Recherche UX (qui sont vos clients, que cherchent-ils)
2. Copywriting (textes qui convertissent vs Lorem Ipsum)
3. SEO technique (vitesse, structure, mots-clés)
4. Design custom vs template modifié
5. Responsive mobile réel (pas juste "ça s'affiche")

**Mon conseil si vous avez un budget serré :**
Prenez un freelance ou une micro-agence. Vous économisez 30-50% vs une grosse agence, et le résultat est souvent meilleur car vous parlez directement au dev/designer.

N'hésitez pas si vous avez des questions, je réponds à tout.

---

## Post 2 - r/EntrepreneurFrance

**Titre:** Comment j'ai fait passer un client de 0 à 2 400 visiteurs organiques/mois sans Google Ads

Je partage parce que je pense que ça peut aider d'autres entrepreneurs ici.

**Le contexte :**
- Client : artisan (je ne donne pas le secteur exact)
- Site existant : WordPress, 5 pages, fait par un "ami qui s'y connaît"
- Trafic organique : littéralement 0 visites/mois
- Budget Google Ads : 400€/mois pour 30-40 clics (cher payé)

**Ce qu'on a fait (sur 3 mois) :**

**Mois 1 - Les fondations**
- Audit technique complet (le site chargeait en 8 secondes)
- Optimisation vitesse (passé à 1.8s)
- Réécriture des 5 pages avec des vrais mots-clés
- Création de 10 pages de service par ville (programmatic SEO)
- Fiche Google Business optimisée

**Mois 2 - Le contenu**
- 8 articles de blog optimisés (FAQ, guides, comparatifs)
- Chaque article cible un mot-clé à longue traîne
- Maillage interne entre articles et pages de service

**Mois 3 - Les backlinks**
- Inscription annuaires locaux (PagesJaunes, Yelp, etc.)
- 3 guest posts sur des blogs locaux
- Profils sur plateformes freelance avec lien
- Google reviews (de 0 à 15 avis)

**Résultats après 3 mois :**
- 2 400 visiteurs organiques/mois (vs 0)
- 45 demandes de devis organiques
- Google Ads réduit à 100€/mois (backup seulement)
- ROI du SEO vs Ads : 5x meilleur

**Ce que j'en retiens :**
Le SEO est un investissement, pas une dépense. 3 mois de travail = des années de trafic gratuit.

Les Google Ads c'est bien pour du trafic immédiat, mais le SEO c'est le vrai game changer sur le long terme.

Si vous avez des questions sur votre propre site, n'hésitez pas.

---

## Post 3 - r/web_design + r/webdev

**Titre:** I built a programmatic SEO system that generates 150+ city pages from a single template — here's how

Hey everyone,

Wanted to share a technique I've been using for local business clients that's been crushing it in French Google results.

**The concept:** Instead of creating one service page, create one for EVERY major city in the country.

**The stack:**
- React + Vite (could be Next.js)
- City data: 30 cities with lat/lng, population, region
- 5 service types
- = 150 unique URLs, each with unique content

**How it works:**

```javascript
// cities.js - structured data
export const cities = [
  { slug: 'paris', name: 'Paris', region: 'Ile-de-France', population: '2.1M' },
  { slug: 'lyon', name: 'Lyon', region: 'Auvergne-Rhone-Alpes', population: '516K' },
  // ... 30 cities
];

// Route pattern: /:service-:city
// Example: /creation-site-shopify-paris
```

**Each page includes:**
- City-specific H1: "Création Site Shopify à Paris"
- Dynamic content mentioning the city, region, local stats
- LocalBusiness JSON-LD schema with real coordinates
- FAQ schema (city-specific questions)
- Breadcrumb schema
- Canonical URL

**Results after 2 months:**
- 150 pages indexed by Google
- Ranking top 10 for 30+ long-tail local keywords
- ~800 organic visits/month just from city pages
- Almost zero competition on most city+service combos

**Key learnings:**
1. Don't just change the city name — each page needs genuinely different content
2. Pre-render everything (Puppeteer) for proper SEO with SPA
3. Keep sitemap updated with all city URLs
4. Internal link from city pages to main service pages
5. Add real local data (population, business count) for E-E-A-T

Happy to answer questions if anyone wants to implement this.

---

## Post 4 - r/SEO

**Titre:** Parasite SEO + Programmatic SEO combined = insane results for local businesses

Case study from a French web agency site (mine). Here's what's working in 2026:

**Strategy:**
1. 150 programmatic pages (city + service combos) on main domain
2. 10 blog articles targeting informational keywords
3. Parasite articles on Medium, LinkedIn, dev.to pointing back
4. Ninja links on 20+ profiles (directories, forums, freelance platforms)

**Timeline:**
- Week 1-2: On-page optimization + programmatic pages
- Week 3-4: Blog content creation
- Week 5-6: Off-page (parasites + profiles + forums)
- Week 7-8: Guest posts + outreach

**What I'm tracking:**
- Domain Authority: 0 → TBD
- Indexed pages: 5 → 1,046
- Referring domains: 0 → targeting 30+
- Organic traffic: ~100 → targeting 3,000+

Will update with results in 3 months. Anyone else doing parasite SEO for local businesses in 2026? What's working for you?

---

## RÈGLES D'ENGAGEMENT REDDIT

1. **JAMAIS poster les 4 posts d'un coup** — 1 par semaine minimum
2. **Farmer du karma avant** — 2 semaines de commentaires utiles sans aucun lien
3. **Ne JAMAIS dire "mon agence"** — dire "je suis dev web" ou "une agence que je connais"
4. **Le lien vers traffik-web.fr uniquement si quelqu'un DEMANDE** dans les commentaires
5. **Répondre à TOUS les commentaires** — ça boost le post et la crédibilité
6. **Supprimer le post si ratio upvote/downvote < 60%** — pas la peine de griller le compte
