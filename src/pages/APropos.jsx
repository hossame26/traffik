import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Code,
  Palette,
  TrendingUp,
  Users,
  Award,
  Clock,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const skills = [
  {
    name: 'React / Next.js',
    description: 'Applications web modernes, rapides et interactives avec les dernières technologies JavaScript.',
    icon: Code,
    color: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'Shopify',
    description: 'Boutiques e-commerce optimisées pour la conversion, du thème sur mesure au tunnel de vente.',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-600',
  },
  {
    name: 'WordPress',
    description: 'Sites vitrines professionnels, blogs performants et solutions CMS flexibles et évolutives.',
    icon: Palette,
    color: 'from-indigo-500 to-purple-600',
  },
  {
    name: 'SEO Technique',
    description: 'Optimisation on-page, performance Core Web Vitals, stratégie de contenu et link building.',
    icon: TrendingUp,
    color: 'from-orange-500 to-red-600',
  },
  {
    name: 'Publicité (Ads)',
    description: 'Campagnes Meta Ads, Google Ads, TikTok Ads avec tracking avancé et optimisation ROAS.',
    icon: Users,
    color: 'from-pink-500 to-rose-600',
  },
  {
    name: 'UI / UX Design',
    description: 'Interfaces intuitives centrées utilisateur, wireframes, maquettes et prototypes interactifs.',
    icon: Palette,
    color: 'from-violet-500 to-fuchsia-600',
  },
];

const stats = [
  { value: '50+', label: 'Projets réalisés', icon: Award },
  { value: '350%', label: 'ROI moyen', icon: TrendingUp },
  { value: '24h', label: 'Temps de réponse', icon: Clock },
  { value: '98%', label: 'Satisfaction client', icon: Users },
];

const values = [
  {
    title: 'Transparence',
    description:
      'Pas de jargon inutile, pas de frais cachés. Vous savez exactement ce que vous payez, pourquoi, et où en est votre projet à chaque étape. Je communique clairement et régulièrement.',
  },
  {
    title: 'Performance',
    description:
      'Chaque ligne de code, chaque pixel, chaque campagne est pensée pour la performance. Un site beau qui ne convertit pas, ça ne sert à rien. Mon objectif : des résultats mesurables et concrets.',
  },
  {
    title: 'Accompagnement',
    description:
      'Je ne suis pas un prestataire qui disparaît après la livraison. Je vous accompagne dans la durée : formation, maintenance, évolution. Votre réussite est ma meilleure carte de visite.',
  },
  {
    title: 'Innovation',
    description:
      'Le web évolue vite. Je me forme en permanence aux dernières technologies et tendances pour vous proposer des solutions modernes, performantes et en avance sur vos concurrents.',
  },
];

const timeline = [
  {
    year: '2019',
    title: 'Les premiers pas',
    description:
      'Passion pour le code et le web design. Premiers projets personnels, apprentissage autodidacte intensif de HTML, CSS et JavaScript. Des nuits entières à coder, à expérimenter, à apprendre.',
  },
  {
    year: '2020',
    title: 'Freelance & premiers clients',
    description:
      'Lancement officiel en freelance. Premiers clients, premiers sites livrés. Découverte du marketing digital et de l\'importance de la conversion. Chaque projet m\'apprend énormément.',
  },
  {
    year: '2021',
    title: 'Spécialisation e-commerce',
    description:
      'Focus sur Shopify et le e-commerce. Maîtrise des tunnels de vente, du copywriting et des stratégies de publicité en ligne. Les résultats clients explosent.',
  },
  {
    year: '2022',
    title: 'React & technologies modernes',
    description:
      'Montée en compétences sur React, Next.js et les architectures modernes. Les sites deviennent plus rapides, plus interactifs, et les taux de conversion suivent.',
  },
  {
    year: '2023',
    title: 'Marketing digital avancé',
    description:
      'Intégration complète du marketing digital : SEO avancé, Meta Ads, Google Ads, analytics. Approche full-stack : du design à la campagne publicitaire.',
  },
  {
    year: '2024',
    title: 'Traffik Web',
    description:
      'Création de Traffik Web. Une offre complète et transparente pour les entrepreneurs et PME. L\'objectif : démocratiser l\'accès à un web de qualité professionnelle.',
  },
];

