import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Check, ArrowLeft, ArrowRight, Star, MessageCircle, Globe, ShoppingCart, Code2, Megaphone, Search, Package, Eye } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import FAQSection from '../components/common/FAQSection';

/* ── TiltCard ── */
function TiltCard({ children, className }) {
  const ref = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 15 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 15 });
  const handleMouse = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rotateX.set(((e.clientY - rect.top) / rect.height - 0.5) * -5);
    rotateY.set(((e.clientX - rect.left) / rect.width - 0.5) * 5);
  };
  return (
    <motion.div ref={ref} style={{ rotateX: springX, rotateY: springY, transformPerspective: 1200 }} onMouseMove={handleMouse} onMouseLeave={() => { rotateX.set(0); rotateY.set(0); }} className={className}>
      {children}
    </motion.div>
  );
}

/* ── Animated Previews ── */
function WordPressPreview() {
  return (
    <div className="h-full rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden relative p-3 flex flex-col border border-white/[0.06]">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-4 h-4 rounded bg-gradient-to-br from-[#0066FF] to-[#A855F7]" />
        <div className="flex gap-1.5">{['Accueil', 'Services', 'Blog', 'Contact'].map((_, i) => (<motion.div key={i} className="h-2 rounded-full bg-white/20 px-2" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }} />))}</div>
      </div>
      <div className="flex-1 grid grid-cols-3 gap-1.5">
        {[...Array(6)].map((_, i) => (<motion.div key={i} className="rounded bg-white/[0.06] border border-white/[0.04]" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 3, delay: i * 0.3, repeat: Infinity }} />))}
      </div>
      <div className="flex items-center gap-1 mt-1.5"><Globe className="w-2.5 h-2.5 text-[#0066FF]" /><span className="text-[8px] text-white/40">5 pages sur mesure</span></div>
    </div>
  );
}

