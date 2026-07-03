import Link from "next/link";
import Image from "next/image";

export default function FormworkPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}
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

      {/* Images */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-yellow-500 text-center mb-10">
          Project Gallery
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Image
            src="/images/homebush-slab-and-walls.jpg"
            alt="Project 1"
            width={1200}
            height={800}
            className="rounded-xl hover:scale-105 transition duration-500"
          />

          <Image
            src="/images/homebush-slab-and-walls-4.jpg"
            alt="Project 2"
            width={1200}
            height={800}
            className="rounded-xl hover:scale-105 transition duration-500"
          />
        </div>

        {/* Videos */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-yellow-500 text-center mb-10">
            Project Videos
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <video controls className="rounded-xl w-full border border-yellow-500/20">
              <source
                src="/videos/homebush-extension-slab-2.mp4"
                type="video/mp4"
              />
            </video>

            <video controls className="rounded-xl w-full border border-yellow-500/20">
              <source
                src="/videos/homebush-level1-suspended-1.mp4"
                type="video/mp4"
              />
            </video>

          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-16">
          <Link
            href="/"
            className="inline-block border border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg hover:bg-yellow-500 hover:text-black transition"
          >
            ← Back to Home
          </Link>
        </div>

      </section>
    </main>
  );
}