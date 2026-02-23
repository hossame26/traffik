import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronDown, MessageCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const faqs = [
  {
    category: 'Général',
    items: [
      {
        question: "Quels types de sites web proposez-vous ?",
        answer: "Nous créons trois types de sites : des boutiques Shopify pour le e-commerce, des sites WordPress pour les entreprises qui ont besoin de flexibilité, et des sites sur mesure en React/Next.js pour une performance maximale."
      },
      {
        question: "Combien coûte la création d'un site web ?",
        answer: "Nos sites démarrent à partir de 600€. Le prix dépend des fonctionnalités, du design et de la complexité. Contactez-nous sur WhatsApp pour un devis gratuit personnalisé."
      },
      {
        question: "Quel est le délai de livraison ?",
        answer: "Shopify/WordPress : 5 à 15 jours. Site React sur mesure : 1 à 6 semaines selon la complexité. Options express disponibles."
      },
    ]
  },
  {
    category: 'Technique',
    items: [
      {
        question: "Je peux modifier mon site moi-même après ?",
        answer: "Oui. WordPress et Shopify sont très intuitifs. On vous forme 30 min en visio après livraison. Pour React, on intègre un CMS headless (Sanity, Strapi ou Notion) pour modifier textes et images sans toucher au code."
      },
      {
        question: "Mon site sera-t-il bien référencé sur Google ?",
        answer: "Oui. SEO optimisé inclus sur tous nos sites : balises meta, données structurées, sitemap XML, vitesse optimisée. Pour React, on utilise Next.js (SSR/SSG) pour un référencement optimal."
      },
      {
        question: "Mes données sont-elles sécurisées ?",
        answer: "Tous nos sites incluent certificat SSL, sauvegardes automatiques, protection anti-hack et conformité RGPD."
      },
    ]
  },
  {
    category: 'Collaboration',
    items: [
      {
        question: "Comment se déroule la collaboration ?",
        answer: "Appel découverte gratuit → Maquette pour validation → Développement avec points d'avancement → Modifications si besoin → Mise en ligne et formation."
      },
      {
        question: "Proposez-vous un accompagnement après la mise en ligne ?",
        answer: "Oui. Formation de prise en main incluse. Forfaits maintenance optionnels à partir de 49€/mois pour mises à jour, sécurité et support technique."
      },
      {
        question: "Y a-t-il des frais mensuels ?",
        answer: "Shopify : abonnement à partir de 36€/mois (payé à Shopify). WordPress : hébergement ~10€/mois + domaine ~12€/an. React : hébergement gratuit sur Vercel. Maintenance optionnelle en sus."
      },
    ]
  },
  {
    category: 'Audit',
    items: [
      {
        question: "Que contient le rapport d'audit ?",
        answer: "Un document de 15 à 30 pages couvrant SEO (balises, mots-clés, maillage), Performance (Core Web Vitals, vitesse), Sécurité (SSL, headers, failles) et UX (navigation, responsive, accessibilité). Chaque point est noté avec des recommandations priorisées."
      },
      {
        question: "Quelle différence entre l'audit et un simple test PageSpeed ?",
        answer: "PageSpeed ne mesure que la vitesse. Notre audit couvre 230+ règles dans 4 domaines avec des recommandations actionnables. C'est la différence entre un thermomètre et un bilan médical complet."
      },
    ]
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState({ '0-0': true });

  const toggleItem = (key) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] transition-colors pt-28 pb-20">
      <SEOHead
        title="FAQ | Questions Fréquentes | Traffik Web"
        description="Retrouvez les réponses à toutes vos questions sur nos services de création de sites web, SEO, publicité digitale et audit. Traffik Web, freelance en France."
        canonical="https://traffik-web.fr/faq"
        keywords="faq traffik web, questions fréquentes création site, prix site web, délai site web"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-[#0066FF] hover:underline mb-10 text-sm">
          <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Questions{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#A855F7]">fréquentes</span>
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Tarifs, délais, processus — tout ce qu'il faut savoir.
          </p>
        </motion.div>

        {faqs.map((section, sIdx) => (
          <motion.div
            key={sIdx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: sIdx * 0.05 }}
            className="mb-8"
          >
            <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-[#0066FF] mb-3 px-1">
              {section.category}
            </h2>
            <div className="rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08] overflow-hidden">
              {section.items.map((faq, fIdx) => {
                const key = `${sIdx}-${fIdx}`;
                const isOpen = !!openItems[key];
                return (
                  <div key={fIdx} className={`border-b border-gray-100 dark:border-white/[0.05] last:border-0 ${isOpen ? 'bg-[#0066FF]/[0.02]' : ''}`}>
                    <button
                      onClick={() => toggleItem(key)}
                      className="w-full py-5 px-5 flex items-center justify-between text-left group"
                    >
                      <span className={`text-sm font-semibold pr-6 transition-colors ${isOpen ? 'text-[#0066FF]' : 'text-gray-900 dark:text-white group-hover:text-[#0066FF]'}`}>
                        {faq.question}
                      </span>
                      <motion.div
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-[#0066FF] text-white' : 'bg-gray-100 dark:bg-white/[0.06] text-gray-500 group-hover:bg-[#0066FF]/10 group-hover:text-[#0066FF]'}`}
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="pb-5 px-5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-8 rounded-3xl bg-gradient-to-br from-[#0066FF] to-purple-700"
        >
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
            Vous avez d'autres questions ?
          </h2>
          <p className="text-blue-100 mb-6">
            Réponse sous 2h, pas d'engagement.
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
