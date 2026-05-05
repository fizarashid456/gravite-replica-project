import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const Loader = () => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => {
        if (c >= 100) {
          clearInterval(id);
          setTimeout(() => setDone(true), 400);
          return 100;
        }
        return c + 2;
      });
    }, 30);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background grain"
        >
          <div className="relative flex items-baseline gap-4">
            <span className="font-serif text-[18vw] leading-none text-foreground/10 tabular-nums">
              {count.toString().padStart(3, "0")}
            </span>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display text-xs tracking-[0.5em] text-primary uppercase">
                Gravité
              </span>
              <span className="mt-2 font-display text-[10px] tracking-[0.4em] text-muted-foreground uppercase">
                loading
              </span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 h-px bg-primary" style={{ width: `${count}%`, transition: "width 0.1s linear" }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
