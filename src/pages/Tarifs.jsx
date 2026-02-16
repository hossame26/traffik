import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowLeft, ArrowRight, Star, MessageCircle, Globe, ShoppingCart, Code2, Megaphone, Search, FileSearch } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import FAQSection from '../components/common/FAQSection';

const sections = [
  {
    title: 'Création de Site Web',
    subtitle: 'Votre présence en ligne, clé en main.',
    plans: [
      {
        id: 'wordpress',
        name: 'Site WordPress',
        price: '500',
        unit: '',
        icon: Globe,
        description: 'Site vitrine professionnel',
        features: [
          "Jusqu'à 5 pages optimisées",
          'Design responsive mobile/tablette',
          'SEO de base (meta, sitemap, robots)',
          'Formulaire de contact intégré',
          'Hébergement guide inclus',
        ],
        popular: false,
        link: '/creation-site-wordpress',
      },
      {
        id: 'shopify',
        name: 'Boutique Shopify',
        price: '250',
        unit: '',
        icon: ShoppingCart,
        description: 'E-commerce prêt à vendre',
        features: [
          'Configuration complète de la boutique',
          "Jusqu'à 20 produits intégrés",
          'Paiement sécurisé (Stripe, PayPal)',
          'Livraison & suivi configurés',
          'Thème premium personnalisé',
        ],
        popular: false,
        link: '/creation-site-shopify',
      },
      {
        id: 'custom',
        name: 'Site Sur Mesure',
        price: '600',
        unit: '',
        icon: Code2,
        description: 'React / Next.js',
        features: [
          'Design unique sur mesure',
          'Animations fluides (Framer Motion)',
          'Performance optimale (score 90+)',
          'Intégration API sur mesure',
          'Code source livrée',
        ],
        popular: true,
        link: '/developpement-react-nextjs',
      },
    ],
  },
  {
    title: 'Marketing & Visibilité',
    subtitle: 'Attirez des clients, mesurez vos résultats.',
    plans: [
      {
        id: 'ads',
        name: 'Publicité Digitale',
        price: '300',
        unit: '/mois',
        icon: Megaphone,
        description: 'Facebook, Google & TikTok Ads',
        features: [
          'Campagnes Facebook & Instagram Ads',
          'Campagnes Google Ads (Search & Display)',
          'Reporting mensuel détaillé',
          'Optimisation continue des budgets',
          'A/B testing des créatives',
        ],
        popular: false,
        link: '/publicite-digitale',
      },
      {
        id: 'seo',
        name: 'SEO & Référencement',
        price: '90',
        unit: '/mois',
        icon: Search,
        description: 'Première page Google',
        features: [
          'Audit SEO technique complet',
          'Optimisation on-page & off-page',
          'Création de contenu optimisé',
          'Stratégie de backlinks',
          'Suivi de positionnement mensuel',
        ],
        popular: true,
        link: '/referencement-seo',
      },
    ],
  },
  {
    title: 'Audit de Site Web',
    subtitle: 'Identifiez ce qui freine votre croissance.',
    plans: [
      {
        id: 'audit-essentiel',
        name: 'Audit Essentiel',
        price: '100',
        unit: '',
        icon: FileSearch,
        description: 'Diagnostic rapide en 24h',
        features: [
          'Analyse SEO (50+ règles)',
          'Test performance mobile & desktop',
          'Vérification sécurité SSL & headers',
          'Rapport PDF détaillé',
          'Score global et priorités',
        ],
        popular: false,
        link: '/audit-site-web',
      },
      {
        id: 'audit-plan',
        name: "Audit + Plan d'Action",
        price: '200',
        unit: '',
        icon: FileSearch,
        description: 'Diagnostic + feuille de route',
        features: [
          "Tout de l'Audit Essentiel",
          'Analyse approfondie (230+ règles)',
          "Plan d'action priorisé",
          'Analyse concurrence SEO',
          'Appel de restitution 30 min',
        ],
        popular: true,
        link: '/audit-site-web',
      },
      {
        id: 'audit-implementation',
        name: 'Audit + Implémentation',
        price: '499',
        unit: '',
        icon: FileSearch,
        description: 'On corrige tout pour vous',
        features: [
          "Tout de l'Audit + Plan",
          'Implémentation des corrections',
          'Optimisation SEO on-page',
          'Amélioration performance',
          'Support 30 jours inclus',
        ],
        popular: false,
        link: '/audit-site-web',
      },
    ],
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
    question: "Pourquoi choisir un freelance plutôt qu'une agence ?",
    answer:
      "Un freelance offre un interlocuteur unique, des tarifs plus compétitifs (pas de frais de structure), une réactivité supérieure et un suivi personnalisé. Vous payez le travail, pas les locaux et la hiérarchie.",
  },
];

