import { Sparkles, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const cols = [
  { title: "Services", links: ["Brand Identity", "Web Development", "Product Design", "Marketing", "3D & Motion"] },
  { title: "Company", links: ["About", "Work", "Journal", "Careers", "Press"] },
  { title: "Contact", links: ["hello@nova.studio", "+1 (555) 010-2024", "San Francisco · Dubai"] },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/60 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <Sparkles size={18} className="text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">Nova<span className="text-gradient-primary">.</span></span>
            </a>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              A digital agency building category-defining products and brands for ambitious teams worldwide.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:border-primary/50 hover:text-primary transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-display font-semibold text-sm uppercase tracking-[0.2em] text-foreground mb-4">{c.title}</h4>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© 2026 Nova Studio. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
