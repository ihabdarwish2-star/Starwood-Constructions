export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center text-white flex items-center justify-center px-6"
      style={{
        backgroundImage: "url('/images/homebush-slab.jpg')",
      }}
    >

      <div className="absolute inset-0 bg-black/60"></div>


      <div className="relative max-w-5xl text-center">


        <p className="text-yellow-500 uppercase tracking-[0.4em] mb-6">
          Premium Formwork • Steel Fixing • Concrete
        </p>


        <h1 className="text-5xl md:text-7xl font-bold leading-tight">

          Precision in Formwork.

          <br />

          <span className="text-yellow-500">
            Strength in Structure.
          </span>

          <br />

          Excellence in Every Pour.

        </h1>



        <p className="mt-8 text-gray-300 text-lg max-w-3xl mx-auto">

          Starwood Constructions delivers premium formwork,
          steel fixing and concrete solutions across Sydney.

          We specialise in residential, commercial and structural
          projects with a commitment to quality, safety and precision.

        </p>



        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">


          <a
            href="#contact"
            className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition"
          >
            Request a Quote
          </a>



          <a
            href="#projects"
            className="border border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg hover:bg-yellow-500 hover:text-black transition"
          >
            View Our Work
          </a>


        </div>


      </div>


    </section>
  );
}