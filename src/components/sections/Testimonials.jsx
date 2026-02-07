import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Shield, Rocket, Users, Clock, Award } from 'lucide-react';

// Animated counter component
function AnimatedNumber({ value, suffix = "", isInView }) {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, '')) || 0;

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = numericValue / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  return <>{count}{suffix}</>;
}

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

const technologies = [
  { name: "Shopify", icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-.856-.854-1.193-1.193a.573.573 0 00-.269-.158l-.8 19.97zM11.968 8.469l-.757 2.242s-.835-.378-1.838-.378c-1.488 0-1.563.932-1.563 1.166 0 1.28 3.344 1.771 3.344 4.768 0 2.359-1.498 3.879-3.518 3.879-2.423 0-3.661-1.508-3.661-1.508l.648-2.135s1.27 1.09 2.342 1.09c.699 0 .984-.551.984-.954 0-1.664-2.744-1.738-2.744-4.487 0-2.308 1.658-4.541 5.006-4.541 1.29 0 1.757.369 1.757.369z"/></svg> },
  { name: "WordPress", icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM3.443 12c0-1.151.232-2.248.652-3.247l3.592 9.839A8.558 8.558 0 013.443 12zm8.557 8.558c-.876 0-1.722-.127-2.523-.358l2.68-7.789 2.745 7.521a.573.573 0 00.044.085 8.558 8.558 0 01-2.946.541zm1.202-12.578c.538-.028 1.023-.085 1.023-.085.481-.057.425-.765-.057-.737 0 0-1.447.114-2.38.114-.878 0-2.353-.114-2.353-.114-.482-.028-.538.708-.057.737 0 0 .457.057.938.085l1.394 3.823-1.96 5.876-3.259-9.699c.538-.028 1.023-.085 1.023-.085.481-.057.425-.765-.057-.737 0 0-1.447.114-2.38.114-.167 0-.365-.004-.572-.01A8.541 8.541 0 0112 3.443c2.191 0 4.191.825 5.702 2.18-.036-.002-.072-.007-.11-.007-1.049 0-1.793.913-1.793 1.894 0 .737.425 1.362.878 2.099.34.595.737 1.362.737 2.466 0 .765-.297 1.651-.68 2.886l-.893 2.983-3.239-9.642zm3.923 12.021l2.727-7.879c.51-1.277.68-2.296.68-3.205 0-.329-.021-.636-.062-.922A8.545 8.545 0 0120.558 12a8.528 8.528 0 01-3.433 6.001z"/></svg> },
  { name: "React", icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z"/></svg> },
  { name: "Next.js", icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 00-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 00-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 01-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 01-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 01.174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 004.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 002.466-2.163 11.944 11.944 0 002.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 00-2.499-.523A33.119 33.119 0 0011.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 01.237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 01.233-.296c.096-.05.13-.054.5-.054z"/></svg> },
  { name: "Vercel", icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M24 22.525H0l12-21.05 12 21.05z"/></svg> },
];

// Star rating with sequence animation
function StarRating({ rating, animate = false }) {
  return (
    <div className={`flex gap-1 ${animate ? 'star-sequence' : ''}`}>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={animate ? { opacity: 0, scale: 0 } : {}}
          animate={animate ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: i * 0.1, type: "spring", stiffness: 500, damping: 15 }}
          className="star"
        >
          <Star
            className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
          />
        </motion.div>
      ))}
    </div>
  );
}

// Testimonial Card
function TestimonialCard({ testimonial, index, isActive }) {
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      onViewportEnter={() => setIsInView(true)}
      className={`
        relative flex-shrink-0 w-[350px] md:w-[400px] p-8 rounded-3xl
        bg-white dark:bg-white/[0.02] border
        ${isActive ? 'border-primary/30 shadow-xl shadow-primary/5' : 'border-gray-100 dark:border-white/5'}
        transition-all duration-500
      `}
    >
      {/* Quote Icon */}
      <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />

      {/* Stars */}
      <div className="mb-6">
        <StarRating rating={testimonial.rating} animate={isInView} />
      </div>

      {/* Content */}
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-sm">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <motion.div
          className="relative"
          whileHover={{ scale: 1.1 }}
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            width={56}
            height={56}
            className="w-14 h-14 rounded-full object-cover"
            loading="lazy"
          />
          {/* Gradient border */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-primary to-accent-purple opacity-0 hover:opacity-100 transition-opacity" style={{ padding: '2px', background: 'linear-gradient(135deg, #0066FF, #A855F7)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
        </motion.div>
        <div>
          <div className="font-bold text-black dark:text-white">{testimonial.name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
        </div>
      </div>
    </motion.div>
  );
}

// Simple floating tech icons
function TechIcons() {
  return (
    <div className="grid grid-cols-5 gap-4 md:gap-10 max-w-xl mx-auto">
      {technologies.map((tech, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex flex-col items-center gap-1.5 md:gap-2 text-gray-400 hover:text-primary transition-colors cursor-pointer"
          whileHover={{ y: -5, scale: 1.05 }}
        >
          <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-white/50 dark:bg-white/5 border border-gray-100 dark:border-white/10 [&_svg]:w-6 [&_svg]:h-6 md:[&_svg]:w-8 md:[&_svg]:h-8">
            {tech.icon}
          </div>
          <span className="text-[10px] md:text-xs font-medium">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="temoignages"
      ref={sectionRef}
      className="relative py-16 lg:py-20 px-4 bg-[#F8F9FA] dark:bg-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Stats - Design minimaliste */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="grid grid-cols-4 gap-2 md:gap-8 lg:gap-16 mb-12 md:mb-16 py-4 md:py-8"
        >
          {[
            { value: "50", suffix: "+", label: "Projets" },
            { value: "100", suffix: "%", label: "Clients" },
            { value: "24", suffix: "h", label: "Réponse" },
            { value: "30", suffix: "j", label: "Support" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple mb-0.5 md:mb-1">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>
              <div className="text-[10px] md:text-sm text-gray-500 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Header */}
        <div className="text-center mb-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-6"
          >
            Témoignages
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tightest text-black dark:text-white mb-6"
          >
            Des résultats concrets,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple">
              des clients satisfaits.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-xl mx-auto"
          >
            Entrepreneurs, artisans, startups - ils ont tous boosté leur activité avec nous.
          </motion.p>
        </div>

        {/* Horizontal Carousel */}
        <div className="relative mb-12">
          {/* Navigation Buttons */}
          <motion.button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white dark:bg-dark-700 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-lg"
            whileHover={{ scale: 1.1, x: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          <motion.button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white dark:bg-dark-700 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-lg"
            whileHover={{ scale: 1.1, x: 4 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-12 py-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} style={{ scrollSnapAlign: 'center' }}>
                <TestimonialCard
                  testimonial={testimonial}
                  index={index}
                  isActive={index === activeIndex}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tech Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="pt-8 border-t border-gray-200 dark:border-white/5"
        >
          <p className="text-center text-xs text-gray-400 uppercase tracking-[0.2em] mb-6 font-medium">
            Technologies utilisées
          </p>
          <TechIcons />
        </motion.div>

        {/* Guarantee Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-6 flex justify-center"
        >
          <div className="inline-flex items-center gap-5 px-8 py-5 rounded-2xl bg-gradient-to-r from-primary/5 to-accent-purple/5 border border-primary/10">
            <motion.div
              className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-lg shadow-primary/30"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Shield className="w-7 h-7 text-white" />
            </motion.div>
            <div className="text-left">
              <div className="font-bold text-lg text-black dark:text-white">Garantie Satisfaction 30 Jours</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Support inclus + modifications illimitées</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-6 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-dark text-white text-sm font-bold tracking-wider uppercase hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
          >
            Rejoindre nos clients satisfaits
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