function PricingCard({ plan }) {
  const Icon = plan.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
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
        <div className="w-11 h-11 rounded-xl bg-[#0066FF]/10 dark:bg-[#0066FF]/20 flex items-center justify-center">
          <Icon className="w-5 h-5 text-[#0066FF]" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">{plan.name}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">{plan.description}</p>
        </div>
      </div>

      <div className="mb-6">
        <span className="text-xs text-gray-400 dark:text-gray-500">À partir de</span>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{plan.price}€</span>
          {plan.unit && <span className="text-gray-400 dark:text-gray-500 text-sm font-medium">{plan.unit}</span>}
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

      <div className="flex gap-2 mt-auto">
        <motion.a
          href={`https://wa.me/33635505374?text=${encodeURIComponent(
            `Bonjour, je suis intéressé par l'offre ${plan.name}. Pouvez-vous m'envoyer un devis ?`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-1 py-3 rounded-xl font-semibold text-center text-sm transition-all ${
            plan.popular
              ? 'bg-[#0066FF] text-white hover:bg-[#0055DD] shadow-lg shadow-[#0066FF]/25'
              : 'bg-gray-900 dark:bg-white/10 text-white hover:bg-gray-800 dark:hover:bg-white/[0.15] border border-transparent dark:border-white/[0.06]'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Demander un devis
        </motion.a>
        {plan.link && (
          <Link
            to={plan.link}
            className="py-3 px-4 rounded-xl bg-gray-100 dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.06] text-gray-400 hover:border-[#0066FF]/40 hover:text-[#0066FF] transition-colors flex items-center justify-center"
          >
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}

export default function Tarifs() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] transition-colors pt-28 pb-20">
      <SEOHead
        title="Tarifs Création Site Web | Prix Freelance Transparent | Traffik Web"
        description="Découvrez nos tarifs transparents pour la création de site web : site vitrine WordPress dès 500€, boutique Shopify dès 250€, site sur mesure React dès 600€. Devis gratuit en 24h."
        canonical="https://traffik-web.fr/tarifs"
        keywords="tarif création site web, prix site internet, freelance pas cher, devis site web, prix site vitrine, tarif boutique en ligne, cout site web freelance"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#0066FF] hover:underline mb-10 text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Retour a l'accueil
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Des tarifs <span className="text-[#0066FF]">transparents</span>
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Pas de surprise, pas de frais cachés. Choisissez la formule adaptée à votre projet.
          </p>
        </motion.div>

        {/* Sections by category */}
        {sections.map((section, sectionIndex) => (
          <motion.section
            key={section.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
            className="mb-20"
          >
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{section.title}</h2>
              <p className="text-gray-400 dark:text-gray-500 mt-1">{section.subtitle}</p>
            </div>

            <div
              className={`grid gap-5 ${
                section.plans.length === 2
                  ? 'md:grid-cols-2 max-w-3xl'
                  : 'md:grid-cols-3'
              }`}
            >
              {section.plans.map((plan) => (
                <PricingCard key={plan.id} plan={plan} />
              ))}
            </div>
          </motion.section>
        ))}

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
