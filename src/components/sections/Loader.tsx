import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

export const Loader = () => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => {
        if (c >= 100) {
          clearInterval(id);
          setTimeout(() => setDone(true), 300);
          return 100;
        }
        return c + 4;
      });
    }, 25);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-50" />
          <div className="relative flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow animate-pulse-glow">
              <Sparkles size={28} className="text-primary-foreground" />
            </div>
            <div className="font-display font-bold text-7xl md:text-8xl text-gradient-primary tabular-nums">
              {count.toString().padStart(3, "0")}
            </div>
            <div className="text-xs tracking-[0.4em] uppercase text-muted-foreground">Loading experience</div>
          </div>
          <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-primary" style={{ width: `${count}%`, transition: "width 0.1s linear" }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
