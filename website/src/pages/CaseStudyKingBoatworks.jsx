import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTAButton from '../components/ui/CTAButton';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const platform = [
  {
    title: 'Boat models with full specifications',
    body: 'Each model — 230 Triple Tail, 250 Cubera, 260 Captain — presented with complete spec sheets (length, beam, draft, weight, fuel capacity, max HP), photo galleries and feature walk-throughs, plus a dedicated page telling the VICT™ technology story.',
  },
  {
    title: 'Live inventory with real listings',
    body: 'Current boats for sale listed with engine hours, equipment details and pricing — giving serious buyers something concrete to act on.',
  },
  {
    title: 'Financing built into the funnel',
    body: 'Buyers start a credit application online through the integrated AppOne financing application, so the purchase conversation keeps moving instead of stalling at "talk to the dealer".',
  },
  {
    title: 'Lead capture designed for a considered purchase',
    body: 'Demo-ride scheduling and a contact flow that asks for the boat model up front — every lead arrives qualified for the sales conversation.',
  },
];

export default function CaseStudyKingBoatworks() {
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
            <span className="inline-block px-3 py-1 rounded-full text-xs font-display font-semibold uppercase tracking-widest mb-5" style={{ background: 'rgba(61,32,160,0.08)', color: '#3D20A0' }}>
              Custom Solutions
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-4" style={{ color: 'var(--color-text)' }}>
              King Boatworks — Digital Sales & Lead Generation
            </h1>
            <p className="font-body text-lg" style={{ color: 'var(--color-text-muted)' }}>June 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto space-y-12">

          <motion.div {...fadeUp(0.1)}>
            <p className="font-body text-lg leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              King Boatworks builds custom boats — a high-ticket, long-cycle business where every qualified lead matters. ProDev built their digital sales and lead generation platform.
            </p>
          </motion.div>

          {/* Challenge */}
          <motion.div {...fadeUp(0.1)}>
            <h2 className="font-display font-bold text-2xl mb-4" style={{ color: 'var(--color-text)' }}>The challenge</h2>
            <p className="font-body leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              Custom boat manufacturing sells craftsmanship. The web presence had to do two jobs at once: present the product at the level of quality the boats deserve, and convert visitor interest into qualified sales conversations rather than anonymous traffic.
            </p>
          </motion.div>

          {/* What we built */}
          <motion.div {...fadeUp(0.1)}>
            <h2 className="font-display font-bold text-2xl mb-4" style={{ color: 'var(--color-text)' }}>What we built</h2>
            <p className="font-body leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              A digital sales and lead generation platform: a product-focused website presenting the builds and the process, with lead capture designed around the buying conversation — inquiries arrive qualified and ready for follow-up.
            </p>
          </motion.div>

          {/* Result */}
          <motion.div {...fadeUp(0.1)}>
            <h2 className="font-display font-bold text-2xl mb-5" style={{ color: 'var(--color-text)' }}>The result</h2>
            <blockquote className="rounded-2xl border p-6 mb-6" style={{ background: 'rgba(61,32,160,0.05)', borderColor: 'rgba(61,32,160,0.2)' }}>
              <p className="font-body text-lg leading-relaxed mb-4" style={{ color: 'var(--color-text)' }}>
                "We build custom boats — ProDev built our sales platform around the way we actually sell: the models, real inventory, financing and demo rides. The leads that come in now arrive ready for a real conversation."
              </p>
              <footer className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold font-display text-white text-xs" style={{ background: '#8B6AE8' }}>KB</div>
                <span className="font-display font-semibold text-sm" style={{ color: 'var(--color-text)' }}>Tom, King Boatworks</span>
              </footer>
            </blockquote>
            <ul className="space-y-2">
              {['A digital storefront that matches the craftsmanship of the product.', 'Lead capture wired to the sales conversation, not a generic contact form.'].map((r) => (
                <li key={r} className="flex items-start gap-3 font-body" style={{ color: 'var(--color-text-muted)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3D20A0] flex-shrink-0 mt-2" />
                  {r}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Inside the platform */}
          <motion.div {...fadeUp(0.1)}>
            <h2 className="font-display font-bold text-2xl mb-3" style={{ color: 'var(--color-text)' }}>Inside the platform</h2>
            <p className="font-body leading-relaxed mb-6" style={{ color: 'var(--color-text-muted)' }}>
              King Boatworks is a Sarasota, Florida boat builder — custom boats engineered with the brand's VICT™ vacuum-infused construction. Selling a considered, high-ticket product needs more than a brochure site, so the platform covers the full sales funnel:
            </p>
            <div className="space-y-4">
              {platform.map((p) => (
                <div key={p.title} className="rounded-xl border p-5" style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}>
                  <h3 className="font-display font-semibold text-sm mb-1.5" style={{ color: 'var(--color-text)' }}>{p.title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{p.body}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Approach */}
          <motion.div {...fadeUp(0.1)} className="rounded-2xl border p-6" style={{ background: 'var(--color-bg-elevated)', borderColor: 'var(--color-border)' }}>
            <h3 className="font-display font-bold text-base mb-3" style={{ color: 'var(--color-text)' }}>How we approach digital sales platforms</h3>
            <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              Every sales platform starts with workflow discovery: how leads arrive today, what information closes a sale, and where follow-up breaks down. From there we design and build the platform around that pipeline, launch it, and iterate with real usage — the same process behind our custom solutions work.
            </p>
          </motion.div>

          {/* Related */}
          <motion.div {...fadeUp(0.1)} className="flex flex-wrap gap-3">
            <Link to="/custom-solutions"><CTAButton variant="ghost" size="sm">Custom Solutions</CTAButton></Link>
            <Link to="/solutions/booking-platform-development"><CTAButton variant="ghost" size="sm">Booking Platform Development</CTAButton></Link>
          </motion.div>

          {/* CTA */}
          <motion.div {...fadeUp(0.1)} className="pt-4">
            <CTAButton href="/contact?segment=custom" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Start Your Project
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
