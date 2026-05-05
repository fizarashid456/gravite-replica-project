import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["About", "Services", "Work", "Journal", "Contact"];

export const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-6 flex items-center justify-between mix-blend-difference"
      >
        <a href="#" className="font-serif italic text-2xl tracking-tight text-foreground">
          gravité<span className="text-primary">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="font-display text-xs tracking-[0.25em] uppercase text-foreground hover:text-primary transition-colors">
              {l}
            </a>
          ))}
        </nav>
        <button
          aria-label="Menu"
          onClick={() => setOpen(true)}
          className="md:hidden text-foreground"
        >
          <Menu size={22} />
        </button>
        <a href="#contact" className="hidden md:inline-flex font-display text-xs tracking-[0.25em] uppercase text-primary-foreground bg-primary px-5 py-3 hover:bg-primary-glow transition-colors">
          Work With Us
        </a>
      </motion.header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-background grain flex flex-col items-center justify-center gap-8 md:hidden">
          <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-foreground">
            <X size={28} />
          </button>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="font-serif text-4xl text-foreground hover:text-primary transition-colors">
              {l}
            </a>
          ))}
        </div>
      )}
    </>
  );
};
