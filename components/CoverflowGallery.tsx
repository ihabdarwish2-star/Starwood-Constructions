"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Same photo set as the main gallery — kept as its own copy here so this
// experimental component can be deleted later without touching
// ImageGallery.tsx at all.
const images = [
  { file: "maroubra-level1-soffit3.jpeg", title: "Maroubra Level 1 Soffit" },
  { file: "pemulway-suspended.png", title: "Pemulwuy Suspended Slab Works" },
  { file: "finish-stair-leppington-school-front.jpg", title: "Leppington School Stair Finish" },
  { file: "finished-look-stair-soffit.jpg", title: "Finished Stair Soffit" },
  { file: "finished-stair-leppington-back.jpg", title: "Leppington Stair Rear Finish" },
  { file: "stair-leppington-college-2.jpg", title: "Leppington College Stair Formwork" },
  { file: "maroubra-1st-floor-slab-poured.jpg", title: "Maroubra First Floor Slab Pour" },
  { file: "maroubra-1st-floor-slab-pouring.jpg", title: "Maroubra First Floor Concrete Pour" },
  { file: "randwick-mass-concrete-2.jpg", title: "Randwick Mass Concrete Works" },
  { file: "randwick-mass-concrete-3.jpg", title: "Randwick Concrete Structure" },
  { file: "randwick-retaining-wall.jpg", title: "Randwick Retaining Wall" },
  { file: "reinforcement-slab-maroubra.jpg", title: "Maroubra Slab Reinforcement" },
  { file: "stair-maroubra.jpg", title: "Maroubra Stair Formwork" },
  { file: "top-formwork-prepour-maroubra.jpg", title: "Maroubra Pre-Pour Formwork Preparation" },
  { file: "maroubra-storey-street.png", title: "Maroubra Street-Level Structure" },
];

// How far (in px) each step away from center sits, and how much
// smaller/dimmer/rotated each step becomes. Tuned for a fairly dramatic
// "curving away" look — adjust these to taste.
const STEP_X = 180;
const STEP_SCALE = 0.16;
const STEP_ROTATE = 35;
const MAX_VISIBLE_OFFSET = 3; // items further than this are hidden entirely

export default function CoverflowGallery() {
  const [index, setIndex] = useState(0);
  const total = images.length;

  function goTo(newIndex: number) {
    setIndex(((newIndex % total) + total) % total);
  }

  // Signed distance from center, wrapped to whichever direction is shorter
  function offsetFor(i: number) {
    let diff = i - index;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  }

  return (
    <section className="py-20 px-4 bg-black overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-yellow-500 mb-4">
          Our Work — Coverflow
        </h2>
        <p className="text-gray-400 text-sm">
          Experimental gallery layout — tap a side photo or use the arrows to browse.
        </p>
      </div>

      <div
        className="relative h-[420px] flex items-center justify-center"
        style={{ perspective: "1400px" }}
      >
        {images.map((image, i) => {
          const offset = offsetFor(i);
          const isVisible = Math.abs(offset) <= MAX_VISIBLE_OFFSET;
          if (!isVisible) return null;

          const isCenter = offset === 0;

          return (
            <motion.div
              key={image.file}
              className="absolute cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
              animate={{
                x: offset * STEP_X,
                scale: 1 - Math.abs(offset) * STEP_SCALE,
                rotateY: -offset * STEP_ROTATE,
                opacity: 1 - Math.abs(offset) * 0.28,
                zIndex: total - Math.abs(offset),
              }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              onClick={() => goTo(i)}
            >
              <div
                className={`relative w-[260px] h-[320px] rounded-3xl overflow-hidden border-2 shadow-2xl ${
                  isCenter ? "border-yellow-500" : "border-yellow-500/20"
                }`}
              >
                <Image
                  src={`/images/${image.file}`}
                  alt={image.title}
                  fill
                  sizes="260px"
                  className="object-cover"
                />
                {isCenter && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-4 py-3">
                    <p className="text-yellow-500 text-sm font-bold text-center">
                      {image.title}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Arrows */}
      <div className="flex justify-center gap-6 mt-8">
        <button
          onClick={() => goTo(index - 1)}
          aria-label="Previous photo"
          className="w-12 h-12 rounded-full border border-yellow-500/40 text-yellow-500 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={() => goTo(index + 1)}
          aria-label="Next photo"
          className="w-12 h-12 rounded-full border border-yellow-500/40 text-yellow-500 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
