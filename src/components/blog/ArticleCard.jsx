import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';

export default function ArticleCard({ article, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link
        to={`/blog/${article.slug}`}
        className="group block bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-[#0066FF]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#0066FF]/5 h-full"
      >
        <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500 mb-3">
          <time dateTime={article.date}>
            {new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </time>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {article.readingTime} min
          </span>
        </div>

        <h3 className="text-lg font-bold text-black dark:text-white mb-2 group-hover:text-[#0066FF] transition-colors line-clamp-2">
          {article.title}
        </h3>

        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {article.keywords?.slice(0, 2).map((kw) => (
              <span key={kw} className="text-[10px] px-2 py-1 rounded-full bg-[#0066FF]/10 text-[#0066FF] font-medium">
                {kw}
              </span>
            ))}
          </div>
          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#0066FF] group-hover:translate-x-1 transition-all" />
        </div>
      </Link>
    </motion.article>
  );
}
