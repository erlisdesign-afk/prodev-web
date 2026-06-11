import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Tom',
    role: 'King Boatworks',
    initials: 'KB',
    color: '#8B6AE8',
    quote: 'We build custom boats — ProDev built our sales platform around the way we actually sell: the models, real inventory, financing and demo rides. The leads that come in now arrive ready for a real conversation.',
    stars: 5,
    source: 'Client',
  },
  {
    name: 'HQT Punta Cana',
    role: 'Transfer Operations',
    initials: 'HQ',
    color: '#F0A030',
    quote: 'Our day used to run on spreadsheets and phone calls. Now the TravelorHub transfer board is the single source of truth — reservations, drivers, balances and flight changes in one place. Our entire daily operation runs on the platform.',
    stars: 5,
    source: 'Client',
  },
  {
    name: 'Dylan Clements',
    role: 'CEO, TransAPPtions LLC',
    initials: 'DC',
    color: '#3D20A0',
    quote: 'Very satisfied with the company and the product. We chose to work with ProDev because Yoaldis asked all the right questions when we interviewed him. Excellent design skills, development talents, and easy to work with!',
    stars: 5,
    source: 'Google',
  },
  {
    name: 'Jorge Oquendo',
    role: 'Wooden Shoes Childcare Center, Sarasota',
    initials: 'JO',
    color: '#2DC97E',
    quote: 'Most of the users love the product ProDev Solution LLC created for us. All of the problems we have faced have been fixed in record time.',
    stars: 5,
    source: 'Google',
  },
];

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-6" style={{ background: 'var(--color-bg-elevated)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-border)] text-xs font-display font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--color-text-muted)' }}>
            4.6★ on Google
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-4" style={{ color: 'var(--color-text)' }}>
            What clients say
          </h2>
          <p className="font-body text-lg max-w-xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
            Teams that shipped with ProDev share what changed in their operations.
          </p>
        </motion.div>

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
              style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4" style={{ color: '#F0A030', fill: '#F0A030' }} />
                  ))}
                </div>
                {t.source === 'Google' && (
                  <span className="text-xs font-body px-2 py-0.5 rounded-full border" style={{ color: 'var(--color-text-muted)', borderColor: 'var(--color-border)' }}>
                    Google Review
                  </span>
                )}
              </div>

              <p className="font-body text-base leading-relaxed flex-1" style={{ color: 'var(--color-text)' }}>
                &ldquo;{t.quote}&rdquo;
              </p>

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
