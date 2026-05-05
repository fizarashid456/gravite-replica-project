import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const words = ["design", "development", "content", "planning", "marketing", "production", "3d visualization"];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden grain">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-background/40" />

      {/* floating coin */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute top-32 right-10 md:right-20 w-28 h-28 md:w-40 md:h-40 rounded-full border border-primary/40 flex items-center justify-center animate-float"
      >
        <div className="absolute inset-2 rounded-full border border-primary/20" />
        <div className="animate-spin-slow font-display text-[10px] tracking-[0.3em] uppercase text-primary/80">
          {Array.from("• work with us • work with us ").map((c, i) => (
            <span
              key={i}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `rotate(${i * 12}deg) translateY(-${window.innerWidth < 768 ? 48 : 70}px)`,
                transformOrigin: "0 0",
              }}
            >
              {c}
            </span>
          ))}
        </div>
        <span className="font-serif italic text-primary text-2xl">G</span>
      </motion.div>

      <div className="relative z-10 px-6 md:px-16 max-w-7xl mx-auto w-full pt-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="font-display text-xs tracking-[0.4em] uppercase text-primary mb-8"
        >
          — Bringing out the revolution
        </motion.p>

        <h1 className="font-serif italic text-foreground leading-[0.95]">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="block text-[14vw] md:text-[10vw]"
          >
            we are
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="block text-[14vw] md:text-[10vw] text-gradient-gold not-italic font-bold tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Gravité.
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 1 }}
          className="mt-10 max-w-2xl"
        >
          <p className="font-serif text-2xl md:text-3xl text-foreground/80 leading-snug">
            A digital agency with a strategic approach to{" "}
            <span className="text-primary italic">{words.slice(0, -1).join(", ")}</span> &{" "}
            <span className="text-primary italic">{words[words.length - 1]}</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="mt-16 flex items-center gap-3 text-muted-foreground font-display text-[10px] tracking-[0.4em] uppercase"
        >
          <span className="h-px w-10 bg-primary" />
          Scroll to discover
        </motion.div>
      </div>

      {/* marquee at bottom */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border py-5 overflow-hidden bg-background/60 backdrop-blur-sm">
        <div className="flex marquee whitespace-nowrap">
          {[...words, ...words, ...words].map((w, i) => (
            <span key={i} className="font-serif italic text-3xl text-foreground/40 mx-8">
              {w} <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
