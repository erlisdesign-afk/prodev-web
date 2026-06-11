import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  dark: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ dark, onToggle }: ThemeToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      aria-label="Toggle theme"
      className="relative w-9 h-9 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
    >
      <AnimatedIcon dark={dark} />
    </motion.button>
  );
}

function AnimatedIcon({ dark }: { dark: boolean }) {
  return (
    <motion.div
      key={dark ? "moon" : "sun"}
      initial={{ rotate: -30, opacity: 0, scale: 0.7 }}
      animate={{ rotate: 0,   opacity: 1, scale: 1 }}
      exit={{    rotate: 30,  opacity: 0, scale: 0.7 }}
      transition={{ duration: 0.2 }}
    >
      {dark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
    </motion.div>
  );
}
