import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowLeft, ArrowRight, Star, ChevronDown, MessageCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const plans = [
  {
    id: 'vitrine',
    name: 'Site Vitrine WordPress',
    price: '500',
    unit: '',
    description: 'Votre vitrine professionnelle en ligne',
    features: [
      'Jusqu\'a 5 pages optimisees',
      'Design responsive mobile/tablette',
      'SEO de base (meta, sitemap, robots)',
      'Formulaire de contact integre',
      'Hebergement guide inclus',
    ],
    popular: false,
    color: 'border-gray-200 dark:border-white/10',
  },
  {
    id: 'shopify',
    name: 'Boutique Shopify',
    price: '250',
    unit: '',
    description: 'Vendez en ligne des aujourd\'hui',
    features: [
      'Configuration complete de la boutique',
      'Jusqu\'a 20 produits integres',
      'Paiement securise (Stripe, PayPal)',
      'Livraison & suivi configures',
      'Theme premium personnalise',
    ],
    popular: true,
    color: 'border-[#0066FF]',
  },
  {
    id: 'custom',
    name: 'Site Sur Mesure React',
    price: '600',
    unit: '',
    description: 'Performance et design sans compromis',
    features: [
      'Design unique sur mesure',
      'Animations fluides (Framer Motion)',
      'Performance optimale (score 90+)',
      'Integration API sur mesure',
      'Code source livree',
    ],
    popular: false,
    color: 'border-gray-200 dark:border-white/10',
  },
  {
    id: 'ads',
    name: 'Publicite Digitale',
    price: '300',
    unit: '/mois',
    description: 'Generez du trafic qualifie',
    features: [
      'Campagnes Facebook & Instagram Ads',
      'Campagnes Google Ads (Search & Display)',
      'Reporting mensuel detaille',
      'Optimisation continue des budgets',
      'A/B testing des creatives',
    ],
    popular: false,
    color: 'border-gray-200 dark:border-white/10',
  },
  {
    id: 'seo',
    name: 'SEO & Referencement',
    price: '400',
    unit: '/mois',
    description: 'Dominez les resultats Google',
    features: [
      'Audit SEO technique complet',
      'Optimisation on-page & off-page',
      'Creation de contenu optimise',
      'Strategie de backlinks',
      'Suivi de positionnement mensuel',
    ],
    popular: false,
    color: 'border-gray-200 dark:border-white/10',
  },
];

const faqs = [
  {
    question: 'Les prix affichés sont-ils définitifs ?',
    answer:
      'Les tarifs indiqués sont des prix de départ. Chaque projet est unique, le prix final dépend de vos besoins spécifiques (nombre de pages, fonctionnalités, délai). Je vous envoie un devis détaillé et gratuit après notre premier échange.',
  },
  {
    question: 'Quels sont les délais de livraison ?',
    answer:
      'Un site vitrine WordPress est livré en 5 à 7 jours. Une boutique Shopify en 7 à 10 jours. Un site sur mesure React en 2 à 4 semaines selon la complexité. Les délais exacts sont précisés dans le devis.',
  },
  {
    question: 'Comment se passe le paiement ?',
    answer:
      'Un acompte de 30% est demandé à la validation du devis pour lancer le projet. Le solde est payable à la livraison, après votre validation finale. Paiement par virement ou PayPal.',
  },
  {
    question: 'Est-ce que la maintenance est incluse ?',
    answer:
      'Chaque projet inclut 30 jours de garantie (corrections de bugs, ajustements mineurs). Au-delà, un forfait maintenance est disponible à partir de 50€/mois pour les mises à jour, la sécurité et le support.',
  },
  {
    question: 'Pourquoi choisir un freelance plutôt qu\'une agence ?',
    answer:
      'Un freelance offre un interlocuteur unique, des tarifs plus compétitifs (pas de frais de structure), une réactivité supérieure et un suivi personnalisé. Vous payez le travail, pas les locaux et la hiérarchie.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Tarifs() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white">
      <SEOHead
        title="Tarifs Création Site Web | Prix Freelance Transparent | Traffik Web"
        description="Découvrez nos tarifs transparents pour la création de site web : site vitrine WordPress dès 500€, boutique Shopify dès 250€, site sur mesure React dès 600€. Devis gratuit en 24h."
        canonical="https://traffik-web.fr/tarifs"
        keywords="tarif création site web, prix site internet, freelance pas cher, devis site web, prix site vitrine, tarif boutique en ligne, cout site web freelance"
      />

      <div className="max-w-5xl mx-auto py-20 px-4">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#0066FF] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Des tarifs <span className="text-[#0066FF]">transparents</span>
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Pas de surprise, pas de frais cachés. Choisissez la formule adaptée à votre projet et recevez un devis détaillé en 24h.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
        >
          {plans.slice(0, 3).map((plan) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              className={`relative rounded-2xl border-2 ${
                plan.popular
                  ? 'border-[#0066FF] shadow-lg shadow-[#0066FF]/10'
                  : 'border-gray-200 dark:border-white/10'
              } p-6 flex flex-col bg-white dark:bg-white/[0.02] hover:shadow-xl transition-shadow duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#0066FF] text-white text-xs font-bold uppercase tracking-wider">
                    <Star className="w-3 h-3 fill-white" /> Populaire
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  A partir de
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-[#0066FF]">
                    {plan.price}€
                  </span>
                  {plan.unit && (
                    <span className="text-gray-400 text-sm">{plan.unit}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-[#0066FF] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.a
                href={`https://wa.me/33635505374?text=${encodeURIComponent(
                  `Bonjour, je suis intéressé par l'offre ${plan.name}. Pouvez-vous m'envoyer un devis ?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2 transition-all ${
                  plan.popular
                    ? 'bg-[#0066FF] text-white hover:bg-[#0055DD]'
                    : 'bg-gray-100 dark:bg-white/5 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Demander un devis <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Services mensuels */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-6 mb-20"
        >
          {plans.slice(3).map((plan) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              className="relative rounded-2xl border-2 border-gray-200 dark:border-white/10 p-6 flex flex-col bg-white dark:bg-white/[0.02] hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  A partir de
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-[#0066FF]">
                    {plan.price}€
                  </span>
                  <span className="text-gray-400 text-sm">{plan.unit}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-[#0066FF] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.a
                href={`https://wa.me/33635505374?text=${encodeURIComponent(
                  `Bonjour, je suis intéressé par l'offre ${plan.name}. Pouvez-vous m'envoyer un devis ?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2 bg-gray-100 dark:bg-white/5 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Demander un devis <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-2">
            Questions fréquentes
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-center mb-10">
            Tout ce que vous devez savoir sur nos tarifs
          </p>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors"
                >
                  <span>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-gray-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center rounded-3xl bg-gradient-to-br from-[#0066FF]/5 to-purple-500/5 border border-[#0066FF]/20 p-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
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
          <p className="text-xs text-gray-400 mt-4">
            * Devis gratuit et sans engagement
          </p>
        </motion.div>
      </div>
    </div>
  );
}
