import React from 'react';
import { motion as Motion } from 'framer-motion';
import { MessageSquare, Layout, Code2, Sliders, Rocket } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Discussion & Analyse',
    desc: "Échange approfondi sur vos objectifs et analyse de votre marché.",
    icon: <MessageSquare className="w-5 h-5" />
  },
  {
    id: '02',
    title: 'Maquette & Design',
    desc: "Création de l'identité visuelle et des maquettes UI/UX.",
    icon: <Layout className="w-5 h-5" />
  },
  {
    id: '03',
    title: 'Développement',
    desc: "Programmation sur-mesure de votre solution performante.",
    icon: <Code2 className="w-5 h-5" />
  },
  {
    id: '04',
    title: 'Test & Optimisation',
    desc: "Vérifications techniques et optimisation de la vitesse.",
    icon: <Sliders className="w-5 h-5" />
  },
  {
    id: '05',
    title: 'Mise en ligne & Suivi',
    desc: "Lancement officiel et accompagnement pour la croissance.",
    icon: <Rocket className="w-5 h-5" />
  }
];

export default function Process() {
  return (
    <section className="relative py-32 px-4 bg-white dark:bg-black transition-colors duration-500">
      <div className="relative max-w-7xl mx-auto">
        
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black dark:text-white mb-4">
            Le Déroulement.
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Une méthodologie claire, sans surprises.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12 relative">
          
          {steps.map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center group w-full sm:w-[calc(33%-3rem)] lg:w-[calc(20%-3rem)] min-w-[200px]">
              
              {/* Point clé */}
              <div className="w-16 h-16 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-white/20 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:border-black dark:group-hover:border-white transition-all duration-300">
                <div className="text-black dark:text-white opacity-50 group-hover:opacity-100 transition-opacity">
                  {step.icon}
                </div>
              </div>

              {/* Texte */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">Étape {step.id}</span>
                <h3 className="text-lg font-bold text-black dark:text-white">{step.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}