export default function APropos() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white">
      <SEOHead
        title="À Propos | Freelance Web & Marketing Digital | Traffik Web"
        description="Découvrez le parcours et les compétences du freelance derrière Traffik Web. Développeur web passionné, spécialisé en React, Shopify, WordPress, SEO et publicité digitale. Plus de 50 projets livrés avec un ROI moyen de 350%."
        canonical="https://traffik-web.fr/a-propos"
        keywords="freelance web, developpeur freelance france, agence web, a propos traffik web, creation site internet freelance, developpeur react freelance, marketing digital freelance, seo freelance, shopify expert france"
      />

      <div className="max-w-4xl mx-auto py-20 px-4">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#0066FF] hover:underline mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
        </Link>

        {/* ========== HERO / H1 ========== */}
        <motion.section className="mb-20" {...fadeInUp}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Freelance Web &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-purple-600">
              Marketing Digital
            </span>
          </h1>
          <div className="w-20 h-1 bg-[#0066FF] rounded-full mb-8" />
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
            Je suis un développeur web passionné, autodidacte et spécialisé dans la création de sites
            internet qui <strong>convertissent</strong>, pas seulement des sites qui font joli. Mon
            approche allie technique, design et stratégie marketing pour transformer votre présence en
            ligne en véritable levier de croissance.
          </p>
        </motion.section>

        {/* ========== STORY ========== */}
        <motion.section className="mb-20" {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }}>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Mon histoire</h2>
          <div className="space-y-5 text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
            <p>
              Tout a commencé par une curiosité insatiable pour le web. À une époque où la plupart des
              gens se contentaient de consommer du contenu en ligne, moi je voulais comprendre comment
              tout cela fonctionnait. Comment un site web pouvait influencer une décision d'achat.
              Comment quelques lignes de code pouvaient transformer un visiteur en client. Cette
              fascination ne m'a jamais quitté.
            </p>
            <p>
              Je me suis formé en autodidacte, nuit après nuit, projet après projet. Pas d'école
              classique, pas de diplôme accroché au mur -- juste une détermination féroce et des
              centaines de projets pour affiner mon savoir-faire. J'ai appris en faisant, en échouant,
              en recommençant. Chaque erreur m'a rendu meilleur. Chaque client m'a appris quelque chose
              de nouveau.
            </p>
            <p>
              Aujourd'hui, après plusieurs années d'expérience et plus de 50 projets livrés, j'ai créé
              <strong> Traffik Web</strong> avec une mission claire : offrir aux entrepreneurs, aux PME
              et aux créateurs un accès à des services web de qualité professionnelle, sans les tarifs
              prohibitifs des grandes agences. Je crois que chaque entreprise mérite un site web
              performant et une stratégie digitale efficace, quel que soit son budget.
            </p>
            <p>
              Ce qui me différencie ? Je ne me contente pas de livrer un site web. Je prends le temps de
              comprendre votre activité, vos objectifs, votre marché. Je construis ensuite une solution
              sur mesure qui allie un design soigné, une performance technique irréprochable et une
              stratégie marketing orientée résultats. Du premier pixel à la dernière campagne
              publicitaire, je suis à vos côtés.
            </p>
            <p>
              Mon objectif n'est pas d'avoir le plus grand nombre de clients possible. C'est d'avoir
              des clients satisfaits, des projets dont je suis fier, et des résultats qui parlent
              d'eux-mêmes. La qualité plutôt que la quantité. La relation humaine plutôt que le simple
              échange commercial. C'est ça, l'esprit Traffik Web.
            </p>
          </div>
        </motion.section>

        {/* ========== SKILLS ========== */}
        <motion.section className="mb-20" {...fadeInUp} transition={{ duration: 0.6, delay: 0.15 }}>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Compétences</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Un éventail de compétences pour couvrir l'intégralité de vos besoins digitaux.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  {...stagger}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group p-6 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-[#0066FF]/40 dark:hover:border-[#0066FF]/40 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{skill.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ========== STATS ========== */}
        <motion.section className="mb-20" {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  {...stagger}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-[#0066FF] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ========== VALUES ========== */}
        <motion.section className="mb-20" {...fadeInUp} transition={{ duration: 0.6, delay: 0.25 }}>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Mes valeurs</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Les principes qui guident chaque projet et chaque décision.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                {...stagger}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-[#0066FF]/30 dark:hover:border-[#0066FF]/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[#0066FF]" />
                  <h3 className="font-bold text-lg">{value.title}</h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ========== TIMELINE / PARCOURS ========== */}
        <motion.section className="mb-20" {...fadeInUp} transition={{ duration: 0.6, delay: 0.3 }}>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Mon parcours</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-10">
            Chaque année a forgé une expertise supplémentaire.
          </p>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gray-200 dark:bg-white/10" />

            <div className="space-y-10">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  {...stagger}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-14"
                >
                  {/* Dot */}
                  <div className="absolute left-[12px] top-1 w-[15px] h-[15px] rounded-full bg-[#0066FF] border-4 border-white dark:border-[#050505]" />

                  <div className="text-sm font-bold text-[#0066FF] mb-1">{item.year}</div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ========== CTA ========== */}
        <motion.section
          className="mb-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#0066FF]/5 to-purple-600/5 border border-[#0066FF]/20 text-center"
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Un projet en tête ?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            Discutons de votre projet. Je vous réponds en moins de 24 heures avec une première
            estimation gratuite et sans engagement.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://wa.me/33635505374"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/30 transition-shadow"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Discuter sur WhatsApp
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <Link
              to="/tarifs"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-gray-200 dark:border-white/10 font-bold hover:border-[#0066FF]/40 dark:hover:border-[#0066FF]/40 transition-all"
            >
              Voir les tarifs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.section>

        {/* ========== INTERNAL LINKS ========== */}
        <motion.section {...fadeInUp} transition={{ duration: 0.6, delay: 0.4 }}>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link
              to="/tarifs"
              className="text-[#0066FF] hover:underline inline-flex items-center gap-1"
            >
              Tarifs & prestations <ArrowRight className="w-3 h-3" />
            </Link>
            <Link
              to="/portfolio"
              className="text-[#0066FF] hover:underline inline-flex items-center gap-1"
            >
              Portfolio & réalisations <ArrowRight className="w-3 h-3" />
            </Link>
            <Link
              to="/blog"
              className="text-[#0066FF] hover:underline inline-flex items-center gap-1"
            >
              Blog & ressources <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
