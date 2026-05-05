import { motion } from "framer-motion";
import jungle from "@/assets/jungle.jpg";
import fox from "@/assets/fox.jpg";
import eagle from "@/assets/eagle.jpg";

const Block = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Manifesto = () => {
  return (
    <section id="about" className="relative py-32 md:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 space-y-32 md:space-y-48">

        {/* Quote */}
        <Block className="max-w-4xl">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-primary mb-8">— Affairs Beyond Technology</p>
          <p className="font-serif italic text-3xl md:text-5xl leading-tight text-foreground/90">
            "It has become a callous, crowded, chaotic — yet deeply <span className="text-gradient-gold not-italic">connected</span> place."
          </p>
        </Block>

        {/* Jungle row */}
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <Block className="md:col-span-5">
            <h3 className="font-serif text-5xl md:text-7xl leading-[0.95] text-foreground">
              today,<br />
              the <span className="italic text-primary">jungle</span><br />
              of the corporate<br />
              world expects to<br />
              build <span className="italic">something…</span>
            </h3>
          </Block>
          <Block className="md:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden shadow-deep">
              <img src={jungle} alt="Jungle" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
              <p className="absolute bottom-8 left-8 font-serif italic text-2xl text-primary-glow">
                with complete awareness
              </p>
            </div>
          </Block>
        </div>

        {/* Fox row */}
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <Block className="md:col-span-7 md:order-2">
            <h3 className="font-serif text-5xl md:text-7xl leading-[0.95] text-foreground">
              with the <span className="italic text-primary">taste</span><br />
              of success<br />
              along…
            </h3>
            <p className="mt-8 font-serif italic text-xl text-muted-foreground max-w-md">
              A symbol of creation, a creation of design ecstasy — because we believe in design supremacy.
            </p>
          </Block>
          <Block className="md:col-span-5 md:order-1">
            <div className="relative aspect-square overflow-hidden">
              <img src={fox} alt="Fox" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </Block>
        </div>

        {/* Eagle row */}
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <Block className="md:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img src={eagle} alt="Eagle" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </Block>
          <Block className="md:col-span-7">
            <p className="font-display text-xs tracking-[0.4em] uppercase text-primary mb-6">— Strategist Performance</p>
            <h3 className="font-serif text-5xl md:text-7xl leading-[0.95] text-foreground">
              <span className="italic">faster</span> means<br />
              of communication —<br />
              <span className="text-gradient-gold not-italic font-display font-bold">our motto.</span>
            </h3>
            <p className="mt-10 font-serif italic text-2xl text-foreground/80">
              Your success, <span className="text-primary">our reputation.</span>
            </p>
          </Block>
        </div>

        {/* 3P pillars */}
        <Block>
          <div className="grid grid-cols-3 gap-6 md:gap-12 border-t border-b border-border py-16">
            {["Purpose", "Plan", "Present"].map((p, i) => (
              <div key={p} className="text-center">
                <span className="font-display text-xs tracking-[0.4em] text-primary">0{i + 1}</span>
                <h4 className="mt-4 font-serif italic text-4xl md:text-6xl text-foreground">{p}</h4>
              </div>
            ))}
          </div>
        </Block>
      </div>
    </section>
  );
};
