import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Marie Dupont",
    role: "Fondatrice, Boutique Mode",
    content: "Traffik Web a transformé notre présence en ligne. Notre site Shopify génère maintenant 3x plus de ventes qu'avant. L'équipe est réactive et professionnelle.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Thomas Bernard",
    role: "CEO, StartUp Tech",
    content: "Un site sur mesure livré en un temps record. La qualité du code et le design sont exceptionnels. Je recommande à 100% pour tout projet ambitieux.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sophie Martin",
    role: "Directrice Marketing, Agence",
    content: "Collaboration parfaite du début à la fin. Ils ont compris nos besoins immédiatement et le résultat dépasse nos attentes. Notre taux de conversion a doublé.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Lucas Petit",
    role: "Artisan Plombier",
    content: "Grâce à leur travail SEO, je suis maintenant premier sur Google dans ma ville. Les appels ont explosé ! Investissement largement rentabilisé.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  }
];

const clients = [
  { name: "Shopify Partner", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
  { name: "WordPress", logo: "https://cdn.worldvectorlogo.com/logos/wordpress-blue.svg" },
  { name: "Google Partner", logo: "https://cdn.worldvectorlogo.com/logos/google-g-2015.svg" },
  { name: "Meta Business", logo: "https://cdn.worldvectorlogo.com/logos/meta-1.svg" },
  { name: "Vercel", logo: "https://cdn.worldvectorlogo.com/logos/vercel.svg" },
];

const TestimonialCard = ({ testimonial, index }) => (
  <Motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="relative p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:shadow-xl transition-shadow duration-300"
  >
    <Quote className="absolute top-6 right-6 w-10 h-10 text-[#0066FF]/20" />

    <div className="flex gap-1 mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>

    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
      "{testimonial.content}"
    </p>

    <div className="flex items-center gap-4">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        width={48}
        height={48}
        className="w-12 h-12 rounded-full object-cover"
        loading="lazy"
      />
      <div>
        <div className="font-bold text-black dark:text-white">{testimonial.name}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
      </div>
    </div>
  </Motion.div>
);

export default function Testimonials() {
  return (
    <section id="temoignages" className="relative py-32 px-4 bg-gray-50 dark:bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Stats */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {[
            { value: "50+", label: "Projets Livrés" },
            { value: "100%", label: "Clients Satisfaits" },
            { value: "24h", label: "Temps de Réponse" },
            { value: "30j", label: "Garantie Support" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-[#0066FF] mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </Motion.div>

        {/* Header */}
        <div className="text-center mb-16">
          <Motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-[#0066FF]/10 text-[#0066FF] text-xs font-bold tracking-widest uppercase mb-6"
          >
            Témoignages
          </Motion.span>
          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-black dark:text-white mb-6"
          >
            Ils Nous Font Confiance
          </Motion.h2>
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto"
          >
            Découvrez les retours de nos clients et pourquoi ils nous recommandent.
          </Motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Client Logos */}
        <Motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-16 border-t border-gray-200 dark:border-white/10"
        >
          <p className="text-center text-sm text-gray-400 uppercase tracking-widest mb-10">
            Technologies & Partenaires
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 hover:opacity-100 transition-opacity">
            {clients.map((client, i) => (
              <img
                key={i}
                src={client.logo}
                alt={client.name}
                width={40}
                height={40}
                className="h-10 w-auto grayscale hover:grayscale-0 transition-all"
                loading="lazy"
              />
            ))}
          </div>
        </Motion.div>

        {/* Guarantee Badge */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#0066FF]/10 to-purple-500/10 border border-[#0066FF]/20">
            <div className="w-12 h-12 rounded-full bg-[#0066FF] flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="text-left">
              <div className="font-bold text-black dark:text-white">Garantie Satisfaction 30 Jours</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Support inclus + modifications illimitées</div>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
