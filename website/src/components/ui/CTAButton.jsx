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
    'relative inline-flex items-center justify-center gap-2.5 font-display font-semibold rounded-xl transition-colors duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-DEFAULT focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden';

  const variants = {
    primary:
      'bg-indigo-DEFAULT text-white hover:bg-indigo-dark border border-indigo-DEFAULT/50',
    emerald:
      'bg-emerald text-white hover:bg-emerald-dark border border-emerald/50 shadow-sm',
    ghost:
      'bg-white/70 text-navy border border-[#D8DAEE] hover:bg-indigo-DEFAULT/10 hover:border-indigo-DEFAULT/40 hover:text-indigo-DEFAULT backdrop-blur-sm',
    amber:
      'bg-amber text-white hover:bg-amber-dark border border-amber/50',
    outline:
      'bg-transparent text-indigo-DEFAULT border border-indigo-DEFAULT/50 hover:bg-indigo-DEFAULT/10',
  };

  const sizes = {
    sm:  'px-5 py-2.5 text-sm',
    md:  'px-7 py-3.5 text-[0.9375rem]',
    lg:  'px-9 py-4 text-base',
    xl:  'px-12 py-5 text-lg',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap:   { scale: 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 25 },
  };

  const content = (
    <>
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.12] to-transparent -translate-x-full"
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
