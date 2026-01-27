import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-4 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
      {/* Orbs d'ambiance */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0066FF]/5 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0066FF]/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-2xl mx-auto">
        
        <div className="text-center mb-16">
          <Motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-black dark:text-white mb-6"
          >
            Parlons Projet.
          </Motion.h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Vous avez une vision. Nous avons l'infrastructure pour la réaliser.
          </p>
        </div>

        <Motion.form 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 bg-gray-50 dark:bg-white/5 p-10 rounded-[2rem] border border-gray-200 dark:border-white/10"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Nom</label>
              <input type="text" className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-black dark:text-white focus:outline-none focus:border-[#0066FF] transition-colors" placeholder="Votre nom" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Email</label>
              <input type="email" className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-black dark:text-white focus:outline-none focus:border-[#0066FF] transition-colors" placeholder="votre@email.com" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Besoin</label>
            <select className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-black dark:text-white focus:outline-none focus:border-[#0066FF] transition-colors appearance-none">
              <option>Création de Site Web</option>
              <option>Publicité (Ads)</option>
              <option>SEO & Growth</option>
              <option>Autre</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Message</label>
            <textarea rows="4" className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-black dark:text-white focus:outline-none focus:border-[#0066FF] transition-colors" placeholder="Décrivez votre projet..." />
          </div>

          <button className="w-full bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest py-4 rounded-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
            Envoyer <ArrowRight className="w-4 h-4" />
          </button>
        </Motion.form>

      </div>
    </section>
  );
}
