import { Zap, Target, TrendingUp, Brain, Calendar, Award, Cpu, Code, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal, ScrollRevealItem } from '@/components/ScrollReveal';

const features = [
  { icon: Zap, title: 'Real-Time News Analysis', description: 'AI scans industry news and identifies opportunities relevant to your career goals within 60 seconds.', color: 'text-primary' },
  { icon: Target, title: '72-Hour Action Tasks', description: 'Every insight converts into specific, actionable tasks you can complete in just 3 days.', color: 'text-blue-500' },
  { icon: TrendingUp, title: 'Skill Gap Analysis', description: 'Understand exactly what skills you need and get personalized learning recommendations.', color: 'text-emerald-500' },
  { icon: Brain, title: 'AI-Powered Roadmaps', description: 'Get a personalized career roadmap that adapts based on your progress and market changes.', color: 'text-violet-500' },
  { icon: Calendar, title: 'Progress Tracking', description: 'Visualize your journey with streaks, XP points, and milestone celebrations.', color: 'text-amber-500' },
  { icon: Award, title: 'Verified Achievements', description: 'Submit evidence of completion and earn verified badges to showcase your growth.', color: 'text-pink-500' },
];

const domains = [
  { name: 'ECE', fullName: 'Electronics & Communication', description: 'Semiconductors, embedded systems, VLSI, 5G, IoT', icon: Cpu, color: 'text-blue-500', border: 'border-l-blue-500' },
  { name: 'CSE', fullName: 'Computer Science & Engineering', description: 'Software development, AI/ML, Cloud, DevOps, Cybersecurity', icon: Code, color: 'text-emerald-500', border: 'border-l-emerald-500' },
  { name: 'Finance', fullName: 'Finance & Fintech', description: 'Investment banking, quantitative roles, DeFi, algorithmic trading', icon: TrendingUp, color: 'text-violet-500', border: 'border-l-violet-500' },
];

const benefits = [
  'Personalized career roadmaps',
  'Real-time industry news tracking',
  '72-hour actionable tasks',
  'AI-verified skill progression',
  'Curated learning resources',
  'Achievement-based motivation',
];

export default function DwelphinFeatures() {
  return (
    <section id="features" className="py-20 bg-card">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold mb-4">
            ✨ Why DWELPHIN?
          </span>
        <ScrollReveal>
          <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your Career, <span className="italic text-primary">Supercharged</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-lg mx-auto">
            We transform market signals into personalized action plans, so you're always one step ahead.
          </p>
        </ScrollReveal>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-background border border-border rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 ${f.color}`}>
                <f.icon size={24} />
              </div>
              <h3 className="font-body text-base font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Domains + Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="sprint">
          {/* Domains */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-background text-muted-foreground text-sm mb-4">
              🎯 Domains We Cover
            </span>
            <h3 className="font-serif-display text-2xl font-bold text-foreground mb-3">
              Built for <span className="italic text-primary">Tech & Finance</span>
            </h3>
            <p className="text-sm text-muted-foreground mb-5">
              Whether you're an engineering student or a finance professional, DWELPHIN tailors every recommendation to your specific field.
            </p>
            <div className="flex flex-col gap-3">
              {domains.map((d, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 bg-background border border-border border-l-4 ${d.border} rounded-xl p-4 hover:translate-x-1 hover:shadow-md transition-all duration-300 cursor-pointer`}
                >
                  <div className={`w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 ${d.color}`}>
                    <d.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className={`font-body text-sm font-bold ${d.color}`}>{d.name}</span>
                      <span className="text-border">·</span>
                      <span className="text-xs text-muted-foreground">{d.fullName}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{d.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-background border border-border rounded-2xl p-7">
            <h3 className="font-serif-display text-xl font-bold text-foreground mb-5">What You Get</h3>
            <div className="flex flex-col gap-3.5 mb-6">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={14} className="text-emerald-500" />
                  </div>
                  <span className="text-sm font-medium text-foreground/80">{b}</span>
                </div>
              ))}
            </div>
            <div className="pt-5 border-t border-border">
              <Button variant="hero" className="w-full" size="lg">
                Start Your Journey <ArrowRight size={16} />
              </Button>
              <p className="text-center text-xs text-muted-foreground mt-3">
                Free plan available · No credit card required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
