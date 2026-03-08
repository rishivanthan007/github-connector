import { ArrowRight } from 'lucide-react';

const navLinks = [
  { name: 'Problem', href: '#problem' },
  { name: 'Features', href: '#features' },
  { name: 'Sprint Engine', href: '#sprint' },
  { name: 'Pricing', href: '#pricing' },
];

export default function DwelphinNavbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="container-main flex items-center justify-between h-14">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 no-underline">
          <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8 2 4 6 4 10c0 3 2 6 5 8l3 4 3-4c3-2 5-5 5-8 0-4-4-8-8-8z" fill="white" />
            </svg>
          </div>
          <span className="font-body text-base font-bold text-foreground tracking-tight">Dwelphin</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors no-underline"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#cta"
          className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-foreground no-underline hover:text-primary transition-colors"
        >
          Get Early Access <ArrowRight size={14} />
        </a>
      </div>
    </header>
  );
}
