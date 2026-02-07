import ArticleCard from './ArticleCard';

export default function RelatedArticles({ articles, currentSlug }) {
  const related = articles
    .filter((a) => a.slug !== currentSlug)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-gray-200 dark:border-white/10">
      <h2 className="text-2xl font-bold text-black dark:text-white mb-8">
        Articles similaires
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {related.map((article, i) => (
          <ArticleCard key={article.slug} article={article} index={i} />
        ))}
      </div>
    </section>
  );
}
