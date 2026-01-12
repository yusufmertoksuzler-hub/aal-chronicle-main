import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "News", path: "/news" },
  { label: "Team", path: "/team" },
  { label: "Contact", path: "/contact" },
];

const categories = ["News", "Clubs", "Events", "Sports", "Culture"];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/98 backdrop-blur-sm">
      {/* Top Bar - Desktop Only */}
      <div className="hidden lg:block border-b border-border">
        <div className="container-editorial py-2 flex justify-center">
          <span className="text-[11px] text-caption font-body uppercase tracking-[0.2em]">
            Official Newspaper of Atakent Anatolian High School
          </span>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-border">
        <div className="container-editorial py-3 sm:py-4 flex items-center justify-between gap-4">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <motion.img
              src={logo}
              alt="AAL"
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.4 }}
            />
            <div className="flex flex-col">
              <span className="font-nyt text-xl sm:text-3xl lg:text-4xl text-headline leading-tight">
                Voice of aal
              </span>
              <span className="hidden sm:block text-[10px] text-caption font-body uppercase tracking-[0.15em]">
                İzmir • Karşıyaka
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActive(item.path) ? "text-primary after:scale-x-100" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Category Bar - Desktop */}
      <div className="hidden md:block border-b border-border bg-secondary/50">
        <div className="container-editorial py-2.5 flex justify-center gap-8">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/news?category=${category.toLowerCase()}`}
              className="text-[11px] font-body font-medium uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container-editorial py-4">
              <nav className="space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-2.5 text-base font-headline font-bold ${isActive(item.path) ? "text-primary" : "text-headline"
                        }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-[10px] text-caption uppercase tracking-[0.15em] mb-3 font-body">
                  Categories
                </p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      to={`/news?category=${category.toLowerCase()}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-1.5 text-xs font-body font-medium bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
