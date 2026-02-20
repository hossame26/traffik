import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Search,
  Shield,
  Zap,
  BarChart3,
  TrendingUp,
  CheckCircle,
  MessageCircle,
  Star,
  Smartphone,
  Crosshair,
  Mail,
  ArrowUpRight,
  X
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import FAQSection from '../../components/common/FAQSection';

/* ── Marketing Services Data (for modals) ── */
const marketingServices = [
  {
    id: 'acquisition',
    icon: Crosshair,
    title: 'Acquisition Automatisée',
    shortDesc: 'SEO technique + Google Ads pour capturer le trafic intentionniste.',
    stats: [
      { value: '90%', label: 'Trafic capturé' },
      { value: '4.2x', label: 'ROAS moyen' },
    ],
    description: 'On combine le SEO technique et Google Ads pour capter les prospects qui cherchent activement vos services. Votre site apparait en haut de Google, 24h/24.',
    features: [
      'Audit SEO complet + corrections techniques',
      'Campagnes Google Ads optimisées (Search + Display)',
      'Landing pages conversion-ready',
      'Suivi des conversions et attribution',
      'Reporting mensuel détaillé',
      'A/B testing continu des annonces',
    ],
    waMsg: "Bonjour, je suis intéressé par votre service d'Acquisition Automatisée (SEO + Google Ads). Pouvez-vous m'en dire plus ?",
  },
  {
    id: 'emailing',
    icon: Mail,
    title: 'Cold Emailing',
    shortDesc: 'Campagnes B2B ciblées avec IA.',
    description: 'Des campagnes email B2B ultra-personnalisées grâce à l\'IA. On cible les décideurs de votre marché avec des séquences qui convertissent.',
    features: [
      'Scraping et enrichissement de leads qualifiés',
      'Rédaction IA de séquences personnalisées',
      'Configuration domaine + warm-up',
      'Séquences multi-touch (3 à 5 relances)',
      'Tracking ouvertures, clics, réponses',
      'Optimisation continue du taux de réponse',
    ],
    waMsg: "Bonjour, je suis intéressé par votre service de Cold Emailing B2B. Pouvez-vous m'en dire plus ?",
  },
  {
    id: 'tracking',
    icon: BarChart3,
    title: 'Tracking & Data',
    shortDesc: 'Dashboards temps réel, ROI par euro.',
    description: 'Installez un système de tracking complet pour savoir exactement combien chaque canal vous rapporte. Fini les décisions à l\'aveugle.',
    features: [
      'Google Analytics 4 + Tag Manager setup',
      'Tracking des conversions multi-canal',
      'Dashboard temps réel personnalisé',
      'Attribution des ventes par source',
      'Alertes automatiques sur les KPIs',
      'Rapport hebdomadaire automatisé',
    ],
    waMsg: "Bonjour, je suis intéressé par votre service Tracking & Data. Pouvez-vous m'en dire plus ?",
  },
];

