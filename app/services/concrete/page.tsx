import Link from "next/link";
import Image from "next/image";

export default function ConcretePage() {

  const concreteImages = [
    "/images/maroubra 1st floor slab poured.jpg",
    "/images/maroubra 1st floor slab pouring 2.jpg",
    "/images/maroubra 1st floor slab pouring.jpg",
    "/images/epping-slab-pour.jpeg"
  ];

  const concreteVideos = [
    {
      src: "/videos/maroubra-slab-pour-ground1.mp4",
      title: "Slab Pour – Ground Level (Maroubra)"
    },
    {
      src: "/videos/maroubra-roof-slab-pour.mp4",
      title: "Roof Slab Pour – Maroubra"
    },
    {
      src: "/videos/homebush-extension-slab-2.mp4",
      title: "Extension Slab Pour – Homebush"
    },
    {
      src: "/videos/homebush-slab-extension-4.mp4",
      title: "Final Slab Pour Stage – Homebush"
    },
    {
      src: "/videos/homebush-level1-suspended-1.mp4",
      title: "Suspended Slab Pour – Level 1"
    },
    {
      src: "/videos/homebush-level-1-suspended-2.mp4",
      title: "Suspended Slab Pour Completion"
    },
    {
      src: "/videos/Leppington-stair-pour.mp4",
      title: "Stair Concrete Pour – Leppington"
    }
  ];

  return (
    <main className="min-h-screen bg-[#090909] text-white">

      {/* HERO */}
      <section className="py-24 text-center border-b border-yellow-500/20">
        <h1 className="text-5xl font-bold text-yellow-500">
          Concrete Works
        </h1>

        <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
          High-quality concrete placement, slab pours, suspended slabs and structural finishing for residential and commercial projects across Sydney.
        </p>
      </section>

      {/* IMAGES */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold text-yellow-500 mb-8">
          Project Gallery
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {concreteImages.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-yellow-500/20">
              <Image
                src={img}
                alt={`Concrete ${i + 1}`}
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

        <h2 className="text-3xl font-bold text-yellow-500 mb-8">
          Concrete Pour Videos
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {concreteVideos.map((vid, i) => (
            <div key={i} className="space-y-2">

              <video
                controls
                className="w-full rounded-xl border border-yellow-500/20"
              >
                <source src={vid.src} type="video/mp4" />
              </video>

              <p className="text-sm text-gray-400">
                {vid.title}
              </p>

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
          ← Back Home
        </Link>
      </div>

    </main>
  );
}