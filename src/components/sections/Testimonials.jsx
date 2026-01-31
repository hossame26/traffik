import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Marie D.",
    role: "E-commerce Mode",
    content: "Notre site Shopify génère maintenant 3x plus de ventes. L'équipe est réactive et le résultat dépasse nos attentes.",
    rating: 5,
  },
  {
    name: "Thomas B.",
    role: "Startup Tech",
    content: "Site sur mesure livré en un temps record. Qualité du code et design exceptionnels. Je recommande à 100%.",
    rating: 5,
  },
  {
    name: "Sophie M.",
    role: "Agence Marketing",
    content: "Collaboration parfaite. Ils ont compris nos besoins immédiatement. Notre taux de conversion a doublé.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="temoignages" className="relative py-32 px-4 bg-dark-900">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <Motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-sm font-medium uppercase tracking-wider mb-4 block"
          >
            Témoignages
          </Motion.span>
          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Ce qu'ils disent<br />
            <span className="text-white/30">de nous</span>
          </Motion.h2>
        </div>

        {/* Stats */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 py-12 border-y border-white/5"
        >
          {[
            { value: "50+", label: "Projets livrés" },
            { value: "100%", label: "Satisfaction" },
            { value: "24h", label: "Réponse max" },
            { value: "30j", label: "Garantie" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </Motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-3xl bg-dark-800 border border-white/5"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/20" />

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-white/70 leading-relaxed mb-8">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-white">{testimonial.name}</div>
                  <div className="text-xs text-white/40">{testimonial.role}</div>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>

        {/* Trust badge */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl border border-accent/20 bg-accent/5">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <svg className="w-5 h-5 text-dark-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <div className="font-medium text-white">Garantie 30 jours</div>
              <div className="text-xs text-white/50">Support inclus + modifications illimitées</div>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
