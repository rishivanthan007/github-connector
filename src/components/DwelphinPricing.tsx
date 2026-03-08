import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal, ScrollRevealItem } from '@/components/ScrollReveal';

const plans = [
  {
    name: 'Free',
    price: '₹0',
    period: 'forever',
    description: 'Perfect for students just getting started with career planning.',
    features: [
      '1 Career Domain (CSE, ECE, or Finance)',
      'Weekly Sprint Plans',
      'Basic News Feed (10/day)',
      'Skill Gap Overview',
      'Community Access',
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '₹299',
    period: '/month',
    description: 'For serious students ready to accelerate their career trajectory.',
    features: [
      'All 3 Career Domains',
      '72-Hour Sprint Plans (Unlimited)',
      'Full News Feed (50/day) + AI Summary',
      'Deep Skill Gap Analysis',
      'AI-Powered Roadmaps',
      'Verified Achievements & Badges',
      'Priority Support',
    ],
    cta: 'Start Pro Trial',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For universities and organizations training cohorts at scale.',
    features: [
      'Everything in Pro',
      'Custom Domain Integration',
      'Cohort Analytics Dashboard',
      'Dedicated Account Manager',
      'API Access',
      'SSO & Team Management',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function DwelphinPricing() {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container-main">
        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold mb-4">
            <Sparkles size={14} /> Simple Pricing
          </span>
          <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Invest in Your <span className="italic text-primary">Future</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-md mx-auto">
            Start free, upgrade when you're ready. No hidden fees, cancel anytime.
          </p>
        </ScrollReveal>

        {/* Cards */}
        <ScrollReveal stagger className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <ScrollRevealItem key={plan.name}>
            <div

              className={`relative rounded-2xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                plan.highlighted
                  ? 'bg-foreground text-background border-2 border-foreground shadow-xl'
                  : 'bg-card border border-border'
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wide">
                  {plan.badge}
                </span>
              )}

              <div className="mb-6">
                <h3 className={`font-body text-sm font-semibold uppercase tracking-wider mb-3 ${
                  plan.highlighted ? 'text-background/60' : 'text-muted-foreground'
                }`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif-display text-4xl font-black">{plan.price}</span>
                  {plan.period && (
                    <span className={`text-sm ${plan.highlighted ? 'text-background/50' : 'text-muted-foreground'}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`text-sm mt-3 leading-relaxed ${
                  plan.highlighted ? 'text-background/60' : 'text-muted-foreground'
                }`}>
                  {plan.description}
                </p>
              </div>

              <div className="flex-1 mb-7">
                <div className="flex flex-col gap-3">
                  {plan.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'bg-primary' : 'bg-primary/10'
                      }`}>
                        <Check size={12} className={plan.highlighted ? 'text-primary-foreground' : 'text-primary'} />
                      </div>
                      <span className={`text-sm ${plan.highlighted ? 'text-background/80' : 'text-foreground/70'}`}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {plan.highlighted ? (
                <button className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:brightness-110 transition-all border-none cursor-pointer shadow-[var(--orange-glow)]">
                  {plan.cta} <ArrowRight size={14} />
                </button>
              ) : (
                <Button variant="outline" className="w-full">
                  {plan.cta} <ArrowRight size={14} />
                </Button>
              )}
            </div>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>

        {/* Bottom note */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          All prices in INR. GST included. 7-day free trial on Pro plan.
        </p>
      </div>
    </section>
  );
}
