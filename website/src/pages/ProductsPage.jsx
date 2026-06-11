import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTAButton from '../components/ui/CTAButton';

const products = [
  {
    id: 'evinra',
    name: 'Evinra',
    label: 'Event Commerce & Operations Ecosystem',
    color: '#3D20A0',
    description:
      'Ticketing, storefront, attendance, POS, vendor settlement and reporting — connected in one ecosystem for event organizers.',
    features: ['Events & Ticketing', 'Buyer Storefront', 'Attendance Scanning', 'POS & Vendor Settlement', 'Financial Reporting', 'Reserved Seating'],
    href: '/products/evinra',
  },
  {
    id: 'travelorhub',
    name: 'TravelorHub',
    label: 'Transportation Operations Platform',
    color: '#2DC97E',
    description:
      'Reservations, driver dispatch, travel agents, vouchers, flight tracking and reporting — from one platform.',
    features: ['Booking Engine', 'Driver Dispatch', 'Travel Agent Portals', 'Flight Tracking', 'Vouchers', 'Balances & Reports'],
    href: '/products/travelorhub',
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16" style={{ background: 'var(--color-bg)' }}>
      {/* Hero */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-border)] text-xs font-display font-semibold uppercase tracking-widest mb-6" style={{ color: 'var(--color-text-muted)' }}>
              Products built by ProDev
            </span>
            <h1 className="font-display font-extrabold text-5xl md:text-6xl tracking-tight mb-6" style={{ color: 'var(--color-text)' }}>
              Operational platforms,<br />not isolated websites
            </h1>
            <p className="font-body text-xl leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              Evinra and TravelorHub are ProDev product ecosystems designed for specific operational industries — proof that we build complete operational platforms, not isolated websites.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              className="rounded-2xl border overflow-hidden"
              style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}
            >
              {/* Color bar */}
              <div className="h-1.5" style={{ background: p.color }} />
              <div className="p-8">
                <span className="inline-block text-xs font-display font-semibold uppercase tracking-widest mb-3" style={{ color: p.color }}>
                  {p.label}
                </span>
                <h2 className="font-display font-extrabold text-3xl mb-4" style={{ color: 'var(--color-text)' }}>
                  {p.name}
                </h2>
                <p className="font-body leading-relaxed mb-6" style={{ color: 'var(--color-text-muted)' }}>
                  {p.description}
                </p>
                <ul className="grid grid-cols-2 gap-2 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm font-body" style={{ color: 'var(--color-text-muted)' }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: p.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to={p.href}>
                  <CTAButton variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />} className="w-full justify-center">
                    Explore {p.name}
                  </CTAButton>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 text-center" style={{ background: 'var(--color-bg-elevated)' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-extrabold text-3xl mb-4" style={{ color: 'var(--color-text)' }}>
            Ready to build software that runs your business?
          </h2>
          <p className="font-body mb-8" style={{ color: 'var(--color-text-muted)' }}>
            Book a strategy call and we will map your product, platform or automation opportunity.
          </p>
          <CTAButton href="/contact" variant="emerald" size="lg" icon={<Zap className="w-4 h-4" />}>
            Book Strategy Call
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
