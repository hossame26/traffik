import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Check,
  MessageCircle,
  Globe,
  Shield,
  Zap,
  Search,
  Star,
  Clock,
  Users,
  TrendingUp,
  FileText,
  ShoppingCart,
  Layout,
  Type,
  Image,
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import FAQSection from '../../components/common/FAQSection';

const wordpressFaqs = [
  {
    question: "En combien de temps mon site sera en ligne ?",
    answer: "3 à 5 jours pour un One Page, 5 à 10 jours pour un site vitrine, 10 à 15 jours pour un e-commerce WooCommerce. Contenu prêt = livraison plus rapide."
  },
  {
    question: "Je peux modifier mon site moi-même après ?",
    answer: "Oui. WordPress est très intuitif. On vous forme 30 min en visio après livraison. Vous pourrez ajouter des pages, modifier vos textes et images en toute autonomie."
  },
  {
    question: "Y a-t-il des frais mensuels ?",
    answer: "L'hébergement coûte environ 5-15€/mois selon le prestataire. Le nom de domaine ~12€/an. WordPress lui-même est gratuit. Forfait maintenance optionnel à partir de 49€/mois."
  },
  {
    question: "WordPress ou Shopify pour vendre en ligne ?",
    answer: "Shopify est plus simple pour du e-commerce pur. WordPress + WooCommerce offre plus de flexibilité et de contrôle. On vous conseille selon votre projet."
  }
];

/* ── Animated Mini Previews ── */

function OnePagePreview() {
  const sections = [
    { h: 'h-8', color: 'from-[#0066FF] to-[#A855F7]', label: 'Hero' },
    { h: 'h-5', color: 'from-gray-600 to-gray-500', label: 'About' },
    { h: 'h-4', color: 'from-gray-700 to-gray-600', label: 'Contact' },
  ];

  return (
    <div className="h-32 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden relative p-3 flex flex-col gap-1.5">
      {/* Mini browser bar */}
      <div className="flex items-center gap-1.5 mb-1">
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
        </div>
        <div className="h-2 flex-1 rounded-full bg-white/10 ml-1" />
      </div>
      {/* Scrolling single page */}
      <div className="flex-1 overflow-hidden rounded-lg">
        <motion.div
          className="flex flex-col gap-1"
          animate={{ y: ['0%', '-30%', '0%'] }}
          transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1 }}
        >
          {sections.map((s, i) => (
            <div key={i} className={`${s.h} w-full rounded bg-gradient-to-r ${s.color} opacity-60 flex items-center justify-center`}>
              <span className="text-[8px] text-white/60 font-medium">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function VitrinePreview() {
  const pages = ['Accueil', 'Services', 'À propos', 'Blog', 'Contact'];

  return (
    <div className="h-32 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden relative p-3 flex flex-col">
      {/* Mini navigation */}
      <div className="flex items-center gap-2 mb-2">
        <div className="w-4 h-4 rounded bg-gradient-to-br from-[#0066FF] to-[#A855F7]" />
        <div className="flex gap-1.5 overflow-hidden">
          {pages.map((p, i) => (
            <motion.div
              key={i}
              className="h-2 rounded-full bg-white/20 flex-shrink-0 px-2"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
            />
          ))}
        </div>
      </div>
      {/* Animated page grid */}
      <div className="flex-1 grid grid-cols-3 gap-1.5">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="rounded bg-white/[0.06] border border-white/[0.04]"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, delay: i * 0.3, repeat: Infinity }}
          />
        ))}
      </div>
      <div className="flex items-center justify-center gap-1 mt-1.5">
        <Globe className="w-2.5 h-2.5 text-[#0066FF]" />
        <span className="text-[9px] text-white/40">5-10 pages sur mesure</span>
      </div>
    </div>
  );
}

