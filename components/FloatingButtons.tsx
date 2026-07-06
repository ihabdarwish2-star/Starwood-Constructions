"use client";

import { Phone, MessageCircle } from "lucide-react";

// lucide-react removed brand icons (Facebook, Twitter, etc.) in recent versions,
// so we use a small inline SVG instead.
function FacebookIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12.06C22 6.48 17.52 2 11.94 2 6.36 2 1.88 6.48 1.88 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9v-2.91h2.42V9.86c0-2.39 1.42-3.72 3.6-3.72 1.04 0 2.13.19 2.13.19v2.35h-1.2c-1.18 0-1.55.74-1.55 1.49v1.79h2.64l-.42 2.91h-2.22V22c4.78-.75 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

      {/* Call */}
      <a
        href="tel:0450890096"
        className="group relative w-14 h-14 rounded-full bg-yellow-500 hover:bg-yellow-400 text-black flex items-center justify-center shadow-xl transition duration-300 hover:scale-110"
        aria-label="Call Starwood Constructions"
      >
        <Phone size={24} />
        <span className="pointer-events-none absolute right-16 whitespace-nowrap bg-black text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition">
          Call Us
        </span>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/61450890096?text=Hi%2C%20I%27d%20like%20to%20request%20a%20quote%20for%20a%20construction%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 text-white flex items-center justify-center shadow-xl transition duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        {/* Subtle pulse ring to draw the eye, since WhatsApp is likely the highest-converting button */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>
        <MessageCircle size={24} className="relative" />
        <span className="pointer-events-none absolute right-16 whitespace-nowrap bg-black text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition">
          WhatsApp Us
        </span>
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/share/17zpuxuD3w/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-xl transition duration-300 hover:scale-110"
        aria-label="Facebook"
      >
        <FacebookIcon size={24} />
        <span className="pointer-events-none absolute right-16 whitespace-nowrap bg-black text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition">
          Follow Us
        </span>
      </a>

    </div>
  );
}