function ShopifyPreview() {
  const products = [
    { color: 'from-green-400 to-emerald-600', label: 'Sneakers' },
    { color: 'from-blue-400 to-blue-600', label: 'T-shirt' },
    { color: 'from-purple-400 to-purple-600', label: 'Hoodie' },
    { color: 'from-orange-400 to-orange-600', label: 'Cap' },
    { color: 'from-green-400 to-emerald-600', label: 'Sneakers' },
    { color: 'from-blue-400 to-blue-600', label: 'T-shirt' },
    { color: 'from-purple-400 to-purple-600', label: 'Hoodie' },
    { color: 'from-orange-400 to-orange-600', label: 'Cap' },
  ];
  return (
    <div className="h-full rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden relative p-3 border border-white/[0.06]">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-5 h-5 rounded-md bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center"><ShoppingCart className="w-3 h-3 text-white" /></div>
        <div className="h-2 w-14 rounded-full bg-white/20" />
        <div className="ml-auto flex gap-1 items-center"><div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /></div>
      </div>
      <div className="overflow-hidden">
        <motion.div className="flex gap-2" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 8, ease: 'linear', repeat: Infinity }}>
          {products.map((p, i) => (<div key={i} className="flex-shrink-0 w-14 flex flex-col items-center gap-0.5"><div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${p.color} opacity-80 flex items-center justify-center`}><Package className="w-4 h-4 text-white/70" /></div><span className="text-[7px] text-white/40">{p.label}</span></div>))}
        </motion.div>
      </div>
    </div>
  );
}

function ReactPreview() {
  const lines = [
    { text: '$ npx create-next-app', color: 'text-green-400' },
    { text: 'Installing dependencies...', color: 'text-white/40' },
    { text: '> react, tailwind, framer', color: 'text-blue-400' },
    { text: 'Performance: 100/100', color: 'text-[#0066FF]' },
    { text: 'Deploy: live', color: 'text-[#A855F7]' },
  ];
  return (
    <div className="h-full rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden relative p-3 font-mono border border-white/[0.06]">
      <div className="flex items-center gap-1.5 mb-2">
        <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-red-400/60" /><div className="w-2 h-2 rounded-full bg-yellow-400/60" /><div className="w-2 h-2 rounded-full bg-green-400/60" /></div>
        <span className="text-[8px] text-white/25 ml-1">terminal</span>
        <div className="ml-auto flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /><span className="text-[7px] text-green-400/60">live</span></div>
      </div>
      <div className="flex flex-col gap-0.5">
        {lines.map((l, i) => (<motion.div key={i} className={`text-[9px] ${l.color}`} initial={{ opacity: 0, x: -8 }} animate={{ opacity: [0, 1, 1, 0.7], x: 0 }} transition={{ duration: 2, delay: i * 0.6, repeat: Infinity, repeatDelay: 4 }}>{l.text}</motion.div>))}
      </div>
      <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="inline-block w-1.5 h-3 bg-[#0066FF] ml-0.5 mt-1" />
    </div>
  );
}

function AdsPreview() {
  const bars = [
    { label: 'CTR', target: '75%', color: 'from-[#0066FF] to-blue-400', delay: 0 },
    { label: 'ROAS', target: '90%', color: 'from-[#A855F7] to-purple-400', delay: 0.3 },
    { label: 'Conv.', target: '55%', color: 'from-emerald-500 to-emerald-400', delay: 0.6 },
  ];
  return (
    <div className="h-full rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden relative p-3 flex flex-col border border-white/[0.06]">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5"><Megaphone className="w-3 h-3 text-[#0066FF]" /><span className="text-[9px] text-white/40 font-medium">Ad Manager</span></div>
        <div className="flex gap-1 items-center"><div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /><span className="text-[8px] text-green-400/60">Live</span></div>
      </div>
      <div className="flex flex-col gap-1.5 flex-1 justify-center">
        {bars.map((bar, i) => (<div key={i} className="flex items-center gap-2"><span className="text-[8px] text-white/40 w-6 text-right">{bar.label}</span><div className="flex-1 h-2.5 rounded-full bg-white/[0.06] overflow-hidden"><motion.div className={`h-full rounded-full bg-gradient-to-r ${bar.color}`} initial={{ width: '0%' }} animate={{ width: ['0%', bar.target, '20%', bar.target] }} transition={{ duration: 3, delay: bar.delay, repeat: Infinity, repeatDelay: 1 }} /></div></div>))}
      </div>
    </div>
  );
}

function SEOPreview() {
  const ranks = [
    { keyword: 'création site web', pos: '#1', color: 'text-green-400' },
    { keyword: 'agence web france', pos: '#3', color: 'text-green-400' },
    { keyword: 'site wordpress pro', pos: '#5', color: 'text-amber-400' },
  ];
  return (
    <div className="h-full rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden relative p-3 flex flex-col border border-white/[0.06]">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5"><Search className="w-3 h-3 text-[#A855F7]" /><span className="text-[9px] text-white/40 font-medium">Rankings</span></div>
        <motion.span className="text-[8px] text-green-400 font-bold" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>+45%</motion.span>
      </div>
      <div className="flex flex-col gap-1.5 flex-1">
        {ranks.map((r, i) => (<motion.div key={i} className="flex items-center justify-between px-2 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.04]" animate={{ x: [0, 2, 0] }} transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}>
          <span className="text-[8px] text-white/50">{r.keyword}</span><span className={`text-[9px] font-bold ${r.color}`}>{r.pos}</span>
        </motion.div>))}
      </div>
    </div>
  );
}

const previewMap = {
  wordpress: WordPressPreview,
  shopify: ShopifyPreview,
  custom: ReactPreview,
  ads: AdsPreview,
  seo: SEOPreview,
};

const categoryColors = {
  'Création Web': 'bg-[#0066FF]/10 text-[#0066FF] dark:bg-[#0066FF]/20',
  'Marketing': 'bg-[#A855F7]/10 text-[#A855F7] dark:bg-[#A855F7]/20',
};

/* ── Plans — Création Web ── */
const webPlans = [
  {
    id: 'custom', name: 'Site Sur Mesure', category: 'Création Web',
    price: '600', unit: '', icon: Code2,
    description: 'React / Next.js — Design unique, animations fluides, performance maximale.',
    features: ['Design unique sur mesure', 'Animations fluides (Framer Motion)', 'Performance optimale (score 90+)', 'Intégration API sur mesure', 'Code source livrée'],
    popular: true, link: '/developpement-react-nextjs',
    grid: 'md:col-span-2 md:row-span-2',
    large: true,
  },
  {
    id: 'wordpress', name: 'Site WordPress', category: 'Création Web',
    price: '600', unit: '', icon: Globe,
    description: 'Site vitrine professionnel',
    features: ["Jusqu'à 5 pages optimisées", 'Design responsive mobile/tablette', 'SEO de base (meta, sitemap, robots)', 'Formulaire de contact intégré', 'Hébergement guide inclus'],
    popular: false, link: '/creation-site-wordpress',
    grid: 'md:col-span-2',
  },
  {
    id: 'shopify', name: 'Boutique Shopify', category: 'Création Web',
    price: 'Sur devis', unit: '', icon: ShoppingCart,
    description: 'E-commerce prêt à vendre',
    features: ['Configuration complète de la boutique', "Jusqu'à 20 produits intégrés", 'Paiement sécurisé (Stripe, PayPal)', 'Livraison & suivi configurés', 'Thème premium personnalisé'],
    popular: false, link: '/creation-site-shopify',
    grid: 'md:col-span-2',
  },
];

/* ── Plans — Marketing ── */
const marketingPlans = [
  {
    id: 'seo', name: 'SEO & Référencement', category: 'Marketing',
    price: '400', unit: '/mois', icon: Search,
    description: 'Première page Google — Audit technique, optimisation on/off-page, backlinks.',
    features: ['Audit SEO technique complet', 'Optimisation on-page & off-page', 'Création de contenu optimisé', 'Stratégie de backlinks', 'Suivi de positionnement mensuel'],
    popular: true, link: '/referencement-seo',
    grid: 'md:col-span-2 md:row-span-2',
    large: true,
  },
  {
    id: 'ads', name: 'Publicité Digitale', category: 'Marketing',
    price: '300', unit: '/mois', icon: Megaphone,
    description: 'Facebook, Google & TikTok Ads',
    features: ['Campagnes Facebook & Instagram Ads', 'Campagnes Google Ads (Search & Display)', 'Reporting mensuel détaillé', 'Optimisation continue des budgets', 'A/B testing des créatives'],
    popular: false, link: '/publicite-digitale',
    grid: 'md:col-span-2 md:row-span-2',
  },
];

const faqs = [
  {
    question: 'Les prix affichés sont-ils définitifs ?',
    answer: 'Les tarifs indiqués sont des prix de départ. Chaque projet est unique, le prix final dépend de vos besoins spécifiques (nombre de pages, fonctionnalités, délai). Je vous envoie un devis détaillé et gratuit après notre premier échange.',
  },
  {
    question: 'Quels sont les délais de livraison ?',
    answer: 'Un site vitrine WordPress est livré en 5 à 7 jours. Une boutique Shopify en 7 à 10 jours. Un site sur mesure React en 2 à 4 semaines selon la complexité. Les délais exacts sont précisés dans le devis.',
  },
  {
    question: 'Comment se passe le paiement ?',
    answer: 'Un acompte de 30% est demandé à la validation du devis pour lancer le projet. Le solde est payable à la livraison, après votre validation finale. Paiement par virement ou PayPal.',
  },
  {
    question: 'Est-ce que la maintenance est incluse ?',
    answer: 'Chaque projet inclut 30 jours de garantie (corrections de bugs, ajustements mineurs). Au-delà, un forfait maintenance est disponible à partir de 50€/mois pour les mises à jour, la sécurité et le support.',
  },
  {
    question: "Pourquoi choisir un freelance plutôt qu'une agence ?",
    answer: "Un freelance offre un interlocuteur unique, des tarifs plus compétitifs (pas de frais de structure), une réactivité supérieure et un suivi personnalisé. Vous payez le travail, pas les locaux et la hiérarchie.",
  },
];

/* ── Bento Card ── */
function BentoCard({ plan, index }) {
  const Icon = plan.icon;
  const Preview = previewMap[plan.id];
  const isLarge = plan.large;

  return (
    <TiltCard className="h-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.06 }}
        className={`relative rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 group ${
          plan.popular
            ? 'bg-gray-50 dark:bg-white/[0.06] border-2 border-[#0066FF]/20 dark:border-[#0066FF]/30 shadow-lg shadow-[#0066FF]/5 dark:shadow-[#0066FF]/10'
            : 'bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08] hover:border-gray-300 dark:hover:border-white/[0.15] hover:shadow-lg'
        }`}
      >
        {/* Category tag + Popular badge */}
        <div className="flex items-center justify-between px-5 pt-4">
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${categoryColors[plan.category]}`}>
            {plan.category}
          </span>
          {plan.popular && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#0066FF] text-white text-[10px] font-bold uppercase tracking-wider">
              <Star className="w-2.5 h-2.5 fill-white" /> Top
            </span>
          )}
        </div>

        {/* Preview */}
        <div className={`px-5 pt-3 ${isLarge ? 'flex-1 min-h-[140px]' : 'h-28'}`}>
          {Preview && <Preview />}
        </div>

        {/* Content */}
        <div className={`p-5 flex flex-col ${isLarge ? '' : 'flex-1'}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-[#0066FF]/10 dark:bg-[#0066FF]/20 flex items-center justify-center shrink-0">
              <Icon className="w-4 h-4 text-[#0066FF]" />
            </div>
            <div className="min-w-0">
              <h3 className="text-base font-bold text-gray-900 dark:text-white leading-tight truncate">{plan.name}</h3>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate">{plan.description}</p>
            </div>
          </div>

          {/* Features */}
          <ul className={`mb-4 flex-1 ${isLarge ? 'space-y-2' : 'space-y-1.5'}`}>
            {(isLarge ? plan.features : plan.features.slice(0, 3)).map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-xs">
                <Check className="w-3.5 h-3.5 text-[#0066FF] mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">{feature}</span>
              </li>
            ))}
            {!isLarge && plan.features.length > 3 && (
              <li className="text-[11px] text-gray-400 dark:text-gray-500 pl-5">+{plan.features.length - 3} inclus</li>
            )}
          </ul>

          {/* CTA */}
          <div className="flex gap-2 mt-auto">
            <motion.a
              href={`https://wa.me/33635505374?text=${encodeURIComponent(`Bonjour, je suis intéressé par l'offre ${plan.name}. Pouvez-vous m'envoyer un devis ?`)}`}
              target="_blank" rel="noopener noreferrer"
              className={`flex-1 py-2.5 rounded-xl font-semibold text-center text-sm transition-all ${
                plan.popular
                  ? 'bg-[#0066FF] text-white hover:bg-[#0055DD] shadow-lg shadow-[#0066FF]/25'
                  : 'bg-gray-900 dark:bg-white/10 text-white hover:bg-gray-800 dark:hover:bg-white/[0.15] border border-transparent dark:border-white/[0.06]'
              }`}
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            >Devis gratuit</motion.a>
            {plan.link && (
              <Link to={plan.link} className="py-2.5 px-3.5 rounded-xl bg-gray-100 dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.06] text-gray-400 hover:border-[#0066FF]/40 hover:text-[#0066FF] transition-colors flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </TiltCard>
  );
}

export default function Tarifs() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] transition-colors pt-28 pb-20">
      <SEOHead
        title="Tarifs Création Site Web | Prix Transparents | Traffik Web"
        description="Tarifs création site web : WordPress dès 600€, Shopify sur devis, React dès 600€. Freelance en France. Devis gratuit 24h."
        canonical="https://traffik-web.fr/tarifs"
        keywords="tarif création site web, prix site internet, devis site web, prix site vitrine, tarif boutique en ligne, cout site web freelance"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Back link */}
        <Link to="/" className="inline-flex items-center gap-2 text-[#0066FF] hover:underline mb-10 text-sm">
          <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Nos <span className="text-[#0066FF]">services</span>
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Tarifs transparents, résultats concrets. Choisissez la formule adaptée à votre projet.
          </p>
        </motion.div>

        {/* ── Création Web ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Création de Site Web</h2>
          <p className="text-gray-400 dark:text-gray-500 mt-1">E-commerce, vitrine ou sur mesure.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-20">
          {webPlans.map((plan, i) => (
            <div key={plan.id} className={plan.grid}>
              <BentoCard plan={plan} index={i} />
            </div>
          ))}
        </div>

        {/* ── Ads & Marketing ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Marketing & Visibilité</h2>
          <p className="text-gray-400 dark:text-gray-500 mt-1">Attirez des clients, mesurez vos résultats.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-20">
          {marketingPlans.map((plan, i) => (
            <div key={plan.id} className={plan.grid}>
              <BentoCard plan={plan} index={i} />
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-900 dark:text-white">
            Questions fréquentes
          </h2>
          <p className="text-gray-400 text-center mb-10">
            Tout ce que vous devez savoir sur nos tarifs
          </p>
          <div className="max-w-3xl mx-auto">
            <FAQSection faqs={faqs} />
          </div>
        </motion.section>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center rounded-3xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] p-10 md:p-14"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white">
            Un projet en tête ?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-lg mx-auto">
            Discutons de votre projet gratuitement. Réponse garantie en moins de 2h.
          </p>
          <motion.a
            href="https://wa.me/33635505374?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20mon%20projet%20web."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-lg shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/30 transition-shadow"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle className="w-5 h-5" />
            Discuter sur WhatsApp
          </motion.a>
          <p className="text-xs text-gray-400 dark:text-gray-600 mt-4">
            * Devis gratuit et sans engagement
          </p>
        </motion.div>
      </div>
    </div>
  );
}
