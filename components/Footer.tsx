"use client";

import { Phone, Mail, MapPin } from "lucide-react";

// lucide-react removed brand icons, so a small inline SVG is used here too
// (same approach as FloatingButtons.tsx) for consistency.
function FacebookIcon({ size = 20 }: { size?: number }) {
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

function InstagramIcon({ size = 20 }: { size?: number }) {
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

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-yellow-500/20 py-16 px-8 bg-zinc-950">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-500">STARWOOD</h2>

          <p className="text-gray-400 mt-4">
            Premium Formwork • Steel Fixing • Concrete
          </p>

          <p className="text-gray-500 mt-4 text-sm">
            Building strong structures across Sydney.
          </p>

          {/* Social */}
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.facebook.com/share/17zpuxuD3w/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Starwood Constructions on Facebook"
              className="w-10 h-10 rounded-full border border-yellow-500/30 flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-black transition"
            >
              <FacebookIcon size={18} />
            </a>

            {/* TODO: replace "#" with your actual Instagram profile URL once ready */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Starwood Constructions on Instagram"
              className="w-10 h-10 rounded-full border border-yellow-500/30 flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-black transition"
            >
              <InstagramIcon size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-yellow-500 font-bold mb-5">Quick Links</h3>

          <nav className="flex flex-col gap-3 text-gray-300">
            <a href="#home" className="hover:text-yellow-500 transition w-fit">
              Home
            </a>
            <a href="#services" className="hover:text-yellow-500 transition w-fit">
              Services
            </a>
            <a href="#projects" className="hover:text-yellow-500 transition w-fit">
              Projects
            </a>
            <a href="#testimonials" className="hover:text-yellow-500 transition w-fit">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-yellow-500 transition w-fit">
              Contact
            </a>
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-yellow-500 font-bold mb-5">Contact</h3>

          <div className="flex flex-col gap-3 text-gray-300">
            <p className="flex items-center gap-3">
              <MapPin size={18} className="text-yellow-500 shrink-0" />
              Sydney, NSW
            </p>

            <a
              href="tel:0450890096"
              className="flex items-center gap-3 hover:text-yellow-500 transition w-fit"
            >
              <Phone size={18} className="text-yellow-500 shrink-0" />
              0450 890 096
            </a>

            <a
              href="mailto:starwood.construction1@gmail.com"
              className="flex items-center gap-3 hover:text-yellow-500 transition w-fit break-all"
            >
              <Mail size={18} className="text-yellow-500 shrink-0" />
              starwood.construction1@gmail.com
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-yellow-500 font-bold mb-5">Services</h3>

          <div className="flex flex-col gap-3 text-gray-300">
            <p>Formwork</p>
            <p>Steel Fixing</p>
            <p>Concrete</p>
            <p>Retaining Walls</p>
          </div>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm mt-12 border-t border-yellow-500/10 pt-6">
        © {year} Starwood Constructions. All Rights Reserved.
      </div>
    </footer>
  );
}
