"use client";

import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";

/**
 * Shared header (logo + nav) for pages other than the homepage — e.g.
 * the Formwork, Steel Fixing, and Concrete project pages, which don't
 * have their own hero/nav section.
 *
 * Nav links point to "/#section" rather than "#section" alone, since
 * these pages are separate routes — this navigates back to the
 * homepage and then scrolls to that section.
 */
export default function SiteHeader() {
  return (
    <nav className="sticky top-0 z-50 h-30 flex justify-between items-center px-8 bg-black/90 backdrop-blur border-b border-yellow-500/20">

      <div className="flex items-center h-full">
        <Link href="/">
          <Image
            src="/images/starwood-logo.png"
            alt="Starwood Constructions Logo"
            width={300}
            height={300}
            priority
            className="object-contain w-35 h-35 md:w-52 md:h-52 -translate-y-2 md:translate-y-3 cursor-pointer"
          />
        </Link>
      </div>

      <div className="hidden md:flex gap-10 text-gray-300 font-medium">
        <Link href="/#home" className="hover:text-yellow-500 transition">
          Home
        </Link>
        <Link href="/#services" className="hover:text-yellow-500 transition">
          Services
        </Link>
        <Link href="/#projects" className="hover:text-yellow-500 transition">
          Projects
        </Link>
        <Link href="/#contact" className="hover:text-yellow-500 transition">
          Contact
        </Link>
      </div>

      <MobileMenu />

    </nav>
  );
}
