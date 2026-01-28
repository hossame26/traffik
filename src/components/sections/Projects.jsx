import React, { useRef } from 'react';
import { motion as Motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Plombier Marseille",
    category: "Service Local • SEO",
    url: "https://plombier-urgent-marseille.fr",
    description: "Système de génération de leads ultra-rapide. Dominance locale instantanée.",
    gradient: "from-blue-500 to-cyan-400",
    year: "2025"
  },
  {
    title: "Shonen Sports",
    category: "E-commerce • Branding",
    url: "https://shonensports.com",
    description: "Fusion entre culture anime et performance sportive. Expérience d'achat immersive.",
    gradient: "from-red-600 to-orange-500",
    year: "2024"
  },
  {
    title: "NOCTA",
    category: "Mode • High End",
    url: "https://nocta.com",
    description: "Minimalisme radical. Une interface sombre qui laisse parler le produit.",
    gradient: "from-yellow-400 to-amber-600",
    year: "2024"
  },
  {
    title: "Nuvix",
    category: "SaaS • Tech",
    url: "https://nuvix.fr",
    description: "L'avenir du digital. Architecture complexe rendue simple et fluide.",
    gradient: "from-violet-600 to-indigo-500",
    year: "2025"
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <Motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] rounded-3xl overflow-hidden cursor-none sm:cursor-pointer"
    >
      {/* Fond Dégradé (Simulation Image) */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 transition-transform duration-700 group-hover:scale-110`} />
      
      {/* Overlay Sombre */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

      {/* Contenu */}
      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
        
        {/* En-tête Carte */}
        <div className="flex justify-between items-start">
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold tracking-widest text-white uppercase">
            {project.category}
          </span>
          <div className="bg-white text-black p-3 rounded-full opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>

        {/* Bas de Carte */}
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            {project.title}
          </h3>
          <p className="text-gray-200 text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md">
            {project.description}
          </p>
        </div>
      </div>

      {/* Effet Glare/Reflet */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transform duration-1000" />
    </Motion.a>
  );
};

export default function Projects() {
  return (
    <section id="projets" className="relative py-32 px-4 bg-gray-50 dark:bg-[#080808] overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        {/* Titre Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <Motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black tracking-tighter text-black dark:text-white mb-4"
            >
              SELECTED<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-purple-600">WORK.</span>
            </Motion.h2>
          </div>
          <Motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <p className="text-xl text-gray-500 dark:text-gray-400 font-medium max-w-sm ml-auto">
              Des expériences digitales conçues pour marquer les esprits et dominer le marché.
            </p>
          </Motion.div>
        </div>

        {/* Grille Projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Bouton "Voir plus" (Optionnel) */}
        <div className="mt-20 text-center">
          <a href="#contact" className="inline-flex items-center gap-3 text-sm font-bold tracking-[0.2em] uppercase text-black dark:text-white border-b border-black dark:border-white pb-1 hover:text-[#0066FF] hover:border-[#0066FF] dark:hover:text-[#0066FF] dark:hover:border-[#0066FF] transition-all">
            Démarrer un projet similaire <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
