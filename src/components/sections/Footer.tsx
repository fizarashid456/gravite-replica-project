import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="relative bg-background border-t border-border overflow-hidden grain">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="font-display text-xs tracking-[0.4em] uppercase text-primary mb-6">— Let's Talk</p>
          <h2 className="font-serif text-6xl md:text-[10vw] leading-[0.9] text-foreground">
            have an <span className="italic">idea</span>?<br />
            <a href="mailto:hello@gravite.studio" className="text-gradient-gold inline-flex items-center gap-4 group">
              say hello.
              <ArrowUpRight size={48} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
            </a>
          </h2>
        </motion.div>

        <div className="mt-24 grid md:grid-cols-4 gap-10 border-t border-border pt-16">
          <div>
            <p className="font-serif italic text-2xl">gravité<span className="text-primary">.</span></p>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">A digital agency with a strategic approach.</p>
          </div>
          {[
            { h: "Studio", l: ["About", "Services", "Work", "Journal"] },
            { h: "Contact", l: ["hello@gravite.studio", "+44 7456 435221", "London · Dubai"] },
            { h: "Social", l: ["Instagram", "Behance", "LinkedIn", "Dribbble"] },
          ].map((c) => (
            <div key={c.h}>
              <p className="font-display text-[10px] tracking-[0.4em] uppercase text-primary mb-4">{c.h}</p>
              <ul className="space-y-2">
                {c.l.map((x) => (
                  <li key={x}>
                    <a href="#" className="text-foreground/80 hover:text-primary transition-colors">{x}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-between font-display text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          <span>© 2026 Gravité Studio</span>
          <span>Crafted with intention</span>
        </div>
      </div>
    </footer>
  );
};
