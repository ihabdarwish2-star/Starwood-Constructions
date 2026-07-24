"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

/**
 * Hero background: looping video on desktop/tablet (md and up), static
 * parallax image on mobile (saves data/battery on smaller screens where
 * visitors are less likely to linger).
 *
 * To use a different video, just change VIDEO_SRC below — the file must
 * already exist in public/videos/.
 */
const VIDEO_SRC = "/videos/hero-video.mp4";

export default function VideoHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Desktop/tablet: looping video */}
      <div className="hidden md:block absolute inset-0 h-full w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      </div>

      {/* Mobile: static parallax image (same as before) */}
      <motion.div
        style={{ y }}
        className="block md:hidden absolute inset-0 h-[130%] -top-[15%]"
      >
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
