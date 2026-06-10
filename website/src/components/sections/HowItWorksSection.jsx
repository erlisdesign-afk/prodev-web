import { motion } from 'framer-motion';
import SectionWrapper, { staggerContainer, fadeUpItem } from '../ui/SectionWrapper';
import { Search, Hammer, BarChart2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Audit or Discovery',
    description: 'We start with 45–60 minutes analyzing your operation or idea. No commitment. You leave with a clear diagnosis and a concrete action plan.',
    color: '#3D20A0',
    colorLight: 'rgba(61,32,160,0.12)',
    detail: 'Free for automation — $1.5K for product strategy',
  },
  {
    number: '02',
    icon: Hammer,
    title: 'We Build',
    description: 'Fixed-scope proposal, not hourly. You know exactly what you get, when, and at what cost. No budget surprises mid-project.',
    color: '#2DC97E',
    colorLight: 'rgba(45,201,126,0.10)',
    detail: '4–12 week timeline depending on scope',
  },
  {
    number: '03',
    icon: BarChart2,
    title: 'You Measure Results',
    description: 'We deliver with success metrics defined from day one. We don\'t close the project until the system runs your business correctly.',
    color: '#F0A030',
    colorLight: 'rgba(240,160,48,0.10)',
    detail: 'Post-launch support included',
  },
];

export default function HowItWorksSection() {
  return (
    <SectionWrapper id="proceso" className="py-28 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-display font-semibold text-amber uppercase tracking-widest mb-4"
          >
            Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-white leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.025em' }}
          >
            No mystery. No billable hours.
            <br />
            <span className="text-white/40">No surprises.</span>
          </motion.h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-3 gap-6 relative"
        >
          {/* Connector line */}
          <div className="hidden md:block absolute top-14 left-[calc(16.67%+1.25rem)] right-[calc(16.67%+1.25rem)] h-px"
            style={{ background: 'linear-gradient(90deg, rgba(61,32,160,0.4), rgba(45,201,126,0.4), rgba(240,160,48,0.4))' }} />

          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.number}
                variants={fadeUpItem}
                className="relative flex flex-col items-start p-7 rounded-2xl bg-bg-card border border-border"
                style={{ boxShadow: '0 1px 0 rgba(255,255,255,0.03), 0 20px 60px rgba(0,0,0,0.4)' }}
              >
                <span className="font-display font-extrabold text-5xl leading-none mb-6 select-none"
                  style={{ color: s.color, opacity: 0.25 }}>
                  {s.number}
                </span>
                <div className="mb-5 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: s.colorLight, border: `1px solid ${s.color}30` }}>
                  <Icon className="w-5 h-5" style={{ color: s.color }} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold font-display text-white mb-2.5">{s.title}</h3>
                <p className="text-sm font-body text-gray-mid leading-relaxed mb-5 flex-grow">{s.description}</p>
                <span className="text-[11px] font-display font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full"
                  style={{ background: s.colorLight, color: s.color }}>
                  {s.detail}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
