import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FLOATING_BADGES = [
  { text: 'Sprint Plan · Generated', icon: '🎯', top: '5%', right: '5%', delay: '0s' },
  { text: 'Groq LLM · llama3.1', icon: '⚡', top: '35%', right: '55%', delay: '0.5s' },
  { text: 'Career XP · +128 pts', icon: '📝', top: '60%', right: '0%', delay: '1s' },
  { text: 'NewsAPI · 50/day', icon: '📰', top: '80%', right: '20%', delay: '1.5s' },
];

const STATS = [
  { value: '72hr', label: 'Sprint Plans' },
  { value: '3', label: 'Career Domains' },
  { value: '₹0', label: 'To Start Free' },
];

export default function DwelphinHero() {
  return (
    <section className="relative min-h-screen pt-14 overflow-hidden bg-background">
      {/* Floating orange dot — hidden on mobile */}
      <div
        className="absolute w-2.5 h-2.5 rounded-full bg-primary hidden md:block"
        style={{ top: '5%', right: '48%', animation: 'float 3s ease-in-out infinite' }}
      />

      <div className="container-main relative z-10 flex flex-col lg:flex-row items-start lg:items-center lg:min-h-[calc(100vh-56px)]">
        {/* Left Content */}
        <div
          className="flex-1 pt-8 md:pt-12 lg:pt-20 pb-6 lg:pb-8 w-full lg:max-w-xl"
          style={{ animation: 'fade-in-up 0.8s ease-out both' }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full border border-border bg-card mb-6 md:mb-8">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono-space text-[10px] md:text-xs tracking-wider text-muted-foreground uppercase">
              AI Career Command Center · India-First · 2026
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif-display font-black text-foreground leading-[0.95] tracking-tight mb-4 md:mb-6">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">YOUR</span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">CAREER</span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl italic text-primary">GPS.</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-body leading-relaxed mb-6 md:mb-8 max-w-md">
            Market news happens. Your career doesn't respond.
            Dwelphin converts today's AI signals into a personal 72-hour
            sprint — for CSE, ECE, and Finance students who are done
            guessing and ready to execute.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-8 md:mb-10">
            <Button variant="hero" size="lg" className="text-sm md:text-base px-6 md:px-7 py-3 h-auto w-full sm:w-auto">
              Launch Dashboard <ArrowRight size={16} />
            </Button>
            <Button variant="heroOutline" size="lg" className="text-sm md:text-base h-auto w-full sm:w-auto justify-center">
              See How It Works
            </Button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 md:gap-8 pt-5 md:pt-6 border-t border-border">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-serif-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-xs text-muted-foreground mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Radar Visualization */}
        <div
          className="flex-1 relative w-full min-h-[380px] sm:min-h-[440px] md:min-h-[500px] lg:min-h-[600px] mx-auto max-w-[500px] lg:max-w-none"
          style={{ animation: 'fade-in-up 0.8s ease-out 0.3s both' }}
        >
          {/* Radar Rings — scaled down on mobile */}
          <div className="absolute top-1/2 left-1/2 w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px] h-[280px] sm:h-[340px] md:h-[380px] lg:h-[420px] rounded-full border border-radar/40"
            style={{ transform: 'translate(-50%, -50%)' }} />
          <div className="absolute top-1/2 left-1/2 w-[200px] sm:w-[240px] md:w-[270px] lg:w-[300px] h-[200px] sm:h-[240px] md:h-[270px] lg:h-[300px] rounded-full border border-radar/50"
            style={{ transform: 'translate(-50%, -50%)' }} />
          <div className="absolute top-1/2 left-1/2 w-[120px] sm:w-[150px] md:w-[165px] lg:w-[180px] h-[120px] sm:h-[150px] md:h-[165px] lg:h-[180px] rounded-full border border-radar/60"
            style={{ transform: 'translate(-50%, -50%)' }} />

          {/* Pulsing ring */}
          <div className="absolute top-1/2 left-1/2 w-[240px] sm:w-[290px] md:w-[320px] lg:w-[350px] h-[240px] sm:h-[290px] md:h-[320px] lg:h-[350px] rounded-full border-2 border-primary/20"
            style={{ animation: 'pulse-ring 3s ease-in-out infinite' }} />

          {/* Center Content */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-black text-foreground">66</div>
            <div className="font-mono-space text-[10px] sm:text-xs tracking-widest text-muted-foreground uppercase mt-1">
              Hour Signal
            </div>
            <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">Active · Now</div>
          </div>

          {/* Dolphin mascot */}
          <div
            className="absolute w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center shadow-lg"
            style={{
              top: '52%', right: '15%',
              animation: 'float 4s ease-in-out infinite',
            }}
          >
            <span className="text-base sm:text-lg">🐬</span>
          </div>

          {/* Small orange dot on ring */}
          <div
            className="absolute w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-primary border-2 border-background"
            style={{ top: '20%', right: '38%' }}
          />

          {/* Floating Badges — hidden on very small screens, shown from sm up */}
          {FLOATING_BADGES.map((badge, i) => (
            <div
              key={i}
              className="absolute hidden sm:flex bg-card/90 backdrop-blur-sm border border-border rounded-full px-3 md:px-4 py-1.5 md:py-2 items-center gap-1.5 md:gap-2 shadow-sm"
              style={{
                top: badge.top,
                right: badge.right,
                animation: `float 5s ease-in-out ${badge.delay} infinite`,
              }}
            >
              <span className="text-xs md:text-sm">{badge.icon}</span>
              <span className="font-mono-space text-[10px] md:text-xs text-foreground whitespace-nowrap">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll to explore — hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10 hidden md:flex">
        <span className="font-mono-space text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Scroll to explore
        </span>
        <div className="w-px h-6 bg-border" />
      </div>

      {/* News Ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-foreground text-background py-1.5 md:py-2 overflow-hidden z-20">
        <div
          className="flex whitespace-nowrap gap-6 md:gap-8"
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
            <span key={i} className="font-mono-space text-[10px] md:text-xs tracking-wide">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
