import React from 'react';
import { motion as Motion } from 'framer-motion';
import { MessageSquare, Palette, Code2, Gauge, Rocket } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Échange',
    desc: "On discute de vos objectifs et on définit la stratégie.",
    icon: MessageSquare,
    color: '#0066FF'
  },
  {
    id: '02',
    title: 'Design',
    desc: "Maquettes sur-mesure validées avant développement.",
    icon: Palette,
    color: '#0066FF'
  },
  {
    id: '03',
    title: 'Création',
    desc: "Développement avec les dernières technologies.",
    icon: Code2,
    color: '#0066FF'
  },
  {
    id: '04',
    title: 'Tests',
    desc: "Performance, sécurité et compatibilité vérifiées.",
    icon: Gauge,
    color: '#0066FF'
  },
  {
    id: '05',
    title: 'Lancement',
    desc: "Mise en ligne et suivi des performances.",
    icon: Rocket,
    color: '#0066FF'
  }
];

export default function Process() {
  return (
    <section className="relative py-32 px-4 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0066FF]/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[#0066FF]/10 text-[#0066FF] text-[9px] font-bold tracking-[0.2em] uppercase mb-4">
            Processus
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-black dark:text-white mb-3">
            5 Étapes. 0 Surprise.
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-lg mx-auto">
            Une méthodologie éprouvée pour des projets livrés dans les temps.
          </p>
        </Motion.div>

        {/* Timeline Desktop */}
        <div className="hidden lg:block relative">
          {/* Ligne de connexion */}
          <div className="absolute top-8 left-0 right-0 h-[2px] bg-gray-200 dark:bg-white/10" />
          <Motion.div
            className="absolute top-8 left-0 h-[2px] bg-gradient-to-r from-[#0066FF] to-[#4D94FF]"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />

          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Point sur la ligne */}
                  <div className="relative mb-8">
                    <div className="w-16 h-16 rounded-full bg-white dark:bg-black border-2 border-gray-200 dark:border-white/20 flex items-center justify-center shadow-lg group-hover:border-[#0066FF] group-hover:shadow-[#0066FF]/20 transition-all duration-300">
                      <Icon className="w-6 h-6 text-gray-400 group-hover:text-[#0066FF] transition-colors" />
                    </div>
                    {/* Numéro */}
                    <span className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-[#0066FF] text-white text-[10px] font-bold flex items-center justify-center">
                      {step.id}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-black dark:text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </Motion.div>
              );
            })}
          </div>
        </div>

        {/* Timeline Mobile */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 items-start group"
              >
                {/* Icône et ligne */}
                <div className="relative flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center group-hover:border-[#0066FF] transition-colors">
                    <Icon className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-[2px] h-full min-h-[40px] bg-gradient-to-b from-[#0066FF]/50 to-transparent mt-2" />
                  )}
                </div>

                {/* Contenu */}
                <div className="flex-1 pb-6">
                  <span className="text-[10px] font-bold text-[#0066FF] tracking-widest uppercase">Étape {step.id}</span>
                  <h3 className="text-lg font-bold text-black dark:text-white">{step.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{step.desc}</p>
                </div>
              </Motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}