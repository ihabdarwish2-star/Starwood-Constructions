import Link from "next/link";
import Image from "next/image";

export default function SteelFixingPage() {

  const maroubraReoImages = [
    "/images/maroubra-roof-slab-reo2.jpeg",
    "/images/maroubra-roof-slab-reo3.jpeg",
    "/images/maroubra-roof-slab-reo4.jpeg",
    "/images/maroubra-roof-slab-reo5.jpeg",
    "/images/maroubra-roof-slab-reo6.jpeg",
    "/images/reinforcement-slab-maroubra.jpg"
  ];

  const maroubraReoVideos = [
    {
      src: "/videos/maroubra-slab-pre-pour-ground1.mp4",
      title: "Slab Preparation – Pre Pour Works"
    },
    {
      src: "/videos/maroubra-roof-slab-reo.mp4",
      title: "Reinforcement (Reo) – Roof Slab Installation"
    },
    {
      src: "/videos/maroubra-roof-slab-reo-top-formwork.mp4",
      title: "Top Formwork & Reo Installation"
    },
    {
      src: "/videos/Allambie-Heights-spa.mp4",
      title: "Allambie Heights – Site Works & Preparation"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="py-24 text-center border-b border-yellow-500/20">
        <h1 className="text-5xl font-bold text-yellow-500">
          Steel Fixing
        </h1>

        <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
          Professional reinforcement installation for slabs, walls, columns and structural concrete elements across residential and commercial projects in Sydney. Delivered with precision, safety and engineering compliance.
        </p>
      </section>

      {/* PROJECT SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold text-yellow-500 mb-4">
          Maroubra – Reinforcement Works (REO)
        </h2>

        <p className="text-gray-300 mb-10 max-w-3xl">
          Steel reinforcement installation including roof slabs, formwork preparation and structural reinforcement works delivered with precision and strict compliance to engineering specifications.
        </p>

        {/* IMAGES */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {maroubraReoImages.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-yellow-500/20"
            >
              <Image
                src={img}
                alt={`Steel Fixing ${i + 1}`}
                width={1200}
                height={800}
                className="object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>

        {/* VIDEOS */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-yellow-500 mb-6">
            Videos
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {maroubraReoVideos.map((vid, i) => (
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
        </div>

      </section>

      {/* BACK BUTTON */}
      <div className="text-center py-16">
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