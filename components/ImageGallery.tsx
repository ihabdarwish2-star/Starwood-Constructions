"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  {
    file: "bondi ground floor soffit.jpg",
    title: "Bondi Ground Floor Slab Soffit",
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
    file: "maroubra 1st floor soffit.jpg",
    title: "Maroubra First Floor Soffit",
    category: "Formwork",
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
    file: "randwick mass concrete.jpg",
    title: "Randwick Mass Concrete",
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
    file: "stair Leppington college 2.jpg",
    title: "Leppington College Stair Formwork",
    category: "Stairs",
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
];


export default function ImageGallery() {

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
      : images.filter(
          (image) => image.category === category
        );


  function nextImage() {
    if (selected === null) return;

    setSelected(
      (selected + 1) % filteredImages.length
    );
  }


  function previousImage() {
    if (selected === null) return;

    setSelected(
      (selected - 1 + filteredImages.length) %
      filteredImages.length
    );
  }


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

              <h3 className="text-yellow-500 font-bold">
                {image.title}
              </h3>

              <p className="text-gray-400 text-sm mt-2">
  Starwood Constructions • {image.category}
</p>

            </div>


          </div>

        ))}


      </div>




      {/* Lightbox */}

      {selected !== null && (

        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center px-5">


          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/60 border border-yellow-500/40 text-white text-3xl hover:bg-red-600 transition"
          >
            ×
          </button>



          <button
            onClick={previousImage}
            className="absolute left-5 text-yellow-500 text-5xl"
          >
            ‹
          </button>



          <img
  src={`/images/${images[selected].file}`}
  alt={images[selected].title}
  className="max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl border border-yellow-500/30 animate-[zoom_0.25s_ease]"
/>



          <button
            onClick={nextImage}
            className="absolute right-5 text-yellow-500 text-5xl"
          >
            ›
          </button>


        </div>

      )}


    </>
  );
}