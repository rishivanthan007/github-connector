import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function DwelphinCTA() {
  return (
    <section id="cta" className="relative py-24 overflow-hidden bg-background">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-main relative z-10">
        <ScrollReveal className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-5 py-2 rounded-full text-sm font-semibold text-primary border border-primary/20 bg-primary/5 mb-7">
            🚀 Start Today
          </span>

          <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
            Ready to <span className="italic text-primary">Architect</span>
            <br />Your Future?
          </h2>

          <p className="text-lg text-muted-foreground mb-9 max-w-lg mx-auto">
            Join thousands of professionals using AI to accelerate their careers.
            Your personalized roadmap is just a few clicks away.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button variant="hero" size="lg" className="text-base px-8 py-3 h-auto">
              Get Started Free <ArrowRight size={18} />
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 py-3 h-auto gap-2">
              <Play size={16} /> Watch Demo
            </Button>
          </div>

          <p className="mt-7 text-sm text-muted-foreground">
            ✓ Free plan available &nbsp;&nbsp; ✓ No credit card required &nbsp;&nbsp; ✓ 5 minute setup
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
