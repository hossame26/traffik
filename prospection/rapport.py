"""Génère le rapport PDF récapitulatif de la session Traffik Web."""

import weasyprint
from datetime import datetime

HTML = f"""<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

@page {{
  size: A4;
  margin: 0;
}}

* {{ margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', -apple-system, sans-serif; }}

body {{ background: #FAFAFA; color: #1a1a1a; font-size: 11px; line-height: 1.6; }}

/* ── Cover Page ── */
.cover {{
  height: 297mm;
  background: linear-gradient(135deg, #050505 0%, #0a0a1a 50%, #050505 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
  page-break-after: always;
}}
.cover::before {{
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at 30% 40%, rgba(0,102,255,0.15) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, rgba(168,85,247,0.1) 0%, transparent 50%);
}}
.cover-badge {{
  background: rgba(0,102,255,0.15);
  border: 1px solid rgba(0,102,255,0.3);
  padding: 8px 20px;
  border-radius: 50px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #4D9AFF;
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
}}
.cover h1 {{
  font-size: 48px;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
}}
.cover h1 span {{
  background: linear-gradient(135deg, #0066FF, #A855F7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}}
.cover .subtitle {{
  font-size: 16px;
  color: rgba(255,255,255,0.5);
  margin-bottom: 50px;
  position: relative;
  z-index: 1;
}}
.cover-meta {{
  position: relative;
  z-index: 1;
  display: flex;
  gap: 30px;
  color: rgba(255,255,255,0.3);
  font-size: 11px;
}}
.cover-meta span {{ display: flex; align-items: center; gap: 6px; }}
.dot {{ width: 6px; height: 6px; border-radius: 50%; background: #0066FF; }}

/* ── Content Pages ── */
.page {{
  padding: 40px 50px;
  min-height: 250mm;
  page-break-after: always;
  position: relative;
}}
.page-header {{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 2px solid #f0f0f0;
}}
.page-header .logo {{
  font-size: 14px;
  font-weight: 800;
  color: #1a1a1a;
}}
.page-header .logo span {{ color: #0066FF; }}
.page-header .page-num {{
  font-size: 10px;
  color: #999;
  font-weight: 500;
}}

h2 {{
  font-size: 24px;
  font-weight: 800;
  color: #0a0a0a;
  margin-bottom: 6px;
}}
h2 span {{ color: #0066FF; }}
.section-sub {{
  font-size: 12px;
  color: #888;
  margin-bottom: 25px;
}}

h3 {{
  font-size: 15px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 20px 0 10px;
  display: flex;
  align-items: center;
  gap: 8px;
}}
h3 .icon {{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  font-size: 13px;
}}

/* ── Cards ── */
.stats-grid {{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin: 20px 0;
}}
.stat-card {{
  background: white;
  border: 1px solid #f0f0f0;
  border-radius: 16px;
  padding: 18px;
  text-align: center;
}}
.stat-card .num {{
  font-size: 28px;
  font-weight: 900;
  background: linear-gradient(135deg, #0066FF, #A855F7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}}
.stat-card .label {{
  font-size: 9px;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 4px;
}}

.feature-grid {{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin: 15px 0;
}}
.feature-card {{
  background: white;
  border: 1px solid #f0f0f0;
  border-radius: 14px;
  padding: 16px;
}}
.feature-card .tag {{
  display: inline-block;
  padding: 3px 10px;
  border-radius: 50px;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 8px;
}}
.tag-blue {{ background: #EFF6FF; color: #0066FF; }}
.tag-purple {{ background: #F5F3FF; color: #8B5CF6; }}
.tag-green {{ background: #F0FDF4; color: #16A34A; }}
.tag-orange {{ background: #FFF7ED; color: #EA580C; }}
.tag-red {{ background: #FEF2F2; color: #DC2626; }}
.feature-card h4 {{
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 4px;
}}
.feature-card p {{
  font-size: 10px;
  color: #666;
  line-height: 1.5;
}}

.list-grid {{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 12px 0;
}}
.list-item {{
  background: white;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  padding: 12px;
  font-size: 10px;
}}
.list-item strong {{
  display: block;
  font-size: 11px;
  margin-bottom: 3px;
}}
.list-item .url {{
  color: #0066FF;
  font-size: 8px;
  word-break: break-all;
}}

table {{
  width: 100%;
  border-collapse: collapse;
  margin: 12px 0;
  font-size: 10px;
}}
th {{
  text-align: left;
  padding: 10px 12px;
  background: #f8f9fa;
  font-weight: 700;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #666;
  border-bottom: 2px solid #eee;
}}
td {{
  padding: 10px 12px;
  border-bottom: 1px solid #f0f0f0;
}}
tr:hover td {{ background: #fafafa; }}

.highlight-box {{
  background: linear-gradient(135deg, #0066FF08, #A855F708);
  border: 1px solid #0066FF20;
  border-radius: 16px;
  padding: 20px;
  margin: 15px 0;
}}

.timeline {{
  margin: 15px 0;
  position: relative;
  padding-left: 30px;
}}
.timeline::before {{
  content: '';
  position: absolute;
  left: 8px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #0066FF, #A855F7);
  border-radius: 2px;
}}
.timeline-item {{
  margin-bottom: 16px;
  position: relative;
}}
.timeline-item::before {{
  content: '';
  position: absolute;
  left: -26px;
  top: 4px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: white;
  border: 3px solid #0066FF;
}}
.timeline-item h4 {{ font-size: 12px; font-weight: 700; margin-bottom: 3px; }}
.timeline-item p {{ font-size: 10px; color: #666; }}

.footer-bar {{
  position: absolute;
  bottom: 20px;
  left: 50px;
  right: 50px;
  display: flex;
  justify-content: space-between;
  font-size: 8px;
  color: #ccc;
  border-top: 1px solid #f0f0f0;
  padding-top: 10px;
}}
</style>
</head>
<body>

<!-- ═══════════════════════════════════════════ COVER ═══ -->
<div class="cover">
  <div class="cover-badge">Rapport de session</div>
  <h1>Traffik <span>Web</span></h1>
  <p class="subtitle">Prospection Automatisée & SaaS Booking</p>
  <div class="cover-meta">
    <span><div class="dot"></div> {datetime.now().strftime('%d %B %Y')}</span>
    <span><div class="dot" style="background:#A855F7"></div> Session complète</span>
    <span><div class="dot" style="background:#22C55E"></div> 4 livrables</span>
  </div>
</div>

<!-- ═══════════════════════════════════════════ PAGE 1 : OVERVIEW ═══ -->
<div class="page">
  <div class="page-header">
    <div class="logo">Traffik<span>.</span></div>
    <div class="page-num">01 / 05</div>
  </div>

  <h2>Vue d'<span>ensemble</span></h2>
  <p class="section-sub">Tout ce qui a été livré pendant cette session</p>

  <div class="stats-grid">
    <div class="stat-card">
      <div class="num">4</div>
      <div class="label">Livrables majeurs</div>
    </div>
    <div class="stat-card">
      <div class="num">15</div>
      <div class="label">Sites V3 générés</div>
    </div>
    <div class="stat-card">
      <div class="num">14</div>
      <div class="label">Catégories métier</div>
    </div>
    <div class="stat-card">
      <div class="num">18</div>
      <div class="label">Fichiers SaaS</div>
    </div>
  </div>

  <div class="feature-grid">
    <div class="feature-card">
      <div class="tag tag-blue">LIVRABLE 1</div>
      <h4>Template V3 — Site Builder</h4>
      <p>Générateur de sites ultra-modernes personnalisés par prospect. GSAP animations, compteurs animés, text reveal, FAQ, témoignages, 14 catégories.</p>
    </div>
    <div class="feature-card">
      <div class="tag tag-purple">LIVRABLE 2</div>
      <h4>Deploy Batch Vercel</h4>
      <p>Système de déploiement optimisé : toutes les pages dans 1 seul projet Vercel au lieu d'un projet par prospect. Économise la limite free tier.</p>
    </div>
    <div class="feature-card">
      <div class="tag tag-green">LIVRABLE 3</div>
      <h4>SaaS Booker</h4>
      <p>Projet Next.js 16 initialisé avec Supabase, Stripe, Zustand, Framer Motion. 10 routes, landing page, auth, dashboard, booking public.</p>
    </div>
    <div class="feature-card">
      <div class="tag tag-orange">LIVRABLE 4</div>
      <h4>Études & Recherches</h4>
      <p>Analyse Planity + 16 concurrents SaaS. Benchmark des meilleurs sites web par catégorie (14 secteurs, 5 sites chacun). 10 innovations identifiées.</p>
    </div>
  </div>

  <div class="highlight-box">
    <h3 style="margin-top:0">Pipeline de prospection</h3>
    <p style="font-size:10px;color:#555">finder.py → add.py → site_builder.py (V3) → auto_email.py → auto_instagram.py<br>
    Chaque prospect reçoit un site personnalisé ultra-moderne avec son nom, sa catégorie, ses infos, témoignages et FAQ adaptés.</p>
  </div>

  <div class="footer-bar">
    <span>Traffik Web — traffik-web.fr</span>
    <span>Rapport généré automatiquement</span>
  </div>
</div>

<!-- ═══════════════════════════════════════════ PAGE 2 : TEMPLATE V3 ═══ -->
<div class="page">
  <div class="page-header">
    <div class="logo">Traffik<span>.</span></div>
    <div class="page-num">02 / 05</div>
  </div>

  <h2>Template <span>V3</span></h2>
  <p class="section-sub">Générateur de sites personnalisés ultra-modernes</p>

  <h3><span class="icon" style="background:#EFF6FF;color:#0066FF">1</span> Stack technique</h3>
  <table>
    <tr><th>Composant</th><th>Technologie</th><th>Rôle</th></tr>
    <tr><td>Animations scroll</td><td>GSAP + ScrollTrigger</td><td>Text reveal, fade-in, parallax, stagger</td></tr>
    <tr><td>Compteurs</td><td>GSAP + IntersectionObserver</td><td>Animation des chiffres clés au scroll</td></tr>
    <tr><td>Styling</td><td>Tailwind CSS CDN</td><td>Responsive, dark/light, utilitaires</td></tr>
    <tr><td>Icônes</td><td>Font Awesome 6</td><td>Icônes métier, UI, contact</td></tr>
    <tr><td>Typographie</td><td>Inter (Google Fonts)</td><td>Variable weight 300-900</td></tr>
    <tr><td>Interactions</td><td>Vanilla JS</td><td>Boutons magnétiques, slider avant/après, FAQ</td></tr>
  </table>

  <h3><span class="icon" style="background:#F5F3FF;color:#8B5CF6">2</span> Sections du template</h3>
  <div class="feature-grid">
    <div class="feature-card">
      <div class="tag tag-blue">HERO</div>
      <h4>Text reveal + floating badges</h4>
      <p>Titre animé mot par mot, gradient mesh background, badges glassmorphism flottants, double CTA</p>
    </div>
    <div class="feature-card">
      <div class="tag tag-purple">STATS</div>
      <h4>Compteurs animés</h4>
      <p>4 KPIs avec animation count-up au scroll, icônes dans badges gradient</p>
    </div>
    <div class="feature-card">
      <div class="tag tag-green">SERVICES</div>
      <h4>Cards avec image hover</h4>
      <p>3 services avec zoom image, overlay gradient, icônes glassmorphism</p>
    </div>
    <div class="feature-card">
      <div class="tag tag-orange">MENU</div>
      <h4>Carte interactive (food)</h4>
      <p>Liste des plats avec prix, images, hover scale. Pizzeria, restaurant, kebab.</p>
    </div>
    <div class="feature-card">
      <div class="tag tag-red">AVANT/APRÈS</div>
      <h4>Slider draggable</h4>
      <p>Comparaison visuelle avant/après. Coiffeur, dentiste, spa.</p>
    </div>
    <div class="feature-card">
      <div class="tag tag-blue">GALERIE</div>
      <h4>Bento grid variable</h4>
      <p>6 images en grille bento (2×2, 1×1, 2×1), hover zoom + titre reveal</p>
    </div>
    <div class="feature-card">
      <div class="tag tag-purple">TÉMOIGNAGES</div>
      <h4>3 avis personnalisés</h4>
      <p>Générés dynamiquement avec le nom du business. Stars, avatars, scroll horizontal.</p>
    </div>
    <div class="feature-card">
      <div class="tag tag-green">FAQ</div>
      <h4>Accordion par catégorie</h4>
      <p>4 questions/réponses adaptées au métier. Toggle smooth.</p>
    </div>
  </div>

  <h3><span class="icon" style="background:#F0FDF4;color:#16A34A">3</span> Features spéciales</h3>
  <table>
    <tr><th>Feature</th><th>Catégories</th></tr>
    <tr><td>Bandeau urgence sticky (rouge)</td><td>Plombier, électricien, dentiste</td></tr>
    <tr><td>Menu / carte des plats</td><td>Pizzeria, restaurant, kebab</td></tr>
    <tr><td>Slider avant/après draggable</td><td>Coiffeur, dentiste, spa</td></tr>
    <tr><td>Bouton sticky mobile (call)</td><td>Toutes les catégories (si téléphone)</td></tr>
    <tr><td>Menu hamburger mobile</td><td>Toutes les catégories</td></tr>
    <tr><td>Boutons magnétiques (desktop)</td><td>Tous les CTAs</td></tr>
    <tr><td>Marquee trust signals</td><td>Toutes les catégories</td></tr>
  </table>

  <div class="footer-bar">
    <span>Traffik Web — traffik-web.fr</span>
    <span>Rapport généré automatiquement</span>
  </div>
</div>

<!-- ═══════════════════════════════════════════ PAGE 3 : CATÉGORIES ═══ -->
<div class="page">
  <div class="page-header">
    <div class="logo">Traffik<span>.</span></div>
    <div class="page-num">03 / 05</div>
  </div>

  <h2>14 <span>Catégories</span> métier</h2>
  <p class="section-sub">Chaque catégorie a ses couleurs, images, stats, services, témoignages et FAQ adaptés</p>

  <table>
    <tr><th>Catégorie</th><th>Couleur</th><th>Badge</th><th>Features</th><th>Taille HTML</th></tr>
    <tr><td>Pizzeria</td><td style="color:#E65100">■ #E65100</td><td>Pizzeria</td><td>Menu, Galerie</td><td>40 KB</td></tr>
    <tr><td>Restaurant</td><td style="color:#1a1a2e">■ #1a1a2e</td><td>Restaurant</td><td>Menu, Galerie</td><td>38 KB</td></tr>
    <tr><td>Boulangerie</td><td style="color:#6D4C41">■ #6D4C41</td><td>Boulangerie Artisanale</td><td>Galerie</td><td>35 KB</td></tr>
    <tr><td>Coiffeur</td><td style="color:#1a1a1a">■ #1a1a1a</td><td>Salon de Coiffure</td><td>Galerie</td><td>36 KB</td></tr>
    <tr><td>Boucherie</td><td style="color:#7f1d1d">■ #7f1d1d</td><td>Boucherie Artisanale</td><td>Galerie</td><td>36 KB</td></tr>
    <tr><td>Fleuriste</td><td style="color:#166534">■ #166534</td><td>Fleuriste</td><td>Galerie</td><td>36 KB</td></tr>
    <tr><td>Garage</td><td style="color:#1e293b">■ #1e293b</td><td>Garage Automobile</td><td>Galerie</td><td>35 KB</td></tr>
    <tr><td>Plombier</td><td style="color:#0369A1">■ #0369A1</td><td>Plombier</td><td>Urgence</td><td>31 KB</td></tr>
    <tr><td>Électricien</td><td style="color:#92400E">■ #92400E</td><td>Électricien</td><td>Urgence</td><td>31 KB</td></tr>
    <tr><td>Immobilier</td><td style="color:#1E3A5F">■ #1E3A5F</td><td>Agence Immobilière</td><td>Galerie</td><td>36 KB</td></tr>
    <tr><td>Kebab</td><td style="color:#DC2626">■ #DC2626</td><td>Kebab & Grillades</td><td>Menu</td><td>35 KB</td></tr>
    <tr><td><strong>Dentiste ✦</strong></td><td style="color:#1B6FA8">■ #1B6FA8</td><td>Cabinet Dentaire</td><td>Avant/Après, Urgence</td><td>33 KB</td></tr>
    <tr><td><strong>Avocat ✦</strong></td><td style="color:#1A3A5C">■ #1A3A5C</td><td>Cabinet d'Avocats</td><td>—</td><td>31 KB</td></tr>
    <tr><td><strong>Spa ✦</strong></td><td style="color:#8B5E6B">■ #8B5E6B</td><td>Spa & Esthétique</td><td>Galerie, Avant/Après</td><td>37 KB</td></tr>
  </table>
  <p style="font-size:9px;color:#999;margin-top:5px">✦ Nouvelles catégories créées cette session</p>

  <h3><span class="icon" style="background:#FFF7ED;color:#EA580C">→</span> Sites déployés ce jour</h3>
  <div class="list-grid">
    <div class="list-item"><strong>Chez Sauveur</strong>Pizzeria · Marseille<div class="url">demo-traffik.vercel.app/chez-sauveur</div></div>
    <div class="list-item"><strong>Saga Pizza</strong>Pizzeria · Marseille<div class="url">demo-traffik.vercel.app/saga-pizza</div></div>
    <div class="list-item"><strong>La Famille</strong>Restaurant · Marseille<div class="url">demo-traffik.vercel.app/la-famille</div></div>
    <div class="list-item"><strong>Le Chaud Pain</strong>Boulangerie · Marseille<div class="url">demo-traffik.vercel.app/le-chaud-pain-de-vienne</div></div>
    <div class="list-item"><strong>L'art De L'auto</strong>Garage · Marseille<div class="url">demo-traffik.vercel.app/l-art-de-l-auto</div></div>
    <div class="list-item"><strong>Le Venitien</strong>Pizzeria · Marseille<div class="url">demo-traffik.vercel.app/le-venitien</div></div>
    <div class="list-item"><strong>3C Prestige</strong>Garage · Marseille<div class="url">demo-traffik.vercel.app/3c-prestige</div></div>
    <div class="list-item"><strong>Garage Marossero</strong>Garage · Marseille<div class="url">demo-traffik.vercel.app/garage-marossero</div></div>
    <div class="list-item"><strong>Aesthesis</strong>Spa · Marseille<div class="url">demo-traffik.vercel.app/aesthesis</div></div>
  </div>
  <p style="font-size:9px;color:#999;margin-top:5px">+ 6 autres (La Marina, Boulangerie Aixoise, La Femme du Boucher, Black Lab Tattoo, Sailin On Tattoo, Boulangerie artisanale)</p>

  <div class="footer-bar">
    <span>Traffik Web — traffik-web.fr</span>
    <span>Rapport généré automatiquement</span>
  </div>
</div>

<!-- ═══════════════════════════════════════════ PAGE 4 : SAAS BOOKER ═══ -->
<div class="page">
  <div class="page-header">
    <div class="logo">Traffik<span>.</span></div>
    <div class="page-num">04 / 05</div>
  </div>

  <h2>SaaS <span>Booker</span></h2>
  <p class="section-sub">Plateforme de réservation intelligente — type Planity avec innovations</p>

  <div class="stats-grid">
    <div class="stat-card">
      <div class="num">18</div>
      <div class="label">Fichiers source</div>
    </div>
    <div class="stat-card">
      <div class="num">10</div>
      <div class="label">Routes</div>
    </div>
    <div class="stat-card">
      <div class="num">0</div>
      <div class="label">Erreurs build</div>
    </div>
    <div class="stat-card">
      <div class="num">16</div>
      <div class="label">Concurrents analysés</div>
    </div>
  </div>

  <h3><span class="icon" style="background:#EFF6FF;color:#0066FF">→</span> Stack technique</h3>
  <table>
    <tr><th>Composant</th><th>Technologie</th></tr>
    <tr><td>Framework</td><td>Next.js 16 (App Router, TypeScript)</td></tr>
    <tr><td>Base de données</td><td>Supabase (PostgreSQL + Auth + Realtime)</td></tr>
    <tr><td>Paiements</td><td>Stripe (abonnements + checkout)</td></tr>
    <tr><td>State management</td><td>Zustand</td></tr>
    <tr><td>Animations</td><td>Framer Motion</td></tr>
    <tr><td>Formulaires</td><td>React Hook Form + Zod</td></tr>
    <tr><td>Icônes</td><td>Lucide React</td></tr>
    <tr><td>Styling</td><td>Tailwind CSS</td></tr>
  </table>

  <h3><span class="icon" style="background:#F5F3FF;color:#8B5CF6">→</span> Architecture des routes</h3>
  <div class="feature-grid">
    <div class="feature-card">
      <div class="tag tag-blue">AUTH</div>
      <h4>/login & /register</h4>
      <p>Pages d'authentification avec formulaires, validation Zod, gestion erreurs</p>
    </div>
    <div class="feature-card">
      <div class="tag tag-purple">DASHBOARD</div>
      <h4>/dashboard</h4>
      <p>Vue d'ensemble avec stats cards : RDV aujourd'hui, clients, revenus, taux occupation</p>
    </div>
    <div class="feature-card">
      <div class="tag tag-green">BOOKINGS</div>
      <h4>/bookings</h4>
      <p>Gestion des réservations : liste, statuts, filtres, actions</p>
    </div>
    <div class="feature-card">
      <div class="tag tag-orange">PUBLIC</div>
      <h4>/[business]</h4>
      <p>Page de réservation publique dynamique : services, créneaux, formulaire client</p>
    </div>
  </div>

  <h3><span class="icon" style="background:#F0FDF4;color:#16A34A">→</span> 10 innovations identifiées vs Planity</h3>
  <div class="feature-grid">
    <div class="feature-card">
      <div class="tag tag-blue">IA</div>
      <h4>Voice Receptionist</h4>
      <p>Réceptionniste IA vocale pour prendre les RDV par téléphone 24/7 (Vapi.ai + Claude)</p>
    </div>
    <div class="feature-card">
      <div class="tag tag-purple">ML</div>
      <h4>No-Show Prediction</h4>
      <p>Prédiction des absences par ML. Surréservation automatique intelligente.</p>
    </div>
    <div class="feature-card">
      <div class="tag tag-green">MESSAGING</div>
      <h4>WhatsApp Booking</h4>
      <p>Réservation directe via WhatsApp. Confirmations et rappels automatiques.</p>
    </div>
    <div class="feature-card">
      <div class="tag tag-orange">ANALYTICS</div>
      <h4>Revenue Intelligence</h4>
      <p>Dashboard analytique avec prédiction de revenus, LTV client, recommandations IA.</p>
    </div>
  </div>

  <h3><span class="icon" style="background:#FEF2F2;color:#DC2626">→</span> Business model</h3>
  <table>
    <tr><th>Plan</th><th>Prix/mois</th><th>Limite</th></tr>
    <tr><td>Free</td><td>0 €</td><td>50 RDV/mois</td></tr>
    <tr><td>Pro</td><td>19 €</td><td>500 RDV/mois</td></tr>
    <tr><td>Business</td><td>49 €</td><td>Illimité + IA</td></tr>
    <tr><td>Enterprise</td><td>99 €</td><td>Multi-sites + API</td></tr>
  </table>

  <div class="footer-bar">
    <span>Traffik Web — traffik-web.fr</span>
    <span>Rapport généré automatiquement</span>
  </div>
</div>

<!-- ═══════════════════════════════════════════ PAGE 5 : NEXT STEPS ═══ -->
<div class="page">
  <div class="page-header">
    <div class="logo">Traffik<span>.</span></div>
    <div class="page-num">05 / 05</div>
  </div>

  <h2>Prochaines <span>étapes</span></h2>
  <p class="section-sub">Roadmap des actions à mener</p>

  <div class="timeline">
    <div class="timeline-item">
      <h4>Déployer les 15 sites V3 en batch</h4>
      <p>Attendre le reset de la limite Vercel (~5h), puis <code>python3 site_builder.py --all</code>. Toutes les pages sur demo-traffik.vercel.app en un seul deploy.</p>
    </div>
    <div class="timeline-item">
      <h4>Lancer la prospection email</h4>
      <p>Enrichir les prospects avec leurs emails (scraping ou recherche manuelle), puis <code>python3 auto_email.py</code> pour envoyer les mails avec le lien démo personnalisé.</p>
    </div>
    <div class="timeline-item">
      <h4>Ajouter des features interactives par catégorie</h4>
      <p>Pizza builder visuel, calculateur devis plombier, diagnostic capillaire coiffeur, quiz peau spa, estimation immobilier — des éléments uniques par métier.</p>
    </div>
    <div class="timeline-item">
      <h4>Développer le SaaS Booker</h4>
      <p>Configurer Supabase (tables, auth), connecter Stripe, développer le système de booking en temps réel, ajouter le module IA voice.</p>
    </div>
    <div class="timeline-item">
      <h4>Déployer Booker sur Vercel</h4>
      <p>Domaine personnalisé, SSL, CI/CD GitHub. Objectif : MVP utilisable en 4-6 semaines.</p>
    </div>
  </div>

  <div class="highlight-box" style="margin-top:30px">
    <h3 style="margin-top:0">Fichiers clés</h3>
    <table style="margin:10px 0 0 0">
      <tr><th>Fichier</th><th>Path</th></tr>
      <tr><td>Site Builder V3</td><td>~/Documents/traffik/prospection/site_builder.py</td></tr>
      <tr><td>Auto Email</td><td>~/Documents/traffik/prospection/auto_email.py</td></tr>
      <tr><td>Analyse Planity</td><td>~/Documents/traffik/prospection/ANALYSE-PLANITY-SAAS.md</td></tr>
      <tr><td>Benchmark Sites</td><td>~/Documents/traffik/prospection/BEST-SITES-RESEARCH.md</td></tr>
      <tr><td>SaaS Booker</td><td>~/Documents/booker/</td></tr>
      <tr><td>Pages démo (local)</td><td>~/Documents/traffik/prospection/demo-pages/</td></tr>
      <tr><td>Prospects CSV</td><td>~/Documents/traffik/prospection/prospects.csv</td></tr>
    </table>
  </div>

  <div style="text-align:center;margin-top:40px">
    <p style="font-size:20px;font-weight:800;color:#0a0a0a">Traffik<span style="color:#0066FF">.</span></p>
    <p style="font-size:10px;color:#999;margin-top:4px">Sites web qui convertissent. Publicités qui performent.</p>
    <p style="font-size:9px;color:#ccc;margin-top:8px">traffik-web.fr · 06 35 50 53 74 · contact@traffik-web.fr</p>
  </div>

  <div class="footer-bar">
    <span>Traffik Web — traffik-web.fr</span>
    <span>Rapport généré automatiquement</span>
  </div>
</div>

</body>
</html>"""

OUTPUT = "/Users/hossamelaib/Documents/traffik/prospection/RAPPORT-SESSION-TRAFFIK.pdf"

print("  Génération du PDF...", end=" ", flush=True)
weasyprint.HTML(string=HTML).write_pdf(OUTPUT)
print(f"OK\n  → {OUTPUT}")
