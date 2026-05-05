import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import w3 from "@/assets/work-3.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";

const posts = [
  { img: w3, cat: "Creative", title: "Best web design and development tools to watch", date: "May 2026" },
  { img: w5, cat: "Marketing", title: "Importance of digital marketing for your business", date: "Apr 2026" },
  { img: w6, cat: "Strategy", title: "Top 5 ways to digitalise your construction business", date: "Mar 2026" },
];

export const Journal = () => {
  return (
    <section id="journal" className="py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <p className="font-display text-xs tracking-[0.4em] uppercase text-primary mb-4">— Latest News</p>
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.95]">
              latest & <span className="italic text-gradient-gold">greatest.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <motion.a
              href="#"
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex items-center justify-between font-display text-[10px] tracking-[0.3em] uppercase mb-3">
                <span className="text-primary">{p.cat}</span>
                <span className="text-muted-foreground">{p.date}</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl leading-snug text-foreground group-hover:text-primary transition-colors flex items-start gap-2">
                {p.title}
                <ArrowUpRight size={20} className="mt-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
