import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FLOATING_BADGES = [
  { text: 'Sprint Plan · Generated', icon: '🎯', top: '8%', right: '5%', delay: '0s' },
  { text: 'Groq LLM · llama3.1', icon: '⚡', top: '38%', right: '48%', delay: '0.5s' },
  { text: 'Career XP · +128 pts', icon: '📝', top: '58%', right: '2%', delay: '1s' },
  { text: 'NewsAPI · 50/day', icon: '📰', top: '82%', right: '15%', delay: '1.5s' },
];

const STATS = [
  { value: '72hr', label: 'Sprint Plans' },
  { value: '3', label: 'Career Domains' },
  { value: '₹0', label: 'To Start Free' },
];

export default function DwelphinHero() {
  return (
    <section className="relative min-h-screen pt-14 overflow-hidden bg-background">
      {/* Floating orange dot */}
      <div
        className="absolute w-2.5 h-2.5 rounded-full bg-primary"
        style={{ top: '5%', right: '48%', animation: 'float 3s ease-in-out infinite' }}
      />

      <div className="container-main relative z-10 flex flex-col lg:flex-row items-start min-h-[calc(100vh-56px)]">
        {/* Left Content */}
        <div className="flex-1 pt-12 lg:pt-20 pb-8 max-w-xl"
          style={{ animation: 'fade-in-up 0.8s ease-out both' }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card mb-8">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono-space text-xs tracking-wider text-muted-foreground uppercase">
              AI Career Command Center · India-First · 2026
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif-display font-black text-foreground leading-[0.95] tracking-tight mb-6">
            <span className="block text-6xl md:text-7xl lg:text-8xl">YOUR</span>
            <span className="block text-6xl md:text-7xl lg:text-8xl">CAREER</span>
            <span className="block text-6xl md:text-7xl lg:text-8xl italic text-primary">GPS.</span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-body leading-relaxed mb-8 max-w-md">
            Market news happens. Your career doesn't respond.
            Dwelphin converts today's AI signals into a personal 72-hour
            sprint — for CSE, ECE, and Finance students who are done
            guessing and ready to execute.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mb-10">
            <Button variant="hero" size="lg" className="text-base px-7 py-3 h-auto">
              Launch Dashboard <ArrowRight size={16} />
            </Button>
            <Button variant="heroOutline" size="lg" className="text-base h-auto">
              See How It Works
            </Button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 pt-6 border-t border-border">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-serif-display text-2xl md:text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Radar Visualization */}
        <div
          className="flex-1 relative min-h-[500px] lg:min-h-[600px] w-full"
          style={{ animation: 'fade-in-up 0.8s ease-out 0.3s both' }}
        >
          {/* Radar Rings */}
          <div className="absolute top-1/2 left-1/2 w-[420px] h-[420px] rounded-full border border-radar/40"
            style={{ transform: 'translate(-50%, -50%)' }} />
          <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full border border-radar/50"
            style={{ transform: 'translate(-50%, -50%)' }} />
          <div className="absolute top-1/2 left-1/2 w-[180px] h-[180px] rounded-full border border-radar/60"
            style={{ transform: 'translate(-50%, -50%)' }} />

          {/* Pulsing ring */}
          <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] rounded-full border-2 border-primary/20"
            style={{ animation: 'pulse-ring 3s ease-in-out infinite' }} />

          {/* Center Content */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="font-serif-display text-6xl font-black text-foreground">66</div>
            <div className="font-mono-space text-xs tracking-widest text-muted-foreground uppercase mt-1">
              Hour Signal
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">Active · Now</div>
          </div>

          {/* Dolphin mascot */}
          <div
            className="absolute w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg"
            style={{
              top: '52%', right: '20%',
              animation: 'float 4s ease-in-out infinite',
            }}
          >
            <span className="text-lg">🐬</span>
          </div>

          {/* Small orange dot on ring */}
          <div
            className="absolute w-3 h-3 rounded-full bg-primary border-2 border-background"
            style={{ top: '20%', right: '38%' }}
          />

          {/* Floating Badges */}
          {FLOATING_BADGES.map((badge, i) => (
            <div
              key={i}
              className="absolute bg-card/90 backdrop-blur-sm border border-border rounded-full px-4 py-2 flex items-center gap-2 shadow-sm"
              style={{
                top: badge.top,
                right: badge.right,
                animation: `float 5s ease-in-out ${badge.delay} infinite`,
              }}
            >
              <span className="text-sm">{badge.icon}</span>
              <span className="font-mono-space text-xs text-foreground whitespace-nowrap">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll to explore */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="font-mono-space text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Scroll to explore
        </span>
        <div className="w-px h-6 bg-border" />
      </div>

      {/* News Ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-foreground text-background py-2 overflow-hidden z-20">
        <div
          className="flex whitespace-nowrap gap-8"
          style={{ animation: 'ticker-scroll 30s linear infinite' }}
        >
          {[
            '🟢 Google AI Fellowship 2026',
            '🔺 HIGH RBI Fintech Sandbox Expansion',
            '🔺 WATCH Microsoft Azure AI Certs Free',
            '🟢 LEARN NVIDIA Hiring India Engineers',
            '🔺 ACT Goldman Sachs Quant Roles Open',
            '🟢 Google AI Fellowship 2026',
            '🔺 HIGH RBI Fintech Sandbox Expansion',
            '🔺 WATCH Microsoft Azure AI Certs Free',
            '🟢 LEARN NVIDIA Hiring India Engineers',
            '🔺 ACT Goldman Sachs Quant Roles Open',
          ].map((item, i) => (
            <span key={i} className="font-mono-space text-xs tracking-wide">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
