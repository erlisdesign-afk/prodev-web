import { motion } from 'framer-motion';
import { ArrowRight, Zap, Calendar } from 'lucide-react';
import CTAButton from '../ui/CTAButton';

const words = ['tu', 'operación', 'manual', 'en', 'un', 'activo', 'que', 'escala', 'solo.'];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-bg pt-16">

      {/* ── Ambient blobs ─────────────────────────────────────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Main indigo glow */}
        <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(61,32,160,0.22) 0%, transparent 70%)' }} />
        {/* Emerald glow lower left */}
        <div className="absolute bottom-[5%] left-[-10%] w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(45,201,126,0.12) 0%, transparent 70%)' }} />
        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M 64 0 L 0 0 0 64" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* ── Content ───────────────────────────────────────────── */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left — copy */}
        <div>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-8 px-3.5 py-1.5 rounded-full border border-indigo-DEFAULT/30 bg-indigo-DEFAULT/10 text-indigo-mid text-sm font-semibold font-display"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse-slow" />
            Software que corre negocios reales
          </motion.div>

          {/* Headline */}
          <h1 className="font-display font-extrabold leading-[1.05] tracking-[-0.03em] text-white mb-2" style={{ fontSize: 'clamp(2.6rem, 6vw, 5.5rem)' }}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="block"
            >
              Construimos
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="block text-gradient-brand"
            >
              el software
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.44 }}
              className="block"
            >
              que convierte
            </motion.span>
          </h1>

          {/* Animated word reveal */}
          <motion.p
            className="font-display font-extrabold leading-[1.05] tracking-[-0.03em] text-white/30 mb-8 flex flex-wrap gap-x-4"
            style={{ fontSize: 'clamp(2.6rem, 6vw, 5.5rem)' }}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.55 + i * 0.07 }}
                className={word === 'escala' || word === 'activo' ? 'text-white/60' : ''}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="font-body text-gray-mid text-lg leading-relaxed mb-10 max-w-xl"
          >
            Plataformas SaaS, automatización de operaciones, booking systems y consultoría especializada para empresas que dejaron de escalar con hojas de cálculo.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.35 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <CTAButton href="#audit" variant="emerald" size="lg" icon={<Zap className="w-4 h-4" />}>
              Free Automation Audit
            </CTAButton>
            <CTAButton href="#servicios" variant="ghost" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Ver servicios
            </CTAButton>
          </motion.div>

          {/* Social proof micro */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="flex -space-x-2">
              {['#3D20A0','#2DC97E','#F0A030','#1E2440'].map((c, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-bg flex items-center justify-center text-xs font-bold font-display text-white" style={{ background: c }}>
                  {['E','T','H','K'][i]}
                </div>
              ))}
            </div>
            <p className="text-sm font-body text-gray-mid">
              <span className="text-white font-semibold">Evinra, TravelorHub, HQT, King Boatworks</span>
              <br />plataformas reales operando hoy
            </p>
          </motion.div>
        </div>

        {/* Right — product UI mockup */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="hidden lg:block relative"
        >
          {/* Outer glow */}
          <div className="absolute inset-0 rounded-2xl glow-indigo opacity-40 blur-3xl scale-95" />

          {/* Dashboard card */}
          <div className="relative rounded-2xl border border-indigo-DEFAULT/30 bg-bg-elevated overflow-hidden"
            style={{ boxShadow: '0 0 0 1px rgba(61,32,160,0.2), 0 40px 100px rgba(0,0,0,0.8)' }}>

            {/* Titlebar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-card">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald/60" />
              <span className="ml-4 text-xs font-body text-gray-mid font-medium">ProDev — Operations Dashboard</span>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-0 border-b border-border">
              {[
                { label: 'Reservas activas', value: '284', delta: '+12%', color: 'text-emerald' },
                { label: 'Revenue hoy',      value: '$18.4K', delta: '+8%', color: 'text-emerald' },
                { label: 'Drivers online',   value: '47',  delta: '94%', color: 'text-amber' },
              ].map((s, i) => (
                <div key={i} className={`px-5 py-4 ${i < 2 ? 'border-r border-border' : ''}`}>
                  <p className="text-[10px] font-body text-gray-mid mb-1 uppercase tracking-widest">{s.label}</p>
                  <p className="text-xl font-display font-bold text-white">{s.value}</p>
                  <p className={`text-xs font-semibold font-display ${s.color}`}>{s.delta}</p>
                </div>
              ))}
            </div>

            {/* Fake chart */}
            <div className="px-5 py-4 border-b border-border">
              <p className="text-[10px] font-body text-gray-mid mb-3 uppercase tracking-widest">Operaciones — últimos 7 días</p>
              <div className="flex items-end gap-1.5 h-20">
                {[40,65,45,80,70,92,85].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.6, delay: 1 + i * 0.08, ease: 'easeOut' }}
                    className="flex-1 rounded-t-md"
                    style={{ background: i === 5 ? 'linear-gradient(to top, #3D20A0, #2DC97E)' : 'rgba(61,32,160,0.3)' }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-1.5">
                {['L','M','X','J','V','S','D'].map(d => (
                  <span key={d} className="flex-1 text-center text-[9px] font-body text-gray-mid">{d}</span>
                ))}
              </div>
            </div>

            {/* Recent activity */}
            <div className="px-5 py-3">
              <p className="text-[10px] font-body text-gray-mid mb-3 uppercase tracking-widest">Actividad reciente</p>
              {[
                { dot: '#2DC97E', text: 'Reserva #2847 — Transfer SDQ → Hotel Riu', time: '2m' },
                { dot: '#3D20A0', text: 'Ticket #1204 vendido — Evinra Festival',   time: '5m' },
                { dot: '#F0A030', text: 'Driver Miguel confirmó ruta norte',          time: '8m' },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-3 py-2 border-b border-border/50 last:border-0">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: row.dot }} />
                  <span className="text-[11px] font-body text-gray-mid flex-1 truncate">{row.text}</span>
                  <span className="text-[10px] font-body text-gray-mid/50 flex-shrink-0">{row.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-4 -left-6 bg-bg-elevated border border-emerald/30 rounded-xl px-4 py-2.5 flex items-center gap-2.5"
            style={{ boxShadow: '0 0 30px rgba(45,201,126,0.15)' }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            <span className="text-xs font-display font-semibold text-white">284 operaciones</span>
            <span className="text-xs font-body text-emerald">en vivo</span>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-body text-gray-mid/50 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-gray-mid/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
