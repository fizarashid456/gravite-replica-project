import { motion } from "framer-motion";
import { Palette, Code2, Megaphone, Rocket, Layers, Sparkles } from "lucide-react";

const services = [
  { icon: Palette, title: "Brand Identity", desc: "Distinctive visual systems that make you unforgettable across every touchpoint.", color: "from-violet-500 to-fuchsia-500" },
  { icon: Code2, title: "Web & App Development", desc: "Performant, scalable products engineered with modern stacks and pixel craft.", color: "from-cyan-400 to-blue-500" },
  { icon: Megaphone, title: "Growth Marketing", desc: "Data-driven campaigns that turn audiences into communities and revenue.", color: "from-fuchsia-500 to-pink-500" },
  { icon: Layers, title: "Product Design", desc: "User-obsessed UX/UI flows that convert — from wireframe to ship.", color: "from-purple-500 to-indigo-500" },
  { icon: Rocket, title: "Strategy & Planning", desc: "Positioning, roadmaps, and GTM that align your team behind a clear bet.", color: "from-blue-500 to-cyan-400" },
  { icon: Sparkles, title: "3D & Motion", desc: "Cinematic visuals, interactive 3D, and motion that brings stories to life.", color: "from-pink-500 to-violet-500" },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-32 md:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-5">
            What we do
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl leading-tight">
            <span className="text-gradient">A full-stack agency</span><br />
            <span className="text-gradient-primary">for the next era.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Six disciplines, one team. From the first sketch to global launch — we own every detail.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative glass rounded-3xl p-8 glow-border hover:-translate-y-1 transition-all duration-500"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform`}>
                <s.icon size={26} className="text-white" />
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-6 inline-flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
