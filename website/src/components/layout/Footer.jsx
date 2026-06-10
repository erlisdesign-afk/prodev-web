import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

const nav = [
  {
    heading: 'Products',
    links: [
      { label: 'Evinra', href: '#productos' },
      { label: 'TravelorHub', href: '#productos' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'SaaS MVP with AI', href: '#servicios' },
      { label: 'Custom Solutions', href: '#servicios' },
      { label: 'Operations Automation', href: '#servicios' },
      { label: 'Strategic Consulting', href: '#servicios' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'How It Works', href: '#proceso' },
      { label: 'Who We Build For', href: '#personas' },
      { label: 'Free Automation Audit', href: '#audit' },
    ],
  },
];

const social = [
  { icon: Linkedin, href: 'https://linkedin.com/company/prodev-solutions', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/prodev_solutions', label: 'Twitter' },
  { icon: Github, href: 'https://github.com/erlisdesign-afk', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-2.5 mb-5">
              <img src="/logo-icon.png" alt="ProDev" className="h-8 w-8 object-contain rounded-lg" />
              <span className="font-display font-extrabold text-white tracking-tight">PRODEV</span>
            </a>

            <p className="font-body text-gray-mid text-sm leading-relaxed max-w-xs mb-6">
              We turn manual operations into assets that scale on their own. Software that changes how your business runs, not just how it looks.
            </p>

            <div className="flex items-center gap-3">
              {social.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-xl border border-border bg-bg-card flex items-center justify-center text-gray-mid hover:text-white hover:border-indigo-DEFAULT/50 transition-colors"
                  >
                    <Icon className="w-4 h-4" strokeWidth={1.5} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Nav columns */}
          {nav.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-display font-semibold text-white uppercase tracking-widest mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm font-body text-gray-mid hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      {l.label}
                      {l.external && <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body text-gray-mid/50">
            © {new Date().getFullYear()} ProDev Solution LLC. All rights reserved. · Sarasota, FL
          </p>
          <div className="flex items-center gap-5">
            {['Privacy', 'Terms'].map((t) => (
              <a key={t} href="#" className="text-xs font-body text-gray-mid/50 hover:text-gray-mid transition-colors">
                {t}
              </a>
            ))}
            <span className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-emerald">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
              Accepting projects
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
