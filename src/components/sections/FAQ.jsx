import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Quels types de sites web proposez-vous ?",
    answer: "Nous créons trois types de sites : des boutiques Shopify pour le e-commerce avec paiements intégrés et gestion des stocks, des sites WordPress pour les entreprises qui ont besoin de flexibilité éditoriale et de SEO natif, et des sites sur mesure en React/Next.js pour une performance maximale et une expérience utilisateur unique."
  },
  {
    question: "Combien coûte la création d'un site web ?",
    answer: "Nos sites web démarrent à partir de 150€. Le prix final dépend des fonctionnalités souhaitées, du design et de la complexité de votre projet. Chaque site est unique : contactez-nous directement sur WhatsApp pour discuter de votre projet et obtenir un devis personnalisé gratuit."
  },
  {
    question: "Quel est le délai de livraison ?",
    answer: "En moyenne, un site Shopify ou WordPress est livré en 2 à 3 semaines. Un site sur mesure nécessite 4 à 6 semaines selon sa complexité. Nous proposons également des options express pour les projets urgents. Chaque étape est validée avec vous pour garantir votre satisfaction."
  },
  {
    question: "Proposez-vous un accompagnement après la mise en ligne ?",
    answer: "Oui, nous offrons une formation de prise en main incluse avec chaque projet. Nous proposons également des forfaits de maintenance mensuelle pour les mises à jour, la sécurité et le support technique. Votre succès sur le long terme est notre priorité."
  },
  {
    question: "Comment se déroule la collaboration ?",
    answer: "Tout commence par un appel découverte gratuit pour comprendre vos besoins. Ensuite, nous créons une maquette pour validation, puis nous développons votre site. Vous recevez des points d'avancement réguliers et pouvez demander des modifications à chaque étape avant la mise en ligne finale."
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer: "Absolument. Tous nos sites sont hébergés sur des serveurs sécurisés avec certificat SSL inclus. Nous appliquons les meilleures pratiques de sécurité : sauvegardes automatiques, protection anti-hack, et conformité RGPD pour protéger vos données et celles de vos clients."
  }
];

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-b border-gray-200 dark:border-white/10"
    >
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className="text-base font-semibold text-black dark:text-white pr-6 group-hover:text-[#0066FF] transition-colors">
          {faq.question}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#0066FF] text-white' : 'bg-gray-100 dark:bg-white/10 text-black dark:text-white'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
              {faq.answer}
            </p>
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative py-32 px-4 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-4xl mx-auto">

        {/* En-tête */}
        <div className="text-center mb-12">
          <Motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full bg-[#0066FF]/10 text-[#0066FF] text-[9px] font-bold tracking-[0.2em] uppercase mb-4"
          >
            FAQ
          </Motion.span>
          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black tracking-tight text-black dark:text-white mb-4"
          >
            Vos questions,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#4D94FF]">
              nos réponses.
            </span>
          </Motion.h2>
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-lg mx-auto"
          >
            Tarifs, délais, processus - tout ce qu'il faut savoir avant de se lancer.
          </Motion.p>
        </div>

        {/* Liste FAQ */}
        <div className="divide-y divide-gray-200 dark:divide-white/10 border-t border-gray-200 dark:border-white/10">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

        {/* CTA */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Vous avez d'autres questions ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-bold tracking-widest text-sm hover:scale-105 transition-transform"
          >
            CONTACTEZ-NOUS
          </a>
        </Motion.div>
      </div>
    </section>
  );
}
