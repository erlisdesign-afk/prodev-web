import { motion } from 'framer-motion';
import { Bot, Wrench, Zap, BookOpen } from 'lucide-react';
import SectionWrapper, { staggerContainer } from '../ui/SectionWrapper';
import ServiceCard from '../ui/ServiceCard';

const services = [
  {
    icon: Bot,
    title: 'SaaS MVP con IA',
    description: 'De idea a producto funcional en semanas. Construimos tu SaaS con arquitectura escalable, auth, billing y capas de IA que aportan valor real — no features cosméticos.',
    price: '$8K – $25K',
    tag: 'Mayor diferenciación',
    accentColor: 'indigo',
    cta: 'Discovery Call',
  },
  {
    icon: Wrench,
    title: 'Custom Solutions — Nicho',
    description: 'Turismo, logística, marina, eventos. Construimos el software que el software genérico nunca termina de cubrir. Con TravelorHub y Evinra como prueba de concepto.',
    price: '$5K – $15K',
    tag: 'Industrias específicas',
    accentColor: 'emerald',
    cta: 'Start Your Project',
  },
  {
    icon: Zap,
    title: 'Automatización de Operaciones',
    description: 'Identificamos los 3 procesos que más tiempo te roban y los automatizamos. Workflows, integraciones entre sistemas, dashboards y herramientas internas.',
    price: '$3K – $10K',
    tag: 'Free Audit incluido',
    accentColor: 'amber',
    cta: 'Free Audit',
  },
  {
    icon: BookOpen,
    title: 'Consulting Estratégico',
    description: 'Una sesión de 60 min para saber qué construir, en qué orden y a qué costo antes de invertir en desarrollo. Epicor ERP, EDI y arquitectura de producto.',
    price: '$1.5K – $5K',
    tag: 'Puerta de entrada',
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
              Servicios
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-extrabold text-white leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.025em' }}
            >
              Cuatro servicios.
              <br />
              <span className="text-white/40">Una dirección.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-gray-mid max-w-md text-right hidden lg:block"
          >
            No hacemos todo. Hacemos bien las cuatro cosas que mayor impacto tienen en cómo opera y escala tu negocio.
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
          No hacemos mantenimiento WordPress básico, diseño gráfico standalone ni SEO aislado. Esos no son nuestros mejores resultados.
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
