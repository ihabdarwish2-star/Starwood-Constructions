"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// First phrase shows once, then it loops through the service words forever.
const phrases = [
  "SYDNEY CONSTRUCTION SPECIALISTS",
  "FORMWORK",
  "STEEL FIXING",
  "CONCRETING",
];

const LETTER_STAGGER = 0.12; // seconds between each letter appearing (slower still)
const HOLD_MS = 2200; // how long a finished phrase stays on screen before switching

export default function TypewriterCycle({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const letterCount = phrases[index].length;
    const typingDurationMs = letterCount * LETTER_STAGGER * 1000;

    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % phrases.length);
    }, typingDurationMs + HOLD_MS);

    return () => clearTimeout(timer);
  }, [index]);

  const letters = Array.from(phrases[index]);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: LETTER_STAGGER },
    },
    exit: { opacity: 0, transition: { duration: 0.25 } },
  };

  const letterVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.25, ease: "easeOut" as const },
    },
  };

  return (
    <span
      className={className}
      style={{ display: "inline-block", minHeight: "1.5em" }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={phrases[index]}
          variants={container}
          initial="hidden"
          animate="visible"
          exit="exit"
          aria-label={phrases[index]}
          style={{ display: "inline-block" }}
        >
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariant}
              style={{ display: "inline-block" }}
              aria-hidden="true"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
