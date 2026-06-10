import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export default function CTAButton({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  onClick,
  href,
  className = '',
  ...props
}) {
  const base =
    'relative inline-flex items-center justify-center gap-2.5 font-display font-semibold rounded-xl transition-colors duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-DEFAULT focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden';

  const variants = {
    primary:
      'bg-indigo-DEFAULT text-white hover:bg-indigo-dark border border-indigo-DEFAULT/50',
    emerald:
      'bg-emerald text-[#090910] hover:bg-emerald-dark border border-emerald/50',
    ghost:
      'bg-transparent text-white border border-border hover:border-indigo-mid/60 hover:bg-indigo-DEFAULT/10',
    amber:
      'bg-amber text-[#090910] hover:bg-amber-dark border border-amber/50',
    outline:
      'bg-transparent text-indigo-mid border border-indigo-DEFAULT/50 hover:bg-indigo-DEFAULT/10 hover:text-white',
  };

  const sizes = {
    sm:  'px-4 py-2.5 text-sm',
    md:  'px-6 py-3.5 text-[0.9375rem]',
    lg:  'px-8 py-4.5 text-base',
    xl:  'px-10 py-5 text-lg',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap:   { scale: 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 25 },
  };

  const content = (
    <>
      {/* Shimmer on hover */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent -translate-x-full"
        whileHover={{ x: '200%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        icon && <span className="flex-shrink-0">{icon}</span>
      )}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps} {...props}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={loading}
      className={classes}
      {...motionProps}
      {...props}
    >
      {content}
    </motion.button>
  );
}
