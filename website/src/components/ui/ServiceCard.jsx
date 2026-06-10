import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const fadeUpItem = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function ServiceCard({ icon: Icon, title, description, price, tag, accentColor = 'indigo', cta = 'Explorar', href = '#contacto' }) {
  const accents = {
    indigo:  { bg: 'bg-indigo-DEFAULT/10', border: 'border-indigo-DEFAULT/20', icon: 'text-indigo-mid', tag: 'bg-indigo-DEFAULT/20 text-indigo-mid', hover: 'hover:border-indigo-DEFAULT/50 hover:bg-indigo-DEFAULT/5' },
    emerald: { bg: 'bg-emerald/10',        border: 'border-emerald/20',        icon: 'text-emerald',    tag: 'bg-emerald/20 text-emerald',             hover: 'hover:border-emerald/50 hover:bg-emerald/5' },
    amber:   { bg: 'bg-amber/10',          border: 'border-amber/20',          icon: 'text-amber',      tag: 'bg-amber/20 text-amber',                 hover: 'hover:border-amber/50 hover:bg-amber/5' },
    purple:  { bg: 'bg-indigo-900/30',     border: 'border-indigo-mid/20',     icon: 'text-indigo-mid', tag: 'bg-indigo-900/40 text-indigo-mid',       hover: 'hover:border-indigo-mid/40 hover:bg-indigo-900/20' },
  };

  const a = accents[accentColor];

  return (
    <motion.div
      variants={fadeUpItem}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
      className={`group relative flex flex-col bg-bg-card border ${a.border} ${a.hover} rounded-2xl p-7 cursor-pointer transition-all duration-300`}
      style={{ boxShadow: '0 1px 0 rgba(255,255,255,0.03), 0 20px 60px rgba(0,0,0,0.4)' }}
    >
      {/* Tag */}
      {tag && (
        <span className={`self-start mb-5 px-2.5 py-1 rounded-full text-xs font-semibold font-display tracking-wide ${a.tag}`}>
          {tag}
        </span>
      )}

      {/* Icon */}
      <div className={`mb-5 w-11 h-11 rounded-xl flex items-center justify-center ${a.bg} ${a.border} border`}>
        <Icon className={`w-5 h-5 ${a.icon}`} strokeWidth={1.5} />
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold font-display text-white mb-2.5 leading-snug">
        {title}
      </h3>
      <p className="text-gray-mid text-sm leading-relaxed font-body flex-grow mb-6">
        {description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-5 border-t border-border">
        <span className="text-xs font-semibold font-display text-gray-mid tracking-wide">
          {price}
        </span>
        <a
          href={href}
          className={`flex items-center gap-1.5 text-xs font-semibold font-display ${a.icon} group-hover:gap-2.5 transition-all duration-200`}
        >
          {cta}
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
        </a>
      </div>
    </motion.div>
  );
}
