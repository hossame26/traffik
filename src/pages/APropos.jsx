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
    description: 'Applications web modernes, rapides et interactives avec les dernieres technologies JavaScript.',
    icon: Code,
    color: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'Shopify',
    description: 'Boutiques e-commerce optimisees pour la conversion, du theme sur mesure au tunnel de vente.',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-600',
  },
  {
    name: 'WordPress',
    description: 'Sites vitrines professionnels, blogs performants et solutions CMS flexibles et evolutives.',
    icon: Palette,
    color: 'from-indigo-500 to-purple-600',
  },
  {
    name: 'SEO Technique',
    description: 'Optimisation on-page, performance Core Web Vitals, strategie de contenu et link building.',
    icon: TrendingUp,
    color: 'from-orange-500 to-red-600',
  },
  {
    name: 'Publicite (Ads)',
    description: 'Campagnes Meta Ads, Google Ads, TikTok Ads avec tracking avance et optimisation ROAS.',
    icon: Users,
    color: 'from-pink-500 to-rose-600',
  },
  {
    name: 'UI / UX Design',
    description: 'Interfaces intuitives centrees utilisateur, wireframes, maquettes et prototypes interactifs.',
    icon: Palette,
    color: 'from-violet-500 to-fuchsia-600',
  },
];

const stats = [
  { value: '50+', label: 'Projets realises', icon: Award },
  { value: '350%', label: 'ROI moyen', icon: TrendingUp },
  { value: '24h', label: 'Temps de reponse', icon: Clock },
  { value: '98%', label: 'Satisfaction client', icon: Users },
];

const values = [
  {
    title: 'Transparence',
    description:
      'Pas de jargon inutile, pas de frais caches. Vous savez exactement ce que vous payez, pourquoi, et ou en est votre projet a chaque etape. Je communique clairement et regulierement.',
  },
  {
    title: 'Performance',
    description:
      'Chaque ligne de code, chaque pixel, chaque campagne est pensee pour la performance. Un site beau qui ne convertit pas, ca ne sert a rien. Mon objectif : des resultats mesurables et concrets.',
  },
  {
    title: 'Accompagnement',
    description:
      'Je ne suis pas un prestataire qui disparait apres la livraison. Je vous accompagne dans la duree : formation, maintenance, evolution. Votre reussite est ma meilleure carte de visite.',
  },
  {
    title: 'Innovation',
    description:
      'Le web evolue vite. Je me forme en permanence aux dernieres technologies et tendances pour vous proposer des solutions modernes, performantes et en avance sur vos concurrents.',
  },
];

const timeline = [
  {
    year: '2019',
    title: 'Les premiers pas',
    description:
      'Passion pour le code et le web design. Premiers projets personnels, apprentissage autodidacte intensif de HTML, CSS et JavaScript. Des nuits entieres a coder, a experimenter, a apprendre.',
  },
  {
    year: '2020',
    title: 'Freelance & premiers clients',
    description:
      'Lancement officiel en freelance. Premiers clients, premiers sites livres. Decouverte du marketing digital et de l\'importance de la conversion. Chaque projet m\'apprend enormement.',
  },
  {
    year: '2021',
    title: 'Specialisation e-commerce',
    description:
      'Focus sur Shopify et le e-commerce. Maitrise des tunnels de vente, du copywriting et des strategies de publicite en ligne. Les resultats clients explosent.',
  },
  {
    year: '2022',
    title: 'React & technologies modernes',
    description:
      'Montee en competences sur React, Next.js et les architectures modernes. Les sites deviennent plus rapides, plus interactifs, et les taux de conversion suivent.',
  },
  {
    year: '2023',
    title: 'Marketing digital avance',
    description:
      'Integration complete du marketing digital : SEO avance, Meta Ads, Google Ads, analytics. Approche full-stack : du design a la campagne publicitaire.',
  },
  {
    year: '2024',
    title: 'Traffik Web',
    description:
      'Creation de Traffik Web. Une offre complete et transparente pour les entrepreneurs et PME. L\'objectif : democratiser l\'acces a un web de qualite professionnelle.',
  },
];

