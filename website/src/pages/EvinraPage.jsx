import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Zap } from 'lucide-react';
import CTAButton from '../components/ui/CTAButton';

const hubFeatures = ['Events', 'Tickets', 'Attendance', 'Vendors', 'POS', 'Vendor Settlement', 'Reports'];
const storefrontFeatures = ['Ticket Sales', 'Seat Selection', 'Checkout', 'Mobile Tickets', 'QR Entry'];

const surfaces = [
  {
    title: 'Operations Hub',
    color: '#3D20A0',
    description: 'Tenant-scoped administration for events, ticketing, attendance, vendors and financial reporting. Calendar modeled as production → show → event, so touring runs, multi-show seasons and one-off dates live in the same structure.',
    features: hubFeatures,
  },
  {
    title: 'Buyer Storefront',
    color: '#3D20A0',
    description: 'Per-organizer branding, event discovery, reserved seating or general admission, checkout and mobile QR tickets.',
    features: storefrontFeatures,
  },
  {
    title: 'Onsite Sales',
    color: '#2DC97E',
    description: 'Box-office sales at the door, connected to the same inventory as the online storefront. Square Terminal integration keeps walk-up sales reconciled with online tickets.',
    features: ['Walk-up POS', 'Square Terminal', 'Inventory sync', 'Cash & card'],
  },
  {
    title: 'Mobile Scanning',
    color: '#2DC97E',
    description: 'QR ticket validation and wristband support keep entry moving and attendance reconciled with sales automatically.',
    features: ['QR validation', 'Wristband support', 'Gate management', 'Attendance sync'],
  },
  {
    title: 'Platform Administration',
    color: '#F0A030',
    description: 'Tenant management and Stripe-powered billing for the platform itself. Full visibility into tenant health and module activation.',
    features: ['Tenant management', 'Stripe billing', 'Module control', 'Health dashboard'],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function EvinraPage() {
  return (
    <div className="min-h-screen pt-24 pb-16" style={{ background: 'var(--color-bg)' }}>

      {/* Hero */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-display font-semibold uppercase tracking-widest mb-6" style={{ borderColor: 'rgba(61,32,160,0.3)', color: '#3D20A0', background: 'rgba(61,32,160,0.06)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3D20A0] animate-pulse" />
              Event Commerce & Operations Ecosystem
            </span>
            <h1 className="font-display font-extrabold text-5xl md:text-6xl tracking-tight mb-6" style={{ color: 'var(--color-text)' }}>
              Evinra
            </h1>
            <p className="font-body text-xl leading-relaxed max-w-2xl mb-8" style={{ color: 'var(--color-text-muted)' }}>
              Run ticketing, attendance, vendors and event operations in one ecosystem. Evinra connects the organizer hub and the buyer storefront so sales and operations reconcile automatically.
            </p>
            <div className="flex flex-wrap gap-3">
              <CTAButton href="/contact?segment=evinra" variant="primary" size="lg" icon={<Zap className="w-4 h-4" />}>
                Request Demo
              </CTAButton>
              <CTAButton href="/solutions/event-operations-software" variant="ghost" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Event Operations Software
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-8" style={{ background: 'var(--color-bg-elevated)' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0.1)} className="grid grid-cols-3 gap-6 text-center">
            {[
              { value: '296', label: 'Orders processed' },
              { value: '59', label: 'Events managed' },
              { value: '5', label: 'Connected surfaces' },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display font-extrabold text-4xl mb-1" style={{ color: '#3D20A0' }}>{s.value}</p>
                <p className="font-body text-sm" style={{ color: 'var(--color-text-muted)' }}>{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problem + solution */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <motion.div {...fadeUp(0.1)}>
            <h2 className="font-display font-bold text-2xl mb-4" style={{ color: 'var(--color-text)' }}>
              Disconnected tools cost you money on event day
            </h2>
            <p className="font-body leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              Most event operators stitch together a ticketing vendor, a door-scan app, spreadsheet vendor settlements and a separate POS. Nothing reconciles, and nobody sees the full picture until weeks after the event.
            </p>
          </motion.div>
          <motion.div {...fadeUp(0.2)}>
            <h2 className="font-display font-bold text-2xl mb-4" style={{ color: 'var(--color-text)' }}>
              One connected ecosystem
            </h2>
            <p className="font-body leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              Evinra connects the organizer side — events, ticketing, attendance, vendors, POS workflows, reporting — with the buyer side: discovery, reserved seating, checkout, mobile QR tickets. Sales and operations reconcile automatically.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Five surfaces */}
      <section className="px-6 pb-20" style={{ background: 'var(--color-bg-elevated)' }}>
        <div className="max-w-4xl mx-auto py-16">
          <motion.div {...fadeUp()} className="mb-12">
            <h2 className="font-display font-extrabold text-4xl tracking-tight mb-4" style={{ color: 'var(--color-text)' }}>
              Five surfaces, one data layer
            </h2>
            <p className="font-body text-lg" style={{ color: 'var(--color-text-muted)' }}>
              Every surface reads and writes the same operational data. No exports, no reconciliation work.
            </p>
          </motion.div>
          <div className="space-y-6">
            {surfaces.map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUp(0.1 + i * 0.08)}
                className="rounded-2xl border p-6"
                style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}
              >
                <div className="flex flex-wrap items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: s.color }} />
                      <h3 className="font-display font-bold text-lg" style={{ color: 'var(--color-text)' }}>{s.title}</h3>
                    </div>
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{s.description}</p>
                  </div>
                  <ul className="flex flex-wrap gap-2 flex-shrink-0">
                    {s.features.map((f) => (
                      <li key={f} className="px-3 py-1 rounded-full text-xs font-display font-semibold border" style={{ borderColor: `${s.color}30`, color: s.color, background: `${s.color}08` }}>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()} className="mb-10">
            <h2 className="font-display font-extrabold text-4xl tracking-tight mb-4" style={{ color: 'var(--color-text)' }}>
              Built and operated by ProDev
            </h2>
            <p className="font-body text-lg leading-relaxed max-w-2xl" style={{ color: 'var(--color-text-muted)' }}>
              Evinra is a ProDev product: multi-tenant architecture with Stripe billing, onsite sales and mobile scanning apps. The same team and architecture decisions are available for your product.
            </p>
          </motion.div>
          <motion.div {...fadeUp(0.1)} className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Multi-tenancy from day one', body: 'Tenant scoping is designed into the data model and auth layer at the start — retrofitting it later is one of the most expensive mistakes a SaaS can make.' },
              { title: 'Billing wired into the product', body: 'Stripe subscriptions, plans and billing events are part of the architecture, not an afterthought bolted on before launch.' },
              { title: 'Single shared data service', body: 'Every surface — storefront, hub, box office, mobile scan, admin — reads and writes the same operational data. No exports, no reconciliation.' },
              { title: 'Data model: tenant → production → show → event → order', body: 'Touring productions, multi-show seasons and one-off dates live in the same structure.' },
            ].map((a) => (
              <div key={a.title} className="rounded-xl border p-5" style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#3D20A0' }} />
                  <div>
                    <p className="font-display font-semibold text-sm mb-1" style={{ color: 'var(--color-text)' }}>{a.title}</p>
                    <p className="font-body text-sm" style={{ color: 'var(--color-text-muted)' }}>{a.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
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
          <CTAButton href="/contact" variant="primary" size="lg">
            Book Strategy Call
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
