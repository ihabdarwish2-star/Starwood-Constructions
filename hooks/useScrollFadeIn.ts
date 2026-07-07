"use client";

import { useEffect } from "react";

/**
 * Watches every element with the "fade-up" class and adds "in-view"
 * the first time it scrolls into the viewport, triggering the CSS
 * animation defined in globals.css.
 *
 * threshold is intentionally very low (0.01) because some sections
 * (like the image gallery) are much taller than a mobile viewport —
 * a higher threshold like 0.15 would require 15% of the WHOLE section
 * to be visible at once, which may never happen on short screens,
 * leaving the section permanently invisible (opacity: 0).
 */
export default function useScrollFadeIn() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.01, // fires as soon as almost any part is visible
        rootMargin: "0px 0px -10px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}