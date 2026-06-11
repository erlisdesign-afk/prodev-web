import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import CTAButton from '../components/ui/CTAButton';

const contactInfo = [
  { icon: MapPin, label: 'Address', value: '3230 Southgate Cir Suite #138, Sarasota, FL 34239', href: null },
  { icon: Phone, label: 'Phone', value: '786-325-7738', href: 'tel:7863257738' },
  { icon: Mail, label: 'Email', value: 'info@prodevsolution.com', href: 'mailto:info@prodevsolution.com' },
];

const services = [
  'Custom SaaS / MVP development',
  'Booking platform development',
  'Customer portal development',
  'Business process automation',
  'Epicor ERP consulting',
  'EDI consulting',
  'Evinra — request a demo',
  'TravelorHub — request a demo',
  'Other',
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
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
            Let's map your next software opportunity
          </span>
          <h1 className="font-display font-extrabold text-5xl md:text-6xl tracking-tight mb-4" style={{ color: 'var(--color-text)' }}>
            Start a project
          </h1>
          <p className="font-body text-lg max-w-lg" style={{ color: 'var(--color-text-muted)' }}>
            Tell us if you need a product demo, a custom solution, Epicor/EDI consulting or an automation audit. We reply from info@prodevsolution.com — or call 786 325-7738.
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
                    What do you need?
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border font-body text-sm focus:outline-none focus:ring-2 focus:ring-indigo-DEFAULT/50"
                    style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
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
                    style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
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
            className="flex flex-col gap-6"
          >
            <div className="rounded-2xl border p-8" style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}>
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

            <div className="rounded-2xl border p-8" style={{ background: 'rgba(45,201,126,0.06)', borderColor: 'rgba(45,201,126,0.2)' }}>
              <h3 className="font-display font-bold text-lg mb-3" style={{ color: 'var(--color-text)' }}>
                Prefer to talk?
              </h3>
              <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'var(--color-text-muted)' }}>
                Book a 30-minute strategy call and we'll map your product, platform or automation opportunity — no pitch, just a plan.
              </p>
              <CTAButton href="mailto:info@prodevsolution.com?subject=Strategy%20Call%20Request" variant="emerald" size="md">
                Pick a time — email us
              </CTAButton>
            </div>

            <div className="rounded-2xl border p-6" style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}>
              <p className="font-body text-sm" style={{ color: 'var(--color-text-muted)' }}>
                <strong className="font-display" style={{ color: 'var(--color-text)' }}>ProDev Solution LLC</strong> — Sarasota, FL · Serving US clients remotely · 4.6★ on Google
              </p>
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
        style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
      />
    </div>
  );
}
