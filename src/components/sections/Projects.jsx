import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, X } from 'lucide-react';

const projects = [
  {
    title: "Plombier Marseille",
    category: "Service Local • SEO",
    url: "https://plombier-urgent-marseille.fr",
    description: "Système de génération de leads ultra-rapide. Dominance locale instantanée.",
    details: "Nous avons positionné ce client en #1 sur Google Maps en moins de 30 jours. Le site convertit 15% des visiteurs en appels téléphoniques grâce à une UX optimisée pour l'urgence.",
    year: "2025"
  },
  {
    title: "Shonen Sports",
    category: "E-commerce • Branding",
    url: "https://shonensports.com",
    description: "Fusion entre culture anime et performance sportive. Expérience d'achat immersive.",
    details: "Refonte complète de l'identité visuelle et migration vers Shopify Plus. Intégration de vidéos 3D et augmentation du panier moyen de 25%.",
    year: "2024"
  },
  {
    title: "NOCTA",
    category: "Mode • High End",
    url: "https://nocta.com",
    description: "Minimalisme radical. Une interface sombre qui laisse parler le produit.",
    details: "Développement d'une interface 'Dark Mode' native pour correspondre à l'image de marque de Drake. Animations fluides et chargement instantané.",
    year: "2024"
  },
  {
    title: "Nuvix",
    category: "SaaS • Tech",
    url: "https://nuvix.fr",
    description: "L'avenir du digital. Architecture complexe rendue simple et fluide.",
    details: "Plateforme SaaS B2B complexe simplifiée par une UI intuitive. Dashboard interactif et gestion de données en temps réel.",
    year: "2025"
  }
];

const ProjectCard = ({ project, index, onClick }) => {
  return (
    <Motion.div
      onClick={() => onClick(project)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer"
    >
      {/* Fond : Screenshot du site via Microlink API */}
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
        <img 
          src={`https://api.microlink.io?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false&embed=screenshot.url`} 
          alt={project.title}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
          loading="lazy"
        />
        {/* Overlay pour garder le texte lisible */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 mix-blend-multiply`} />
      </div>

      {/* Contenu */}
      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between pointer-events-none">
        
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
          <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#0066FF] opacity-0 group-hover:opacity-100 transition-opacity delay-200">
            Voir les détails <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Motion.div>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

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
            <ProjectCard key={index} project={project} index={index} onClick={setSelectedProject} />
          ))}
        </div>
      </div>

      {/* --- MODAL SYSTEM --- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop Flou */}
            <Motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xl"
            />

            {/* Fenêtre Modale */}
            <Motion.div 
              layoutId={`project-${selectedProject.title}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white dark:bg-[#111] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 max-h-[90vh] flex flex-col"
            >
              {/* Bouton Fermer */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Hero du Modal */}
              <div className="relative h-64 md:h-80 shrink-0">
                <img 
                   src={`https://api.microlink.io?url=${encodeURIComponent(selectedProject.url)}&screenshot=true&meta=false&embed=screenshot.url`} 
                   alt={selectedProject.title}
                   className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
                
                <div className="absolute bottom-6 left-6 md:left-10">
                   <span className="inline-block px-3 py-1 mb-3 rounded-full bg-[#0066FF] text-white text-[10px] font-bold tracking-widest uppercase shadow-lg">
                      {selectedProject.category}
                   </span>
                   <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">{selectedProject.title}</h3>
                </div>
              </div>

              {/* Contenu Scrollable */}
              <div className="p-6 md:p-10 overflow-y-auto">
                 <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                    <div className="flex-1">
                       <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Le Challenge</h4>
                       <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                         {selectedProject.details || selectedProject.description}
                       </p>
                       
                       <div className="grid grid-cols-2 gap-4 mt-8">
                          <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                             <div className="text-2xl font-bold text-black dark:text-white">2025</div>
                             <div className="text-xs text-gray-500 uppercase tracking-wider">Année</div>
                          </div>
                          <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                             <div className="text-2xl font-bold text-black dark:text-white">100%</div>
                             <div className="text-xs text-gray-500 uppercase tracking-wider">Satisfaction</div>
                          </div>
                       </div>
                    </div>

                    {/* Sidebar Action */}
                    <div className="w-full md:w-1/3 shrink-0 flex flex-col justify-end">
                       <a 
                         href={selectedProject.url} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="w-full py-4 rounded-xl bg-[#0066FF] hover:bg-[#0055D4] text-white font-bold tracking-widest uppercase text-center transition-all shadow-lg hover:shadow-[#0066FF]/25 flex items-center justify-center gap-3"
                       >
                         Visiter le site <ExternalLink className="w-4 h-4" />
                       </a>
                       <p className="text-center text-xs text-gray-400 mt-4">
                         Lien externe sécurisé
                       </p>
                    </div>
                 </div>
              </div>

            </Motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
