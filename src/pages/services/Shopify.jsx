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
  Palette,
  Search,
  Star,
  FileText,
  Layers,
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import FAQSection from '../../components/common/FAQSection';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

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
          <ArrowLeft className="w-4 h-4" /> Retour a l'accueil
        </Link>

        {/* Hero */}
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
            <span className="text-[#0066FF]">à partir de 250€</span>
          </h1>

          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mb-8">
            Site e-commerce complet, prêt à vendre, livré en 5 jours. Design pro, paiement sécurisé, zéro prise de tête.
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

        {/* Bento Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px]">
            {/* Large gradient card — col-span-2 */}
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

            {/* Small card 1 — Shield */}
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

            {/* Small card 2 — TrendingUp */}
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

            {/* Small card 3 — Zap */}
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

            {/* Wide dark card — col-span-2 md:col-span-3 */}
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

        {/* Tout est inclus */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
              Tout est inclus
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Pas de frais cachés, pas de mauvaises surprises.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              'Configuration complète de la boutique',
              "Jusqu'à 30 produits intégrés",
              'Paiement sécurisé (Stripe, PayPal)',
              'Livraison & zones configurées',
              'Thème premium personnalisé',
              'SEO de base (meta, sitemap, URLs)',
              'Pages légales (CGV, mentions)',
              'Google Analytics + Facebook Pixel',
              'Formation admin Shopify (30 min)',
              'Support 7 jours après livraison',
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="flex items-center gap-3 p-3 rounded-xl"
              >
                <Check className="w-4 h-4 text-[#0066FF] flex-shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Processus — Horizontal */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#0066FF] border border-[#0066FF]/20 bg-[#0066FF]/5 mb-4">
              Processus
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
              5 Etapes. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-purple-600">0 Surprise.</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Du premier échange à la mise en ligne de votre boutique.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 mb-10">
            {[
              { icon: MessageCircle, step: '01', title: 'Briefing', desc: 'Objectifs, produits et stratégie de vente.' },
              { icon: Palette, step: '02', title: 'Design', desc: 'Maquettes validées avant développement.' },
              { icon: ShoppingCart, step: '03', title: 'Produits', desc: 'Intégration catalogue et configuration.' },
              { icon: Search, step: '04', title: 'Tests', desc: 'Paiement, livraison, mobile vérifiés.' },
              { icon: Zap, step: '05', title: 'En ligne', desc: 'Lancement et formation admin incluse.' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative mb-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-100 dark:bg-white/[0.06] border border-gray-200 dark:border-white/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-gray-500 dark:text-gray-400" />
                    </div>
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#0066FF] text-white text-xs font-bold flex items-center justify-center shadow-lg shadow-[#0066FF]/30">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[160px]">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center">
            <motion.a
              href="https://wa.me/33635505374"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#0066FF] to-[#A855F7] text-white font-bold shadow-lg shadow-[#0066FF]/20 hover:shadow-xl hover:shadow-[#0066FF]/30 transition-shadow"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Demarrer mon projet
              <Zap className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.section>

        {/* Pricing */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
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
                features: ["Jusqu'à 30 produits", 'Thème premium', 'Paiements & livraison', 'SEO de base', 'Livré en 5 jours'],
              },
              {
                name: 'Business',
                price: '500',
                icon: ShoppingCart,
                description: 'Boutique pro complète',
                popular: true,
                features: ["Jusqu'à 100 produits", 'Design avancé', 'Blog intégré', 'Email marketing', 'Apps configurées'],
              },
              {
                name: 'Premium',
                price: '900',
                icon: Layers,
                description: 'E-commerce sans limites',
                features: ['Produits illimités', 'Design sur mesure', 'Multi-langue / devise', 'Intégrations avancées', 'Support 30 jours'],
              },
            ].map((plan, index) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative rounded-2xl p-6 flex flex-col transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gray-50 dark:bg-white/[0.08] border-2 border-[#0066FF]/30 dark:border-[#0066FF]/40 shadow-xl shadow-[#0066FF]/5 dark:shadow-[#0066FF]/10 ring-1 ring-[#0066FF]/10'
                      : 'bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.08] hover:border-gray-300 dark:hover:border-white/[0.15] hover:shadow-lg dark:hover:bg-white/[0.06]'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0066FF] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#0066FF]/30">
                        <Star className="w-3 h-3 fill-white" /> Populaire
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-5 pt-1">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0066FF]/20 to-purple-600/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#0066FF]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">{plan.name}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{plan.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-xs text-gray-400 dark:text-gray-500">A partir de</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{plan.price}€</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
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
                    className={`w-full py-3 rounded-xl font-semibold text-center text-sm transition-all ${
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

        {/* FAQ */}
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

        {/* CTA final */}
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
