import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { getLatestArticles, getEditorsPickArticles } from "@/data/articles";

export const LatestSection = () => {
  const latestArticles = getLatestArticles(4);
  const editorsPicks = getEditorsPickArticles().slice(0, 3);

  return (
    <section className="container-editorial py-8 sm:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
        {/* Main Column - Latest News */}
        <div className="lg:col-span-2">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-between mb-6"
          >
            <div className="section-header flex-1 mr-4">
              <h2 className="section-title">Latest News</h2>
              <div className="section-line" />
            </div>
            <Link
              to="/news"
              className="flex items-center gap-1.5 text-xs font-body font-semibold text-primary hover:underline uppercase tracking-wider flex-shrink-0"
            >
              All News
              <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {latestArticles.map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
          </div>
        </div>

        {/* Sidebar - Editor's Pick */}
        <div className="lg:col-span-1">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="section-header mb-6"
          >
            <h2 className="section-title">Editor's Pick</h2>
            <div className="section-line" />
          </motion.div>

          {/* Compact Articles */}
          <div className="space-y-5">
            {editorsPicks.map((article, index) => (
              <ArticleCard
                key={article.id}
                article={article}
                variant="compact"
                index={index}
              />
            ))}
          </div>

          {/* Newsletter Box */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-8 p-5 bg-secondary border-t-[3px] border-primary"
          >
            <h3 className="font-headline text-base font-bold text-headline mb-2">
              Stay Updated
            </h3>
            <p className="text-sm text-muted-foreground mb-4 font-body">
              Get the latest news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2.5 text-sm border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body"
              />
              <button className="px-4 py-2.5 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider hover:bg-accent transition-colors font-body">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
