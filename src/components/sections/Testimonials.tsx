import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const data = [
  { quote: "The Gravité team has been sincerely committed to designing great communication around our projects. Our customers love their creative work — and so do we.", name: "Amelia R.", role: "CMO, Frizbee" },
  { quote: "They are simply the best at what they do. Completely satisfied — the development team was committed and communication was flawless throughout.", name: "Daniyal K.", role: "Founder, Large Brick" },
  { quote: "A rare blend of strategy and craft. They turned our brand into something we are genuinely proud to put into the world.", name: "Sara M.", role: "Director, Emaar Social" },
];

export const Testimonials = () => {
  const [i, setI] = useState(0);
  const t = data[i];
  return (
    <section className="relative py-32 md:py-48 border-y border-border bg-secondary/30 grain overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-16 text-center relative">
        <Quote className="mx-auto text-primary/30 mb-8" size={48} strokeWidth={1} />
        <motion.blockquote
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif italic text-3xl md:text-5xl leading-tight text-foreground"
        >
          "{t.quote}"
        </motion.blockquote>
        <div className="mt-12 font-display text-xs tracking-[0.3em] uppercase text-primary">
          {t.name} <span className="text-muted-foreground">— {t.role}</span>
        </div>

        <div className="mt-16 flex items-center justify-center gap-6">
          <button onClick={() => setI((i - 1 + data.length) % data.length)} className="p-3 border border-border hover:border-primary hover:text-primary transition-colors">
            <ChevronLeft size={16} />
          </button>
          <span className="font-display text-xs tracking-[0.3em] text-muted-foreground tabular-nums">
            0{i + 1} / 0{data.length}
          </span>
          <button onClick={() => setI((i + 1) % data.length)} className="p-3 border border-border hover:border-primary hover:text-primary transition-colors">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
