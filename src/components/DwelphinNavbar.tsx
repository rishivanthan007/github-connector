import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#', active: true },
  { name: 'Features', href: '#features' },
  { name: 'Domains', href: '#domains' },
  { name: 'Pricing', href: '#pricing' },
];

export default function DwelphinNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="container-main flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 no-underline">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-display font-black text-lg">D</span>
          </div>
          <span className="font-display text-2xl font-bold text-foreground tracking-tight">DWELPHIN</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 no-underline ${
                link.active
                  ? 'bg-foreground text-background'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#cta"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold text-foreground border border-border no-underline hover:bg-secondary transition-colors"
          >
            Login / Register
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
          >
            <div className="container-main py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors no-underline"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#cta"
                className="mt-2 px-4 py-3 rounded-lg text-sm font-semibold text-foreground border border-border text-center no-underline"
              >
                Login / Register
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
