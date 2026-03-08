import { Twitter, Linkedin, Instagram, Youtube, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  Product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Roadmap', href: '#' },
    { name: 'Changelog', href: '#' },
  ],
  Company: [
    { name: 'About', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  Resources: [
    { name: 'Documentation', href: '#' },
    { name: 'Help Center', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  Legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Cookies', href: '#' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Youtube, href: '#' },
];

export default function DwelphinFooter() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-main pt-16 pb-8">
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 no-underline mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-sm">🐬</span>
              </div>
              <span className="font-body text-lg font-bold text-foreground">DWELPHIN</span>
            </a>

            <p className="text-sm text-muted-foreground mb-4 max-w-[260px] leading-relaxed">
              Your AI-Powered Career Command Center. Convert market news into actionable career steps.
            </p>

            <div className="mb-5 space-y-1.5">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Mail size={14} /> <span>hello@dwelphin.com</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin size={14} /> <span>India</span>
              </div>
            </div>

            <div className="flex gap-2">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-9 h-9 flex items-center justify-center bg-background border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-colors no-underline"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-body text-sm font-bold text-foreground mb-4">{title}</h4>
              <ul className="list-none p-0 m-0 space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-muted-foreground no-underline hover:text-foreground transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-background border border-border rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-4 mb-8">
          <div className="flex-1">
            <h4 className="font-body text-base font-bold text-foreground mb-1">Stay in the loop</h4>
            <p className="text-sm text-muted-foreground">Get the latest career insights and product updates.</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:w-64 px-4 py-3 bg-card border border-border rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
            <button className="flex items-center gap-1.5 px-5 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:brightness-110 transition-all shadow-sm border-none cursor-pointer">
              Subscribe <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center gap-2 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">© 2026 DWELPHIN. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">
            Made with <span className="text-red-500">❤️</span> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
