import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DwelphinCTA() {
  return (
    <section id="cta" className="relative py-24 overflow-hidden bg-background">
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, hsla(0,0%,100%,0.03) 1px, transparent 1px), linear-gradient(to bottom, hsla(0,0%,100%,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Gradient Orbs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/20 blur-[60px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-[60px] pointer-events-none" />

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-block px-5 py-2.5 rounded-full text-sm font-semibold text-accent border border-accent/30 bg-accent/10 mb-7">
            🚀 Start Today
          </span>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
            Ready to <span className="text-primary">Architect</span>
            <br />
            Your Future?
          </h2>

          <p className="text-lg text-muted-foreground mb-9 max-w-lg mx-auto">
            Join thousands of professionals using AI to accelerate their careers.
            Your personalized roadmap is just a few clicks away.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl no-underline shadow-[var(--glow-primary)] hover:brightness-110 transition-all"
            >
              Get Started Free
              <ArrowRight size={18} />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary border border-border text-foreground font-semibold rounded-xl no-underline hover:bg-muted transition-colors"
            >
              <Play size={16} />
              Watch Demo
            </a>
          </div>

          <p className="mt-7 text-sm text-muted-foreground">
            ✓ Free plan available &nbsp;&nbsp; ✓ No credit card required &nbsp;&nbsp; ✓ 5 minute setup
          </p>
        </motion.div>
      </div>
    </section>
  );
}
