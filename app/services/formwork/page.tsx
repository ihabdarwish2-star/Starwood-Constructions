import Link from "next/link";
import Image from "next/image";

export default function FormworkPage() {

  const homebushImages = [
    "/images/homebush-slab-and-walls.jpg",
    "/images/homebush-slab-and-walls-4.jpg",
    "/images/homebush-slab-and-walls-5.jpg",
    "/images/homebush-slab.jpg",
    "/images/homebush-wall-and-slab-3.jpg",
    "/images/homebush-walls-and-slab-1.jpg",
    "/images/homebush-walls-and-slab-2.jpg"
  ];

  const maroubraImages = [
    "/images/maroubra-level1-soffit.jpeg",
    "/images/maroubra-level1-soffit3.jpeg",
    "/images/maroubra-roof-soffit.png",
    "/images/maroubra-slab-pour-ground2.jpeg",
    "/images/maroubra-slab-pour-ground4.jpeg",
    "/images/maroubra-stair.jpeg",
    "/images/maroubra-storey-street.png",
    "/images/stair-maroubra.jpg",
    "/images/top-formwork-prepour-maroubra.jpg"
  ];

  const randwickImages = [
    "/images/randwick-mass-concrete-2.jpg",
    "/images/randwick-mass-concrete-3.jpg",
    "/images/randwick-mass-concrete.jpg",
    "/images/randwick-retaining-wall.jpg",
    "/images/randwick-hobs.jpeg",
    "/images/randwick-slab-on-ground-reo.jpeg",
    "/images/randwick-slab-on-ground.jpeg",
    "/images/randwick-slab-on-ground2.jpeg",
    "/images/randwick-slab.jpeg",
    "/images/randwick-slab2.jpeg",
    "/images/randwick-slab3.jpeg"
  ];

  const leppingtonImages = [
    "/images/stair-leppington-college-2.jpg",
    "/images/stair-Leppington-school-formwork.jpg",
    "/images/finish-stair-leppington-school-front.jpg",
    "/images/finished-look-stair-soffit.jpg",
    "/images/finished-stair-leppington-back.jpg"
  ];

  const pemulwuyImages = [
    "/images/pemulway-suspended.png"
  ];

  const homebushVideos = [
    {
      src: "/videos/homebush-slab-extension-3.mp4",
      title: "Slab Extension Works"
    },
    {
      src: "/videos/homebush-slab-extension-2.mp4",
      title: "Slab Preparation & Formwork Works"
    },
    {
      src: "/videos/homebush-level1-suspended-1.mp4",
      title: "1st Level Suspended Formwork"
    },
    {
      src: "/videos/homebush-level-1-suspended-2.mp4",
      title: "Suspended Slab Installation"
    },
    {
      src: "/videos/homebush-extension-slab-2.mp4",
      title: "Extension Slab Works"
    },
    ];

  const randwickVideos = [
    {
      src: "/videos/randwick-planter-boxes.mp4",
      title: "Randwick – Planter Box Works"
    }
  ];

  const otherVideos = [
    {
      src: "/videos/Allambie-Heights-spa.mp4",
      title: "Allambie Heights – Site Preparation & Concrete Works"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="py-24 text-center border-b border-yellow-500/20">
        <h1 className="text-5xl font-bold text-yellow-500">
          Formwork Projects
        </h1>

        <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
          Homebush Childcare – Slab-on-ground and 1-level suspended formwork system delivered with precision, structural accuracy, and high-quality workmanship across Sydney.
        </p>
      </section>

      {/* HOMEBUSH */}
      <ProjectSection
        title="Homebush Childcare"
        description="Slab-on-ground and 1-level suspended formwork system delivered with precision and structural accuracy."
        images={homebushImages}
        videos={homebushVideos}
      />

      {/* MAROUBRA */}
      <ProjectSection
        title="Maroubra Residence"
        description="Residential formwork works including slabs, soffits, stairs and structural concrete preparation."
        images={maroubraImages}
      />

      {/* RANDWICK */}
      <ProjectSection
        title="Randwick"
        description="Structural works including slab-on-ground, retaining walls, hobs and mass concrete elements."
        images={randwickImages}
        videos={randwickVideos}
      />

      {/* LEPPINGTON */}
      <ProjectSection
        title="Leppington School"
        description="Detailed stair and soffit formwork for education facility construction completed with precision craftsmanship."
        images={leppingtonImages}
      />

      {/* PEMULWUY */}
      <ProjectSection
        title="Pemulwuy"
        description="Suspended slab formwork for residential development."
        images={pemulwuyImages}
        videos={otherVideos}
      />

      {/* BACK */}
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

/* ---------------- COMPONENT ---------------- */

function ProjectSection({
  title,
  description,
  images,
  videos
}: {
  title: string;
  description: string;
  images: string[];
  videos?: { src: string; title: string }[];
}) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      <h2 className="text-3xl font-bold text-yellow-500 mb-4">
        {title}
      </h2>

      <p className="text-gray-300 mb-10 max-w-3xl">
        {description}
      </p>

      {/* IMAGES */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-xl border border-yellow-500/20">
            <Image
              src={img}
              alt={`${title} ${i + 1}`}
              width={1200}
              height={800}
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>
        ))}
      </div>

      {/* VIDEOS */}
      {videos && videos.length > 0 && (
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-yellow-500 mb-6">
            Videos
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {videos.map((vid, i) => (
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
      )}

    </section>
  );
}