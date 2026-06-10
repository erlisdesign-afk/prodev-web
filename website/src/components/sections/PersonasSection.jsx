import { motion } from 'framer-motion';
import SectionWrapper, { staggerContainer, fadeUpItem } from '../ui/SectionWrapper';

const personas = [
  {
    emoji: '🏢',
    role: 'Scaling Operator',
    company: 'SMB 10–50 empleados',
    quote: 'Crecemos pero todo depende de mí. Si no estoy, las cosas se caen.',
    trigger: 'No puede escalar sin contratar 3 personas para hacer el trabajo de un software',
    offer: 'Free Automation Audit',
    color: '#3D20A0',
    colorLight: 'rgba(61,32,160,0.10)',
  },
  {
    emoji: '🚀',
    role: 'Product Founder',
    company: 'Startup pre-seed / seed',
    quote: 'Necesito a alguien que entienda de negocio, no solo de código.',
    trigger: 'Falló con freelancers. Tiene presupuesto y necesita un MVP en 3–4 meses',
    offer: 'Discovery Call',
    color: '#2DC97E',
    colorLight: 'rgba(45,201,126,0.10)',
  },
  {
    emoji: '✈️',
    role: 'Industry Operator',
    company: 'Turismo · Logística · Marina',
    quote: 'Hay software genérico por todos lados. Nadie tiene algo para cómo funciona realmente nuestro negocio.',
    trigger: 'Temporada alta caótica que expone todas las fallas del sistema actual',
    offer: 'Demo TravelorHub',
    color: '#F0A030',
    colorLight: 'rgba(240,160,48,0.10)',
  },
  {
    emoji: '🎪',
    role: 'Event Producer',
    company: 'Ferias · Festivales · Venues',
    quote: 'Cada evento es un caos de última hora porque nuestros sistemas no se hablan.',
    trigger: 'Evento con problemas de acceso o caja. Quiere escalar sin más caos operativo',
    offer: 'Evinra Demo',
    color: '#8B6AE8',
    colorLight: 'rgba(139,106,232,0.10)',
  },
  {
    emoji: '⚙️',
    role: 'IT Consultant',
    company: 'Manufactura · Distribución',
    quote: 'Epicor hace el 80% de lo que necesito. El otro 20% me consume el 80% del tiempo.',
    trigger: 'Certificación EDI en 60 días o reporte crítico que no puede generar',
    offer: 'Epicor / EDI Assessment',
    color: '#0891B2',
    colorLight: 'rgba(8,145,178,0.10)',
  },
];

export default function PersonasSection() {
  return (
    <SectionWrapper id="personas" className="py-28 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-display font-semibold text-indigo-mid uppercase tracking-widest mb-4"
          >
            ¿Para quién construimos?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-white leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.025em' }}
          >
            Si te reconoces aquí,
            <br />
            <span className="text-white/40">podemos trabajar juntos.</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {personas.map((p) => (
            <motion.div
              key={p.role}
              variants={fadeUpItem}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 26 }}
              className="group relative rounded-2xl bg-bg-card border border-border p-6 overflow-hidden"
              style={{ boxShadow: '0 1px 0 rgba(255,255,255,0.03), 0 16px 48px rgba(0,0,0,0.4)' }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at top left, ${p.colorLight} 0%, transparent 60%)` }}
              />

              <div className="relative">
                {/* Emoji + role */}
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-2xl">{p.emoji}</span>
                  <div>
                    <h3 className="font-display font-bold text-white text-base leading-tight">{p.role}</h3>
                    <p className="text-xs font-body mt-0.5" style={{ color: p.color }}>{p.company}</p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="font-body text-gray-mid text-sm leading-relaxed italic mb-5 border-l-2 pl-3.5"
                  style={{ borderColor: p.color + '60' }}>
                  "{p.quote}"
                </blockquote>

                {/* Trigger */}
                <div className="mb-5 p-3 rounded-lg border border-border bg-bg">
                  <p className="text-[10px] font-display font-semibold text-gray-mid/60 uppercase tracking-widest mb-1">Trigger</p>
                  <p className="text-xs font-body text-gray-mid leading-snug">{p.trigger}</p>
                </div>

                {/* Offer badge */}
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-display font-semibold"
                  style={{ background: p.colorLight, color: p.color }}
                >
                  <span className="w-1 h-1 rounded-full" style={{ background: p.color }} />
                  {p.offer}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
