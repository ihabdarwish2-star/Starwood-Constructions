"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Matches Starwood's existing hero copy: "Precision in Formwork.
// Strength in Structure. Excellence in Every Pour."
const words = ["PRECISION.", "STRENGTH.", "EXCELLENCE."];

/**
 * Pinned scroll section: the background image and "Starwood Constructions"
 * heading stay locked in place while the user scrolls, and the bold word
 * underneath cycles through PRECISION. / STRENGTH. / EXCELLENCE. as they do.
 * The section releases (unpins) once the last word has shown.
 *
 * This is a standalone section — place it wherever you want this specific
 * effect, e.g. right after the existing hero, or replacing it entirely.
 */
export default function PinnedWords() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true,
        },
      });

      words.forEach((word, i) => {
        if (i > 0) {
          tl.to(wordRef.current, { opacity: 0, y: -20, duration: 0.3 })
            .call(() => {
              if (wordRef.current) wordRef.current.textContent = word;
            })
            .fromTo(
              wordRef.current,
              { y: 20 },
              { opacity: 1, y: 0, duration: 0.3 }
            );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden bg-black">
      <Image
        src="/images/homebush-slab.jpg"
        alt="Starwood Constructions formwork slab project"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-60"
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <p className="text-yellow-500 text-sm tracking-[0.3em] uppercase mb-6">
          Sydney Construction Specialists
        </p>

        <h2 className="text-white text-2xl md:text-3xl font-medium mb-4">
          Starwood Constructions
        </h2>

        <div
          ref={wordRef}
          className="text-yellow-500 text-6xl md:text-8xl font-bold"
        >
          {words[0]}
        </div>
      </div>
    </div>
  );
}
