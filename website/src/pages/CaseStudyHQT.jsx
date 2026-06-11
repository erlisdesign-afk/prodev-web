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

const benefits = [
  { title: 'One operational picture', body: 'The transfer board replaces spreadsheets and chat threads as the source of truth for the day\'s operation.' },
  { title: 'Per-account structure', body: 'Agencies and tour operators book within their own accounts, with their own rates and balances.' },
  { title: 'Flight-aware planning', body: 'Pickups follow real arrival times instead of static schedules — delayed flights update the board automatically.' },
];

export default function CaseStudyHQT() {
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
            <span className="inline-block px-3 py-1 rounded-full text-xs font-display font-semibold uppercase tracking-widest mb-5" style={{ background: 'rgba(45,201,126,0.08)', color: '#2DC97E' }}>
              TravelorHub
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-4" style={{ color: 'var(--color-text)' }}>
              HQT Punta Cana — Transfer Operations on TravelorHub
            </h1>
            <p className="font-body text-lg" style={{ color: 'var(--color-text-muted)' }}>June 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 pb-8">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp(0.1)} className="grid grid-cols-3 gap-4">
            {[
              { value: '81', label: 'Transfers on a single day' },
              { value: '43', label: 'Active drivers' },
              { value: '10', label: 'Partner agencies' },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border p-4 text-center" style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}>
                <p className="font-display font-extrabold text-3xl mb-1" style={{ color: '#2DC97E' }}>{s.value}</p>
                <p className="font-body text-xs" style={{ color: 'var(--color-text-muted)' }}>{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto space-y-12">

          {/* Challenge */}
          <motion.div {...fadeUp(0.1)}>
            <h2 className="font-display font-bold text-2xl mb-4" style={{ color: 'var(--color-text)' }}>The challenge</h2>
            <p className="font-body leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              Coordinating daily transfers across multiple tour operators and travel agencies means constant change: arrivals shift with flight delays, drivers and vehicles get reassigned, balances accumulate per agent. Managed manually, every change is a phone call and every error is a stranded passenger.
            </p>
          </motion.div>

          {/* What we built */}
          <motion.div {...fadeUp(0.1)}>
            <h2 className="font-display font-bold text-2xl mb-4" style={{ color: 'var(--color-text)' }}>What we built</h2>
            <p className="font-body leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              HQT operates on TravelorHub, ProDev's transportation operations platform: a daily transfer board with passengers, drivers, balances and statuses; tour operator and travel agent management with per-agent accounts and rates; reservations with add-ons; and voucher generation.
            </p>
          </motion.div>

          {/* Quote */}
          <motion.div {...fadeUp(0.1)}>
            <h2 className="font-display font-bold text-2xl mb-5" style={{ color: 'var(--color-text)' }}>The result</h2>
            <blockquote className="rounded-2xl border p-6 mb-6" style={{ background: 'rgba(45,201,126,0.05)', borderColor: 'rgba(45,201,126,0.25)' }}>
              <p className="font-body text-lg leading-relaxed mb-4" style={{ color: 'var(--color-text)' }}>
                "Our day used to run on spreadsheets and phone calls. Now the TravelorHub transfer board is the single source of truth — reservations, drivers, balances and flight changes in one place. Our entire daily operation runs on the platform."
              </p>
              <footer className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold font-display text-white text-xs" style={{ background: '#F0A030' }}>HQ</div>
                <span className="font-display font-semibold text-sm" style={{ color: 'var(--color-text)' }}>HQT Punta Cana</span>
              </footer>
            </blockquote>
          </motion.div>

          {/* Benefits */}
          <motion.div {...fadeUp(0.1)}>
            <h2 className="font-display font-bold text-2xl mb-5" style={{ color: 'var(--color-text)' }}>Key benefits</h2>
            <div className="space-y-4">
              {benefits.map((b) => (
                <div key={b.title} className="rounded-xl border p-5" style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}>
                  <h3 className="font-display font-semibold text-sm mb-1.5" style={{ color: 'var(--color-text)' }}>{b.title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{b.body}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* About HQT */}
          <motion.div {...fadeUp(0.1)} className="rounded-2xl border p-6" style={{ background: 'var(--color-bg-elevated)', borderColor: 'var(--color-border)' }}>
            <h3 className="font-display font-bold text-base mb-3" style={{ color: 'var(--color-text)' }}>About HQT Punta Cana</h3>
            <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              HQT Punta Cana provides private airport transfers and excursions across Punta Cana, Cap Cana, Uvero Alto and La Romana — licensed local drivers, modern insured vehicles and no shared rides. Its public record backs the operation: 5-star ratings from thousands of verified customers on TripAdvisor and Viator.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div {...fadeUp(0.1)} className="flex flex-wrap gap-3 pt-4">
            <Link to="/products/travelorhub"><CTAButton variant="ghost" size="sm">Explore TravelorHub</CTAButton></Link>
            <CTAButton href="/contact" variant="emerald" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Book Strategy Call
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
