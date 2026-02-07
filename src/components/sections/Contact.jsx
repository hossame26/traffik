import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowRight, MessageCircle, Clock, Shield, Zap, Check, Send } from 'lucide-react';
import { Input, Textarea, Select, SelectItem, addToast } from "@heroui/react";

const projectTypes = [
  { key: "shopify", label: "Site E-commerce (Shopify)" },
  { key: "wordpress", label: "Site Vitrine (WordPress)" },
  { key: "react", label: "Site Sur Mesure (React)" },
  { key: "ads", label: "Campagnes Publicitaires" },
  { key: "seo", label: "SEO & Référencement" },
  { key: "other", label: "Autre projet" },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mzdvryzp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectType: projectTypes.find(t => t.key === formData.projectType)?.label || formData.projectType,
          message: formData.message
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
        }, 3000);
      } else {
        alert('Erreur lors de l\'envoi. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur de connexion. Veuillez réessayer.');
    }

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-16 lg:py-20 px-4 bg-[#F8F9FA] dark:bg-black transition-colors duration-500 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] dark:from-black via-transparent to-transparent opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left Column - Info */}
          <div className="text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-6"
            >
              Contact
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tightest text-black dark:text-white mb-6"
            >
              Prêt à lancer
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple">
                votre projet ?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-gray-500 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-10"
            >
              Premier échange gratuit et sans engagement pour évaluer vos besoins.
            </motion.p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {[
                { icon: Clock, text: "Réponse sous 24h garantie" },
                { icon: Shield, text: "Devis gratuit et personnalisé" },
                { icon: Zap, text: "Mise en ligne rapide" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <motion.div
                    className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </motion.div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              href="https://wa.me/33635505374"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-white px-8 py-4 rounded-full font-bold tracking-wide transition-all shadow-[0_8px_30px_-4px_rgba(37,211,102,0.5)] hover:shadow-[0_12px_40px_-4px_rgba(37,211,102,0.6)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              Discuter sur WhatsApp
            </motion.a>
          </div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <form
              onSubmit={handleSubmit}
              className="relative bg-white dark:bg-white/[0.02] p-8 md:p-10 rounded-3xl border border-gray-100 dark:border-white/5 overflow-hidden shadow-[0_8px_40px_-12px_rgba(0,0,0,0.15)] dark:shadow-none"
            >
              {/* Success Overlay */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 bg-white dark:bg-dark-800 z-20 flex flex-col items-center justify-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-6 shadow-xl shadow-green-500/30"
                    >
                      <Check className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                      Message envoyé !
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-center">
                      Nous vous recontactons sous 24h.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                Demander un devis
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                Remplissez ce formulaire, on vous recontacte rapidement.
              </p>

              <div className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                      Nom
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white dark:bg-dark-800 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-4 text-black dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="Votre nom"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white dark:bg-dark-800 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-4 text-black dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Phone Input */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    Téléphone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white dark:bg-dark-800 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-4 text-black dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="06 12 34 56 78"
                    required
                  />
                </div>

                {/* Project Type Select */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    Type de projet
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-white dark:bg-dark-800 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-4 text-black dark:text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Sélectionner un type</option>
                    {projectTypes.map((type) => (
                      <option key={type.key} value={type.key}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    Votre message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white dark:bg-dark-800 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-4 text-black dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="Décrivez brièvement votre projet et vos objectifs..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    relative w-full py-4 rounded-xl
                    bg-gradient-to-r from-primary to-primary-light
                    text-white font-bold uppercase tracking-widest
                    flex items-center justify-center gap-3
                    shadow-[0_10px_40px_-8px_rgba(0,102,255,0.5)]
                    disabled:opacity-70 disabled:cursor-not-allowed
                    shimmer-button overflow-hidden
                  "
                  whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(0,102,255,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <span className="relative z-10">Envoyer ma demande</span>
                      <Send className="w-4 h-4 relative z-10" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
