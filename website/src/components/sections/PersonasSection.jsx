import { motion } from 'framer-motion';
import SectionWrapper, { staggerContainer, fadeUpItem } from '../ui/SectionWrapper';

const personas = [
  {
    emoji: '🏢',
    role: 'Scaling Operator',
    company: 'SMB 10–50 employees',
    quote: 'We\'re growing but everything depends on me. If I\'m not around, things fall apart.',
    trigger: 'Can\'t scale without hiring 3 people to do the work software should handle',
    offer: 'Free Automation Audit',
    color: '#3D20A0',
    colorLight: 'rgba(61,32,160,0.10)',
  },
  {
    emoji: '🚀',
    role: 'Product Founder',
    company: 'Pre-seed / seed startup',
    quote: 'I need someone who understands the business, not just the code.',
    trigger: 'Failed with freelancers. Has budget and needs an MVP in 3–4 months',
    offer: 'Discovery Call',
    color: '#2DC97E',
    colorLight: 'rgba(45,201,126,0.10)',
  },
  {
    emoji: '✈️',
    role: 'Industry Operator',
    company: 'Tourism · Logistics · Marine',
    quote: 'There\'s generic software everywhere. Nobody has something for how our business actually works.',
    trigger: 'Chaotic peak season that exposes every flaw in the current system',
    offer: 'Demo TravelorHub',
    color: '#F0A030',
    colorLight: 'rgba(240,160,48,0.10)',
  },
  {
    emoji: '🎪',
    role: 'Event Producer',
    company: 'Fairs · Festivals · Venues',
    quote: 'Every event is last-minute chaos because our systems don\'t talk to each other.',
    trigger: 'Event with access or POS problems. Wants to scale without more chaos',
    offer: 'Evinra Demo',
    color: '#8B6AE8',
    colorLight: 'rgba(139,106,232,0.10)',
  },
  {
    emoji: '⚙️',
    role: 'IT Consultant',
    company: 'Manufacturing · Distribution',
    quote: 'Epicor does 80% of what I need. The other 20% consumes 80% of my time.',
    trigger: 'EDI certification in 60 days or a critical report they can\'t generate',
    offer: 'Epicor / EDI Assessment',
    color: '#0891B2',
    colorLight: 'rgba(8,145,178,0.10)',
  },
];

export default function PersonasSection() {
  return (
    <SectionWrapper id="personas" className="py-28 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-display font-semibold text-indigo-mid uppercase tracking-widest mb-4"
          >
            Who we build for
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-white leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.025em' }}
          >
            If you recognize yourself here,
            <br />
            <span className="text-white/40">we can work together.</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {personas.map((p) => (
            <motion.div
              key={p.role}
              variants={fadeUpItem}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 26 }}
              className="group relative rounded-2xl bg-bg-card border border-border p-6 overflow-hidden"
              style={{ boxShadow: '0 1px 0 rgba(255,255,255,0.03), 0 16px 48px rgba(0,0,0,0.4)' }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at top left, ${p.colorLight} 0%, transparent 60%)` }}
              />

              <div className="relative">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-2xl">{p.emoji}</span>
                  <div>
                    <h3 className="font-display font-bold text-white text-base leading-tight">{p.role}</h3>
                    <p className="text-xs font-body mt-0.5" style={{ color: p.color }}>{p.company}</p>
                  </div>
                </div>

                <blockquote className="font-body text-gray-mid text-sm leading-relaxed italic mb-5 border-l-2 pl-3.5"
                  style={{ borderColor: p.color + '60' }}>
                  "{p.quote}"
                </blockquote>

                <div className="mb-5 p-3 rounded-lg border border-border bg-bg">
                  <p className="text-[10px] font-display font-semibold text-gray-mid/60 uppercase tracking-widest mb-1">Trigger</p>
                  <p className="text-xs font-body text-gray-mid leading-snug">{p.trigger}</p>
                </div>

                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-display font-semibold"
                  style={{ background: p.colorLight, color: p.color }}
                >
                  <span className="w-1 h-1 rounded-full" style={{ background: p.color }} />
                  {p.offer}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
