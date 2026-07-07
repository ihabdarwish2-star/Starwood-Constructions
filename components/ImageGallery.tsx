"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  {
    file: "maroubra-level1-soffit3.jpeg",
    title: "Maroubra Level 1 Soffit",
    category: "Formwork",
  },
  {
    file: "pemulway-suspended.png",
    title: "Pemulwuy Suspended Slab Works",
    category: "Formwork",
  },
  {
    file: "finish-stair-leppington-school-front.jpg",
    title: "Leppington School Stair Finish",
    category: "Stairs",
  },
  {
    file: "finished-look-stair-soffit.jpg",
    title: "Finished Stair Soffit",
    category: "Stairs",
  },
  {
    file: "finished-stair-leppington-back.jpg",
    title: "Leppington Stair Rear Finish",
    category: "Stairs",
  },
  {
    file: "stair-leppington-college-2.jpg",
    title: "Leppington College Stair Formwork",
    category: "Stairs",
  },
  {
    file: "maroubra-1st-floor-slab-poured.jpg",
    title: "Maroubra First Floor Slab Pour",
    category: "Concrete",
  },
  {
    file: "maroubra-1st-floor-slab-pouring.jpg",
    title: "Maroubra First Floor Concrete Pour",
    category: "Concrete",
  },
  {
    file: "randwick-mass-concrete-2.jpg",
    title: "Randwick Mass Concrete Works",
    category: "Concrete",
  },
  {
    file: "randwick-mass-concrete-3.jpg",
    title: "Randwick Concrete Structure",
    category: "Concrete",
  },
  {
    file: "randwick-retaining-wall.jpg",
    title: "Randwick Retaining Wall",
    category: "Retaining Walls",
  },
  {
    file: "reinforcement-slab-maroubra.jpg",
    title: "Maroubra Slab Reinforcement",
    category: "Reinforcement",
  },
  {
    file: "stair-maroubra.jpg",
    title: "Maroubra Stair Formwork",
    category: "Stairs",
  },
  {
    file: "top-formwork-prepour-maroubra.jpg",
    title: "Maroubra Pre-Pour Formwork Preparation",
    category: "Formwork",
  },
  {
    file: "maroubra-storey-street.png",
    title: "Maroubra Street-Level Structure",
    category: "Formwork",
  },
];

export default function ImageGallery() {
  // `selected` is always an index INTO filteredImages, never the full images array.
  const [selected, setSelected] = useState<number | null>(null);
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Formwork",
    "Concrete",
    "Reinforcement",
    "Stairs",
    "Retaining Walls",
  ];

  const filteredImages =
    category === "All"
      ? images
      : images.filter((image) => image.category === category);

  function nextImage() {
    if (selected === null) return;
    setSelected((selected + 1) % filteredImages.length);
  }

  function previousImage() {
    if (selected === null) return;
    setSelected((selected - 1 + filteredImages.length) % filteredImages.length);
  }

  useEffect(() => {
    if (selected === null) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") previousImage();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, filteredImages.length]);

  useEffect(() => {
    document.body.style.overflow = selected !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => {
              setCategory(item);
              setSelected(null);
            }}
            className={`px-6 py-3 rounded-full border transition ${
              category === item
                ? "bg-yellow-500 text-black border-yellow-500"
                : "border-yellow-500/40 text-yellow-500 hover:bg-yellow-500/10"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Gallery */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredImages.map((image, index) => (
          <div
            key={image.file}
            onClick={() => setSelected(index)}
            className="cursor-pointer rounded-xl overflow-hidden border border-yellow-500/30 group"
          >
            <div className="relative overflow-hidden">
              <Image
                src={`/images/${image.file}`}
                alt={image.title}
                width={800}
                height={600}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute top-4 left-4 bg-yellow-500 text-black text-xs font-bold px-4 py-2 rounded-full">
                {image.category}
              </div>
            </div>

            <div className="p-4 bg-black">
              <h3 className="text-yellow-500 font-bold">{image.title}</h3>
              <p className="text-gray-400 text-sm mt-2">
                Starwood Constructions • {image.category}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/95 backdrop-blur-sm z-[999] flex items-center justify-center px-4 overflow-hidden">
          <button
            onClick={() => setSelected(null)}
            aria-label="Close"
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/60 border border-yellow-500/40 text-white text-3xl hover:bg-red-600 transition"
          >
            ×
          </button>

          <button
            onClick={previousImage}
            aria-label="Previous image"
            className="absolute left-5 text-yellow-500 text-5xl"
          >
            ‹
          </button>

          <div className="relative w-[95vw] h-[75vh]">
            <Image
              src={`/images/${filteredImages[selected].file}`}
              alt={filteredImages[selected].title}
              fill
              sizes="95vw"
              className="object-contain rounded-xl shadow-2xl"
            />
          </div>

          <button
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-5 text-yellow-500 text-5xl"
          >
            ›
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-300 text-sm bg-black/60 px-4 py-2 rounded-full border border-yellow-500/20">
            {selected + 1} of {filteredImages.length} — {filteredImages[selected].title}
          </div>
        </div>
      )}
    </>
  );
}
