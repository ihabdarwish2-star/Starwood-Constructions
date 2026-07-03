import Link from "next/link";
import Image from "next/image";

export default function FormworkPage() {

  const images = [
    "/images/homebush-slab-and-walls.jpg",
    "/images/homebush-slab-and-walls-4.jpg",
    "/images/homebush-slab-and-walls-5.jpg",
    "/images/homebush-slab.jpg",
    "/images/homebush-wall-and-slab-3.jpg",
    "/images/homebush-walls-and-slab-1.jpg",
    "/images/homebush-walls-and-slab-2.jpg",

    "/images/bondi ground floor soffit.jpg",

    "/images/finish stair Leppington school front.jpg",
    "/images/finished look stair soffit.jpg",
    "/images/finished stair Leppington back.jpg",
    "/images/stair Leppington school formwork.jpg",
    "/images/stair Leppington college 2.jpg",
    "/images/stair maroubra.jpg",

    "/images/maroubra 1st floor slab poured.jpg",
    "/images/maroubra 1st floor slab pouring 2.jpg",
    "/images/maroubra 1st floor slab pouring.jpg",
    "/images/maroubra 1st floor soffit.jpg",
    "/images/top formwork prepour Maroubra.jpg",

    "/images/randwick mass concrete 2.jpg",
    "/images/randwick mass concrete 3.jpg",
    "/images/randwick retaining wall.jpg"
  ];

  const videos = [
    "/videos/Allambie-Heights-spa.mp4",
    "/videos/homebush-extension-slab-2.mp4",
    "/videos/homebush-level-1-suspended-2.mp4",
    "/videos/homebush-level1-suspended-1.mp4",
    "/videos/homebush-slab-extension-2.mp4",
    "/videos/homebush-slab-extension-3.mp4",
    "/videos/homebush-slab-extension-4.mp4"
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="relative h-[420px] flex items-center justify-center">
        <Image
          src="/images/homebush-slab-and-walls.jpg"
          alt="Formwork Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-yellow-500">
            Formwork Projects
          </h1>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Precision-built formwork systems for residential and commercial construction across Sydney.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-yellow-500 text-center mb-12">
          Project Gallery
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-yellow-500/20"
            >
              <Image
                src={img}
                alt={`Formwork Project ${i + 1}`}
                width={1200}
                height={800}
                className="object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* VIDEOS */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-yellow-500 text-center mb-12">
          Project Videos
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((vid, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden border border-yellow-500/20"
            >
              <video controls className="w-full">
                <source src={vid} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </section>

      {/* BACK BUTTON */}
      <div className="text-center pb-16">
        <Link
          href="/"
          className="inline-block border border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg hover:bg-yellow-500 hover:text-black transition"
        >
          ← Back to Home
        </Link>
      </div>

    </main>
  );
}