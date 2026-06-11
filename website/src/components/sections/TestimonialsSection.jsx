import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos M.',
    role: 'COO, King Boatworks',
    initials: 'KB',
    color: '#8B6AE8',
    quote:
      'ProDev cut our operations processing time by 67%. What used to take our team three hours a day now runs automatically overnight. Implementation was clean and the team communicated every step.',
    stars: 5,
  },
  {
    name: 'Andrea R.',
    role: 'Director of Operations, HQT',
    initials: 'HQ',
    color: '#F0A030',
    quote:
      "We needed Epicor integrated with our EDI partners in six weeks. ProDev hit the deadline, certified all transaction sets, and left us documentation we can actually maintain ourselves.",
    stars: 5,
  },
  {
    name: 'Luis V.',
    role: 'Founder, TravelorHub',
    initials: 'TH',
    color: '#2DC97E',
    quote:
      'They built the entire booking and transfer management platform from scratch. TravelorHub went live on schedule and handles hundreds of bookings daily without manual intervention.',
    stars: 5,
  },
  {
    name: 'Marta P.',
    role: 'VP Technology, Evinra',
    initials: 'E',
    color: '#3D20A0',
    quote:
      'The ticketing and event operations software ProDev built became the backbone of our platform. Solid architecture, zero downtime on launch day, and they still support us fast when we need changes.',
    stars: 5,
  },
];

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const cardVariant = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-6" style={{ background: 'var(--color-bg-elevated)' }}>
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
            Client results
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-4" style={{ color: 'var(--color-text)' }}>
            What clients say
          </h2>
          <p className="font-body text-lg max-w-xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
            Teams that shipped with ProDev share what changed in their operations.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariant}
              className="rounded-2xl border p-8 flex flex-col gap-5"
              style={{
                background: 'var(--color-bg-card)',
                borderColor: 'var(--color-border)',
              }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber" style={{ color: '#F0A030' }} />
                ))}
              </div>

              {/* Quote */}
              <p className="font-body text-base leading-relaxed flex-1" style={{ color: 'var(--color-text)' }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold font-display text-white flex-shrink-0"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-display font-semibold text-sm" style={{ color: 'var(--color-text)' }}>{t.name}</p>
                  <p className="font-body text-xs" style={{ color: 'var(--color-text-muted)' }}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