/* ── Service Modal ── */
function ServiceModal({ service, onClose }) {
  if (!service) return null;
  const Icon = service.icon;
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        className="relative w-full max-w-lg bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden"
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Header */}
        <div className="p-6 pb-4 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-orange-500/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{service.shortDesc}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/[0.06] transition-colors">
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 pb-2">
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5">{service.description}</p>

          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Ce qui est inclus</h4>
          <ul className="space-y-2.5 mb-6">
            {service.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm">
                <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer CTA */}
        <div className="p-6 pt-4 border-t border-gray-100 dark:border-white/[0.06]">
          <motion.a
            href={`https://wa.me/33635505374?text=${encodeURIComponent(service.waMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-lg shadow-[#25D366]/20"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle className="w-4 h-4" />
            Discuter sur WhatsApp
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Animated Pricing Previews ── */
function EssentielPreview() {
  const checks = [
    { label: 'Meta tags', color: 'text-green-400', delay: 0 },
    { label: 'SSL valid', color: 'text-green-400', delay: 0.5 },
    { label: 'Mobile OK', color: 'text-green-400', delay: 1 },
    { label: 'Speed: 2.1s', color: 'text-amber-400', delay: 1.5 },
    { label: 'H1 missing', color: 'text-red-400', delay: 2 },
  ];
  return (
    <div className="h-32 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden relative p-3 font-mono border border-white/[0.06]">
      <div className="flex items-center gap-1.5 mb-2">
        <Search className="w-3 h-3 text-amber-400" />
        <span className="text-[9px] text-white/40 font-medium">Scan en cours...</span>
        <div className="ml-auto">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        {checks.map((c, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-1.5"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: [0, 1, 1, 0.7], x: 0 }}
            transition={{ duration: 2, delay: c.delay, repeat: Infinity, repeatDelay: 4 }}
          >
            <span className={`text-[9px] ${c.color}`}>●</span>
            <span className="text-[9px] text-white/50">{c.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CompletPreview() {
  const bars = [
    { label: 'SEO', value: '72%', w: '72%', color: 'from-amber-500 to-amber-400' },
    { label: 'Perf', value: '45%', w: '45%', color: 'from-red-500 to-red-400' },
    { label: 'Sécu', value: '88%', w: '88%', color: 'from-green-500 to-green-400' },
    { label: 'UX', value: '61%', w: '61%', color: 'from-orange-500 to-orange-400' },
  ];
  return (
    <div className="h-32 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden relative p-3 flex flex-col border border-white/[0.06]">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <BarChart3 className="w-3 h-3 text-amber-500" />
          <span className="text-[9px] text-white/40 font-medium">Score global</span>
        </div>
        <motion.span
          className="text-[10px] font-bold text-amber-400"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >66/100</motion.span>
      </div>
      <div className="flex flex-col gap-1.5 flex-1 justify-center">
        {bars.map((bar, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-[8px] text-white/40 w-6 text-right">{bar.label}</span>
            <div className="flex-1 h-2.5 rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div
                className={`h-full rounded-full bg-gradient-to-r ${bar.color}`}
                initial={{ width: '0%' }}
                animate={{ width: ['0%', bar.w] }}
                transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity, repeatDelay: 3 }}
              />
            </div>
            <span className="text-[8px] text-white/30 w-6">{bar.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PremiumPreview() {
  const items = [
    { label: 'Corrections SEO', delay: 0 },
    { label: 'Optimisation vitesse', delay: 0.5 },
    { label: 'Headers sécurité', delay: 1 },
  ];
  return (
    <div className="h-32 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden relative p-3 flex flex-col items-center justify-center gap-2 border border-white/[0.06]">
      <div className="flex items-center gap-1.5 mb-1">
        <motion.div
          className="text-[10px] font-bold text-red-400"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
        >45/100</motion.div>
        <span className="text-[9px] text-white/30">→</span>
        <motion.div
          className="text-[10px] font-bold text-green-400"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
        >92/100</motion.div>
      </div>
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="w-full flex items-center gap-2 px-2 py-1 rounded-lg border border-green-500/20 bg-green-500/[0.05]"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, delay: item.delay, repeat: Infinity }}
        >
          <span className="text-[9px] text-green-400">✓</span>
          <span className="text-[9px] text-white/40">{item.label}</span>
          <motion.div className="ml-auto w-1.5 h-1.5 rounded-full bg-green-400" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }} />
        </motion.div>
      ))}
    </div>
  );
}

const faqData = [
  {
    question: "Que contient exactement le rapport d'audit ?",
    answer: "Un document de 15 à 30 pages couvrant 4 piliers : SEO (balises, mots-clés, maillage), Performance (Core Web Vitals, vitesse), Sécurité (SSL, headers, failles) et UX (navigation, responsive, accessibilité). Chaque point est noté avec des recommandations priorisées."
  },
  {
    question: "Combien de temps faut-il pour recevoir l'audit ?",
    answer: "L'audit Essentiel est livré sous 24 à 48 heures. L'audit + Plan d'action sous 3 à 5 jours ouvrables. Pour l'offre Implémentation, le rapport initial arrive sous 48h et l'implémentation se fait sur 2 à 4 semaines."
  },
  {
    question: "Mon site est-il compatible avec votre audit ?",
    answer: "Oui. WordPress, Shopify, Wix, Squarespace, React, Next.js, PrestaShop, Magento et plus. Notre processus s'adapte à chaque technologie."
  }
];

const plans = [
  {
    name: 'Audit Essentiel',
    price: '100',
    icon: Search,
    description: 'Diagnostic rapide en 24h',
    preview: EssentielPreview,
    features: ['Analyse SEO (50+ règles)', 'Performance mobile & desktop', 'Sécurité SSL & headers', 'Analyse UX responsive', 'Rapport PDF détaillé'],
  },
  {
    name: 'Audit + Plan',
    price: '200',
    icon: BarChart3,
    description: 'Diagnostic complet + stratégie',
    popular: true,
    preview: CompletPreview,
    features: ['Tout de l\'Essentiel', 'Analyse approfondie (230+ règles)', 'Plan d\'action priorisé', 'Analyse concurrence SEO', 'Appel restitution 30 min'],
  },
  {
    name: 'Audit + Implémentation',
    price: '499',
    icon: TrendingUp,
    description: 'Diagnostic + corrections',
    preview: PremiumPreview,
    features: ['Tout de l\'Audit + Plan', 'Implémentation corrections', 'Optimisation SEO on-page', 'Amélioration performance', 'Support 30 jours inclus'],
  },
];

export default function AuditSite() {
  const [activeService, setActiveService] = useState(null);

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white">
      <AnimatePresence>
        {activeService && <ServiceModal service={activeService} onClose={() => setActiveService(null)} />}
      </AnimatePresence>

      <SEOHead
        title="Audit de Site Web Complet | SEO, Performance, Sécurité | Traffik Web"
        description="Audit professionnel de votre site web : SEO, performance, sécurité et UX. Rapport détaillé en 24h avec plan d'action concret. À partir de 100 euros. Identifiez ce qui freine votre croissance."
        canonical="https://traffik-web.fr/audit-site-web"
        keywords="audit site web, audit seo, audit performance site, audit securite site web, analyse site web, test site web, audit ux, core web vitals, audit technique, audit site internet"
      />

      <div className="max-w-5xl mx-auto py-20 px-4">

        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#0066FF] hover:underline mb-8 text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Retour
        </Link>

        {/* ── Hero ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-5">
            <Search className="w-3.5 h-3.5" />
            230+ règles vérifiées
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5">
            Votre site vous coûte{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">des clients.</span>
          </h1>

          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mb-8">
            Un audit professionnel révèle les problèmes invisibles qui plombent vos conversions. Rapport en 24h, recommandations actionnables.
          </p>

          <div className="flex flex-wrap gap-3">
            <motion.a
              href="https://wa.me/33635505374?text=Bonjour%2C%20je%20souhaite%20un%20audit%20de%20mon%20site%20web."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-lg shadow-[#25D366]/20"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle className="w-4 h-4" />
              Demander un Audit
            </motion.a>
            <a
              href="#tarifs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-medium text-sm hover:bg-gray-50 dark:hover:bg-white/[0.04] transition-colors"
            >
              Voir les formules
            </a>
          </div>
        </motion.div>

        {/* ── Pricing Cards ── */}
        <motion.section
          id="tarifs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-24 scroll-mt-24"
        >
          <div className="grid md:grid-cols-3 gap-4">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              const Preview = plan.preview;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative rounded-2xl p-5 flex flex-col ${
                    plan.popular
                      ? 'bg-gray-50 dark:bg-white/[0.06] border-2 border-amber-500/30 shadow-lg shadow-amber-500/5'
                      : 'bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08] hover:border-gray-300 dark:hover:border-white/[0.12] hover:shadow-md'
                  } transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-lg shadow-amber-500/30">
                        <Star className="w-2.5 h-2.5 fill-white" /> Populaire
                      </span>
                    </div>
                  )}

                  <div className="mb-3 pt-1">
                    <Preview />
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold leading-tight text-gray-900 dark:text-white">{plan.name}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{plan.description}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider">À partir de</span>
                    <div className="text-3xl font-extrabold text-gray-900 dark:text-white">{plan.price}<span className="text-lg font-bold text-gray-400">€</span></div>
                  </div>

                  <ul className="space-y-2 mb-5 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href={`https://wa.me/33635505374?text=${encodeURIComponent(`Bonjour, je suis intéressé par l'offre ${plan.name}. Pouvez-vous m'envoyer un devis ?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-xl font-semibold text-center text-sm block ${
                      plan.popular
                        ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md shadow-amber-500/20'
                        : 'bg-gray-900 dark:bg-white/[0.08] text-white hover:bg-gray-800 dark:hover:bg-white/[0.12]'
                    } transition-all`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Demander un devis
                  </motion.a>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── Ce qu'on analyse — Grid clean ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Ce que nous <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">analysons</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">4 piliers, 230+ règles, un seul rapport.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: Search, title: 'SEO', desc: 'Balises, mots-clés, maillage, sitemap, indexation', accent: 'amber' },
              { icon: Zap, title: 'Performance', desc: 'Core Web Vitals, temps de chargement, optimisation', accent: 'amber' },
              { icon: Shield, title: 'Sécurité', desc: 'SSL, headers HTTP, failles, HTTPS, CSP', accent: 'orange' },
              { icon: Smartphone, title: 'UX & Mobile', desc: 'Responsive, accessibilité, navigation, CTA', accent: 'amber' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl p-5 bg-gray-50 dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.06] hover:border-amber-500/20 dark:hover:border-amber-500/15 transition-colors duration-300"
                >
                  <div className={`w-10 h-10 rounded-xl bg-${item.accent}-500/10 flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 text-${item.accent}-500`} />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── Performance Marketing ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left */}
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-500 text-[10px] font-bold uppercase tracking-wider mb-5">
                <TrendingUp className="w-3 h-3" /> Performance Marketing
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-gray-900 dark:text-white">
                Attirez des clients{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                  qui veulent acheter.
                </span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
                SEO, publicités ciblées et automatisation. Votre site devient un aimant à prospects qualifiés, 24h/24.
              </p>
              <div className="flex gap-8 pt-5 border-t border-gray-200 dark:border-white/[0.06]">
                {[
                  { value: '+350%', label: 'Croissance' },
                  { value: '15K', label: 'Leads' },
                  { value: '42', label: 'Clients' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-black text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Clickable Cards */}
            <div className="flex flex-col gap-3">
              <motion.button
                onClick={() => setActiveService(marketingServices[0])}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-2xl bg-gray-900 dark:bg-white/[0.05] border border-gray-800 dark:border-white/[0.08] p-5 relative overflow-hidden text-left cursor-pointer group"
              >
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4 text-orange-400" />
                </div>
                <Crosshair className="w-8 h-8 text-orange-500/60 mb-3" />
                <h3 className="text-lg font-bold text-white mb-1.5">Acquisition Automatisée</h3>
                <p className="text-sm text-gray-400 mb-3">SEO technique + Google Ads pour capturer le trafic intentionniste.</p>
                <div className="flex gap-6 pt-3 border-t border-white/[0.06]">
                  <div>
                    <div className="text-xl font-bold text-white">90%</div>
                    <div className="text-[10px] text-gray-500 uppercase">Trafic capturé</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">4.2x</div>
                    <div className="text-[10px] text-gray-500 uppercase">ROAS moyen</div>
                  </div>
                </div>
              </motion.button>

              <div className="grid grid-cols-2 gap-3">
                <motion.button
                  onClick={() => setActiveService(marketingServices[1])}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-2xl p-4 bg-gradient-to-br from-[#F97066] to-[#E8604C] text-white text-left cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center mb-2.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-sm mb-1">Cold Emailing</h3>
                  <p className="text-[11px] text-white/70 leading-relaxed">Campagnes B2B ciblées avec IA.</p>
                </motion.button>

                <motion.button
                  onClick={() => setActiveService(marketingServices[2])}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-2xl p-4 bg-gradient-to-br from-[#FB923C] to-[#F97316] text-white text-left cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center mb-2.5">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-sm mb-1">Tracking & Data</h3>
                  <p className="text-[11px] text-white/70 leading-relaxed">Dashboards temps réel, ROI par euro.</p>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── FAQ ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Questions <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">fréquentes</span>
          </h2>
          <FAQSection faqs={faqData} />
        </motion.section>

        {/* ── CTA ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-12 px-8 md:px-16 rounded-3xl bg-gradient-to-br from-amber-500/[0.06] to-orange-600/[0.04] border border-amber-500/10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Prêt à découvrir ce qui freine votre site ?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-xl mx-auto">
            Diagnostic complet sous 24h. Premier échange gratuit.
          </p>
          <motion.a
            href="https://wa.me/33635505374?text=Bonjour%2C%20je%20souhaite%20un%20audit%20de%20mon%20site%20web."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-lg shadow-[#25D366]/20"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle className="w-4 h-4" />
            Demander mon Audit
          </motion.a>
        </motion.section>

      </div>
    </div>
  );
}
