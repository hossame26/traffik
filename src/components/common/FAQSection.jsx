import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors"
      >
        <span className="font-semibold text-lg pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-[#0066FF]" />
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
            <p className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  // Inject JSON-LD FAQPage schema
  useEffect(() => {
    if (!faqs || faqs.length === 0) return;

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-faq-schema', 'true');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.head.querySelector('script[data-faq-schema]');
      if (el) el.remove();
    };
  }, [faqs]);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
