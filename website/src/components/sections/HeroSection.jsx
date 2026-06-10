import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, TrendingUp, Clock } from 'lucide-react';
import CTAButton from '../ui/CTAButton';
import { AuroraBackground } from '../ui/aurora-background';

const headline = ['We Build', 'the software', 'that runs your business.'];

const subWords = 'Your manual operation — automated, scaled, running on its own.'.split(' ');

const socialProof = [
  { initials: 'E',  color: '#3D20A0', label: 'Evinra' },
  { initials: 'TH', color: '#2DC97E', label: 'TravelorHub' },
  { initials: 'HQ', color: '#F0A030', label: 'HQT' },
  { initials: 'KB', color: '#8B6AE8', label: 'King Boatworks' },
];

const dashStats = [
  { label: 'Active Operations', value: '284', delta: '+12%', color: '#2DC97E' },
  { label: 'Avg. Processing Time', value: '1.4s', delta: '-67%', color: '#3D20A0' },
  { label: 'Manual Tasks Eliminated', value: '3,200', delta: 'this month', color: '#F0A030' },
];

const barHeights = [30, 55, 40, 70, 60, 85, 75, 90, 65, 80];

const activityFeed = [
  { text: 'Transfer assigned — TravelorHub', time: '2s ago', color: '#2DC97E' },
  { text: 'Ticket scanned — Evinra Gate 3', time: '11s ago', color: '#3D20A0' },
  { text: 'Epicor sync complete — 1,204 records', time: '43s ago', color: '#F0A030' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
};
const lineVariant = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const wordVariant = (i) => ({
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.9 + i * 0.055, duration: 0.45, ease: 'easeOut' } },
});

export default function HeroSection() {
  const ref = useRef(null);

  return (
    <AuroraBackground
      className="dark min-h-screen flex-col justify-center px-6 pt-24 pb-16 bg-bg text-white"
      showRadialGradient
    >
      {/* SVG grid texture */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.025 }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left — copy */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-border bg-bg-card text-sm font-display font-semibold text-gray-mid"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
            Software that runs real businesses
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-display font-extrabold leading-none mb-6 select-none"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', letterSpacing: '-0.04em' }}
          >
            <motion.span variants={lineVariant} className="block text-white">
              {headline[0]}
            </motion.span>
            <motion.span variants={lineVariant} className="block text-gradient-brand">
              {headline[1]}
            </motion.span>
            <motion.span variants={lineVariant} className="block text-white">
              {headline[2]}
            </motion.span>
          </motion.h1>

          {/* Animated sub */}
          <p className="font-body text-lg text-gray-mid leading-relaxed mb-10 max-w-lg">
            {subWords.map((w, i) => (
              <motion.span key={i} custom={i} variants={wordVariant(i)} initial="hidden" animate="visible"
                className="inline-block mr-[0.28em]">
                {w}
              </motion.span>
            ))}
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            <CTAButton href="#audit" variant="emerald" size="lg" icon={<Zap className="w-4 h-4" />}>
              Free Automation Audit
            </CTAButton>
            <CTAButton href="#servicios" variant="ghost" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              See services
            </CTAButton>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="flex items-center gap-4"
          >
            <div className="flex -space-x-2">
              {socialProof.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.9 + i * 0.08, type: 'spring', stiffness: 300 }}
                  className="w-8 h-8 rounded-full border-2 border-bg flex items-center justify-center text-[9px] font-bold font-display text-white"
                  style={{ background: s.color }}
                  title={s.label}
                >
                  {s.initials}
                </motion.div>
              ))}
            </div>
            <p className="text-sm font-body text-gray-mid">
              <span className="text-white font-semibold">Evinra, TravelorHub, HQT, King Boatworks</span>
              <br />
              <span className="text-xs">real platforms running today</span>
            </p>
          </motion.div>
        </div>

        {/* Right — dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="hidden lg:block relative"
        >
          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="absolute -top-4 -right-4 z-10 flex items-center gap-2 px-3.5 py-2 rounded-xl border border-emerald/30 bg-bg-card shadow-xl"
          >
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            <span className="text-xs font-display font-semibold text-emerald">284 live operations</span>
          </motion.div>

          {/* Dashboard card */}
          <div className="rounded-2xl border border-border bg-bg-card overflow-hidden"
            style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.03), 0 40px 120px rgba(0,0,0,0.7)' }}>

            {/* Titlebar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald/70" />
              <span className="ml-2 text-[11px] font-body text-gray-mid/60">ProDev OS — Operations Dashboard</span>
            </div>

            <div className="p-5 space-y-4">
              {/* Stat pills */}
              <div className="grid grid-cols-3 gap-3">
                {dashStats.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.12 }}
                    className="p-3 rounded-xl bg-bg border border-border"
                  >
                    <p className="text-[10px] font-body text-gray-mid/60 mb-1 leading-tight">{s.label}</p>
                    <p className="text-lg font-display font-bold text-white leading-none">{s.value}</p>
                    <p className="text-[10px] font-semibold mt-1" style={{ color: s.color }}>{s.delta}</p>
                  </motion.div>
                ))}
              </div>

              {/* Bar chart */}
              <div className="p-4 rounded-xl bg-bg border border-border">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-display font-semibold text-gray-mid uppercase tracking-widest">Daily Throughput</span>
                  <span className="text-[10px] font-body text-emerald flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +24% vs last week
                  </span>
                </div>
                <div className="flex items-end gap-1 h-16">
                  {barHeights.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 1.2 + i * 0.05, duration: 0.5, ease: 'easeOut' }}
                      className="flex-1 rounded-sm"
                      style={{ background: i === 9 ? '#3D20A0' : 'rgba(61,32,160,0.3)' }}
                    />
                  ))}
                </div>
              </div>

              {/* Activity feed */}
              <div className="space-y-2">
                {activityFeed.map((a, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6 + i * 0.1 }}
                    className="flex items-center gap-3 p-2.5 rounded-lg bg-bg border border-border"
                  >
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: a.color }} />
                    <span className="text-[11px] font-body text-gray-mid flex-1 truncate">{a.text}</span>
                    <span className="text-[10px] font-body text-gray-mid/40 flex-shrink-0 flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5" />{a.time}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-display font-semibold tracking-widest text-gray-mid/40 uppercase">Scroll</span>
        <motion.div
          animate={{ scaleY: [1, 1.6, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="w-px h-8 bg-gradient-to-b from-gray-mid/40 to-transparent"
        />
      </motion.div>
    </AuroraBackground>
  );
}
