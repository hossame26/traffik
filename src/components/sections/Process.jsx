import { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { MessageSquare, Palette, Code2, Gauge, Rocket } from 'lucide-react';
const steps = [
  {
    id: '01',
    title: 'Échange',
    desc: "On discute de vos objectifs et on définit la stratégie.",
    icon: MessageSquare,
  },
  {
    id: '02',
    title: 'Design',
    desc: "Maquettes sur-mesure validées avant développement.",
    icon: Palette,
  },
  {
    id: '03',
    title: 'Création',
    desc: "Développement avec les dernières technologies.",
    icon: Code2,
  },
  {
    id: '04',
    title: 'Tests',
    desc: "Performance, sécurité et compatibilité vérifiées.",
    icon: Gauge,
  },
  {
    id: '05',
    title: 'Lancement',
    desc: "Mise en ligne et suivi des performances.",
    icon: Rocket,
  }
];

function TimelineStep({ step, index, isInView }) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex flex-col items-center text-center group"
    >
      {/* Icon Circle */}
      <motion.div
        className="relative mb-8"
        whileHover={{ scale: 1.1 }}
      >
        {/* Gradient border on hover */}
        <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-primary to-accent-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-full h-full rounded-full bg-[#F8F9FA] dark:bg-black" />
        </div>

        <motion.div
          className="relative w-20 h-20 rounded-full bg-white dark:bg-neutral-900 border-2 border-gray-200 dark:border-white/10 flex items-center justify-center shadow-lg group-hover:border-transparent group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-500"
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{
            delay: index * 0.15 + 0.2,
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
        >
          <Icon className="w-8 h-8 text-gray-400 group-hover:text-primary transition-colors duration-500" />
        </motion.div>

        {/* Number Badge with gradient border */}
        <motion.span
          className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.15 + 0.4, type: "spring", stiffness: 500 }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent-purple" />
          <span className="relative text-white">{step.id}</span>
        </motion.span>
      </motion.div>

      <h3 className="text-lg font-bold text-black dark:text-white mb-2 group-hover:text-primary transition-colors">
        {step.title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-[180px]">
        {step.desc}
      </p>
    </motion.div>
  );
}

// Carte pour le slider mobile
function MobileStepCard({ step, index }) {
  const Icon = step.icon;

  return (
    <div
      className="flex flex-col items-center text-center p-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] w-[160px] h-[200px] transition-all duration-200"
    >
      <div
        className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent-purple flex items-center justify-center mb-3 shadow-lg shadow-primary/20"
      >
        <Icon className="w-5 h-5 text-white" />
      </div>
      <span
        className="text-[9px] font-bold text-primary tracking-widest uppercase mb-1"
      >
        Étape {step.id}
      </span>
      <h3 className="text-sm font-bold text-black dark:text-white mb-1">
        {step.title}
      </h3>
      <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
        {step.desc}
      </p>
    </div>
  );
}

export default function Process() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const sliderRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const handleScroll = (e) => {
    const { scrollLeft, scrollWidth, clientWidth } = e.target;
    const progress = scrollLeft / (scrollWidth - clientWidth);
    setScrollProgress(progress);
  };

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-16 lg:py-20 px-4 bg-[#F8F9FA] dark:bg-black transition-colors duration-500 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            Processus
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tightest text-black dark:text-white mb-4">
            5 Étapes. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple">0 Surprise.</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-xl mx-auto">
            Une méthodologie éprouvée pour des projets livrés dans les temps.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div ref={timelineRef} className="hidden lg:block relative">
          {/* Background Line */}
          <div className="absolute top-10 left-0 right-0 h-[2px] bg-gray-200 dark:bg-white/5" />

          {/* Animated Fill Line (SVG Follow Scroll effect) */}
          <motion.div
            className="absolute top-10 left-0 h-[2px] bg-gradient-to-r from-primary via-accent-purple to-primary"
            style={{ width: lineWidth }}
          />

          <div className="grid grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <TimelineStep
                key={step.id}
                step={step}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>

        {/* Mobile Slider */}
        <div className="lg:hidden">
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {steps.map((step, index) => (
              <div key={step.id} className="snap-center shrink-0">
                <MobileStepCard step={step} index={index} />
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-4 mx-auto max-w-[200px]">
            <div className="h-1 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent-purple rounded-full"
                style={{ width: `${Math.max(20, scrollProgress * 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent-purple text-white text-sm font-bold tracking-wider uppercase hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
          >
            Démarrer mon projet
            <Rocket className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
