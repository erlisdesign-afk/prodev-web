import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTAButton from '../components/ui/CTAButton';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const surfaces = [
  { title: 'Operations hub', body: 'Tenant-scoped administration for events, ticketing, attendance, vendors and financial reporting, with the calendar modeled as production → show → event.' },
  { title: 'Buyer storefront', body: 'Per-organizer branding, event discovery, reserved seating, checkout and mobile QR tickets.' },
  { title: 'Onsite sales', body: 'Box-office sales at the door, connected to the same inventory as the online storefront. Square Terminal integration.' },
  { title: 'Mobile scanning', body: 'QR ticket validation and wristband support keep entry moving and attendance reconciled with sales.' },
  { title: 'Platform administration', body: 'Tenant management and Stripe-powered billing for the platform itself — module control, tenant health, billing events.' },
];

const architecture = [
  { title: 'Multi-tenancy from day one', body: 'Tenant scoping designed into the data model and authentication from the start — retrofitting it later is one of the most expensive SaaS mistakes.' },
  { title: 'Single shared data service', body: 'Every surface reads and writes the same operational data. No exports, no manual reconciliation.' },
  { title: 'Per-tenant users and roles', body: 'Role-based access designed per tenant — organizers see only their data.' },
  { title: 'Billing as a product feature', body: 'Stripe subscriptions, plans and billing events built into the architecture — not an afterthought before launch.' },
];

export default function CaseStudyEvinra() {
  return (
    <div className="min-h-screen pt-24 pb-16" style={{ background: 'var(--color-bg)' }}>

      {/* Breadcrumb */}
      <div className="px-6 pt-8">
        <div className="max-w-3xl mx-auto">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-body hover:underline" style={{ color: 'var(--color-text-muted)' }}>
            <ArrowLeft className="w-4 h-4" /> Case Studies
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp()}>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-display font-semibold uppercase tracking-widest mb-5" style={{ background: 'rgba(61,32,160,0.08)', color: '#3D20A0' }}>
              Product Build
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-4" style={{ color: 'var(--color-text)' }}>
              Building Evinra: an Event Commerce & Operations Ecosystem
            </h1>
            <p className="font-body text-lg" style={{ color: 'var(--color-text-muted)' }}>June 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Live stats */}
      <section className="px-6 pb-8">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp(0.1)} className="grid grid-cols-3 gap-4">
            {[
              { value: '296', label: 'Orders processed' },
              { value: '59', label: 'Events managed' },
              { value: '203', label: 'Products configured' },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border p-4 text-center" style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}>
                <p className="font-display font-extrabold text-3xl mb-1" style={{ color: '#3D20A0' }}>{s.value}</p>
                <p className="font-body text-xs" style={{ color: 'var(--color-text-muted)' }}>{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto space-y-12">

          {/* Intro */}
          <motion.div {...fadeUp(0.1)}>
            <p className="font-body text-lg leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              Event operators run ticketing, door scanning, vendors, POS and settlement in disconnected tools. ProDev set out to build one connected ecosystem — and to prove it could design, ship and operate a multi-tenant platform end to end.
            </p>
          </motion.div>

          {/* What we built */}
          <motion.div {...fadeUp(0.1)}>
            <h2 className="font-display font-bold text-2xl mb-4" style={{ color: 'var(--color-text)' }}>What we built</h2>
            <p className="font-body leading-relaxed mb-4" style={{ color: 'var(--color-text-muted)' }}>
              A product ecosystem with a tenant-scoped operations hub, a buyer storefront, onsite sales, mobile scanning, and platform administration with Stripe billing — all reading and writing the same data.
            </p>
            <p className="font-body text-sm font-display font-semibold" style={{ color: '#3D20A0' }}>
              Data model: tenant → production → show → event → order
            </p>
          </motion.div>

          {/* Five surfaces */}
          <motion.div {...fadeUp(0.1)}>
            <h2 className="font-display font-bold text-2xl mb-5" style={{ color: 'var(--color-text)' }}>Five surfaces, one data layer</h2>
            <div className="space-y-4">
              {surfaces.map((s, i) => (
                <motion.div key={s.title} {...fadeUp(0.05 + i * 0.04)} className="rounded-xl border p-5" style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}>
                  <h3 className="font-display font-semibold text-sm mb-1.5 capitalize" style={{ color: 'var(--color-text)' }}>{s.title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{s.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Architecture */}
          <motion.div {...fadeUp(0.1)}>
            <h2 className="font-display font-bold text-2xl mb-5" style={{ color: 'var(--color-text)' }}>Architecture decisions that carry over to client work</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {architecture.map((a) => (
                <div key={a.title} className="rounded-xl border p-5" style={{ background: 'var(--color-bg-elevated)', borderColor: 'var(--color-border)' }}>
                  <h3 className="font-display font-semibold text-sm mb-1.5" style={{ color: 'var(--color-text)' }}>{a.title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{a.body}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pitch */}
          <motion.div {...fadeUp(0.1)} className="rounded-2xl border p-6" style={{ background: 'rgba(61,32,160,0.05)', borderColor: 'rgba(61,32,160,0.2)' }}>
            <p className="font-body leading-relaxed mb-4" style={{ color: 'var(--color-text)' }}>
              The same team and architecture decisions are available for your product. Planning a SaaS or operational platform of your own?
            </p>
            <Link to="/solutions/custom-saas-development" className="inline-flex items-center gap-1.5 text-sm font-display font-semibold hover:underline" style={{ color: '#3D20A0' }}>
              See Custom SaaS Development <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* CTA */}
          <motion.div {...fadeUp(0.1)} className="flex flex-wrap gap-3 pt-4">
            <Link to="/products/evinra"><CTAButton variant="ghost" size="sm">Explore Evinra</CTAButton></Link>
            <CTAButton href="/contact?segment=evinra" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Request Demo
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
