import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Zap } from 'lucide-react';
import CTAButton from '../components/ui/CTAButton';

const features = [
  { title: 'Booking Engine', body: 'Reservations from your website, travel agencies and tour operators land in one system — structured, not transcribed from email.' },
  { title: 'Driver Dispatch', body: 'Assign drivers and vehicles per reservation. Statuses and balances on one daily board instead of WhatsApp threads.' },
  { title: 'Travel Agent Portals', body: 'Agencies and tour operators book inside their own accounts, with their own rates and running balances per agent.' },
  { title: 'Flight Tracking', body: 'Delayed arrivals update the pickup automatically. No dispatcher surprises, no stranded passengers.' },
  { title: 'Vouchers', body: 'Vouchers issued per reservation, sharable with passengers and tour operators automatically.' },
  { title: 'Balances & Reports', body: 'Balances accumulate per agent and tour operator. Reporting closes the loop on the operation\'s numbers.' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function TravelorHubPage() {
  return (
    <div className="min-h-screen pt-24 pb-16" style={{ background: 'var(--color-bg)' }}>

      {/* Hero */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-display font-semibold uppercase tracking-widest mb-6" style={{ borderColor: 'rgba(45,201,126,0.3)', color: '#2DC97E', background: 'rgba(45,201,126,0.06)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#2DC97E] animate-pulse" />
              Transportation Operations Platform
            </span>
            <h1 className="font-display font-extrabold text-5xl md:text-6xl tracking-tight mb-6" style={{ color: 'var(--color-text)' }}>
              TravelorHub
            </h1>
            <p className="font-body text-xl leading-relaxed max-w-2xl mb-8" style={{ color: 'var(--color-text-muted)' }}>
              Manage reservations, drivers, transfers, travel agents, vouchers, flight tracking and reporting — from one platform.
            </p>
            <div className="flex flex-wrap gap-3">
              <CTAButton href="/contact?segment=travelorhub" variant="emerald" size="lg" icon={<Zap className="w-4 h-4" />}>
                Request Demo
              </CTAButton>
              <CTAButton href="/contact" variant="ghost" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Book Strategy Call
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proof stats */}
      <section className="px-6 py-10" style={{ background: 'var(--color-bg-elevated)' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0.1)} className="grid grid-cols-3 gap-6 text-center">
            {[
              { value: '81', label: 'Transfers in a single day' },
              { value: '43', label: 'Active drivers' },
              { value: '10', label: 'Partner agencies' },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display font-extrabold text-4xl mb-1" style={{ color: '#2DC97E' }}>{s.value}</p>
                <p className="font-body text-sm" style={{ color: 'var(--color-text-muted)' }}>{s.label}</p>
              </div>
            ))}
          </motion.div>
          <motion.p {...fadeUp(0.2)} className="text-center text-xs mt-4 font-body" style={{ color: 'var(--color-text-muted)' }}>
            HQT Punta Cana — live production numbers, June 2026
          </motion.p>
        </div>
      </section>

      {/* Problem */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <motion.div {...fadeUp(0.1)}>
            <h2 className="font-display font-bold text-2xl mb-4" style={{ color: 'var(--color-text)' }}>
              Manual coordination breaks at scale
            </h2>
            <p className="font-body leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              Transfer operators juggle bookings from multiple agencies, driver assignments, flight delays, vouchers and balances — manually. Every change ripples through phone calls, and errors show up as stranded passengers.
            </p>
          </motion.div>
          <motion.div {...fadeUp(0.2)}>
            <h2 className="font-display font-bold text-2xl mb-4" style={{ color: 'var(--color-text)' }}>
              One platform for the whole operation
            </h2>
            <p className="font-body leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              Reservations from your website, agencies and tour operators land in one system that assigns drivers and vehicles, tracks flights for delays, issues vouchers and keeps balances per agent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-20" style={{ background: 'var(--color-bg-elevated)' }}>
        <div className="max-w-4xl mx-auto py-16">
          <motion.div {...fadeUp()} className="mb-12">
            <h2 className="font-display font-extrabold text-4xl tracking-tight mb-4" style={{ color: 'var(--color-text)' }}>
              Transfer operations, end to end
            </h2>
            <p className="font-body text-lg" style={{ color: 'var(--color-text-muted)' }}>
              Daily transfer board, passengers, drivers, balances, statuses, tour operators and reservations — with travel agent management and vouchers.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                {...fadeUp(0.08 + i * 0.06)}
                className="rounded-xl border p-5"
                style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#2DC97E' }} />
                  <div>
                    <p className="font-display font-semibold text-sm mb-1" style={{ color: 'var(--color-text)' }}>{f.title}</p>
                    <p className="font-body text-sm" style={{ color: 'var(--color-text-muted)' }}>{f.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <motion.blockquote {...fadeUp()} className="rounded-2xl border p-8" style={{ background: 'var(--color-bg-card)', borderColor: 'rgba(45,201,126,0.25)' }}>
            <p className="font-body text-lg leading-relaxed mb-6" style={{ color: 'var(--color-text)' }}>
              "Our day used to run on spreadsheets and phone calls. Now the TravelorHub transfer board is the single source of truth — reservations, drivers, balances and flight changes in one place. Our entire daily operation runs on the platform."
            </p>
            <footer className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold font-display text-white text-sm flex-shrink-0" style={{ background: '#2DC97E' }}>HQ</div>
              <div>
                <p className="font-display font-semibold text-sm" style={{ color: 'var(--color-text)' }}>HQT Punta Cana</p>
                <p className="font-body text-xs" style={{ color: 'var(--color-text-muted)' }}>Transfer operations, Punta Cana</p>
              </div>
            </footer>
          </motion.blockquote>
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
          <CTAButton href="/contact" variant="emerald" size="lg">
            Book Strategy Call
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
