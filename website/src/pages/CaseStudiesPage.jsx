import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTAButton from '../components/ui/CTAButton';

const cases = [
  {
    slug: 'king-boatworks',
    client: 'King Boatworks',
    title: 'Digital Sales & Lead Generation',
    description: 'Digital sales and lead generation platform for a custom boat manufacturer in Sarasota, FL.',
    tag: 'Custom Solutions',
    tagColor: '#3D20A0',
    initials: 'KB',
    color: '#8B6AE8',
  },
  {
    slug: 'hqt-punta-cana',
    client: 'HQT Punta Cana',
    title: 'Transfer Operations on TravelorHub',
    description: 'How HQT Punta Cana runs 81 daily airport transfers — 43 drivers, 10 agencies — on TravelorHub.',
    tag: 'TravelorHub',
    tagColor: '#2DC97E',
    initials: 'HQ',
    color: '#F0A030',
  },
  {
    slug: 'evinra',
    client: 'ProDev',
    title: 'Building Evinra: Event Commerce Ecosystem',
    description: 'How ProDev designed and built Evinra: a multi-tenant event commerce and operations ecosystem.',
    tag: 'Product Build',
    tagColor: '#3D20A0',
    initials: 'E',
    color: '#3D20A0',
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16" style={{ background: 'var(--color-bg)' }}>

      {/* Hero */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-border)] text-xs font-display font-semibold uppercase tracking-widest mb-6" style={{ color: 'var(--color-text-muted)' }}>
              Case Studies
            </span>
            <h1 className="font-display font-extrabold text-5xl md:text-6xl tracking-tight mb-6" style={{ color: 'var(--color-text)' }}>
              Client success stories<br />and product proof
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Cases grid */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.slug}
              {...fadeUp(0.1 + i * 0.1)}
              className="rounded-2xl border overflow-hidden hover:shadow-md transition-shadow"
              style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}
            >
              {/* Color accent */}
              <div className="h-1" style={{ background: c.color }} />
              <div className="p-6">
                {/* Client avatar */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold font-display text-white text-sm flex-shrink-0" style={{ background: c.color }}>
                    {c.initials}
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm" style={{ color: 'var(--color-text)' }}>{c.client}</p>
                    <span className="inline-block text-xs font-display font-semibold" style={{ color: c.tagColor }}>{c.tag}</span>
                  </div>
                </div>
                <h2 className="font-display font-bold text-lg mb-3 leading-snug" style={{ color: 'var(--color-text)' }}>{c.title}</h2>
                <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'var(--color-text-muted)' }}>{c.description}</p>
                <Link to={`/case-studies/${c.slug}`} className="inline-flex items-center gap-1.5 text-sm font-display font-semibold hover:underline" style={{ color: c.color }}>
                  View Case Study <ArrowRight className="w-4 h-4" />
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
          <CTAButton href="/contact" variant="primary" size="lg">
            Book Strategy Call
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
