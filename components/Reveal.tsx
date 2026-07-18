"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

/**
 * Smooth fade + slide-up reveal that triggers once when scrolled into view.
 * This replaces the old CSS/IntersectionObserver "fade-up" approach with
 * Framer Motion's built-in whileInView, which handles all the edge cases
 * (tall sections, short viewports) automatically.
 *
 * Usage: wrap any section content, e.g.
 *   <Reveal><h2>About Us</h2></Reveal>
 *
 * delay is optional, in seconds — useful for staggering multiple items.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
