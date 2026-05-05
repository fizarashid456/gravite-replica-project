import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import p1 from "@/assets/proj-1.jpg";
import p2 from "@/assets/proj-2.jpg";
import p3 from "@/assets/proj-3.jpg";
import p4 from "@/assets/proj-4.jpg";
import p5 from "@/assets/proj-5.jpg";
import p6 from "@/assets/proj-6.jpg";

const projects = [
  { img: p1, title: "Lumen Analytics", tag: "SaaS Dashboard", year: "2025", desc: "End-to-end product design and engineering for a real-time analytics platform serving Fortune 500 ops teams." },
  { img: p2, title: "Drift Wallet", tag: "Mobile App · Fintech", year: "2025", desc: "A consumer fintech app that grew from 0 to 250K active users in 6 months." },
  { img: p3, title: "Aether Store", tag: "E-commerce Platform", year: "2024", desc: "Headless commerce build with 3.2x conversion lift and 0.8s LCP across regions." },
  { img: p4, title: "Volt Brand System", tag: "Brand Identity", year: "2024", desc: "A complete identity rework for a global energy startup — logo, tokens, motion guidelines." },
  { img: p5, title: "Nebula 3D", tag: "3D & Visualization", year: "2025", desc: "Interactive WebGL configurator that became their #1 sales channel." },
  { img: p6, title: "Flux Campaign", tag: "Marketing Campaign", year: "2025", desc: "Multi-channel launch that drove 12M impressions and 4.8% engagement." },
];

export const Work = () => {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="work" className="relative py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between flex-wrap gap-6 mb-16"
        >
          <div>
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-5">
              Selected work
            </span>
            <h2 className="font-display font-bold text-4xl md:text-6xl leading-tight">
              <span className="text-gradient">Work that</span> <span className="text-gradient-primary italic">moves needles.</span>
            </h2>
          </div>
          <a href="#" className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">
            View all projects
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.button
              key={p.title}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl glass text-left"
            >
              <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-accent">{p.tag}</span>
                  <span className="text-[10px] text-muted-foreground">· {p.year}</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground flex items-center gap-2">
                  {p.title}
                  <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </h3>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[80] bg-background/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full glass-strong rounded-3xl overflow-hidden shadow-card"
            >
              <button onClick={() => setActive(null)} className="absolute top-4 right-4 z-10 p-2 rounded-full glass hover:bg-white/10">
                <X size={20} />
              </button>
              <img src={projects[active].img} alt={projects[active].title} className="w-full aspect-video object-cover" />
              <div className="p-8">
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-accent">{projects[active].tag} · {projects[active].year}</span>
                <h3 className="font-display font-bold text-3xl mt-3 mb-4">{projects[active].title}</h3>
                <p className="text-muted-foreground leading-relaxed">{projects[active].desc}</p>
                <a href="#" className="mt-6 inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-5 py-3 rounded-xl shadow-glow">
                  View case study <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
