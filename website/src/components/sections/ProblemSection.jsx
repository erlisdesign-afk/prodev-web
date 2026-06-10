import { motion } from 'framer-motion';
import SectionWrapper, { staggerContainer, fadeUpItem } from '../ui/SectionWrapper';

const pains = [
  { emoji: '📊', text: 'Tus reportes viven en Excel y siempre tienen errores' },
  { emoji: '📱', text: 'Coordinas drivers, vendors y pedidos por WhatsApp' },
  { emoji: '🔄', text: 'Cada nuevo empleado necesita semanas de entrenamiento manual' },
  { emoji: '🚫', text: 'No puedes delegar porque el conocimiento solo está en tu cabeza' },
  { emoji: '📈', text: 'Creces pero el caos crece más rápido que el negocio' },
  { emoji: '⏱', text: 'Pasas más tiempo apagando fuegos que construyendo el negocio' },
];

export default function ProblemSection() {
  return (
    <SectionWrapper id="problema" className="py-28 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-display font-semibold text-amber uppercase tracking-widest mb-4"
            >
              El problema real
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-white mb-6 leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', letterSpacing: '-0.025em' }}
            >
              Tu negocio crece.
              <br />
              <span className="text-white/30">Tu operación, no.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-gray-mid text-lg leading-relaxed mb-10"
            >
              La mayoría de empresas en crecimiento llega a un punto donde contratar más personas ya no resuelve el problema. El problema es el sistema — o la falta de uno.
            </motion.p>

            {/* CXL callout */}
            <motion.blockquote
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border-l-2 border-amber pl-5"
            >
              <p className="font-body text-gray-mid text-sm leading-relaxed italic">
                "El 73% de los SMBs en crecimiento identifica un proceso manual repetitivo como su mayor cuello de botella operativo."
              </p>
              <cite className="text-xs font-body text-gray-mid/50 mt-2 block not-italic">
                — CXL Institute, B2B Operations Study 2023
              </cite>
            </motion.blockquote>
          </div>

          {/* Right — pain points grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {pains.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeUpItem}
                className="flex items-start gap-3 p-4 rounded-xl bg-bg-card border border-border hover:border-amber/20 transition-colors duration-200"
              >
                <span className="text-xl flex-shrink-0 mt-0.5">{p.emoji}</span>
                <p className="text-sm font-body text-gray-mid leading-snug">{p.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
