import { motion } from 'framer-motion';
import SectionWrapper, { staggerContainer, fadeUpItem } from '../ui/SectionWrapper';
import { ArrowRight, Ticket, Car } from 'lucide-react';

const products = [
  {
    id: 'evinra',
    name: 'Evinra',
    tagline: 'Event Commerce & Operations Ecosystem',
    description:
      'Plataforma integral para operadores de eventos. Ticketing, control de accesos, gestión de vendors, POS en tiempo real y reportes post-evento en minutos — todo conectado.',
    icon: Ticket,
    color: '#3D20A0',
    colorLight: 'rgba(61,32,160,0.12)',
    stats: [
      { label: 'Tipos de evento', value: 'Ferias, festivales, venues' },
      { label: 'Módulos integrados', value: '6 en uno' },
      { label: 'Reportes', value: 'Tiempo real' },
    ],
    cta: 'Request Evinra Demo',
    href: '#contacto',
  },
  {
    id: 'travelorhub',
    name: 'TravelorHub',
    tagline: 'Transportation Operations Platform',
    description:
      'Sistema completo para operadores de transporte turístico. Reservas, asignación de drivers, vouchers, portales de agentes y coordinación de transfers desde un solo dashboard.',
    icon: Car,
    color: '#2DC97E',
    colorLight: 'rgba(45,201,126,0.10)',
    stats: [
      { label: 'Implementado en', value: 'HQT Punta Cana' },
      { label: 'Operaciones', value: '280+ diarias' },
      { label: 'Integraciones', value: 'WhatsApp + Maps' },
    ],
    cta: 'Explore TravelorHub',
    href: '#contacto',
  },
];

export default function ProductsSection() {
  return (
    <SectionWrapper id="productos" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-display font-semibold text-emerald uppercase tracking-widest mb-4"
          >
            Productos propios
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-white mb-4 leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.025em' }}
          >
            No hablamos de lo que podemos hacer.
            <br />
            <span className="text-white/40">Ya lo hicimos.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-gray-mid text-lg max-w-2xl mx-auto"
          >
            Evinra y TravelorHub son plataformas construidas por ProDev que operan negocios reales hoy. Son la prueba de que sabemos hacer lo que prometemos.
          </motion.p>
        </div>

        {/* Product cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid lg:grid-cols-2 gap-6"
        >
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.id}
                variants={fadeUpItem}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 280, damping: 26 }}
                className="group relative rounded-2xl border border-border bg-bg-card overflow-hidden"
                style={{ boxShadow: '0 1px 0 rgba(255,255,255,0.03), 0 24px 80px rgba(0,0,0,0.5)' }}
              >
                {/* Gradient accent bar */}
                <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }} />

                {/* Ambient glow */}
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
                  style={{ background: `radial-gradient(ellipse, ${p.colorLight} 0%, transparent 70%)` }} />

                <div className="relative p-8">
                  {/* Icon + name */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: p.colorLight, border: `1px solid ${p.color}30` }}>
                      <Icon className="w-6 h-6" style={{ color: p.color }} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-white">{p.name}</h3>
                      <p className="text-xs font-body text-gray-mid mt-0.5">{p.tagline}</p>
                    </div>
                  </div>

                  <p className="font-body text-gray-mid leading-relaxed mb-8">
                    {p.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8 p-4 rounded-xl bg-bg border border-border">
                    {p.stats.map((s, i) => (
                      <div key={i} className={`text-center ${i < 2 ? 'border-r border-border' : ''}`}>
                        <p className="text-[10px] font-body text-gray-mid/60 uppercase tracking-widest mb-1">{s.label}</p>
                        <p className="text-xs font-display font-bold text-white leading-snug">{s.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={p.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold font-display transition-all duration-200 group-hover:gap-3"
                    style={{ color: p.color }}
                  >
                    {p.cta}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Case study teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4 p-5 rounded-xl border border-border bg-bg-card/50"
        >
          <div className="flex -space-x-1">
            {['HQT', 'KBW'].map((label, i) => (
              <div key={i} className="w-9 h-9 rounded-lg border-2 border-bg flex items-center justify-center text-[9px] font-bold font-display text-white"
                style={{ background: i === 0 ? '#2DC97E' : '#3D20A0' }}>
                {label}
              </div>
            ))}
          </div>
          <p className="text-sm font-body text-gray-mid text-center sm:text-left">
            <span className="text-white font-semibold">HQT Punta Cana</span> y <span className="text-white font-semibold">King Boatworks</span> son implementaciones activas — solicita el case study completo.
          </p>
          <a href="#contacto" className="flex-shrink-0 text-sm font-semibold font-display text-indigo-mid hover:text-white flex items-center gap-1.5 transition-colors">
            Ver casos <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
