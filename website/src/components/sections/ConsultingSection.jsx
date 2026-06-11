import { motion } from 'framer-motion';
import { Database, GitMerge, CheckCircle2, ArrowRight } from 'lucide-react';
import CTAButton from '../ui/CTAButton';

const services = [
  {
    icon: Database,
    color: '#3D20A0',
    title: 'Epicor ERP Consulting',
    description:
      'Implementation, upgrades, and custom development for Epicor Kinetic and ERP 10. We configure modules, migrate legacy data, and train teams so they can run independently.',
    points: [
      'Full-cycle implementation and go-live support',
      'Custom BAQ reports and dashboards',
      'Manufacturing, distribution and MES modules',
      'Version upgrades from ERP 9 / 10 to Kinetic',
    ],
  },
  {
    icon: GitMerge,
    color: '#2DC97E',
    title: 'EDI Consulting',
    description:
      'End-to-end EDI integration between your ERP and trading partners — retailers, carriers, and suppliers. We design, test, and certify every transaction set.',
    points: [
      'X12 and EDIFACT mapping (850, 856, 810, 945…)',
      'AS2, SFTP, and VAN connectivity',
      'Epicor-native EDI module configuration',
      'Ongoing monitoring and partner onboarding',
    ],
  },
];

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const cardVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function ConsultingSection() {
  return (
    <section id="consulting" className="py-24 px-6" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-border)] text-xs font-display font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--color-text-muted)' }}>
            Enterprise Consulting
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-4" style={{ color: 'var(--color-text)' }}>
            Epicor ERP &amp; EDI expertise
          </h2>
          <p className="font-body text-lg max-w-xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
            Manufacturing and distribution teams rely on us to implement, connect, and extend their enterprise systems without the overhead of a large SI firm.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                variants={cardVariant}
                className="rounded-2xl border p-8"
                style={{
                  background: 'var(--color-bg-card)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${svc.color}18` }}
                >
                  <Icon className="w-6 h-6" style={{ color: svc.color }} />
                </div>
                <h3 className="font-display font-bold text-2xl mb-3" style={{ color: 'var(--color-text)' }}>
                  {svc.title}
                </h3>
                <p className="font-body mb-6 leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  {svc.description}
                </p>
                <ul className="space-y-2.5">
                  {svc.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 font-body text-sm" style={{ color: 'var(--color-text-muted)' }}>
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: svc.color }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <CTAButton href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
            Talk to an ERP consultant
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
