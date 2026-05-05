import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";

const projects = [
  { img: w1, title: "Space", tag: "Branding", className: "md:col-span-7 md:row-span-2 aspect-[4/5]" },
  { img: w2, title: "Frizbee", tag: "Branding · Photography", className: "md:col-span-5 aspect-[4/3]" },
  { img: w3, title: "What If Gold", tag: "Brand · Digital", className: "md:col-span-5 aspect-[4/3]" },
  { img: w4, title: "Large Brick", tag: "Architecture", className: "md:col-span-6 aspect-[4/3]" },
  { img: w5, title: "Emaar", tag: "Social · Marketing", className: "md:col-span-6 aspect-[4/3]" },
  { img: w6, title: "Aether", tag: "3D · Visualization", className: "md:col-span-12 aspect-[21/9]" },
];

export const Work = () => {
  return (
    <section id="work" className="relative py-32 md:py-48 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-16 md:mb-24 flex-wrap gap-6"
        >
          <div>
            <p className="font-display text-xs tracking-[0.4em] uppercase text-primary mb-4">— Our Work</p>
            <h2 className="font-serif text-5xl md:text-8xl leading-[0.95] text-foreground">
              creative <span className="italic">portfolio</span><br />
              <span className="text-gradient-gold">cuisine.</span>
            </h2>
          </div>
          <a href="#" className="group inline-flex items-center gap-3 font-display text-xs tracking-[0.3em] uppercase text-primary border-b border-primary pb-2">
            View all projects
            <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-4 md:gap-6">
          {projects.map((p, i) => (
            <motion.a
              href="#"
              key={p.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className={`group relative overflow-hidden ${p.className}`}
            >
              <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                <p className="font-display text-[10px] tracking-[0.4em] uppercase text-primary mb-2">{p.tag}</p>
                <h3 className="font-serif italic text-3xl md:text-5xl text-foreground flex items-center gap-3">
                  {p.title}
                  <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
