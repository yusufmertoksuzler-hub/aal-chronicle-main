import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, Edit, Trash2, LogOut, Eye, Save, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { articles as initialArticles, Article } from "@/data/articles";

const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "voiceofaal2026",
};

const Admin = () => {
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [articles, setArticles] = useState<Article[]>(() => {
    const savedArticles = localStorage.getItem("admin_articles");
    return savedArticles ? JSON.parse(savedArticles) : initialArticles;
  });
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const emptyArticle: Article = {
    id: "",
    title: "",
    excerpt: "",
    content: "",
    category: "news",
    author: "Ekin Şahin",
    publishDate: new Date().toISOString().split("T")[0],
    imageUrl: "",
    featured: false,
    editorsPick: false,
  };

  useEffect(() => {
    const loggedIn = sessionStorage.getItem("admin_logged_in");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("admin_articles", JSON.stringify(articles));
  }, [articles]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      loginForm.username === ADMIN_CREDENTIALS.username &&
      loginForm.password === ADMIN_CREDENTIALS.password
    ) {
      setIsLoggedIn(true);
      sessionStorage.setItem("admin_logged_in", "true");
      toast({ title: "Welcome!", description: "Successfully logged in to admin panel." });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid username or password.",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem("admin_logged_in");
    toast({ title: "Logged Out", description: "You have been logged out." });
  };

  const handleSaveArticle = () => {
    if (!editingArticle) return;

    if (!editingArticle.title || !editingArticle.content || !editingArticle.imageUrl) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (isCreating) {
      const newArticle = {
        ...editingArticle,
        id: Date.now().toString(),
      };
      setArticles([newArticle, ...articles]);
      toast({ title: "Article Created", description: "Your article has been published." });
    } else {
      setArticles(articles.map((a) => (a.id === editingArticle.id ? editingArticle : a)));
      toast({ title: "Article Updated", description: "Your changes have been saved." });
    }

    setEditingArticle(null);
    setIsCreating(false);
    setShowPreview(false);
  };

  const handleDeleteArticle = (id: string) => {
    if (confirm("Are you sure you want to delete this article?")) {
      setArticles(articles.filter((a) => a.id !== id));
      toast({ title: "Article Deleted", description: "The article has been removed." });
    }
  };

  const formatContent = (tag: string) => {
    if (!editingArticle) return;
    const selection = window.getSelection();
    if (selection && selection.toString()) {
      const selectedText = selection.toString();
      let formattedText = "";
      switch (tag) {
        case "bold":
          formattedText = `<strong>${selectedText}</strong>`;
          break;
        case "italic":
          formattedText = `<em>${selectedText}</em>`;
          break;
        case "underline":
          formattedText = `<u>${selectedText}</u>`;
          break;
        case "h2":
          formattedText = `<h2>${selectedText}</h2>`;
          break;
        case "h3":
          formattedText = `<h3>${selectedText}</h3>`;
          break;
        case "ul":
          formattedText = `<ul><li>${selectedText}</li></ul>`;
          break;
        case "blockquote":
          formattedText = `<blockquote>${selectedText}</blockquote>`;
          break;
        default:
          formattedText = selectedText;
      }
      const newContent = editingArticle.content.replace(selectedText, formattedText);
      setEditingArticle({ ...editingArticle, content: newContent });
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-card p-8 rounded-sm shadow-elevated"
        >
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl font-bold text-headline mb-2">Admin Login</h1>
            <p className="text-muted-foreground">Voice of AAL Content Management</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-headline mb-2">Username</label>
              <input
                type="text"
                value={loginForm.username}
                onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                className="w-full px-4 py-3 border border-border rounded-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-headline mb-2">Password</label>
              <input
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                className="w-full px-4 py-3 border border-border rounded-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter password"
              />
            </div>
            <button type="submit" className="btn-editorial w-full">
              Login
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  if (editingArticle) {
    return (
      <div className="min-h-screen bg-background">
        <header className="bg-card border-b border-border sticky top-0 z-10">
          <div className="container-editorial py-4 flex items-center justify-between">
            <h1 className="font-display text-xl font-bold text-headline">
              {isCreating ? "Create New Article" : "Edit Article"}
            </h1>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground rounded-sm hover:bg-secondary/80 transition-colors"
              >
                <Eye size={16} />
                {showPreview ? "Editor" : "Preview"}
              </button>
              <button
                onClick={handleSaveArticle}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-sm hover:bg-accent transition-colors"
              >
                <Save size={16} />
                Publish
              </button>
              <button
                onClick={() => {
                  setEditingArticle(null);
                  setIsCreating(false);
                  setShowPreview(false);
                }}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-destructive text-destructive-foreground rounded-sm hover:bg-destructive/80 transition-colors"
              >
                <X size={16} />
                Cancel
              </button>
            </div>
          </div>
        </header>

        <div className="container-editorial py-8">
          {showPreview ? (
            <div className="max-w-3xl mx-auto">
              <h1 className="font-display text-4xl font-bold text-headline mb-4">
                {editingArticle.title || "Untitled"}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">{editingArticle.excerpt}</p>
              {editingArticle.imageUrl && (
                <img
                  src={editingArticle.imageUrl}
                  alt={editingArticle.title}
                  className="w-full aspect-video object-cover rounded-sm mb-8"
                />
              )}
              <div
                className="prose-editorial"
                dangerouslySetInnerHTML={{ __html: editingArticle.content }}
              />
            </div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-headline mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    value={editingArticle.title}
                    onChange={(e) =>
                      setEditingArticle({ ...editingArticle, title: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-border rounded-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Article title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-headline mb-2">
                    Category
                  </label>
                  <select
                    value={editingArticle.category}
                    onChange={(e) =>
                      setEditingArticle({
                        ...editingArticle,
                        category: e.target.value as Article["category"],
                      })
                    }
                    className="w-full px-4 py-3 border border-border rounded-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="news">News</option>
                    <option value="clubs">Clubs</option>
                    <option value="events">Events</option>
                    <option value="sports">Sports</option>
                    <option value="culture">Culture</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-headline mb-2">
                  Excerpt
                </label>
                <textarea
                  value={editingArticle.excerpt}
                  onChange={(e) =>
                    setEditingArticle({ ...editingArticle, excerpt: e.target.value })
                  }
                  rows={2}
                  className="w-full px-4 py-3 border border-border rounded-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Brief summary of the article"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-headline mb-2">
                  Featured Image URL *
                </label>
                <input
                  type="url"
                  value={editingArticle.imageUrl}
                  onChange={(e) =>
                    setEditingArticle({ ...editingArticle, imageUrl: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-border rounded-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="https://example.com/image.jpg"
                />
                {editingArticle.imageUrl && (
                  <img
                    src={editingArticle.imageUrl}
                    alt="Preview"
                    className="mt-2 h-32 object-cover rounded-sm"
                  />
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-headline mb-2">
                  Content * (HTML supported)
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {[
                    { label: "B", tag: "bold" },
                    { label: "I", tag: "italic" },
                    { label: "U", tag: "underline" },
                    { label: "H2", tag: "h2" },
                    { label: "H3", tag: "h3" },
                    { label: "List", tag: "ul" },
                    { label: "Quote", tag: "blockquote" },
                  ].map((btn) => (
                    <button
                      key={btn.tag}
                      onClick={() => formatContent(btn.tag)}
                      className="px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground rounded-sm hover:bg-secondary/80 transition-colors"
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
                <textarea
                  value={editingArticle.content}
                  onChange={(e) =>
                    setEditingArticle({ ...editingArticle, content: e.target.value })
                  }
                  rows={12}
                  className="w-full px-4 py-3 border border-border rounded-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none font-mono text-sm"
                  placeholder="<p>Write your article content here...</p>"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-headline mb-2">
                    Author
                  </label>
                  <input
                    type="text"
                    value={editingArticle.author}
                    onChange={(e) =>
                      setEditingArticle({ ...editingArticle, author: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-border rounded-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-headline mb-2">
                    Publish Date
                  </label>
                  <input
                    type="date"
                    value={editingArticle.publishDate}
                    onChange={(e) =>
                      setEditingArticle({ ...editingArticle, publishDate: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-border rounded-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="flex items-end gap-6 pb-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={editingArticle.featured}
                      onChange={(e) =>
                        setEditingArticle({ ...editingArticle, featured: e.target.checked })
                      }
                      className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                    />
                    <span className="text-sm">Featured</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={editingArticle.editorsPick}
                      onChange={(e) =>
                        setEditingArticle({ ...editingArticle, editorsPick: e.target.checked })
                      }
                      className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                    />
                    <span className="text-sm">Editor's Pick</span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="container-editorial py-4 flex items-center justify-between">
          <h1 className="font-display text-xl font-bold text-headline">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <a href="/" className="text-sm text-muted-foreground hover:text-primary">
              View Site
            </a>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground rounded-sm hover:bg-secondary/80 transition-colors"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="container-editorial py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl font-bold text-headline">Articles</h2>
          <button
            onClick={() => {
              setEditingArticle(emptyArticle);
              setIsCreating(true);
            }}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-sm hover:bg-accent transition-colors"
          >
            <Plus size={16} />
            New Article
          </button>
        </div>

        <div className="space-y-4">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-4 p-4 bg-card rounded-sm border border-border"
            >
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-20 h-14 object-cover rounded-sm"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-headline truncate">{article.title}</h3>
                <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                  <span className="capitalize">{article.category}</span>
                  <span>•</span>
                  <span>{article.author}</span>
                  <span>•</span>
                  <span>{article.publishDate}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setEditingArticle(article)}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Edit article"
                >
                  <Edit size={18} />
                </button>
                <button
                  onClick={() => handleDeleteArticle(article.id)}
                  className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                  aria-label="Delete article"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