export default function APropos() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white">
      <SEOHead
        title="A Propos | Freelance Web & Marketing Digital | Traffik Web"
        description="Decouvrez le parcours et les competences du freelance derriere Traffik Web. Developpeur web passionne, specialise en React, Shopify, WordPress, SEO et publicite digitale. Plus de 50 projets livres avec un ROI moyen de 350%."
        canonical="https://traffik-web.fr/a-propos"
        keywords="freelance web, developpeur freelance france, agence web, a propos traffik web, creation site internet freelance, developpeur react freelance, marketing digital freelance, seo freelance, shopify expert france"
      />

      <div className="max-w-4xl mx-auto py-20 px-4">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#0066FF] hover:underline mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Retour a l'accueil
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
            Je suis un developpeur web passionne, autodidacte et specialise dans la creation de sites
            internet qui <strong>convertissent</strong>, pas seulement des sites qui font joli. Mon
            approche allie technique, design et strategie marketing pour transformer votre presence en
            ligne en veritable levier de croissance.
          </p>
        </motion.section>

        {/* ========== STORY ========== */}
        <motion.section className="mb-20" {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }}>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Mon histoire</h2>
          <div className="space-y-5 text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
            <p>
              Tout a commence par une curiosite insatiable pour le web. A une epoque ou la plupart des
              gens se contentaient de consommer du contenu en ligne, moi je voulais comprendre comment
              tout cela fonctionnait. Comment un site web pouvait influencer une decision d'achat.
              Comment quelques lignes de code pouvaient transformer un visiteur en client. Cette
              fascination ne m'a jamais quitte.
            </p>
            <p>
              Je me suis forme en autodidacte, nuit apres nuit, projet apres projet. Pas d'ecole
              classique, pas de diplome accroche au mur -- juste une determination feroce et des
              centaines de projets pour affiner mon savoir-faire. J'ai appris en faisant, en echouant,
              en recommencant. Chaque erreur m'a rendu meilleur. Chaque client m'a appris quelque chose
              de nouveau.
            </p>
            <p>
              Aujourd'hui, apres plusieurs annees d'experience et plus de 50 projets livres, j'ai cree
              <strong> Traffik Web</strong> avec une mission claire : offrir aux entrepreneurs, aux PME
              et aux createurs un acces a des services web de qualite professionnelle, sans les tarifs
              prohibitifs des grandes agences. Je crois que chaque entreprise merite un site web
              performant et une strategie digitale efficace, quel que soit son budget.
            </p>
            <p>
              Ce qui me differencie ? Je ne me contente pas de livrer un site web. Je prends le temps de
              comprendre votre activite, vos objectifs, votre marche. Je construis ensuite une solution
              sur mesure qui allie un design soigne, une performance technique irreprochable et une
              strategie marketing orientee resultats. Du premier pixel a la derniere campagne
              publicitaire, je suis a vos cotes.
            </p>
            <p>
              Mon objectif n'est pas d'avoir le plus grand nombre de clients possible. C'est d'avoir
              des clients satisfaits, des projets dont je suis fier, et des resultats qui parlent
              d'eux-memes. La qualite plutot que la quantite. La relation humaine plutot que le simple
              echange commercial. C'est ca, l'esprit Traffik Web.
            </p>
          </div>
        </motion.section>

        {/* ========== SKILLS ========== */}
        <motion.section className="mb-20" {...fadeInUp} transition={{ duration: 0.6, delay: 0.15 }}>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Competences</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Un eventail de competences pour couvrir l'integralite de vos besoins digitaux.
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
            Les principes qui guident chaque projet et chaque decision.
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
            Chaque annee a forge une expertise supplementaire.
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
            Un projet en tete ?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            Discutons de votre projet. Je vous reponds en moins de 24 heures avec une premiere
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
              Portfolio & realisations <ArrowRight className="w-3 h-3" />
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
