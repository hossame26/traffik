# [DEV.TO] Programmatic SEO avec React : 150 pages qui rankent en 2 mois

> **Keyword cible:** "programmatic SEO react", "SEO react SPA"
> **Publier sur:** dev.to (créer compte @traffikweb)
> **Tags:** #seo #react #webdev #javascript

---

## Article à copier-coller sur dev.to :

---
title: Comment j'ai généré 150+ pages SEO avec React et Vite (Programmatic SEO)
published: true
tags: seo, react, webdev, javascript
cover_image: https://traffik-web.fr/og-image.jpg
---

# Comment j'ai généré 150+ pages SEO avec React et Vite (Programmatic SEO)

Les SPA (Single Page Applications) et le SEO, ça a toujours été compliqué. Mais en 2026, avec les bonnes techniques, c'est possible de ranker avec React sans Next.js.

Voici comment j'ai créé un système qui génère automatiquement 150+ pages optimisées SEO pour un site vitrine.

## Le concept : Programmatic SEO

L'idée est simple :
- **1 template** × **30 villes** × **5 services** = **150 pages uniques**
- Chaque page cible un mot-clé long tail : "création site shopify paris"
- Presque ZERO compétition sur ces combos ville+service

## La stack

```
React 19 + Vite 7 + Tailwind
+ Puppeteer (pre-rendering)
+ Scripts custom (sitemap, articles)
```

## Étape 1 : Les données structurées

```javascript
// src/data/cities.js
export const cities = [
  {
    slug: 'paris',
    name: 'Paris',
    region: 'Ile-de-France',
    population: '2.1M',
    businesses: '450K',
    lat: '48.8566',
    lng: '2.3522'
  },
  {
    slug: 'lyon',
    name: 'Lyon',
    region: 'Auvergne-Rhone-Alpes',
    population: '516K',
    businesses: '85K',
    lat: '45.7640',
    lng: '4.8357'
  },
  // ... 30 villes
];

export const services = [
  { slug: 'creation-site-web', name: 'Création Site Web' },
  { slug: 'creation-site-shopify', name: 'Création Site Shopify' },
  { slug: 'creation-site-wordpress', name: 'Création Site WordPress' },
  { slug: 'developpement-react', name: 'Développement React' },
  { slug: 'referencement-seo', name: 'Référencement SEO' },
];
```

## Étape 2 : Le composant template

```jsx
// src/pages/CityService.jsx
export default function CityService() {
  const { slug } = useParams();

  // Parse "creation-site-shopify-paris" → service + city
  const city = cities.find(c => slug.endsWith(c.slug));
  const serviceSlug = slug.replace(`-${city.slug}`, '');
  const service = services.find(s => s.slug === serviceSlug);

  return (
    <>
      <SEOHead
        title={`${service.name} à ${city.name} | Agence Web`}
        description={`Votre ${service.name.toLowerCase()} à ${city.name}. Devis gratuit, résultats mesurables.`}
        canonical={`https://monsite.fr/${slug}`}
      />

      {/* JSON-LD LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": `Agence Web ${city.name}`,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": city.name,
            "addressRegion": city.region,
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": city.lat,
            "longitude": city.lng
          }
        })}
      </script>

      <h1>{service.name} à {city.name}</h1>
      {/* Contenu dynamique unique par ville */}
      <p>
        Avec {city.businesses} entreprises à {city.name},
        se démarquer en ligne est essentiel. Notre équipe
        spécialisée en {service.name.toLowerCase()} accompagne
        les entreprises de {city.region} depuis...
      </p>
    </>
  );
}
```

## Étape 3 : Le routing dynamique

```jsx
// src/App.jsx
<Route path="/:slug" element={<CityService />} />
```

React Router catch-all qui parse le slug et affiche le bon combo.

## Étape 4 : Pre-rendering (la clé)

C'est LE truc qui fait que ça marche avec une SPA. Sans ça, Google voit une page blanche.

```javascript
// scripts/prerender.mjs
import puppeteer from 'puppeteer';

const browser = await puppeteer.launch();
const allUrls = generateAllCityServiceUrls(); // 150+ URLs

for (const url of allUrls) {
  const page = await browser.newPage();
  await page.goto(`http://localhost:4173${url}`, {
    waitUntil: 'networkidle0'
  });

  const html = await page.content();
  // Écrire le HTML statique dans dist/
  await writeFile(`dist${url}/index.html`, html);
  await page.close();
}
```

Résultat : chaque URL a un fichier HTML statique avec tout le contenu, les meta tags, le JSON-LD. Googlebot adore.

## Étape 5 : Sitemap automatique

```javascript
// scripts/generate-sitemap.mjs
const cityServiceUrls = cities.flatMap(city =>
  services.map(service => ({
    url: `/${service.slug}-${city.slug}`,
    priority: 0.6,
    changefreq: 'monthly'
  }))
);

// + pages statiques (priority 1.0)
// + articles blog (priority 0.7)
// = 1000+ URLs dans le sitemap
```

## Résultats après 2 mois

| Métrique | Avant | Après |
|----------|-------|-------|
| Pages indexées | 14 | 1,046 |
| Keywords rankés | 3 | 80+ |
| Trafic organique | ~50/mois | ~800/mois |
| Positions top 10 | 0 | 30+ (long tail) |

## Les pièges à éviter

1. **Contenu dupliqué** : ne changez pas juste le nom de la ville. Ajoutez des données locales, des stats, des références à la région.

2. **Canonical tags** : chaque page doit avoir SA propre canonical. Pas de canonical croisé.

3. **Pas de thin content** : minimum 500 mots par page. Google pénalise les pages squelettiques.

4. **Maillage interne** : chaque page ville doit linker vers la page service parent ET vers des articles blog pertinents.

5. **Pre-rendering obligatoire** : sans ça, Google indexe du vide. Client-side rendering seul = SEO mort.

## Conclusion

Le programmatic SEO avec React, c'est totalement viable en 2026. La clé c'est le pre-rendering + du contenu unique + un bon maillage.

Si vous avez des questions, les commentaires sont ouverts.

---

*Je suis développeur web et je partage mes techniques SEO sur [traffik-web.fr/blog](https://traffik-web.fr/blog)*
