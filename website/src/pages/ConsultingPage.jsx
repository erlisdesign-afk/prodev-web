import { motion } from 'framer-motion';
import { Database, GitMerge, Settings, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTAButton from '../components/ui/CTAButton';

const practices = [
  {
    icon: Database,
    color: '#3D20A0',
    title: 'Epicor ERP Consulting',
    short: 'BAQ, BPM, dashboards, SSRS, REST API integrations and reporting — Epicor Kinetic, SQL Server, Power BI.',
    href: '/solutions/epicor-erp-consulting',
  },
  {
    icon: GitMerge,
    color: '#2DC97E',
    title: 'EDI Consulting',
    short: 'Partner onboarding, maps, testing, certification, troubleshooting: X12 850/855/856/810, SPS Commerce, TrueCommerce.',
    href: '/solutions/edi-consulting-services',
  },
  {
    icon: Settings,
    color: '#F0A030',
    title: 'Business Process Automation',
    short: 'Workflow analysis, automation planning and operational dashboards.',
    href: '/solutions/business-process-automation',
  },
];

const epicorEngagements = [
  { title: 'Reporting that runs itself', body: 'BAQs built or optimized, SSRS reports and Power BI dashboards fed properly — so finance stops assembling numbers by hand every Friday.' },
  { title: 'BPMs that fire when they should', body: 'Method and data directives designed deliberately, tested, and documented — instead of inherited BPMs nobody dares touch.' },
  { title: 'Integrations without CSV exports', body: 'Epicor REST API integrations to CRM, e-commerce, EDI and payment systems, replacing scheduled exports and manual imports.' },
  { title: 'Performance, cleanup and documentation', body: 'Slow screens and queries diagnosed, data cleaned up, and what we build documented in runbooks your team keeps.' },
];

const ediSituations = [
  { title: 'New trading partner with certification clock', body: 'Maps, compliance guides, partner testing handled end-to-end.' },
  { title: 'Stuck certification', body: 'Audit failing documents, fix maps, rerun tests — and certify.' },
  { title: 'Daily exceptions', body: 'Root-cause resolution before chargebacks — failed 856s, mismatched 810s.' },
  { title: 'ERP-side wiring', body: 'Epicor integration eliminating re-keying between EDI and your system.' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function ConsultingPage() {
  return (
    <div className="min-h-screen pt-24 pb-16" style={{ background: 'var(--color-bg)' }}>

      {/* Hero */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-border)] text-xs font-display font-semibold uppercase tracking-widest mb-6" style={{ color: 'var(--color-text-muted)' }}>
              Enterprise Consulting
            </span>
            <h1 className="font-display font-extrabold text-5xl md:text-6xl tracking-tight mb-6" style={{ color: 'var(--color-text)' }}>
              Specialized consulting<br />for complex systems
            </h1>
            <p className="font-body text-xl leading-relaxed max-w-2xl mb-8" style={{ color: 'var(--color-text-muted)' }}>
              Specialized consulting for manufacturers, distributors and operators: Epicor ERP, EDI and business process automation — without hiring a full team.
            </p>
            <CTAButton href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Talk to a Consultant
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* Practices */}
      <section className="px-6 py-16" style={{ background: 'var(--color-bg-elevated)' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()} className="mb-10">
            <h2 className="font-display font-extrabold text-3xl mb-2" style={{ color: 'var(--color-text)' }}>Our practices</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-5">
            {practices.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.title} {...fadeUp(0.1 + i * 0.08)} className="rounded-2xl border p-6" style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${p.color}12` }}>
                    <Icon className="w-5 h-5" style={{ color: p.color }} />
                  </div>
                  <h3 className="font-display font-bold text-base mb-2" style={{ color: 'var(--color-text)' }}>{p.title}</h3>
                  <p className="font-body text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-muted)' }}>{p.short}</p>
                  <Link to={p.href} className="inline-flex items-center gap-1 text-xs font-display font-semibold hover:underline" style={{ color: p.color }}>
                    Learn more <ArrowRight className="w-3 h-3" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Epicor deep */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()} className="mb-10">
            <h2 className="font-display font-extrabold text-3xl mb-4" style={{ color: 'var(--color-text)' }}>
              Project-based Epicor expertise
            </h2>
            <p className="font-body text-lg leading-relaxed max-w-2xl" style={{ color: 'var(--color-text-muted)' }}>
              BAQ development and optimization, BPM method and data directives, SSRS and dashboard reporting, REST API integrations with CRM, e-commerce, EDI and payments — scoped to the specific problem.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {epicorEngagements.map((e, i) => (
              <motion.div key={e.title} {...fadeUp(0.08 + i * 0.06)} className="rounded-xl border p-5" style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}>
                <CheckCircle2 className="w-4 h-4 mb-2" style={{ color: '#3D20A0' }} />
                <h3 className="font-display font-semibold text-sm mb-1" style={{ color: 'var(--color-text)' }}>{e.title}</h3>
                <p className="font-body text-sm" style={{ color: 'var(--color-text-muted)' }}>{e.body}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp(0.2)} className="rounded-2xl border p-6" style={{ background: 'rgba(61,32,160,0.05)', borderColor: 'rgba(61,32,160,0.2)' }}>
            <p className="font-body leading-relaxed" style={{ color: 'var(--color-text)' }}>
              <strong className="font-display">Partnership model:</strong> We complement your VAR rather than replace it. Licensing and core implementation stay with them, while we clear the day-2 backlog of reports, integrations and automation around Epicor Kinetic.
            </p>
          </motion.div>
        </div>
      </section>

      {/* EDI deep */}
      <section className="px-6 py-20" style={{ background: 'var(--color-bg-elevated)' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()} className="mb-10">
            <h2 className="font-display font-extrabold text-3xl mb-4" style={{ color: 'var(--color-text)' }}>
              Hands-on EDI engineering
            </h2>
            <p className="font-body text-lg leading-relaxed max-w-2xl" style={{ color: 'var(--color-text-muted)' }}>
              Partner onboarding, map development and changes, testing and certification, exception troubleshooting and ERP integration — so orders, ASNs and invoices flow without re-keying.
            </p>
            <p className="font-body text-sm mt-3" style={{ color: 'var(--color-text-muted)' }}>
              ProDev works with X12 850, 855, 856, 810 across SPS Commerce and TrueCommerce, over SFTP and API, including Epicor integration.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-5">
            {ediSituations.map((e, i) => (
              <motion.div key={e.title} {...fadeUp(0.08 + i * 0.06)} className="rounded-xl border p-5" style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}>
                <CheckCircle2 className="w-4 h-4 mb-2" style={{ color: '#2DC97E' }} />
                <h3 className="font-display font-semibold text-sm mb-1" style={{ color: 'var(--color-text)' }}>{e.title}</h3>
                <p className="font-body text-sm" style={{ color: 'var(--color-text-muted)' }}>{e.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 text-center">
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
