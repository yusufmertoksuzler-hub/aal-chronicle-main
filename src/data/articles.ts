import articlesData from './articles.json';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'news' | 'clubs' | 'events' | 'sports' | 'culture';
  author: string;
  publishDate: string;
  imageUrl: string;
  featured: boolean;
  editorsPick: boolean;
}

export const articles: Article[] = articlesData as Article[];

// Helper to get articles from local storage - ONLY for specific implementations that need drafts
// The public site should primarily rely on the static JSON file to ensure consistency across users
export const getDraftArticles = (): Article[] => {
  try {
    const savedArticles = localStorage.getItem("admin_articles");
    if (savedArticles) {
      const parsed = JSON.parse(savedArticles);
      return Array.isArray(parsed) ? parsed : articles;
    }
  } catch (error) {
    console.error("Error reading from localStorage:", error);
  }
  return articles;
};

// PUBLIC GETTERS - strictly use the JSON file source
export const getArticleById = (id: string): Article | undefined => {
  return articles.find(article => article.id === id);
};

export const getArticlesByCategory = (category: string): Article[] => {
  if (category === 'all') return articles;

  // User Request: "News" category should include items from other categories like Sports and Events (making them appear in both)
  if (category === 'news') {
    return articles.filter(article =>
      article.category === 'news' ||
      article.category === 'sports' ||
      article.category === 'events'
    );
  }

  return articles.filter(article => article.category === category);
};

export const getFeaturedArticles = (): Article[] => {
  return articles.filter(article => article.featured);
};

export const getEditorsPickArticles = (): Article[] => {
  return articles.filter(article => article.editorsPick);
};

export const getLatestArticles = (count: number = 6): Article[] => {
  return [...articles]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, count);
};
