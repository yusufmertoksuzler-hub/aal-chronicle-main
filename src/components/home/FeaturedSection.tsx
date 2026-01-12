import { motion } from "framer-motion";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { getFeaturedArticles } from "@/data/articles";

export const FeaturedSection = () => {
  const featuredArticles = getFeaturedArticles();
  const mainArticle = featuredArticles[0];
  const secondaryArticle = featuredArticles[1];

  if (!mainArticle) return null;

  return (
    <section className="container-editorial py-8 sm:py-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="section-header"
      >
        <h2 className="section-title">Featured</h2>
        <div className="section-line" />
      </motion.div>

      {/* Featured Grid - Responsive */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
        {mainArticle && (
          <ArticleCard article={mainArticle} variant="hero" index={0} />
        )}
        {secondaryArticle && (
          <ArticleCard article={secondaryArticle} variant="hero" index={1} />
        )}
      </div>
    </section>
  );
};
