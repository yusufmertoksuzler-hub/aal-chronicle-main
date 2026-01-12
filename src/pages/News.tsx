import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { PageTransition } from "@/components/layout/PageTransition";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { getArticlesByCategory } from "@/data/articles";

const categories = [
  { id: "all", label: "All" },
  { id: "news", label: "News" },
  { id: "clubs", label: "Clubs" },
  { id: "events", label: "Events" },
  { id: "sports", label: "Sports" },
  { id: "culture", label: "Culture" },
];

const News = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get("category") || "all";
  const [filteredArticles, setFilteredArticles] = useState(() => getArticlesByCategory(currentCategory));

  useEffect(() => {
    setFilteredArticles(getArticlesByCategory(currentCategory));
  }, [currentCategory]);

  const handleCategoryChange = (category: string) => {
    if (category === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <Layout>
      <PageTransition>
        {/* Header */}
        <section className="bg-paper border-b-[3px] border-headline">
          <div className="container-editorial py-10 sm:py-12 md:py-16 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-headline mb-3"
            >
              News & Articles
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-muted-foreground font-body text-sm sm:text-base max-w-lg mx-auto"
            >
              Stories and updates from Atakent Anatolian High School
            </motion.p>
          </div>
        </section>

        {/* Filters */}
        <section className="container-editorial py-6 sm:py-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 text-xs font-body font-semibold uppercase tracking-wider transition-all duration-200 ${currentCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                  }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </section>

        {/* Articles Grid */}
        <section className="container-editorial pb-12 sm:pb-16">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {filteredArticles.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground font-body">
                No articles found in this category.
              </p>
              <Link
                to="/news"
                className="inline-block mt-3 text-primary text-sm font-body hover:underline"
              >
                View all articles
              </Link>
            </motion.div>
          )}
        </section>
      </PageTransition>
    </Layout>
  );
};

export default News;
