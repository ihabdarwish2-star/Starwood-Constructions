"use client";

import { motion } from "framer-motion";

/**
 * Animates text in letter-by-letter, left to right, each letter fading
 * and sliding in slightly staggered after the previous one.
 *
 * Usage:
 *   <AnimatedText text="Sydney Construction Specialists" className="..." />
 *
 * Pass whatever className you'd normally put on the text element — it's
 * applied to the wrapping <motion.span>, so existing styling carries over.
 */
export default function AnimatedText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.035,
      },
    },
  };

  const letterVariant = {
    hidden: { opacity: 0, x: -8 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" as const },
    },
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      aria-label={text}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariant}
          style={{ display: "inline-block" }}
          aria-hidden="true"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
}
