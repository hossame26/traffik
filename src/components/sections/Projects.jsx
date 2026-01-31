import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, X } from 'lucide-react';

const projects = [
  {
    title: "Plombier Marseille",
    category: "Service Local",
    tags: ["SEO", "Conversion"],
    url: "https://plombier-urgent-marseille.fr",
    description: "Dominance locale instantanée. #1 Google Maps en 30 jours.",
    result: "+300% appels",
  },
  {
    title: "Shonen Sports",
    category: "E-commerce",
    tags: ["Shopify", "Branding"],
    url: "https://shonensports.com",
    description: "Culture anime × performance sportive. Expérience immersive.",
    result: "+25% panier",
  },
  {
    title: "NOCTA",
    category: "Mode",
    tags: ["Design", "Luxe"],
    url: "https://nocta.com",
    description: "Interface sombre minimaliste pour la marque de Drake.",
    result: "UX Premium",
  },
  {
    title: "Nuvix",
    category: "SaaS",
    tags: ["React", "Dashboard"],
    url: "https://nuvix.fr",
    description: "Plateforme B2B complexe simplifiée par un design intuitif.",
    result: "100% custom",
  }
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projets" className="relative py-32 px-4 bg-dark-950">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <Motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent text-sm font-medium uppercase tracking-wider mb-4 block"
            >
              Portfolio
            </Motion.span>
            <Motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-6xl font-bold text-white"
            >
              Projets<br />
              <span className="text-white/30">Sélectionnés</span>
            </Motion.h2>
          </div>
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/50 max-w-sm text-right"
          >
            Des expériences digitales conçues pour dominer leur marché.
          </Motion.p>
        </div>

        {/* Projects List */}
        <div className="space-y-2">
          {projects.map((project, index) => (
            <Motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group block relative py-8 px-6 -mx-6 rounded-2xl transition-all duration-300 hover:bg-white/5"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Left: Number + Title */}
                <div className="flex items-center gap-8">
                  <span className="text-white/20 text-sm font-mono w-8">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/40 text-sm mt-1">{project.description}</p>
                  </div>
                </div>

                {/* Right: Tags + Result */}
                <div className="flex items-center gap-6 md:gap-12 pl-16 md:pl-0">
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-white/50 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-accent font-medium text-sm whitespace-nowrap">
                    {project.result}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </div>

              {/* Divider */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5" />
            </Motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
