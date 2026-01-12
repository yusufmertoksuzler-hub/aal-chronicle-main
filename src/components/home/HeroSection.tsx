import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-paper">
      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container-editorial relative z-10">
        {/* Mobile Layout */}
        <div className="py-12 sm:py-16 md:py-20 lg:py-24 text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <img
              src={logo}
              alt="Atakent Anatolian High School"
              className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 mx-auto object-contain"
            />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-nyt text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-headline mb-4"
          >
            Voice of <span className="text-primary">aal</span>
          </motion.h1>

          {/* Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 sm:w-20 h-1 bg-primary mx-auto mb-5"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-body text-base sm:text-lg text-muted-foreground max-w-md mx-auto mb-2 px-4"
          >
            Official Newspaper of Atakent Anatolian High School
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-body text-xs text-caption uppercase tracking-[0.2em]"
          >
            İzmir • Karşıyaka • Est. 1992
          </motion.p>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="h-[3px] bg-headline" />
    </section>
  );
};
