import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import CTAButton from '../components/ui/CTAButton';

const contactInfo = [
  { icon: Mail,    label: 'Email',    value: 'hello@prodevsolution.com', href: 'mailto:hello@prodevsolution.com' },
  { icon: Phone,   label: 'Phone',   value: '+1 (555) 000-0000',         href: 'tel:+15550000000' },
  { icon: MapPin,  label: 'Location', value: 'United States',            href: null },
];

const services = [
  'Custom SaaS / MVP development',
  'Operations automation',
  'Epicor ERP implementation',
  'EDI integration',
  'Evinra — events platform',
  'TravelorHub — booking platform',
  'Other',
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production wire to an API / form service
    setSent(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-border)] text-xs font-display font-semibold uppercase tracking-widest mb-5" style={{ color: 'var(--color-text-muted)' }}>
            Let's talk
          </span>
          <h1 className="font-display font-extrabold text-5xl md:text-6xl tracking-tight mb-4" style={{ color: 'var(--color-text)' }}>
            Start a project
          </h1>
          <p className="font-body text-lg max-w-lg" style={{ color: 'var(--color-text-muted)' }}>
            Tell us what you're building. We'll respond within one business day with a scope recommendation and a fixed-price proposal.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {sent ? (
              <div className="flex flex-col items-start gap-4 py-12">
                <CheckCircle2 className="w-12 h-12" style={{ color: '#2DC97E' }} />
                <h2 className="font-display font-bold text-2xl" style={{ color: 'var(--color-text)' }}>Message received</h2>
                <p className="font-body" style={{ color: 'var(--color-text-muted)' }}>
                  We'll get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full name" name="name" type="text" value={form.name} onChange={handleChange} required />
                  <Field label="Work email" name="email" type="email" value={form.email} onChange={handleChange} required />
                </div>
                <Field label="Company" name="company" type="text" value={form.company} onChange={handleChange} />
                <div className="flex flex-col gap-1.5">
                  <label className="font-display font-semibold text-sm" style={{ color: 'var(--color-text)' }}>
                    Service
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border font-body text-sm focus:outline-none focus:ring-2 focus:ring-indigo-DEFAULT/50"
                    style={{
                      background: 'var(--color-bg-card)',
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text)',
                    }}
                  >
                    <option value="">Select a service…</option>
                    {services.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-display font-semibold text-sm" style={{ color: 'var(--color-text)' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    placeholder="Describe what you need and your timeline…"
                    className="w-full px-4 py-3 rounded-xl border font-body text-sm focus:outline-none focus:ring-2 focus:ring-indigo-DEFAULT/50 resize-none"
                    style={{
                      background: 'var(--color-bg-card)',
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text)',
                    }}
                  />
                </div>
                <CTAButton type="submit" variant="primary" size="lg" icon={<Send className="w-4 h-4" />}>
                  Send message
                </CTAButton>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col gap-8"
          >
            <div
              className="rounded-2xl border p-8"
              style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}
            >
              <h3 className="font-display font-bold text-xl mb-6" style={{ color: 'var(--color-text)' }}>
                Contact info
              </h3>
              <ul className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(61,32,160,0.08)' }}>
                      <Icon className="w-5 h-5" style={{ color: '#3D20A0' }} />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-xs uppercase tracking-widest mb-0.5" style={{ color: 'var(--color-text-muted)' }}>{label}</p>
                      {href ? (
                        <a href={href} className="font-body text-sm hover:underline" style={{ color: 'var(--color-text)' }}>{value}</a>
                      ) : (
                        <p className="font-body text-sm" style={{ color: 'var(--color-text)' }}>{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl border p-8"
              style={{ background: 'rgba(45,201,126,0.06)', borderColor: 'rgba(45,201,126,0.2)' }}
            >
              <h3 className="font-display font-bold text-lg mb-3" style={{ color: 'var(--color-text)' }}>
                Free Automation Audit
              </h3>
              <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'var(--color-text-muted)' }}>
                Not sure where to start? Book a 30-minute call and we'll map out which processes in your operation can be automated first — no pitch, just a plan.
              </p>
              <CTAButton href="mailto:hello@prodevsolution.com?subject=Free%20Automation%20Audit" variant="emerald" size="md">
                Book a free audit call
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, name, type, value, onChange, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-display font-semibold text-sm" style={{ color: 'var(--color-text)' }}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 rounded-xl border font-body text-sm focus:outline-none focus:ring-2 focus:ring-indigo-DEFAULT/50"
        style={{
          background: 'var(--color-bg-card)',
          borderColor: 'var(--color-border)',
          color: 'var(--color-text)',
        }}
      />
    </div>
  );
}
