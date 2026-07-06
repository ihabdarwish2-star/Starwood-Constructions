"use client";

import { useState } from "react";
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
    file: "finish stair Leppington school front.jpg",
    title: "Leppington School Stair Finish",
    category: "Stairs",
  },
  {
    file: "finished look stair soffit.jpg",
    title: "Finished Stair Soffit",
    category: "Stairs",
  },
  {
    file: "finished stair Leppington back.jpg",
    title: "Leppington Stair Rear Finish",
    category: "Stairs",
  },
  {
    file: "stair Leppington college 2.jpg",
    title: "Leppington College Stair Formwork",
    category: "Stairs",
  },
  {
    file: "maroubra 1st floor slab poured.jpg",
    title: "Maroubra First Floor Slab Pour",
    category: "Concrete",
  },
  {
    file: "maroubra 1st floor slab pouring.jpg",
    title: "Maroubra First Floor Concrete Pour",
    category: "Concrete",
  },
  {
    file: "randwick mass concrete 2.jpg",
    title: "Randwick Mass Concrete Works",
    category: "Concrete",
  },
  {
    file: "randwick mass concrete 3.jpg",
    title: "Randwick Concrete Structure",
    category: "Concrete",
  },
  {
    file: "randwick retaining wall.jpg",
    title: "Randwick Retaining Wall",
    category: "Retaining Walls",
  },
  {
    file: "reinforcement slab maroubra.jpg",
    title: "Maroubra Slab Reinforcement",
    category: "Reinforcement",
  },
  {
    file: "stair maroubra.jpg",
    title: "Maroubra Stair Formwork",
    category: "Stairs",
  },
  {
    file: "top formwork prepour Maroubra.jpg",
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
  const [selected, setSelected] = useState<string | null>(null);
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

  const currentIndex = selected
    ? filteredImages.findIndex((img) => img.file === selected)
    : -1;

  function nextImage() {
    if (!selected || currentIndex === -1) return;
    const next = (currentIndex + 1) % filteredImages.length;
    setSelected(filteredImages[next].file);
  }

  function previousImage() {
    if (!selected || currentIndex === -1) return;
    const prev =
      (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelected(filteredImages[prev].file);
  }

  return (
    <>
      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10 px-4">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => {
              setCategory(item);
              setSelected(null);
            }}
            className={`px-5 py-2 rounded-full border transition text-sm sm:text-base ${
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-4">
        {filteredImages.map((image) => (
          <div
            key={image.file}
            onClick={() => setSelected(image.file)}
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
      {selected && (
        <div className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center px-4">
          {/* Close */}
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/60 border border-yellow-500/40 text-white text-3xl hover:bg-red-600 transition"
          >
            ×
          </button>

          {/* Prev */}
          <button
            onClick={previousImage}
            className="absolute left-4 sm:left-8 text-yellow-500 text-5xl"
          >
            ‹
          </button>

          {/* Image */}
          <Image
            src={`/images/${selected}`}
            alt="Selected image"
            width={1200}
            height={900}
            className="max-h-[75vh] max-w-[95vw] object-contain rounded-xl shadow-2xl border border-yellow-500/30"
          />

          {/* Next */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 text-yellow-500 text-5xl"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}