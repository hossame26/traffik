import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Users, Search, Mail } from 'lucide-react';

const services = [
  {
    title: 'Génération de Leads',
    icon: <Users className="w-8 h-8" />,
    desc: "Nous identifions et capturons les coordonnées de vos prospects idéaux. Vous recevez des contacts chauds, prêts à acheter.",
    color: "bg-blue-500"
  },
  {
    title: 'SEO & Visibilité',
    icon: <Search className="w-8 h-8" />,
    desc: "Positionnez-vous en n°1 sur Google. Une stratégie de contenu qui attire du trafic qualifié gratuitement et durablement.",
    color: "bg-green-500"
  },
  {
    title: 'Prospection B2B',
    icon: <Mail className="w-8 h-8" />,
    desc: "Campagnes d'emailing et outreach automatisées pour contacter les décideurs directement dans leur boîte mail.",
    color: "bg-purple-500"
  }
];

export default function Growth() {
  return (
    <section id="growth" className="relative py-32 px-4 bg-white dark:bg-black transition-colors duration-500">
      <div className="relative max-w-7xl mx-auto">
        
        <div className="text-center mb-24">
          <Motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-black dark:text-white mb-6"
          >
            Accélération & Croissance.
          </Motion.h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Au-delà du site web, nous mettons en place les systèmes qui remplissent votre agenda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 rounded-[2rem] border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 hover:border-black dark:hover:border-white transition-all duration-300"
            >
              <div className="mb-8 w-16 h-16 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">{service.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                {service.desc}
              </p>

              <button className="text-xs font-bold uppercase tracking-widest text-black dark:text-white border-b border-black/20 dark:border-white/20 pb-1 group-hover:border-black dark:group-hover:border-white transition-colors">
                En savoir plus
              </button>
            </Motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
