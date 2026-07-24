"use client";

import { Phone, MessageCircle } from "lucide-react";

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

function InstagramIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

// Smaller footprint on mobile (w-11/h-11, tighter gap, closer to the
// corner) so the stack doesn't cover as much of the screen. Scales back
// up to the original size on tablet/desktop (md:).
export default function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-2.5 md:gap-4">

      {/* Call */}
      <a
        href="tel:0450890096"
        className="group relative w-11 h-11 md:w-14 md:h-14 rounded-full bg-yellow-500 hover:bg-yellow-400 text-black flex items-center justify-center shadow-xl transition duration-300 hover:scale-110"
        aria-label="Call Starwood Constructions"
      >
        <Phone size={18} className="md:hidden" />
        <Phone size={24} className="hidden md:block" />
        <span className="pointer-events-none absolute right-14 md:right-16 whitespace-nowrap bg-black text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition">
          Call Us
        </span>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/61450890096?text=Hi%2C%20I%27d%20like%20to%20request%20a%20quote%20for%20a%20construction%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-11 h-11 md:w-14 md:h-14 rounded-full bg-green-500 hover:bg-green-400 text-white flex items-center justify-center shadow-xl transition duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>
        <MessageCircle size={18} className="relative md:hidden" />
        <MessageCircle size={24} className="relative hidden md:block" />
        <span className="pointer-events-none absolute right-14 md:right-16 whitespace-nowrap bg-black text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition">
          WhatsApp Us
        </span>
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/share/17zpuxuD3w/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-11 h-11 md:w-14 md:h-14 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-xl transition duration-300 hover:scale-110"
        aria-label="Facebook"
      >
        <FacebookIcon size={18} />
        <span className="pointer-events-none absolute right-14 md:right-16 whitespace-nowrap bg-black text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition">
          Follow Us
        </span>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/starwood.constructions?igsh=MXRlemwyaXQzYWxscA=="
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-11 h-11 md:w-14 md:h-14 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 hover:brightness-110 text-white flex items-center justify-center shadow-xl transition duration-300 hover:scale-110"
        aria-label="Instagram"
      >
        <InstagramIcon size={18} />
        <span className="pointer-events-none absolute right-14 md:right-16 whitespace-nowrap bg-black text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition">
          Follow Us
        </span>
      </a>

    </div>
  );
}
