"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

/**
 * Drop-in replacement for the hero section's background image.
 * Moves the image slightly slower than the page scrolls (classic
 * parallax), giving it depth instead of feeling flat.
 *
 * This is meant to REPLACE the existing <Image fill priority ... />
 * hero background in page.tsx, not sit alongside it.
 */
export default function ParallaxHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Image moves 25% of the scroll distance — noticeable but not distracting
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 h-[130%] -top-[15%]">
        <Image
          src="/images/homebush-slab.jpg"
          alt="Starwood Constructions formwork slab project in Homebush"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
