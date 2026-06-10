import { motion } from 'framer-motion';
import SectionWrapper, { staggerContainer, fadeUpItem } from '../ui/SectionWrapper';
import { Search, Hammer, BarChart2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Audit o Discovery',
    description: 'Empezamos con 45–60 minutos analizando tu operación o idea. Sin compromiso. Sales con un diagnóstico claro y un plan de acción concreto.',
    color: '#3D20A0',
    colorLight: 'rgba(61,32,160,0.12)',
    detail: 'Free para automatización — $1.5K para product strategy',
  },
  {
    number: '02',
    icon: Hammer,
    title: 'Construimos',
    description: 'Propuesta de scope fijo, no por horas. Sabes exactamente qué recibes, cuándo y a qué costo. Sin sorpresas de presupuesto a mitad del proyecto.',
    color: '#2DC97E',
    colorLight: 'rgba(45,201,126,0.10)',
    detail: 'Timeline de 4–12 semanas según el alcance',
  },
  {
    number: '03',
    icon: BarChart2,
    title: 'Mides el resultado',
    description: 'Entregamos con métricas de éxito definidas desde el inicio. No cerramos el proyecto hasta que el sistema opera tu negocio correctamente.',
    color: '#F0A030',
    colorLight: 'rgba(240,160,48,0.10)',
    detail: 'Soporte post-lanzamiento incluido',
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
            Proceso
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-white leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.025em' }}
          >
            Sin misterio. Sin horas facturables
            <br />
            <span className="text-white/40">sin sorpresas.</span>
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
                {/* Number */}
                <span className="font-display font-extrabold text-5xl leading-none mb-6 select-none"
                  style={{ color: s.color, opacity: 0.25 }}>
                  {s.number}
                </span>

                {/* Icon */}
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
