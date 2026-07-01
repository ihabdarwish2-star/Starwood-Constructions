"use client";

import { useState } from "react";

export default function MobileMenu() {

  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">

      <button
        onClick={() => setOpen(!open)}
        className="text-yellow-500 text-3xl"
      >
        ☰
      </button>


      {open && (

        <div className="absolute right-0 top-12 w-56 bg-zinc-950 border border-yellow-500/30 rounded-xl p-5 shadow-lg z-50">

          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="block py-3 text-gray-300 hover:text-yellow-500"
          >
            Home
          </a>


          <a
            href="#services"
            onClick={() => setOpen(false)}
            className="block py-3 text-gray-300 hover:text-yellow-500"
          >
            Services
          </a>


          <a
            href="#projects"
            onClick={() => setOpen(false)}
            className="block py-3 text-gray-300 hover:text-yellow-500"
          >
            Projects
          </a>


          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block py-3 text-gray-300 hover:text-yellow-500"
          >
            Contact
          </a>


        </div>

      )}

    </div>
  );
}