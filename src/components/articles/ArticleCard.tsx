import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Article } from "@/data/articles";
import { format } from "date-fns";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "featured" | "compact" | "hero";
  index?: number;
}

const categoryColors: Record<string, string> = {
  news: "bg-primary",
  clubs: "bg-emerald-600",
  events: "bg-amber-600",
  sports: "bg-blue-600",
  culture: "bg-purple-600",
};

export const ArticleCard = ({ article, variant = "default", index = 0 }: ArticleCardProps) => {
  // Hero - Large featured card
  if (variant === "hero") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group"
      >
        <Link to={`/article/${article.id}`} className="block">
          <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/10]">
            <motion.img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
              <span className={`category-badge ${categoryColors[article.category]} mb-3`}>
                {article.category}
              </span>
              <h2 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 leading-tight line-clamp-3">
                {article.title}
              </h2>
              <p className="hidden sm:block text-white/75 text-sm line-clamp-2 mb-3 max-w-xl font-body">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-3 text-white/60 text-xs font-body">
                <span>{article.author}</span>
                <span>•</span>
                <time>{format(new Date(article.publishDate), "MMM d, yyyy")}</time>
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  // Featured - Medium prominent card
  if (variant === "featured") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group"
      >
        <Link to={`/article/${article.id}`} className="block">
          <div className="relative overflow-hidden aspect-[16/10]">
            <motion.img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
              <span className={`category-badge ${categoryColors[article.category]} mb-2`}>
                {article.category}
              </span>
              <h3 className="font-headline text-lg sm:text-xl font-bold text-white mb-2 leading-tight line-clamp-2">
                {article.title}
              </h3>
              <div className="flex items-center gap-2 text-white/60 text-xs font-body">
                <span>{article.author}</span>
                <span>•</span>
                <time>{format(new Date(article.publishDate), "MMM d")}</time>
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  // Compact - Small sidebar card
  if (variant === "compact") {
    return (
      <motion.article
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        className="group"
      >
        <Link to={`/article/${article.id}`} className="flex gap-3 sm:gap-4">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 overflow-hidden">
            <motion.img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="flex-1 min-w-0 py-0.5">
            <span className={`inline-block px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white ${categoryColors[article.category]} mb-1.5`}>
              {article.category}
            </span>
            <h4 className="font-headline text-sm sm:text-[15px] font-bold text-headline line-clamp-2 leading-snug group-hover:text-primary transition-colors">
              {article.title}
            </h4>
            <time className="text-[11px] text-caption mt-1 block font-body">
              {format(new Date(article.publishDate), "MMM d, yyyy")}
            </time>
          </div>
        </Link>
      </motion.article>
    );
  }

  // Default - Standard card
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="article-card group"
    >
      <Link to={`/article/${article.id}`} className="block">
        <div className="relative overflow-hidden aspect-[16/10]">
          <motion.img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          />
          <span className={`absolute top-3 left-3 category-badge ${categoryColors[article.category]}`}>
            {article.category}
          </span>
        </div>
        <div className="p-4">
          <h3 className="font-headline text-base sm:text-lg font-bold text-headline mb-2 line-clamp-2 leading-snug group-hover:text-primary transition-colors">
            {article.title}
          </h3>
          <p className="text-body text-sm line-clamp-2 mb-3 font-body">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between text-[11px] text-caption font-body">
            <span>{article.author}</span>
            <time>{format(new Date(article.publishDate), "MMM d, yyyy")}</time>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};
