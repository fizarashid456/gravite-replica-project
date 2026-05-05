import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";

const data = [
  { avatar: a1, quote: "Nova is the team you call when the work has to ship and has to be brilliant. They became a real extension of our product org in week one.", name: "Amelia Rivera", role: "CMO, Frizbee", rating: 5 },
  { avatar: a2, quote: "Best agency partnership I've had in 15 years. Senior-only execution, zero hand-holding required, and outcomes that beat every projection.", name: "Daniyal Khan", role: "Founder, Large Brick", rating: 5 },
  { avatar: a3, quote: "They turned our brand from a deck into something the whole company rallies around. Strategy and craft in equal measure.", name: "Sara Mendes", role: "Director, Emaar Social", rating: 5 },
];

export const Testimonials = () => {
  const [i, setI] = useState(0);
  const t = data[i];
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/15 blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[120px]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-5">
          Testimonials
        </span>
        <h2 className="font-display font-bold text-4xl md:text-6xl leading-tight mb-16">
          <span className="text-gradient">Loved by founders</span><br />
          <span className="text-gradient-primary italic">& Fortune 500.</span>
        </h2>

        <div className="glass-strong rounded-3xl p-8 md:p-14 shadow-card relative">
          <Quote className="absolute top-6 left-6 text-primary/30" size={48} strokeWidth={1} />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} size={18} className="fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="font-display text-2xl md:text-3xl leading-snug text-foreground">
                "{t.quote}"
              </blockquote>
              <div className="mt-10 flex items-center justify-center gap-4">
                <img src={t.avatar} alt={t.name} loading="lazy" width={56} height={56} className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/40" />
                <div className="text-left">
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button onClick={() => setI((i - 1 + data.length) % data.length)} className="p-3 rounded-full glass hover:border-primary transition-colors">
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {data.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-gradient-primary" : "w-1.5 bg-border"}`}
                />
              ))}
            </div>
            <button onClick={() => setI((i + 1) % data.length)} className="p-3 rounded-full glass hover:border-primary transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
