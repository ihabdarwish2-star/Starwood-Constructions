"use client";

import { useEffect } from "react";

/**
 * Watches every element with the "fade-up" class and adds "in-view"
 * the first time it scrolls into the viewport, triggering the CSS
 * animation defined in globals.css.
 *
 * Usage: call useScrollFadeIn() once near the top of your page component.
 */
export default function useScrollFadeIn() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            // Only needs to fade in once, so stop watching it after that
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15, // fires once 15% of the section is visible
        rootMargin: "0px 0px -50px 0px", // triggers slightly before it's fully in view
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}