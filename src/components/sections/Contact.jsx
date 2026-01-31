import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Clock, Shield, Zap } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-4 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 dark:from-white/[0.02] to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066FF]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Column - Info */}
          <div>
            <Motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-[#0066FF]/10 text-[#0066FF] text-[10px] font-bold tracking-[0.2em] uppercase mb-6"
            >
              Contact
            </Motion.span>

            <Motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black tracking-tighter text-black dark:text-white mb-6"
            >
              Prêt à lancer
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#4D94FF]">
                votre projet ?
              </span>
            </Motion.h2>

            <Motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10"
            >
              Discutons de votre vision. Premier échange gratuit et sans engagement pour évaluer vos besoins.
            </Motion.p>

            {/* Benefits */}
            <div className="space-y-4 mb-10">
              {[
                { icon: Clock, text: "Réponse sous 24h garantie" },
                { icon: Shield, text: "Devis gratuit et personnalisé" },
                { icon: Zap, text: "Mise en ligne rapide" }
              ].map((item, i) => (
                <Motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0066FF]/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{item.text}</span>
                </Motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <Motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              href="https://wa.me/33635505374"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-white px-8 py-4 rounded-full font-bold tracking-wide transition-all hover:scale-[1.02] shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Discuter sur WhatsApp
            </Motion.a>
          </div>

          {/* Right Column - Form */}
          <Motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5 bg-gray-50 dark:bg-white/5 p-8 md:p-10 rounded-3xl border border-gray-200 dark:border-white/10"
          >
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">Demander un devis</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Remplissez ce formulaire, on vous recontacte rapidement.</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Nom</label>
                <input type="text" className="w-full bg-white dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-black dark:text-white focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all" placeholder="Votre nom" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Email</label>
                <input type="email" className="w-full bg-white dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-black dark:text-white focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all" placeholder="votre@email.com" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Type de projet</label>
              <select className="w-full bg-white dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-black dark:text-white focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all appearance-none cursor-pointer">
                <option>Site E-commerce (Shopify)</option>
                <option>Site Vitrine (WordPress)</option>
                <option>Site Sur Mesure (React)</option>
                <option>Campagnes Publicitaires</option>
                <option>SEO & Référencement</option>
                <option>Autre projet</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Votre message</label>
              <textarea rows="4" className="w-full bg-white dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-black dark:text-white focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all resize-none" placeholder="Décrivez brièvement votre projet et vos objectifs..." />
            </div>

            <button type="submit" className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold uppercase tracking-widest py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-[#0066FF]/30">
              Envoyer ma demande <ArrowRight className="w-4 h-4" />
            </button>
          </Motion.form>

        </div>
      </div>
    </section>
  );
}
