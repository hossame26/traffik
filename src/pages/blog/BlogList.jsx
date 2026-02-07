import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Search } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import ArticleCard from '../../components/blog/ArticleCard';

export default function BlogList() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/blog/index.json')
      .then((r) => r.json())
      .then((data) => {
        const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setArticles(sorted);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      a.keywords?.some((k) => k.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] py-20 px-4">
      <SEOHead
        title="Blog Création Site Web & Marketing Digital | Traffik Web"
        description="Conseils, guides et actualités sur la création de sites web, le SEO, Shopify, WordPress et la publicité digitale. Articles experts par Traffik Web."
        canonical="https://traffik-web.fr/blog"
        keywords="blog web, création site web, seo, shopify, wordpress, marketing digital"
      />

      <div className="max-w-5xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#0066FF] hover:underline mb-8 text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-2xl">
            Guides pratiques, comparatifs et conseils pour réussir votre présence en ligne.
            Un nouvel article chaque jour.
          </p>
        </motion.div>

        {/* Search */}
        <div className="relative mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher un article..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-black dark:text-white text-sm focus:outline-none focus:border-[#0066FF] transition-colors"
          />
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-[#0066FF] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              {search ? 'Aucun article trouvé.' : 'Aucun article pour le moment.'}
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article, i) => (
              <ArticleCard key={article.slug} article={article} index={i} />
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-12 border-t border-gray-200 dark:border-white/10"
        >
          <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
            Un projet en tête ?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Discutons de votre projet gratuitement sur WhatsApp.
          </p>
          <a
            href="https://wa.me/33635505374"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0066FF] hover:bg-[#0052CC] text-white px-8 py-4 rounded-full text-sm font-bold tracking-wide transition-all shadow-lg shadow-[#0066FF]/30"
          >
            Contacter sur WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  );
}
