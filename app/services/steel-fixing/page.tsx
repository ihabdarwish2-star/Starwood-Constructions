import Link from "next/link";

export default function SteelFixingPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">

      {/* Header */}
      <section className="py-24 text-center border-b border-yellow-500/20">
        <h1 className="text-5xl font-bold text-yellow-500">
          Steel Fixing Projects
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Accurate reinforcement installation for strong, durable concrete structures across Sydney.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {[1,2,3,4,5,6].map((i) => (
            <div
              key={i}
              className="h-64 border border-yellow-500/20 rounded-xl bg-zinc-950 flex items-center justify-center"
            >
              <div className="text-center">
                <p className="text-yellow-500 font-bold">
                  Steel Project {i}
                </p>
                <p className="text-gray-400 text-sm">
                  Coming Soon
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Back */}
      <div className="text-center pb-16">
        <Link
          href="/"
          className="text-yellow-500 border border-yellow-500 px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-black transition"
        >
          ← Back Home
        </Link>
      </div>

    </main>
  );
}