import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export const CTA = () => {
  return (
    <section id="contact" className="relative py-32 md:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] p-10 md:p-20 text-center glass-strong shadow-card"
        >
          <div className="absolute inset-0 bg-gradient-primary opacity-20" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/40 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/30 blur-[120px]" />

          <div className="relative">
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-5">
              Let's build something
            </span>
            <h2 className="font-display font-bold text-4xl md:text-7xl leading-tight">
              <span className="text-gradient">Ready to launch</span><br />
              <span className="text-gradient-primary italic">your next big thing?</span>
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
              Tell us about your project. We respond within 24 hours with a tailored plan and timeline.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:hello@nova.studio"
                className="group inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-7 py-4 rounded-xl shadow-glow hover:scale-105 transition-transform"
              >
                Start a project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:hello@nova.studio"
                className="group inline-flex items-center gap-2 glass text-foreground font-semibold px-7 py-4 rounded-xl hover:border-primary/50 transition-colors"
              >
                <Mail size={16} className="text-accent" /> hello@nova.studio
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
