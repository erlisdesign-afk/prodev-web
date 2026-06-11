import { motion } from 'framer-motion';
import { Code2, Calendar, Users, Smartphone, Plug, Bot, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTAButton from '../components/ui/CTAButton';

const services = [
  {
    icon: Code2,
    color: '#3D20A0',
    title: 'Custom SaaS Development',
    body: 'Multi-tenant SaaS, dashboards, billing, roles, analytics — React/Next.js, Angular, NestJS, PostgreSQL, Stripe.',
    href: '/solutions/custom-saas-development',
  },
  {
    icon: Calendar,
    color: '#2DC97E',
    title: 'Booking Platforms',
    body: 'Reservations, pricing, checkout, vouchers and agent portals — built around how your service actually runs.',
    href: '/solutions/booking-platform-development',
  },
  {
    icon: Users,
    color: '#3D20A0',
    title: 'Customer Portals',
    body: 'Self-service, document upload, payments and status tracking — wired to your ERP, CRM or accounting system.',
    href: '/solutions/customer-portal-development',
  },
  {
    icon: Smartphone,
    color: '#2DC97E',
    title: 'Mobile Applications',
    body: 'Operational apps, scan apps, field apps and customer apps — React Native and Flutter.',
    href: '/contact',
  },
  {
    icon: Plug,
    color: '#F0A030',
    title: 'System Integrations',
    body: 'ERP, CRM, POS, payments, EDI and reporting — connected via API. No more CSV exports.',
    href: '/consulting',
  },
  {
    icon: Bot,
    color: '#3D20A0',
    title: 'Business Automation',
    body: 'Workflow automation, API sync, dashboards and internal tools. Connect what you already use.',
    href: '/solutions/business-process-automation',
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function CustomSolutionsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16" style={{ background: 'var(--color-bg)' }}>

      {/* Hero */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-border)] text-xs font-display font-semibold uppercase tracking-widest mb-6" style={{ color: 'var(--color-text-muted)' }}>
              Custom Solutions
            </span>
            <h1 className="font-display font-extrabold text-5xl md:text-6xl tracking-tight mb-6" style={{ color: 'var(--color-text)' }}>
              Custom software built<br />around your business
            </h1>
            <p className="font-body text-xl leading-relaxed max-w-2xl mb-8" style={{ color: 'var(--color-text-muted)' }}>
              Stop running your business with spreadsheets. We build SaaS platforms, booking systems, customer portals, mobile apps and integrations around how your business operates.
            </p>
            <div className="flex flex-wrap gap-3">
              <CTAButton href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Start Your Project
              </CTAButton>
              <CTAButton href="/case-studies" variant="ghost" size="lg">
                See case studies
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What we build */}
      <section className="px-6 py-20" style={{ background: 'var(--color-bg-elevated)' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()} className="mb-12">
            <h2 className="font-display font-extrabold text-4xl tracking-tight mb-4" style={{ color: 'var(--color-text)' }}>
              What we build
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  {...fadeUp(0.08 + i * 0.06)}
                  className="rounded-2xl border p-6 hover:shadow-md transition-shadow"
                  style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${s.color}12` }}>
                    <Icon className="w-5 h-5" style={{ color: s.color }} />
                  </div>
                  <h3 className="font-display font-bold text-base mb-2" style={{ color: 'var(--color-text)' }}>{s.title}</h3>
                  <p className="font-body text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-muted)' }}>{s.body}</p>
                  <Link to={s.href} className="inline-flex items-center gap-1 text-xs font-display font-semibold hover:underline" style={{ color: s.color }}>
                    Learn more <ArrowRight className="w-3 h-3" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()} className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-extrabold text-4xl tracking-tight mb-6" style={{ color: 'var(--color-text)' }}>
                Proof: we run our own platforms
              </h2>
              <p className="font-body text-lg leading-relaxed mb-6" style={{ color: 'var(--color-text-muted)' }}>
                Evinra and TravelorHub are built and operated by ProDev — the same architecture decisions we make for clients, we live with in production.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/products/evinra">
                  <CTAButton variant="ghost" size="sm">Explore Evinra</CTAButton>
                </Link>
                <Link to="/products/travelorhub">
                  <CTAButton variant="ghost" size="sm">Explore TravelorHub</CTAButton>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { color: '#3D20A0', name: 'Evinra', desc: 'Multi-tenant event commerce platform — ticketing, POS, scanning, vendor settlement.' },
                { color: '#2DC97E', name: 'TravelorHub', desc: 'Transportation operations — reservations, dispatch, flight tracking, agent management.' },
              ].map((p) => (
                <div key={p.name} className="rounded-xl border p-5 flex items-start gap-4" style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}>
                  <div className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: p.color }} />
                  <div>
                    <p className="font-display font-bold text-sm mb-1" style={{ color: 'var(--color-text)' }}>{p.name}</p>
                    <p className="font-body text-sm" style={{ color: 'var(--color-text-muted)' }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
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
