import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className={`mx-auto max-w-7xl px-4 md:px-6 ${scrolled ? "" : ""}`}>
          <div className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
            scrolled ? "glass-strong shadow-card" : "glass"
          }`}>
            <a href="#home" className="flex items-center gap-2 group">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <Sparkles size={18} className="text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                Nova<span className="text-gradient-primary">.</span>
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-xl shadow-glow hover:scale-105 transition-transform"
            >
              Get Started
            </a>

            <button
              aria-label="Menu"
              onClick={() => setOpen(true)}
              className="md:hidden text-foreground p-2"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[60] glass-strong flex flex-col items-center justify-center gap-6 md:hidden"
        >
          <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-foreground p-2">
            <X size={28} />
          </button>
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="font-display text-3xl text-foreground hover:text-gradient-primary"
            >
              {l.label}
            </motion.a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 bg-gradient-primary text-primary-foreground font-semibold px-8 py-3 rounded-xl shadow-glow"
          >
            Get Started
          </a>
        </motion.div>
      )}
    </>
  );
};
