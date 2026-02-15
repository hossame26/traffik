import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, TrendingUp, ArrowRight, Check } from 'lucide-react';

const services = [
  {
    id: 'audit',
    title: 'Audit de Site Web',
    icon: Search,
    description: "Identifiez les freins invisibles qui plombent votre site. Rapport complet en 24h.",
    features: ['Analyse SEO complete', 'Test de performance', 'Verification securite'],
    color: 'from-amber-500 to-orange-600',
    accentColor: '#f59e0b',
    href: '/audit-site-web',
    badge: 'NOUVEAU',
  },
  {
    id: 'seo',
    title: 'Referencement SEO',
    icon: TrendingUp,
    description: "Montez en premiere page Google et attirez un flux constant de clients qualifies.",
    features: ['SEO on-page & technique', 'Netlinking premium', 'SEO local & national'],
    color: 'from-blue-500 to-indigo-600',
    accentColor: '#3b82f6',
    href: '/referencement-seo',
  },
];

function DesktopCard({ service, index, isInView }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative flex flex-col p-8 lg:p-10 rounded-3xl border border-gray-100 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/[0.05] hover:border-gray-200 dark:hover:border-white/20 transition-all duration-300 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)] dark:shadow-none"
    >
      {service.badge && (
        <div className="absolute -top-3 right-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-[10px] font-bold tracking-wider px-4 py-1.5 rounded-full shadow-lg shadow-amber-500/30">
          {service.badge}
        </div>
      )}

      <motion.div
        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-6 flex items-center justify-center`}
        style={{ boxShadow: `0 10px 30px -10px ${service.accentColor}50` }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
      >
        <Icon className="w-10 h-10 text-white" />
      </motion.div>

      <h3 className="text-xl lg:text-2xl font-bold text-black dark:text-white mb-3">{service.title}</h3>
      <p className="text-base text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">{service.description}</p>

      <ul className="space-y-3 mb-8 flex-1">
        {service.features.map((feature, i) => (
          <motion.li
            key={feature}
            className="flex items-center gap-3 text-base text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.15 + i * 0.1 + 0.3 }}
          >
            <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
              <Check className="w-3 h-3 text-green-500" strokeWidth={3} />
            </div>
            {feature}
          </motion.li>
        ))}
      </ul>

      <Link to={service.href}>
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-4 rounded-full bg-gradient-to-r ${service.color} text-white text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300`}
          style={{ boxShadow: `0 10px 30px -10px ${service.accentColor}50` }}
        >
          Decouvrir
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      </Link>
    </motion.div>
  );
}

function MobileCard({ service, index }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      whileTap={{ scale: 0.94 }}
      className="flex flex-col p-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] shadow-sm dark:shadow-none active:border-amber-500/40 active:shadow-xl active:shadow-amber-500/10 transition-all duration-200"
    >
      {service.badge && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring", stiffness: 400 }}
          className="self-start bg-gradient-to-r from-amber-500 to-orange-600 text-white text-[9px] font-bold tracking-wider px-3 py-1 rounded-full mb-4 shadow-lg shadow-amber-500/25"
        >
          {service.badge}
        </motion.div>
      )}

      <motion.div
        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-5 flex items-center justify-center`}
        style={{ boxShadow: `0 8px 20px -6px ${service.accentColor}40` }}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>

      <h3 className="text-lg font-bold text-black dark:text-white mb-2">{service.title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">{service.description}</p>

      <ul className="space-y-2.5 mb-6 flex-1">
        {service.features.map((feature, i) => (
          <motion.li
            key={feature}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.12, duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
          >
            <motion.div
              className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.12, type: "spring", stiffness: 500 }}
            >
              <Check className="w-2.5 h-2.5 text-green-500" strokeWidth={3} />
            </motion.div>
            {feature}
          </motion.li>
        ))}
      </ul>

      <Link to={service.href}>
        <motion.button
          whileTap={{ scale: 0.9, opacity: 0.8 }}
          className={`w-full py-3.5 rounded-full bg-gradient-to-r ${service.color} text-white text-sm font-semibold flex items-center justify-center gap-2 active:brightness-110 transition-all duration-150`}
          style={{ boxShadow: `0 6px 20px -6px ${service.accentColor}50` }}
        >
          Decouvrir
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </Link>
    </motion.div>
  );
}

export default function Audit() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section
      id="marketing"
      ref={sectionRef}
      className="relative py-16 lg:py-24 px-4 bg-[#F8F9FA] dark:bg-black transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 dark:bg-white/5 text-primary dark:text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4"
          >
            Marketing & Performance
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4"
          >
            Boostez votre{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
              visibilite.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto"
          >
            Audit complet et referencement naturel pour des resultats concrets.
          </motion.p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <DesktopCard key={service.id} service={service} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Mobile Stack */}
        <div className="md:hidden space-y-4">
          {services.map((service, index) => (
            <MobileCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
