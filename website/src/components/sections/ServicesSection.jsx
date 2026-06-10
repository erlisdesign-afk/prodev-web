import { motion } from 'framer-motion';
import { Bot, Wrench, Zap, BookOpen } from 'lucide-react';
import SectionWrapper, { staggerContainer } from '../ui/SectionWrapper';
import ServiceCard from '../ui/ServiceCard';

const services = [
  {
    icon: Bot,
    title: 'SaaS MVP with AI',
    description: 'From idea to working product in weeks. We build your SaaS with scalable architecture, auth, billing, and AI layers that deliver real value — not cosmetic features.',
    price: '$8K – $25K',
    tag: 'Highest differentiation',
    accentColor: 'indigo',
    cta: 'Discovery Call',
  },
  {
    icon: Wrench,
    title: 'Custom Solutions — Niche',
    description: 'Tourism, logistics, marine, events. We build the software that generic tools never fully cover. TravelorHub and Evinra are our proof of concept.',
    price: '$5K – $15K',
    tag: 'Industry-specific',
    accentColor: 'emerald',
    cta: 'Start Your Project',
  },
  {
    icon: Zap,
    title: 'Operations Automation',
    description: 'We identify the 3 processes that steal the most of your time and automate them. Workflows, system integrations, dashboards, and internal tools.',
    price: '$3K – $10K',
    tag: 'Free Audit included',
    accentColor: 'amber',
    cta: 'Free Audit',
  },
  {
    icon: BookOpen,
    title: 'Strategic Consulting',
    description: 'A 60-minute session to know what to build, in what order, and at what cost — before investing in development. Epicor ERP, EDI, and product architecture.',
    price: '$1.5K – $5K',
    tag: 'Entry point',
    accentColor: 'purple',
    cta: 'Strategy Call',
  },
];

export default function ServicesSection() {
  return (
    <SectionWrapper id="servicios" className="py-28 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end gap-6 justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-display font-semibold text-indigo-mid uppercase tracking-widest mb-4"
            >
              Services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-extrabold text-white leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.025em' }}
            >
              Four services.
              <br />
              <span className="text-white/40">One direction.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-gray-mid max-w-md text-right hidden lg:block"
          >
            We don't do everything. We do four things well — the ones with the highest impact on how your business operates and scales.
          </motion.p>
        </div>

        {/* Cards grid with stagger */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </motion.div>

        {/* Not-selling note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center text-xs font-body text-gray-mid/50"
        >
          We don't do basic WordPress maintenance, standalone graphic design, or isolated SEO. Those aren't where we get the best results.
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
