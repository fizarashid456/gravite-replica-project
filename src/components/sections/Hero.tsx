import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/30 blur-[120px] animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px] animate-blob" style={{ animationDelay: "4s" }} />
      <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full bg-[hsl(var(--neon-pink)/0.2)] blur-[120px] animate-blob" style={{ animationDelay: "8s" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-accent shadow-glow-cyan animate-pulse" />
          <span className="text-xs font-medium text-muted-foreground">
            <span className="text-foreground">Trusted by 200+ teams</span> · Now booking Q3 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight"
        >
          <span className="text-gradient">Digital products</span><br />
          that <span className="text-gradient-primary italic">defy gravity.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          We design, build, and scale category-defining brands and software for ambitious founders.
          From strategy to launch — engineered with obsession.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-7 py-4 rounded-xl shadow-glow hover:scale-105 transition-transform"
          >
            Get Started
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#work"
            className="group inline-flex items-center gap-2 glass text-foreground font-semibold px-7 py-4 rounded-xl hover:border-primary/50 transition-colors"
          >
            <Play size={16} className="text-accent" /> View Our Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-accent text-accent" />
            ))}
            <span className="ml-2">4.9/5 from 180+ clients</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-border" />
          <div>Featured in <span className="text-foreground font-medium">TechCrunch · Awwwards · Behance</span></div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};