function EcommercePreview() {
  const items = [
    { price: '29€', color: 'from-blue-400 to-blue-600' },
    { price: '45€', color: 'from-purple-400 to-purple-600' },
    { price: '19€', color: 'from-emerald-400 to-emerald-600' },
    { price: '59€', color: 'from-orange-400 to-orange-600' },
    { price: '29€', color: 'from-blue-400 to-blue-600' },
    { price: '45€', color: 'from-purple-400 to-purple-600' },
  ];

  return (
    <div className="h-32 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden relative p-3 flex flex-col">
      {/* Mini WooCommerce header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <ShoppingCart className="w-3 h-3 text-[#A855F7]" />
          <span className="text-[9px] text-white/50 font-medium">WooCommerce</span>
        </div>
        <motion.div
          className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-[#0066FF]/20"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ShoppingCart className="w-2 h-2 text-[#0066FF]" />
          <span className="text-[8px] text-[#0066FF]">3</span>
        </motion.div>
      </div>
      {/* Product grid scroll */}
      <div className="flex-1 overflow-hidden">
        <motion.div
          className="grid grid-cols-3 gap-1.5"
          animate={{ y: ['0%', '-25%', '0%'] }}
          transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
        >
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <div className={`w-full aspect-square rounded bg-gradient-to-br ${item.color} opacity-70`} />
              <span className="text-[8px] text-white/50">{item.price}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default function WordPress() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] transition-colors pt-28 pb-20">
      <SEOHead
        title="Création Site WordPress | Dès 600€ | Traffik Web"
        description="Création de site WordPress professionnel à partir de 600€. Site vitrine, blog, e-commerce WooCommerce. Freelance WordPress en France, livré en 5 jours."
        canonical="https://traffik-web.fr/creation-site-wordpress"
        keywords="création site wordpress, site vitrine wordpress, wordpress freelance france, prix site wordpress, site wordpress professionnel"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#0066FF] hover:underline mb-10 text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
        </Link>

        {/* ── 1. Hero (shortened) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-[#0066FF] to-purple-600">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium text-[#0066FF] bg-[#0066FF]/10 px-3 py-1 rounded-full">
              WordPress
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5 text-gray-900 dark:text-white">
            Votre site WordPress{' '}
            <span className="text-[#0066FF]">professionnel</span>
          </h1>

          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mb-8">
            Site vitrine ou e-commerce, livré en 5 jours. Design pro, SEO optimisé, 100% autonome.
          </p>

          <motion.a
            href="https://wa.me/33635505374?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20la%20cr%C3%A9ation%20d%27un%20site%20WordPress."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#0066FF] text-white font-bold rounded-full hover:shadow-lg hover:shadow-[#0066FF]/25 transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle className="w-5 h-5" />
            Discuter sur WhatsApp
          </motion.a>
        </motion.div>

        {/* ── 2. Pricing Cards with animated previews ── */}
        <div className="relative mb-20 rounded-3xl p-6 md:p-10 -mx-2 md:-mx-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/[0.07] via-[#A855F7]/[0.04] to-[#0066FF]/[0.06] dark:from-[#0066FF]/[0.1] dark:via-[#A855F7]/[0.06] dark:to-[#0066FF]/[0.08] rounded-3xl" />
          <div className="absolute top-10 -left-10 w-60 h-60 bg-[#0066FF]/10 dark:bg-[#0066FF]/[0.15] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 -right-10 w-60 h-60 bg-[#A855F7]/10 dark:bg-[#A855F7]/[0.15] rounded-full blur-3xl pointer-events-none" />
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
            Nos formules WordPress
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Tarifs transparents, pas de frais cachés.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                name: 'One Page',
                price: '500',
                icon: FileText,
                description: 'Carte de visite en ligne',
                preview: OnePagePreview,
                features: ['Page unique responsive', 'Design personnalisé', 'Formulaire de contact', 'SEO de base', 'Livré en 3-5 jours'],
              },
              {
                name: 'Site Vitrine',
                price: '500',
                icon: Globe,
                description: 'Présence pro complète',
                popular: true,
                preview: VitrinePreview,
                features: ['5 à 10 pages sur mesure', 'Thème premium', 'Blog intégré', 'SEO complète', 'Google Analytics'],
              },
              {
                name: 'E-commerce',
                price: '500',
                icon: ShoppingCart,
                description: 'Boutique WooCommerce',
                preview: EcommercePreview,
                features: ['Boutique complète', 'Paiement sécurisé', 'Gestion des stocks', 'Pages produits SEO', 'Formation incluse'],
              },
            ].map((plan, index) => {
              const Icon = plan.icon;
              const Preview = plan.preview;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative rounded-2xl p-5 flex flex-col transition-all duration-300 ${
                    plan.popular
                      ? 'bg-white/40 dark:bg-white/[0.08] backdrop-blur-xl border border-black/[0.08] dark:border-[#0066FF]/40 shadow-lg shadow-black/[0.06] dark:shadow-[#0066FF]/10 ring-1 ring-black/[0.04] dark:ring-[#0066FF]/10'
                      : 'bg-white/30 dark:bg-white/[0.04] backdrop-blur-xl border border-black/[0.06] dark:border-white/[0.08] shadow-md shadow-black/[0.05] dark:shadow-black/[0.2] hover:shadow-lg hover:shadow-black/[0.08] hover:bg-white/50 dark:hover:bg-white/[0.07] transition-all'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0066FF] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#0066FF]/30">
                        <Star className="w-3 h-3 fill-white" /> Populaire
                      </span>
                    </div>
                  )}

                  {/* Animated mini-preview */}
                  <div className="mb-4 pt-1">
                    <Preview />
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0066FF]/20 to-purple-600/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#0066FF]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">{plan.name}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{plan.description}</p>
                    </div>
                  </div>

                  <div className="mb-5">
                    <span className="text-xs text-gray-400 dark:text-gray-500">À partir de</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{plan.price}€</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm">
                        <Check className="w-4 h-4 text-[#0066FF] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href={`https://wa.me/33635505374?text=${encodeURIComponent(`Bonjour, je suis intéressé par l'offre WordPress ${plan.name}. Pouvez-vous m'envoyer un devis ?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-xl font-semibold text-center text-sm transition-all block ${
                      plan.popular
                        ? 'bg-[#0066FF] text-white hover:bg-[#0055DD] shadow-lg shadow-[#0066FF]/25'
                        : 'bg-gray-900 dark:bg-white/10 text-white hover:bg-gray-800 dark:hover:bg-white/[0.15] border border-transparent dark:border-white/[0.06]'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Demander un devis
                  </motion.a>
                </motion.div>
              );
            })}
          </div>

          <p className="text-xs text-gray-400 mt-4">
            * Hors hébergement (~10€/mois) et nom de domaine (~12€/an)
          </p>
        </motion.section>
        </div>

        {/* ── 3. Bento Grid (simplified) ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px]">
            {/* -70% vs agence — large gradient */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="col-span-2 row-span-1 rounded-3xl p-6 md:p-8 flex flex-col justify-between bg-gradient-to-br from-[#0066FF]/[0.08] to-[#A855F7]/[0.06] dark:from-[#0066FF]/[0.12] dark:to-[#A855F7]/[0.08] border border-[#0066FF]/15 dark:border-[#0066FF]/20 hover:shadow-lg hover:shadow-[#0066FF]/5 transition-shadow duration-300"
            >
              <TrendingUp className="w-8 h-8 text-[#0066FF]" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">-70% vs agence</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Sites complets à partir de 600€. Qualité pro, prix freelance.</p>
              </div>
            </motion.div>

            {/* Livraison rapide */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="col-span-1 row-span-1 rounded-3xl p-5 md:p-6 flex flex-col justify-between bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] hover:shadow-lg hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300"
            >
              <Clock className="w-7 h-7 text-[#0066FF]" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">3-15 jours</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Livraison rapide garantie</p>
              </div>
            </motion.div>

            {/* SEO natif */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="col-span-1 row-span-1 rounded-3xl p-5 md:p-6 flex flex-col justify-between bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] hover:shadow-lg hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300"
            >
              <Search className="w-7 h-7 text-[#A855F7]" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">SEO natif</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Optimisé Google dès le départ</p>
              </div>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="col-span-1 row-span-1 rounded-3xl p-5 md:p-6 flex flex-col justify-between bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] hover:shadow-lg hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300"
            >
              <Users className="w-7 h-7 text-[#0066FF]" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">Support 24h</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">WhatsApp, email, visio</p>
              </div>
            </motion.div>

            {/* Sécurité — wide dark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="col-span-2 md:col-span-3 row-span-1 rounded-3xl p-6 md:p-8 flex flex-col justify-between bg-gray-900 dark:bg-white/[0.05] border border-gray-800 dark:border-white/[0.08] hover:shadow-xl transition-shadow duration-300"
            >
              <Shield className="w-8 h-8 text-[#0066FF]" />
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Sécurité & performance</h3>
                <p className="text-sm text-gray-400">SSL, sauvegardes auto, plugins sécurité, cache avancé. Score PageSpeed 90+.</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ── 4. FAQ ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Questions fréquentes
          </h2>

          <FAQSection faqs={wordpressFaqs} />
        </motion.section>

        {/* ── 5. CTA Final ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center rounded-3xl bg-gradient-to-br from-[#0066FF] to-blue-700 p-10 md:p-14"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
            Prêt à lancer votre site WordPress ?
          </h2>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto">
            Réponse sous 2h, devis sous 24h. Pas d'engagement.
          </p>
          <motion.a
            href="https://wa.me/33635505374"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0066FF] font-bold rounded-full hover:shadow-xl transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle className="w-5 h-5" />
            Discuter sur WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
