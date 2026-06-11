import { motion } from 'framer-motion';
import { Star, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import CTAButton from '../components/ui/CTAButton';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const built = [
  { name: 'Evinra', color: '#3D20A0', desc: 'Event commerce and operations ecosystem — ticketing, storefront, attendance, POS, vendor settlement.' },
  { name: 'TravelorHub', color: '#2DC97E', desc: 'Transportation operations platform — reservations, driver dispatch, travel agents, flight tracking, vouchers.' },
  { name: 'Epicor ERP & EDI practice', color: '#F0A030', desc: 'BAQ, BPM, SSRS, REST API; X12 850/855/856/810 with SPS Commerce and TrueCommerce.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16" style={{ background: 'var(--color-bg)' }}>

      {/* Hero */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-border)] text-xs font-display font-semibold uppercase tracking-widest mb-6" style={{ color: 'var(--color-text-muted)' }}>
              About ProDev
            </span>
            <h1 className="font-display font-extrabold text-5xl md:text-6xl tracking-tight mb-8" style={{ color: 'var(--color-text)' }}>
              We build the systems<br />that run operations
            </h1>
          </motion.div>
          <motion.div {...fadeUp(0.15)} className="grid md:grid-cols-2 gap-8">
            <p className="font-body text-lg leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              ProDev Solution is a Sarasota, Florida software company. Over the years we built websites, mobile apps and business software for companies across Florida and beyond — and that experience taught us something specific: the projects that change a business are not websites. They are the systems that run its operations.
            </p>
            <p className="font-body text-lg leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              Today ProDev is specialized: we design, develop and implement software platforms, custom solutions and enterprise integrations that automate operations, connect systems and give companies control and visibility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-10" style={{ background: 'var(--color-bg-elevated)' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0.1)} className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: '4.6★', label: 'on Google' },
              { value: '2', label: 'Product ecosystems' },
              { value: '3', label: 'Core service pillars' },
              { value: 'FL', label: 'Sarasota based' },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display font-extrabold text-3xl mb-1" style={{ color: '#3D20A0' }}>{s.value}</p>
                <p className="font-body text-sm" style={{ color: 'var(--color-text-muted)' }}>{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What we've built */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()} className="mb-12">
            <h2 className="font-display font-extrabold text-4xl tracking-tight mb-4" style={{ color: 'var(--color-text)' }}>
              What we have built
            </h2>
          </motion.div>
          <div className="space-y-4">
            {built.map((b, i) => (
              <motion.div
                key={b.name}
                {...fadeUp(0.1 + i * 0.08)}
                className="rounded-2xl border p-6 flex items-start gap-5"
                style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}
              >
                <div className="w-3 h-3 rounded-full flex-shrink-0 mt-1.5" style={{ background: b.color }} />
                <div>
                  <p className="font-display font-bold text-lg mb-1" style={{ color: 'var(--color-text)' }}>{b.name}</p>
                  <p className="font-body" style={{ color: 'var(--color-text-muted)' }}>{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="px-6 py-20" style={{ background: 'var(--color-bg-elevated)' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()} className="mb-10">
            <h2 className="font-display font-extrabold text-4xl tracking-tight mb-6" style={{ color: 'var(--color-text)' }}>
              How we work
            </h2>
            <p className="font-body text-lg leading-relaxed max-w-2xl" style={{ color: 'var(--color-text-muted)' }}>
              Workflow discovery first — we map how your business actually operates before recommending UX, development, integration or automation. Then we build with mainstream, maintainable stacks, and add AI where it earns its place: copilots, document extraction, exception summaries — accelerators, not gimmicks.
            </p>
          </motion.div>
          <motion.div {...fadeUp(0.15)} className="grid sm:grid-cols-3 gap-5">
            {[
              { step: '01', title: 'Workflow discovery', body: 'We map how your business actually operates — before recommending any technology.' },
              { step: '02', title: 'Mainstream stacks', body: 'React, NestJS, PostgreSQL, Stripe — technology you can staff, audit and grow without us.' },
              { step: '03', title: 'AI where it earns its place', body: 'Copilots, document extraction, exception summaries — accelerators, not gimmicks.' },
            ].map((s) => (
              <div key={s.step} className="rounded-xl border p-5" style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}>
                <span className="font-display font-extrabold text-xs tracking-widest mb-3 block" style={{ color: '#3D20A0' }}>{s.step}</span>
                <h3 className="font-display font-bold text-base mb-2" style={{ color: 'var(--color-text)' }}>{s.title}</h3>
                <p className="font-body text-sm" style={{ color: 'var(--color-text-muted)' }}>{s.body}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact info */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <motion.div {...fadeUp()}>
            <h2 className="font-display font-extrabold text-3xl mb-6" style={{ color: 'var(--color-text)' }}>
              Sarasota, FL — serving US clients remotely
            </h2>
            <ul className="space-y-4">
              {[
                { icon: MapPin, label: '3230 Southgate Cir Suite #138, Sarasota, FL 34239' },
                { icon: Phone, label: '786-325-7738', href: 'tel:7863257738' },
                { icon: Mail, label: 'info@prodevsolution.com', href: 'mailto:info@prodevsolution.com' },
                { icon: Star, label: '4.6★ on Google' },
              ].map(({ icon: Icon, label, href }) => (
                <li key={label} className="flex items-center gap-3 font-body" style={{ color: 'var(--color-text-muted)' }}>
                  <Icon className="w-4 h-4 flex-shrink-0" style={{ color: '#3D20A0' }} />
                  {href ? <a href={href} className="hover:underline" style={{ color: 'var(--color-text)' }}>{label}</a> : <span>{label}</span>}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fadeUp(0.15)}>
            <div className="rounded-2xl border p-8" style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}>
              <h3 className="font-display font-bold text-xl mb-3" style={{ color: 'var(--color-text)' }}>
                Ready to build software that runs your business?
              </h3>
              <p className="font-body mb-6" style={{ color: 'var(--color-text-muted)' }}>
                Book a strategy call and we will map your product, platform or automation opportunity.
              </p>
              <CTAButton href="/contact" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                Book Strategy Call
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
