import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ShoppingCart,
  Check,
  MessageCircle,
  Shield,
  Zap,
  TrendingUp,
  Globe,
  Star,
  FileText,
  Layers,
  CreditCard,
  Package,
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import FAQSection from '../../components/common/FAQSection';

const shopifyFaqs = [
  {
    question: "En combien de temps mon site sera en ligne ?",
    answer: "5 à 7 jours pour le Starter, 7 à 10 jours pour le Business, 10 à 15 jours pour le Premium. Contenu prêt = livraison plus rapide."
  },
  {
    question: "Je peux gérer ma boutique seul après ?",
    answer: "Oui. Shopify est très simple à utiliser. Je vous forme 30 min en visio après la livraison. Vous serez 100% autonome."
  },
  {
    question: "Y a-t-il des frais mensuels ?",
    answer: "L'abonnement Shopify commence à 36€/mois (hébergement, SSL, support inclus). C'est payé directement à Shopify, pas à moi."
  },
  {
    question: "Et la maintenance après ?",
    answer: "7 jours de support inclus. Au-delà, forfait maintenance optionnel à partir de 90€/mois."
  }
];

/* ── Animated Mini Previews ── */

function StarterPreview() {
  const products = [
    { color: 'from-blue-400 to-blue-600', label: 'T-shirt' },
    { color: 'from-purple-400 to-purple-600', label: 'Sneakers' },
    { color: 'from-emerald-400 to-emerald-600', label: 'Hoodie' },
    { color: 'from-orange-400 to-orange-600', label: 'Cap' },
    { color: 'from-pink-400 to-pink-600', label: 'Bag' },
    { color: 'from-blue-400 to-blue-600', label: 'T-shirt' },
    { color: 'from-purple-400 to-purple-600', label: 'Sneakers' },
    { color: 'from-emerald-400 to-emerald-600', label: 'Hoodie' },
  ];

  return (
    <div className="h-32 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden relative flex flex-col items-center justify-center p-3">
      {/* Mini storefront header */}
      <div className="flex items-center gap-2 mb-3 w-full">
        <div className="w-5 h-5 rounded-md bg-gradient-to-br from-[#0066FF] to-[#A855F7] flex items-center justify-center">
          <ShoppingCart className="w-3 h-3 text-white" />
        </div>
        <div className="h-2 w-16 rounded-full bg-white/20" />
        <div className="ml-auto flex gap-1">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
        </div>
      </div>
      {/* Scrolling products */}
      <div className="w-full overflow-hidden">
        <motion.div
          className="flex gap-2"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
        >
          {products.map((p, i) => (
            <div key={i} className="flex-shrink-0 w-16 flex flex-col items-center gap-1">
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${p.color} opacity-80 flex items-center justify-center`}>
                <Package className="w-5 h-5 text-white/70" />
              </div>
              <span className="text-[9px] text-white/50 truncate">{p.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function BusinessPreview() {
  const bars = [
    { label: 'Ventes', target: '75%', color: 'from-[#0066FF] to-blue-400', delay: 0 },
    { label: 'Trafic', target: '90%', color: 'from-[#A855F7] to-purple-400', delay: 0.3 },
    { label: 'Panier', target: '55%', color: 'from-emerald-500 to-emerald-400', delay: 0.6 },
    { label: 'Conv.', target: '40%', color: 'from-orange-500 to-orange-400', delay: 0.9 },
  ];

  return (
    <div className="h-32 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden relative p-3 flex flex-col justify-between">
      {/* Mini dashboard header */}
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-1.5">
          <CreditCard className="w-3.5 h-3.5 text-[#0066FF]" />
          <span className="text-[10px] text-white/60 font-medium">Dashboard</span>
        </div>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[9px] text-green-400/80">Live</span>
        </div>
      </div>
      {/* Animated bars */}
      <div className="flex flex-col gap-1.5 flex-1 justify-end">
        {bars.map((bar, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-[9px] text-white/40 w-8 text-right">{bar.label}</span>
            <div className="flex-1 h-3 rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div
                className={`h-full rounded-full bg-gradient-to-r ${bar.color}`}
                initial={{ width: '0%' }}
                animate={{ width: ['0%', bar.target, '20%', bar.target] }}
                transition={{
                  duration: 3,
                  delay: bar.delay,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PremiumPreview() {
  const flags = ['🇫🇷', '🇬🇧', '🇩🇪', '🇪🇸', '🇮🇹', '🇯🇵', '🇺🇸', '🇧🇷'];

  return (
    <div className="h-32 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden relative p-3 flex flex-col items-center justify-center gap-3">
      {/* Spinning globe */}
      <motion.div
        animate={{ rotateY: 360 }}
        transition={{ duration: 4, ease: 'linear', repeat: Infinity }}
        className="relative"
        style={{ perspective: 200 }}
      >
        <Globe className="w-8 h-8 text-[#0066FF]" />
      </motion.div>
      {/* Cycling flags */}
      <div className="flex items-center gap-2 overflow-hidden">
        <motion.div
          className="flex gap-3"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 6, ease: 'linear', repeat: Infinity }}
        >
          {[...flags, ...flags].map((flag, i) => (
            <motion.span
              key={i}
              className="text-lg flex-shrink-0"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
            >
              {flag}
            </motion.span>
          ))}
        </motion.div>
      </div>
      <span className="text-[10px] text-white/40">Multi-langue / Multi-devise</span>
    </div>
  );
}

export default function Shopify() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] transition-colors pt-28 pb-20">
      <SEOHead
        title="Création Site Shopify | E-commerce à partir de 250€ | Traffik Web"
        description="Création de boutique Shopify professionnelle à partir de 250€. Freelance en France, site e-commerce clé en main livré en 5 jours."
        canonical="https://traffik-web.fr/creation-site-shopify"
        keywords="création site shopify, boutique shopify, site e-commerce shopify, prix site shopify, shopify freelance france"
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
            <div className="p-3 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium text-[#0066FF] bg-[#0066FF]/10 px-3 py-1 rounded-full">
              E-commerce Shopify
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5 text-gray-900 dark:text-white">
            Votre boutique Shopify{' '}
            <span className="text-[#0066FF]">clé en main</span>
          </h1>

          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mb-8">
            Prête à vendre en 5 jours. Design pro, paiement sécurisé, zéro prise de tête.
          </p>

          <motion.a
            href="https://wa.me/33635505374?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20la%20cr%C3%A9ation%20d%27une%20boutique%20Shopify."
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
            Nos formules Shopify
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Tarifs transparents, pas de frais cachés.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                name: 'Starter',
                price: '250',
                icon: FileText,
                description: 'Lancement rapide e-commerce',
                preview: StarterPreview,
                features: ["Jusqu'à 30 produits", 'Thème premium', 'Paiements & livraison', 'SEO de base', 'Livré en 5 jours'],
              },
              {
                name: 'Business',
                price: '500',
                icon: ShoppingCart,
                description: 'Boutique pro complète',
                popular: true,
                preview: BusinessPreview,
                features: ["Jusqu'à 100 produits", 'Design avancé', 'Blog intégré', 'Email marketing', 'Apps configurées'],
              },
              {
                name: 'Premium',
                price: '900',
                icon: Layers,
                description: 'E-commerce sans limites',
                preview: PremiumPreview,
                features: ['Produits illimités', 'Design sur mesure', 'Multi-langue / devise', 'Intégrations avancées', 'Support 30 jours'],
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
                    href={`https://wa.me/33635505374?text=${encodeURIComponent(`Bonjour, je suis intéressé par le forfait Shopify ${plan.name}. Pouvez-vous m'envoyer un devis ?`)}`}
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
            * Hors abonnement Shopify (à partir de 36€/mois) et nom de domaine (~12€/an)
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
            {/* Large gradient card -- col-span-2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="col-span-2 row-span-1 rounded-3xl p-6 md:p-8 flex flex-col justify-between bg-gradient-to-br from-[#0066FF]/[0.08] to-[#A855F7]/[0.06] dark:from-[#0066FF]/[0.12] dark:to-[#A855F7]/[0.08] border border-[#0066FF]/15 dark:border-[#0066FF]/20 hover:shadow-lg hover:shadow-[#0066FF]/5 transition-shadow duration-300"
            >
              <ShoppingCart className="w-8 h-8 text-[#0066FF]" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Livré en 5 jours</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Boutique complète prête à vendre, design pro et paiement sécurisé.</p>
              </div>
            </motion.div>

            {/* Small card 1 -- Shield */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="col-span-1 row-span-1 rounded-3xl p-5 md:p-6 flex flex-col justify-between bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] hover:shadow-lg hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300"
            >
              <Shield className="w-7 h-7 text-[#0066FF]" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">100% sécurisé</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">SSL, PCI DSS, Stripe</p>
              </div>
            </motion.div>

            {/* Small card 2 -- TrendingUp */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="col-span-1 row-span-1 rounded-3xl p-5 md:p-6 flex flex-col justify-between bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] hover:shadow-lg hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300"
            >
              <TrendingUp className="w-7 h-7 text-[#A855F7]" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">Scalable</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">1 à 100K produits</p>
              </div>
            </motion.div>

            {/* Small card 3 -- Zap */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="col-span-1 row-span-1 rounded-3xl p-5 md:p-6 flex flex-col justify-between bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] hover:shadow-lg hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300"
            >
              <Zap className="w-7 h-7 text-[#0066FF]" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">Ultra rapide</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">CDN mondial, &lt; 2s</p>
              </div>
            </motion.div>

            {/* Wide dark card -- col-span-2 md:col-span-3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="col-span-2 md:col-span-3 row-span-1 rounded-3xl p-6 md:p-8 flex flex-col justify-between bg-gray-900 dark:bg-white/[0.05] border border-gray-800 dark:border-white/[0.08] hover:shadow-xl transition-shadow duration-300"
            >
              <Globe className="w-8 h-8 text-[#0066FF]" />
              <div>
                <h3 className="text-xl font-bold text-white mb-1">E-commerce mondial</h3>
                <p className="text-sm text-gray-400">Multi-langues, multi-devises, livraison internationale. Vendez partout.</p>
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

          <FAQSection faqs={shopifyFaqs} />
        </motion.section>

        {/* ── 5. CTA Final ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center rounded-3xl bg-gradient-to-br from-[#0066FF] to-blue-700 p-10 md:p-14"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
            Prêt à lancer votre boutique ?
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
