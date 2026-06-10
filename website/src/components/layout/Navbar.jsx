import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import CTAButton from '../ui/CTAButton';

const links = [
  { label: 'Products',    href: '#productos' },
  { label: 'Services',    href: '#servicios' },
  { label: 'How It Works', href: '#proceso' },
  { label: 'Cases',       href: '#casos' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-glass border-b border-border/60'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <span className="flex items-center gap-2">
              {/* Logo mark */}
              <img src="/logo-icon.png" alt="ProDev" className="h-8 w-8 object-contain rounded-lg" />
              <span className="font-display font-extrabold text-[1.1rem] tracking-tight text-white">
                PRODEV
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-body text-gray-mid hover:text-white rounded-lg hover:bg-white/5 transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#contacto" className="text-sm font-body text-gray-mid hover:text-white transition-colors">
              Contact
            </a>
            <CTAButton href="#audit" size="sm" variant="emerald">
              Free Audit
            </CTAButton>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-gray-mid hover:text-white hover:bg-white/5 transition-all"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{    opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 inset-x-0 z-40 bg-glass border-b border-border/60 md:hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base font-body text-gray-mid hover:text-white transition-colors border-b border-border last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <CTAButton href="#audit" variant="emerald" className="w-full justify-center">
                  Free Automation Audit
                </CTAButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
