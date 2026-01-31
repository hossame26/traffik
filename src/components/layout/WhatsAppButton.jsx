import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/33635505374"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
      aria-label="Contactez-nous sur WhatsApp"
      title="Contactez-nous sur WhatsApp"
    >
      <MessageCircle className="w-8 h-8 fill-current" />
      <span className="sr-only">Contactez-nous sur WhatsApp</span>
    </motion.a>
  );
}
