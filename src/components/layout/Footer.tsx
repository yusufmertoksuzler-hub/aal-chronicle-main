import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background mt-12 sm:mt-16">
      <div className="container-editorial py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="AAL"
                className="h-10 w-10 object-contain bg-background rounded-full p-0.5"
              />
              <div>
                <h3 className="font-nyt text-xl sm:text-2xl text-headline">Voice of aal</h3>
                <p className="text-xs text-background/60 font-body">
                  Atakent Anatolian High School
                </p>
              </div>
            </div>
            <p className="text-sm text-background/70 font-body leading-relaxed max-w-sm">
              The official student newspaper, delivering stories and updates from our school community since 1992.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-headline text-sm font-bold mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "News", path: "/news" },
                { label: "Our Team", path: "/team" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-background/70 hover:text-primary transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-headline text-sm font-bold mb-4 uppercase tracking-wider">
              Categories
            </h4>
            <ul className="space-y-2">
              {["News", "Clubs", "Events", "Sports", "Culture"].map((category) => (
                <li key={category}>
                  <Link
                    to={`/news?category=${category.toLowerCase()}`}
                    className="text-sm text-background/70 hover:text-primary transition-colors font-body"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-background/15">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-xs text-background/50 font-body">
              © {currentYear} Voice of AAL. All rights reserved.
            </p>
            <p className="text-xs text-background/40 font-body">
              İzmir • Karşıyaka • Turkey
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
