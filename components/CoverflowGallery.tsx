"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

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

const STEP_ROTATE = 35;
const MAX_VISIBLE_OFFSET = 3; // items further than this are hidden entirely

export default function CoverflowGallery() {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false);
  const total = images.length;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Tailwind's md breakpoint (768px) — mirrored here in JS since the
  // horizontal spacing between cards is a transform value, not a CSS
  // class, so it can't be made responsive with Tailwind alone.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const STEP_X = isDesktop ? 260 : 210;
  const STEP_SCALE = isDesktop ? 0.22 : 0.24;

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

  // Lightbox keyboard support + scroll lock
  useEffect(() => {
    if (!lightboxOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") goTo(index + 1);
      if (e.key === "ArrowLeft") goTo(index - 1);
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen, index]);

  return (
    <section id="projects" className="py-20 px-4 bg-zinc-950 overflow-hidden fade-up">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-5xl font-bold text-yellow-500 mb-6">
          Our Work
        </h2>
        <p className="text-gray-300 text-lg">
          A selection of Starwood Constructions projects showcasing precision
          formwork, reinforcement, concrete structures and quality finishes
          across Sydney. Tap a photo or use the arrows to browse.
        </p>
      </div>

      <div
        className="relative h-[520px] md:h-[640px] flex items-center justify-center"
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
                className={`relative w-[340px] h-[420px] md:w-[440px] md:h-[540px] rounded-3xl overflow-hidden border-2 shadow-2xl ${
                  isCenter ? "border-yellow-500" : "border-yellow-500/20"
                }`}
              >
                <Image
                  src={`/images/${image.file}`}
                  alt={image.title}
                  fill
                  sizes="(min-width: 768px) 440px, 340px"
                  className="object-cover"
                />

                {isCenter && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxOpen(true);
                      }}
                      aria-label="View full size"
                      className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/60 border border-yellow-500/40 text-yellow-500 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
                    >
                      <Expand size={18} />
                    </button>

                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-4 py-3">
                      <p className="text-yellow-500 text-sm font-bold text-center">
                        {image.title}
                      </p>
                    </div>
                  </>
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

      {/* Lightbox — rendered via portal directly into document.body so it
          can never be visually covered by the sticky nav or anything else
          with its own stacking context. */}
      {lightboxOpen && mounted && createPortal(
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[9999] flex items-center justify-center px-4">
          <button
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/60 border border-yellow-500/40 text-white flex items-center justify-center hover:bg-red-600 transition"
          >
            <X size={22} />
          </button>

          <button
            onClick={() => goTo(index - 1)}
            aria-label="Previous photo"
            className="absolute left-5 text-yellow-500 text-5xl"
          >
            ‹
          </button>

          <div className="relative w-[95vw] h-[80vh]">
            <Image
              src={`/images/${images[index].file}`}
              alt={images[index].title}
              fill
              sizes="95vw"
              className="object-contain rounded-xl"
            />
          </div>

          <button
            onClick={() => goTo(index + 1)}
            aria-label="Next photo"
            className="absolute right-5 text-yellow-500 text-5xl"
          >
            ›
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-300 text-sm bg-black/60 px-4 py-2 rounded-full border border-yellow-500/20">
            {images[index].title}
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
