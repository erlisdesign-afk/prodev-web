import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeadlineSlide {
  line2: string;
  line3suffix: string;
}

const slides: HeadlineSlide[] = [
  { line2: "the software",       line3suffix: "business."    },
  { line2: "the platform",       line3suffix: "startup."     },
  { line2: "the systems",        line3suffix: "ops."         },
  { line2: "the APIs",           line3suffix: "team."        },
  { line2: "the pipelines",      line3suffix: "product."     },
  { line2: "the backbone",       line3suffix: "clients."     },
  { line2: "the engine",         line3suffix: "growth."      },
  { line2: "the infrastructure", line3suffix: "revenue."     },
];

const wordVariants = {
  hidden: {
    y: -18,
    opacity: 0,
    filter: "blur(8px)",
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    y: 18,
    opacity: 0,
    filter: "blur(8px)",
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

function CyclingWord({
  value,
  cycleKey,
  className = "",
}: {
  value: string;
  cycleKey: number;
  className?: string;
}) {
  return (
    <span className="relative inline-block overflow-hidden align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={cycleKey}
          className={`inline-block whitespace-nowrap ${className}`}
          variants={wordVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function AnimatedHeroHeadline({
  interval = 3000,
}: {
  interval?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      interval
    );
    return () => clearInterval(timer);
  }, [interval]);

  const { line2, line3suffix } = slides[index];

  return (
    <h1
      className="font-display font-extrabold leading-none tracking-tight select-none"
      style={{ fontSize: "clamp(2.8rem, 7.5vw, 6rem)", letterSpacing: "-0.04em" }}
    >
      {/* Line 1 — static */}
      <span className="block">We Build</span>

      {/* Line 2 — animated phrase with brand gradient */}
      <CyclingWord
        value={line2}
        cycleKey={index}
        className="gradient-word block"
      />

      {/* Line 3 — static prefix + animated suffix */}
      <span className="block">
        {"that runs your "}
        <CyclingWord
          value={line3suffix}
          cycleKey={index}
          className="opacity-40"
        />
      </span>
    </h1>
  );
}
