import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Accordion, AccordionItem } from "@heroui/react";
const faqs = [
  {
    question: "Quels types de sites web proposez-vous ?",
    answer: "Nous créons trois types de sites : des boutiques Shopify pour le e-commerce avec paiements intégrés et gestion des stocks, des sites WordPress pour les entreprises qui ont besoin de flexibilité éditoriale et de SEO natif, et des sites sur mesure en React/Next.js pour une performance maximale et une expérience utilisateur unique."
  },
  {
    question: "Combien coûte la création d'un site web ?",
    answer: "Nos sites web démarrent à partir de 250€. Le prix final dépend des fonctionnalités souhaitées, du design et de la complexité de votre projet. Chaque site est unique : contactez-nous directement sur WhatsApp pour discuter de votre projet et obtenir un devis personnalisé gratuit."
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

function FAQItem({ faq, index, isOpen, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`
        relative border-b border-gray-100 dark:border-white/5
        ${isOpen ? 'bg-gradient-to-r from-primary/[0.03] to-transparent' : ''}
      `}
    >
      {/* Left gradient border when open */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent-purple rounded-full"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <motion.button
        onClick={onClick}
        whileTap={{ scale: 0.98, x: 4 }}
        className="w-full py-6 px-4 flex items-center justify-between text-left group active:bg-primary/[0.02] transition-colors duration-150"
      >
        <span className={`
          text-base font-semibold pr-8 transition-colors duration-300
          ${isOpen ? 'text-primary' : 'text-black dark:text-white group-hover:text-primary'}
        `}>
          {faq.question}
        </span>

        {/* Rotating Icon */}
        <motion.div
          className={`
            shrink-0 w-10 h-10 rounded-full flex items-center justify-center
            transition-all duration-300
            ${isOpen
              ? 'bg-gradient-to-r from-primary to-primary-light text-white'
              : 'bg-gray-100 dark:bg-white/5 text-gray-500 group-hover:bg-primary/10 group-hover:text-primary'
            }
          `}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <motion.p
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="pb-6 px-4 text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl"
            >
              {faq.answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative py-16 lg:py-20 px-4 bg-[#F8F9FA] dark:bg-black transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-6"
          >
            FAQ
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tightest text-black dark:text-white mb-6"
          >
            Vos questions,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple">
              nos réponses.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-xl mx-auto"
          >
            Tarifs, délais, processus - tout ce qu'il faut savoir avant de se lancer.
          </motion.p>
        </div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="rounded-3xl bg-[#FAFAFA] dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 overflow-hidden"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Vous avez d'autres questions ?
          </p>
          <motion.a
            href="#contact"
            className="
              inline-flex items-center gap-3
              bg-gradient-to-r from-primary to-primary-light
              text-white px-8 py-4 rounded-full
              font-bold tracking-widest text-sm
              shadow-xl shadow-primary/25
              shimmer-button overflow-hidden
            "
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,102,255,0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">CONTACTEZ-NOUS</span>
            <ArrowRight className="w-4 h-4 relative z-10" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
