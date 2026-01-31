import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-4 bg-dark-900">
      <div className="max-w-4xl mx-auto text-center">

        {/* Header */}
        <Motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent text-sm font-medium uppercase tracking-wider mb-4 block"
        >
          Contact
        </Motion.span>

        <Motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          Prêt à lancer<br />
          <span className="text-accent">votre projet ?</span>
        </Motion.h2>

        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white/50 text-lg max-w-xl mx-auto mb-12"
        >
          Discutons de votre projet. Réponse garantie en moins de 24h.
        </Motion.p>

        {/* CTA Buttons */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://wa.me/33635505374"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-dark-950 font-semibold rounded-full hover:shadow-[0_0_40px_rgba(205,255,0,0.4)] transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Discuter sur WhatsApp
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Motion.div>

        {/* Info */}
        <Motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-white/5"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-white/30 text-xs uppercase tracking-wider mb-2">Réponse</div>
              <div className="text-white font-medium">Moins de 24h</div>
            </div>
            <div>
              <div className="text-white/30 text-xs uppercase tracking-wider mb-2">Disponibilité</div>
              <div className="text-accent font-medium">Ouvert aux projets</div>
            </div>
            <div>
              <div className="text-white/30 text-xs uppercase tracking-wider mb-2">Prix</div>
              <div className="text-white font-medium">À partir de 150€</div>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
