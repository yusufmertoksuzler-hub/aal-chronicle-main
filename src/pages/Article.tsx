import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { PageTransition } from "@/components/layout/PageTransition";
import { getArticleById, getLatestArticles } from "@/data/articles";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { format } from "date-fns";

const Article = () => {
  const { id } = useParams<{ id: string }>();
  const article = getArticleById(id || "");
  const relatedArticles = getLatestArticles(3).filter((a) => a.id !== id);

  if (!article) {
    return (
      <Layout>
        <PageTransition>
          <div className="container-editorial py-16 text-center">
            <h1 className="font-display text-4xl font-bold text-headline mb-4">
              Article Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The article you're looking for doesn't exist.
            </p>
            <Link to="/news" className="btn-editorial">
              Back to News
            </Link>
          </div>
        </PageTransition>
      </Layout>
    );
  }

  const categoryColors: Record<string, string> = {
    news: "bg-primary",
    clubs: "bg-emerald-600",
    events: "bg-amber-600",
    sports: "bg-blue-600",
    culture: "bg-purple-600",
  };

  const shareUrl = window.location.href;
  const shareTitle = article.title;

  return (
    <Layout>
      <PageTransition>
        {/* Back Button */}
        <div className="container-editorial py-6">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            Back to News
          </Link>
        </div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container-editorial pb-8"
        >
          <div className="max-w-4xl mx-auto">
            <span
              className={`category-badge ${categoryColors[article.category]} mb-4`}
            >
              {article.category}
            </span>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-headline mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="font-medium text-foreground">{article.author}</span>
              <span>•</span>
              <time>{format(new Date(article.publishDate), "MMMM d, yyyy")}</time>
            </div>
            <p className="text-lg md:text-xl text-body leading-relaxed">
              {article.excerpt}
            </p>
          </div>
        </motion.header>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="container-editorial pb-8"
        >
          <div className="max-w-5xl mx-auto">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full aspect-[16/9] object-cover rounded-sm shadow-elevated"
            />
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="container-editorial"
        >
          <div className="max-w-3xl mx-auto">
            <div
              className="prose-editorial"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Share Buttons */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <Share2 size={16} />
                  Share this article
                </span>
                <div className="flex gap-2">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-secondary rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-secondary rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-secondary rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Related Articles */}
        <section className="container-editorial py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-display text-2xl font-bold text-headline">
                More Stories
              </h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>
          </motion.div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Article;
