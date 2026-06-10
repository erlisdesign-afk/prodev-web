import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

const nav = [
  {
    heading: 'Productos',
    links: [
      { label: 'Evinra', href: '#productos' },
      { label: 'TravelorHub', href: '#productos' },
    ],
  },
  {
    heading: 'Servicios',
    links: [
      { label: 'SaaS MVP con IA', href: '#servicios' },
      { label: 'Custom Solutions', href: '#servicios' },
      { label: 'Automatización', href: '#servicios' },
      { label: 'Consulting', href: '#servicios' },
    ],
  },
  {
    heading: 'Empresa',
    links: [
      { label: 'Cómo funciona', href: '#proceso' },
      { label: 'Para quién', href: '#personas' },
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
            <a href="#" className="inline-flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-DEFAULT to-indigo-mid flex items-center justify-center">
                <span className="font-display font-extrabold text-white text-sm leading-none">P</span>
              </div>
              <span className="font-display font-extrabold text-white tracking-tight">PRODEV</span>
            </a>

            <p className="font-body text-gray-mid text-sm leading-relaxed max-w-xs mb-6">
              Convertimos operaciones manuales en activos que escalan solos. Software que cambia cómo funciona tu negocio, no solo cómo se ve.
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
            © {new Date().getFullYear()} ProDev Solutions. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-5">
            {['Privacidad', 'Términos'].map((t) => (
              <a key={t} href="#" className="text-xs font-body text-gray-mid/50 hover:text-gray-mid transition-colors">
                {t}
              </a>
            ))}
            <span className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-emerald">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
              Aceptando proyectos
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
