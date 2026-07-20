"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["PRECISION.", "STRENGTH.", "EXCELLENCE."];
const CYCLE_MS = 1300; // how long each word stays before switching (faster)

/**
 * Auto-cycling word section — no longer scroll-triggered, just switches
 * words on a timer. Half viewport height so the next section is visible
 * right away, making it clear there's more content below.
 */
export default function PinnedWords() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, CYCLE_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[50vh] overflow-hidden bg-black flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={words[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-yellow-500 text-6xl md:text-8xl font-bold text-center px-6"
        >
          {words[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
