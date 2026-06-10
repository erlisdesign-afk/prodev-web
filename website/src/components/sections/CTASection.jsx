import { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, CheckCircle2, Calendar, ArrowRight } from 'lucide-react';
import CTAButton from '../ui/CTAButton';
import SectionWrapper from '../ui/SectionWrapper';

const auditItems = [
  'Review of your 3 highest-friction processes',
  'Estimated time and cost each process wastes',
  'Automation plan with concrete technologies',
  'No commitment — 45 minutes, completely free',
];

const secondaryCTAs = [
  { label: 'Strategy Call (30 min)', icon: Calendar, href: '#contacto', variant: 'ghost' },
  { label: 'See services', icon: ArrowRight, href: '#servicios', variant: 'outline' },
];

export default function CTASection() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1800);
  };

  return (
    <SectionWrapper id="audit" className="py-28 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-indigo-DEFAULT/30"
          style={{ boxShadow: '0 0 0 1px rgba(61,32,160,0.15), 0 40px 120px rgba(61,32,160,0.2)' }}>

          <div className="absolute inset-0 bg-bg-elevated" />
          <div className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse 80% 80% at 100% 0%, rgba(61,32,160,0.25) 0%, transparent 60%)' }} />
          <div className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse 60% 60% at 0% 100%, rgba(45,201,126,0.12) 0%, transparent 60%)' }} />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" />
          </svg>

          <div className="relative grid lg:grid-cols-2 gap-12 p-10 lg:p-16 items-center">
            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-emerald/10 border border-emerald/20 text-emerald text-xs font-display font-semibold"
              >
                <Zap className="w-3.5 h-3.5" />
                Free Automation Audit — No cost, no commitment
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display font-extrabold text-white leading-tight mb-5"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.025em' }}
              >
                45 minutes.
                <br />
                <span className="text-gradient-brand">A clear plan</span>
                <br />
                <span className="text-white/40">for your operation.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-body text-gray-mid leading-relaxed mb-8"
              >
                We analyze your current operation, identify the 3 processes that cost the most time and money, and you leave with a concrete automation plan — even if we don't work together.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-3 mb-10"
              >
                {auditItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-sm font-body text-gray-mid">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <div className="flex flex-wrap gap-3">
                {secondaryCTAs.map((c) => {
                  const Icon = c.icon;
                  return (
                    <CTAButton key={c.label} href={c.href} variant={c.variant} size="sm"
                      icon={<Icon className="w-3.5 h-3.5" />}>
                      {c.label}
                    </CTAButton>
                  );
                })}
              </div>
            </div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center p-12 rounded-2xl border border-emerald/30 bg-emerald/5"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
                  >
                    <CheckCircle2 className="w-14 h-14 text-emerald mb-5" />
                  </motion.div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">Done!</h3>
                  <p className="font-body text-gray-mid text-sm leading-relaxed">
                    We'll review your information and reach out within 24 hours to schedule your audit.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-8 rounded-2xl border border-border bg-bg-card space-y-4"
                  style={{ boxShadow: '0 1px 0 rgba(255,255,255,0.04), 0 24px 64px rgba(0,0,0,0.5)' }}
                >
                  <div>
                    <h3 className="text-lg font-display font-bold text-white mb-1">Schedule Your Free Audit</h3>
                    <p className="text-sm font-body text-gray-mid">Tell us the basics — we'll cover the rest on the call.</p>
                  </div>

                  {[
                    { label: 'Name', type: 'text', placeholder: 'Your full name', id: 'name' },
                    { label: 'Company', type: 'text', placeholder: 'Your company name', id: 'company' },
                  ].map((f) => (
                    <div key={f.id}>
                      <label htmlFor={f.id} className="block text-xs font-display font-semibold text-gray-mid mb-1.5 uppercase tracking-wide">
                        {f.label}
                      </label>
                      <input
                        id={f.id}
                        type={f.type}
                        placeholder={f.placeholder}
                        className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-white text-sm font-body placeholder:text-gray-mid/40 focus:outline-none focus:border-indigo-DEFAULT/60 focus:ring-1 focus:ring-indigo-DEFAULT/30 transition-all"
                      />
                    </div>
                  ))}

                  <div>
                    <label htmlFor="email" className="block text-xs font-display font-semibold text-gray-mid mb-1.5 uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-white text-sm font-body placeholder:text-gray-mid/40 focus:outline-none focus:border-indigo-DEFAULT/60 focus:ring-1 focus:ring-indigo-DEFAULT/30 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="challenge" className="block text-xs font-display font-semibold text-gray-mid mb-1.5 uppercase tracking-wide">
                      What's your biggest operational bottleneck?
                    </label>
                    <textarea
                      id="challenge"
                      rows={3}
                      placeholder="E.g.: We coordinate 50 drivers over WhatsApp and there are always errors..."
                      className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-white text-sm font-body placeholder:text-gray-mid/40 focus:outline-none focus:border-indigo-DEFAULT/60 focus:ring-1 focus:ring-indigo-DEFAULT/30 transition-all resize-none"
                    />
                  </div>

                  <CTAButton
                    type="submit"
                    variant="emerald"
                    size="md"
                    loading={loading}
                    className="w-full justify-center"
                    icon={!loading && <Zap className="w-4 h-4" />}
                  >
                    {loading ? 'Sending...' : 'Get My Free Audit'}
                  </CTAButton>

                  <p className="text-[11px] font-body text-gray-mid/40 text-center">
                    No spam. We respond within 24 hours.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
