export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-yellow-500/20">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

          <div className="text-yellow-500 font-bold text-xl tracking-wide">
            STARWOOD
          </div>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#services" className="hover:text-yellow-500 transition">Services</a>
            <a href="#work" className="hover:text-yellow-500 transition">Our Work</a>
            <a href="#about" className="hover:text-yellow-500 transition">About</a>
            <a href="#contact" className="hover:text-yellow-500 transition">Contact</a>
          </div>

          <a
            href="#contact"
            className="bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-400 transition"
          >
            Request Quote
          </a>

        </div>
      </nav>

      {/* HERO */}
      <section
        className="min-h-screen flex items-center justify-center px-6 text-center pt-24 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* CONTENT */}
        <div className="max-w-4xl relative z-10">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Precision Formwork. <br />
            Strong Steel Fixing. <br />
            Reliable Concrete Works.
          </h1>

          <p className="mt-6 text-gray-300 text-lg md:text-xl">
            Starwood Constructions delivers high-quality structural work across Sydney for residential and commercial projects.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition"
            >
              Request a Quote
            </a>

            <a
              href="#work"
              className="border border-yellow-500 px-6 py-3 rounded-md font-semibold hover:bg-yellow-500/10 transition"
            >
              View Our Work
            </a>
          </div>

          <p className="mt-10 text-sm text-gray-400">
            Sydney Based • Residential & Commercial • Fully Insured
          </p>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 px-6 border-t border-yellow-500/20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">

          <div className="p-6 border border-yellow-500/20 rounded-lg">
            <h3 className="text-xl font-semibold text-yellow-500">Formwork</h3>
            <p className="text-gray-400 mt-2">
              Precision structural frameworks for slabs, walls, and columns.
            </p>
          </div>

          <div className="p-6 border border-yellow-500/20 rounded-lg">
            <h3 className="text-xl font-semibold text-yellow-500">Steel Fixing</h3>
            <p className="text-gray-400 mt-2">
              Accurate reinforcement placement for maximum structural strength.
            </p>
          </div>

          <div className="p-6 border border-yellow-500/20 rounded-lg">
            <h3 className="text-xl font-semibold text-yellow-500">Concrete Works</h3>
            <p className="text-gray-400 mt-2">
              High-quality pours and finishing for durable foundations.
            </p>
          </div>

        </div>
      </section>

{/* CONTACT */}
<section id="contact" className="py-20 px-6 border-t border-yellow-500/20">
  <div className="max-w-4xl mx-auto">

    <h2 className="text-3xl md:text-4xl font-bold text-center">
      Request a Quote
    </h2>

    <p className="text-gray-400 text-center mt-4">
      Tell us about your project and we’ll get back to you.
    </p>

    <form className="mt-10 grid gap-6">

      <input
        type="text"
        placeholder="Your Name"
        className="bg-zinc-950 border border-yellow-500/30 px-5 py-4 rounded-lg focus:outline-none focus:border-yellow-500"
      />

      <input
        type="tel"
        placeholder="Phone Number"
        className="bg-zinc-950 border border-yellow-500/30 px-5 py-4 rounded-lg focus:outline-none focus:border-yellow-500"
      />

      <input
        type="text"
        placeholder="Project Type (e.g. slab, house, commercial)"
        className="bg-zinc-950 border border-yellow-500/30 px-5 py-4 rounded-lg focus:outline-none focus:border-yellow-500"
      />

      <textarea
        placeholder="Tell us about your project..."
        rows={5}
        className="bg-zinc-950 border border-yellow-500/30 px-5 py-4 rounded-lg focus:outline-none focus:border-yellow-500"
      />

      <button
        type="submit"
        className="bg-yellow-500 text-black font-semibold py-4 rounded-lg hover:bg-yellow-400 transition"
      >
        Send Request
      </button>

    </form>

  </div>
</section>
{/* WORK */}
<section id="work" className="py-20 px-6 border-t border-yellow-500/20">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl md:text-4xl font-bold text-center">
      Our Work
    </h2>

    <p className="text-gray-400 text-center mt-4 mb-12">
      Recent formwork, steel fixing and concrete projects across Sydney.
    </p>

    <div className="grid md:grid-cols-3 gap-6">

      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        className="rounded-lg h-64 w-full object-cover hover:scale-105 transition"
      />

      <img
        src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122"
        className="rounded-lg h-64 w-full object-cover hover:scale-105 transition"
      />

      <img
        src="https://images.unsplash.com/photo-1581091870622-2f6f1b5c1c1e"
        className="rounded-lg h-64 w-full object-cover hover:scale-105 transition"
      />

    </div>

  </div>
</section>

{/* ABOUT */}
<section id="about" className="py-20 px-6 border-t border-yellow-500/20">
  <div className="max-w-3xl mx-auto text-center text-gray-400">
    About Starwood Constructions coming soon...
  </div>
</section>
    </main>
  );
}