import { motion } from "framer-motion";
import { Award, Zap, Target, Users } from "lucide-react";

const points = [
  { icon: Award, title: "10+ years of craft", desc: "Battle-tested across 200+ launches in SaaS, fintech, and consumer brands." },
  { icon: Zap, title: "Velocity without compromise", desc: "Ship in weeks, not quarters — without sacrificing depth or polish." },
  { icon: Target, title: "Outcomes, not outputs", desc: "We measure success in MRR, retention, and brand equity — not deliverables." },
  { icon: Users, title: "Senior-only team", desc: "Every project led by founders & principals. No juniors hidden behind slides." },
];

export const WhyUs = () => {
  return (
    <section id="about" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[150px]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-5">
              Why Nova
            </span>
            <h2 className="font-display font-bold text-4xl md:text-6xl leading-tight">
              <span className="text-gradient">A partner that </span>
              <span className="text-gradient-primary italic">thinks like an owner.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We're not a vendor. We're the team you wish you had in-house — embedded,
              opinionated, and accountable to the same metrics you live by.
            </p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl shadow-glow hover:scale-105 transition-transform">
              Start a project →
            </a>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {points.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 glow-border hover:-translate-y-1 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-glow">
                  <p.icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-base mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
