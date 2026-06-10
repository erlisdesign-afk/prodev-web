import { motion } from 'framer-motion';
import SectionWrapper, { staggerContainer, fadeUpItem } from '../ui/SectionWrapper';

const painPoints = [
  {
    icon: '📋',
    title: 'Coordinating over WhatsApp',
    desc: 'Drivers, agents, and vendors managed through group chats. Someone always misses the message.',
  },
  {
    icon: '📊',
    title: 'Excel as the database',
    desc: 'Critical operations run on spreadsheets. One wrong formula breaks everything.',
  },
  {
    icon: '🔁',
    title: 'Data entered twice',
    desc: 'Your team copies the same information across three different systems — every single day.',
  },
  {
    icon: '👁️',
    title: 'No real-time visibility',
    desc: 'To know what\'s happening, you have to ask someone. By the time you know, it\'s already late.',
  },
  {
    icon: '🔧',
    title: 'Generic software that almost fits',
    desc: 'You use 60% of the features and hack the other 40% with workarounds nobody documents.',
  },
  {
    icon: '⏰',
    title: 'Scaling means hiring',
    desc: 'Every new client means a new person to manage the chaos. The bottleneck is you.',
  },
];

export default function ProblemSection() {
  return (
    <SectionWrapper id="problema" className="py-28 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-display font-semibold text-indigo-mid uppercase tracking-widest mb-4"
          >
            The real problem
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-white leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.025em' }}
          >
            Your business grows.
            <br />
            <span className="text-white/40">Your operations, don't.</span>
          </motion.h2>
        </div>

        {/* Pain points grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
        >
          {painPoints.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUpItem}
              className="group flex gap-4 p-5 rounded-xl border border-border bg-bg-card hover:border-indigo-DEFAULT/40 transition-colors"
            >
              <span className="text-xl flex-shrink-0 mt-0.5">{p.icon}</span>
              <div>
                <h3 className="font-display font-semibold text-white text-sm mb-1">{p.title}</h3>
                <p className="font-body text-xs text-gray-mid leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CXL proof quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-l-4 border-indigo-DEFAULT pl-6 max-w-2xl"
        >
          <p className="font-body text-gray-mid italic leading-relaxed">
            "B2B buyers cite operational friction — not price — as the primary reason they switch vendors. The team that removes friction fastest wins the category."
          </p>
          <cite className="mt-3 block text-xs font-display font-semibold text-indigo-mid not-italic">
            CXL Institute — Clarity-First Conversion Architecture, 2023
          </cite>
        </motion.blockquote>
      </div>
    </SectionWrapper>
  );
}
