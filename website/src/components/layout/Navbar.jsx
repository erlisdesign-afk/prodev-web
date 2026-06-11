import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import CTAButton from '../ui/CTAButton';

const nav = [
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Evinra — Event Commerce', href: '/products/evinra' },
      { label: 'TravelorHub — Transport Ops', href: '/products/travelorhub' },
    ],
  },
  {
    label: 'Case Studies',
    href: '/case-studies',
    children: [
      { label: 'King Boatworks', href: '/case-studies/king-boatworks' },
      { label: 'HQT Punta Cana', href: '/case-studies/hqt-punta-cana' },
      { label: 'Building Evinra', href: '/case-studies/evinra' },
    ],
  },
  { label: 'Custom Solutions', href: '/custom-solutions' },
  { label: 'Consulting', href: '/consulting' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdown(null);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-glass border-b border-[var(--color-border)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
            <img src="/logo-icon.png" alt="ProDev" className="h-8 w-8 object-contain rounded-lg" />
            <span className="font-display font-extrabold text-[1.1rem] tracking-tight" style={{ color: 'var(--color-text)' }}>
              PRODEV
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
            {nav.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setDropdown(item.label)}
                onMouseLeave={() => setDropdown(null)}
              >
                <Link
                  to={item.href}
                  className="flex items-center gap-1 px-3.5 py-2 text-sm font-body rounded-lg hover:bg-black/5 transition-all duration-150"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3 opacity-60" />}
                </Link>
                {item.children && dropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-56 rounded-xl border shadow-lg py-1.5 z-50"
                    style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-4 py-2.5 text-sm font-body hover:bg-black/5 transition-colors"
                        style={{ color: 'var(--color-text-muted)' }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <Link to="/contact" className="text-sm font-body hover:underline" style={{ color: 'var(--color-text-muted)' }}>
              Contact
            </Link>
            <CTAButton href="/contact" size="sm" variant="emerald">
              Book Strategy Call
            </CTAButton>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-lg hover:bg-black/5 transition-all"
              style={{ color: 'var(--color-text-muted)' }}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 inset-x-0 z-40 border-b md:hidden"
            style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {nav.map((item) => (
                <div key={item.href}>
                  <Link
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base font-body border-b"
                    style={{ color: 'var(--color-text-muted)', borderColor: 'var(--color-border)' }}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          onClick={() => setOpen(false)}
                          className="block py-2.5 text-sm font-body border-b"
                          style={{ color: 'var(--color-text-muted)', borderColor: 'var(--color-border)', opacity: 0.75 }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block py-3 text-base font-body"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Contact
              </Link>
              <div className="pt-4 pb-2">
                <CTAButton href="/contact" variant="emerald" className="w-full justify-center">
                  Book Strategy Call
                </CTAButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
