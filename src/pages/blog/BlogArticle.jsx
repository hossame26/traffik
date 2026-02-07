import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import TableOfContents from '../../components/blog/TableOfContents';
import RelatedArticles from '../../components/blog/RelatedArticles';

export default function BlogArticle() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [allArticles, setAllArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`/blog/articles/${slug}.json`).then((r) => {
        if (!r.ok) throw new Error('Not found');
        return r.json();
      }),
      fetch('/blog/index.json').then((r) => r.json()),
    ])
      .then(([art, all]) => {
        setArticle(art);
        setAllArticles(all);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#050505] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#0066FF] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#050505] flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold text-black dark:text-white mb-4">Article introuvable</h1>
        <Link to="/blog" className="text-[#0066FF] hover:underline">
          Retour au blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] py-20 px-4">
      <SEOHead
        title={article.metaTitle || article.title}
        description={article.metaDescription || article.excerpt}
        canonical={`https://traffik-web.fr/blog/${article.slug}`}
        keywords={article.keywords?.join(', ')}
      />

      <article className="max-w-3xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-[#0066FF] hover:underline mb-8 text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Retour au blog
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 dark:text-gray-500 mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(article.date).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readingTime} min de lecture
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {article.author}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white leading-tight mb-6">
            {article.title}
          </h1>

          {article.keywords && (
            <div className="flex flex-wrap gap-2">
              {article.keywords.map((kw) => (
                <span
                  key={kw}
                  className="text-xs px-3 py-1 rounded-full bg-[#0066FF]/10 text-[#0066FF] font-medium"
                >
                  {kw}
                </span>
              ))}
            </div>
          )}
        </motion.header>

        <TableOfContents content={article.content} />

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:font-bold prose-headings:text-black dark:prose-headings:text-white
            prose-a:text-[#0066FF] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-black dark:prose-strong:text-white
            prose-li:text-gray-600 dark:prose-li:text-gray-300
            prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* FAQ Section */}
        {article.faq && article.faq.length > 0 && (
          <section className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
              Questions fréquentes
            </h2>
            <div className="space-y-6">
              {article.faq.map((item, i) => (
                <div key={i} className="bg-gray-50 dark:bg-white/5 rounded-xl p-5">
                  <h3 className="font-bold text-black dark:text-white mb-2">{item.q}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#0066FF] to-[#0052CC] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-3">
            Besoin d'aide pour votre projet web ?
          </h3>
          <p className="text-white/80 text-sm mb-6">
            Discutons de votre projet gratuitement. Réponse en moins de 24h.
          </p>
          <a
            href="https://wa.me/33635505374"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#0066FF] px-8 py-3 rounded-full text-sm font-bold hover:bg-gray-100 transition-colors"
          >
            Contacter sur WhatsApp
          </a>
        </div>

        <RelatedArticles articles={allArticles} currentSlug={slug} />
      </article>
    </div>
  );
}
