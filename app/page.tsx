import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";
import ImageGallery from "@/components/ImageGallery";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* Navigation */}
    <nav className="sticky top-0 z-50 h-30 flex justify-between items-center px-8 bg-black/90 backdrop-blur border-b border-yellow-500/20">


  <div className="flex items-center h-full">

  <Image
  src="/images/starwood-logo.png"
  alt="Starwood Constructions Logo"
  width={300}
  height={300}
 className="object-contain w-35 h-35 md:w-52 md:h-52 -translate-y-2 md:translate-y-3"
/>

  </div>



  <div className="hidden md:flex gap-10 text-gray-300 font-medium">

    <a href="#home" className="hover:text-yellow-500 transition">
      Home
    </a>

    <a href="#services" className="hover:text-yellow-500 transition">
      Services
    </a>

    <a href="#projects" className="hover:text-yellow-500 transition">
      Projects
    </a>

    <a href="#contact" className="hover:text-yellow-500 transition">
      Contact
    </a>

  </div>



  <MobileMenu />


</nav>
      {/* Hero */}

<section
  id="home"
  className="relative min-h-[90vh] flex items-center justify-center px-6 bg-cover bg-center overflow-hidden fade-up"
  style={{
    backgroundImage: "url('/images/homebush-slab.jpg')",
  }}
>


  {/* Dark Overlay */}

  <div className="absolute inset-0 bg-black/70"></div>



  <div className="relative text-center max-w-5xl">


    <div className="inline-block border border-yellow-500/40 rounded-full px-6 py-2 mb-8">

      <p className="text-yellow-500 text-sm tracking-[0.3em] uppercase">
        Sydney Construction Specialists
      </p>

    </div>



    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">

      Precision in Formwork.

      <br />

      <span className="text-yellow-500">
        Strength in Structure.
      </span>

      <br />

      Excellence in Every Pour.

    </h1>



    <p className="mt-8 text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">

      Starwood Constructions delivers premium formwork,
      steel fixing and concrete solutions for residential
      and commercial projects across Sydney.

    </p>



    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">


      <a
        href="#contact"
        className="bg-yellow-500 text-black px-10 py-4 rounded-lg font-bold hover:bg-yellow-600 transition"
      >
        Request a Quote
      </a>



      <a
        href="#projects"
        className="border border-yellow-500 text-yellow-500 px-10 py-4 rounded-lg hover:bg-yellow-500/10 transition"
      >
        View Our Work
      </a>


    </div>


  </div>


</section>
{/* Services */}
<section id="services" className="py-20 px-8 bg-zinc-950">
  <h2 className="text-4xl text-center font-bold text-yellow-500 mb-12">
    Our Services
  </h2>

  <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

    {/* Formwork */}
    <div className="border border-yellow-500/30 rounded-xl p-10 bg-black/40 hover:border-yellow-500 transition">
      <h3 className="text-2xl font-bold text-yellow-500">
        Formwork
      </h3>

      <p className="mt-4 text-gray-300 leading-7">
        Precision-built formwork systems for residential and commercial
        construction including slabs, suspended slabs, walls, columns,
        stairs, retaining walls and complex concrete structures.
      </p>

      <Link
        href="/services/formwork"
        className="inline-block mt-6 text-yellow-500 font-bold hover:text-yellow-400 transition"
      >
        View Projects →
      </Link>
    </div>

    {/* Steel Fixing */}
    <div className="border border-yellow-500/30 rounded-xl p-10 bg-black/40 hover:border-yellow-500 transition">
      <h3 className="text-2xl font-bold text-yellow-500">
        Steel Fixing
      </h3>

      <p className="mt-4 text-gray-300 leading-7">
        Professional reinforcement installation completed accurately to
        engineering specifications, ensuring structural integrity,
        strength and long-term durability.
      </p>

      <Link
        href="/services/steel-fixing"
        className="inline-block mt-6 text-yellow-500 font-bold hover:text-yellow-400 transition"
      >
        View Projects →
      </Link>
    </div>

    {/* Concrete */}
    <div className="border border-yellow-500/30 rounded-xl p-10 bg-black/40 hover:border-yellow-500 transition">
      <h3 className="text-2xl font-bold text-yellow-500">
        Concrete
      </h3>

      <p className="mt-4 text-gray-300 leading-7">
        High-quality concrete placement and finishing for residential,
        commercial and civil construction projects, delivered with
        precision, safety and exceptional workmanship.
      </p>

      <Link
        href="/services/concrete"
        className="inline-block mt-6 text-yellow-500 font-bold hover:text-yellow-400 transition"
      >
        View Projects →
      </Link>
    </div>

  </div>
</section>

      {/* About */}

<section id="about" className="py-24 px-8 bg-black fade-up">


  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">



    <div>


      <h2 className="text-5xl font-bold text-yellow-500 mb-6">
        About Starwood Constructions
      </h2>



      <p className="text-gray-300 text-lg leading-relaxed">

        Starwood Constructions specialises in premium
        formwork, steel fixing and concrete solutions
        across Sydney.

        <br /><br />

        We focus on precision workmanship, reliable
        project delivery and high-quality structural
        outcomes for residential and commercial projects.

      </p>


    </div>





    <div className="border border-yellow-500/30 rounded-xl p-10 bg-zinc-950">


      <h3 className="text-3xl font-bold text-yellow-500 mb-8">
        Why Choose Us
      </h3>



      <ul className="space-y-5 text-gray-300 text-lg">


        <li>
          ✓ Professional Formwork Solutions
        </li>


        <li>
          ✓ Experienced Steel Fixing Team
        </li>


        <li>
          ✓ Quality Concrete Construction
        </li>


        <li>
          ✓ Residential & Commercial Projects
        </li>


        <li>
          ✓ Safety, Precision & Reliability
        </li>


      </ul>


    </div>


  </div>


</section>
{/* Projects */}
<section
  id="projects"
  className="py-20 px-8 bg-zinc-950 fade-up"
>

  <div className="text-center max-w-4xl mx-auto mb-16">

    <h2 className="text-5xl font-bold text-yellow-500 mb-6">
      Our Work
    </h2>

    <p className="text-gray-300 text-lg">
      A selection of Starwood Constructions projects showcasing
      precision formwork, reinforcement, concrete structures and
      quality finishes across Sydney.
    </p>

  </div>


  <ImageGallery />


</section>

        

     {/* Contact */}
<section id="contact" className="py-24 px-8 bg-zinc-950 fade-up">

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">


    {/* Contact Information */}

    <div>

      <h2 className="text-5xl font-bold text-yellow-500 mb-6">
        Request a Quote
      </h2>


      <p className="text-gray-300 text-lg leading-relaxed mb-8">
        Tell us about your next construction project.
        Starwood Constructions provides professional formwork,
        steel fixing and concrete solutions across Sydney.
      </p>


      <div className="space-y-4 text-gray-300">

        <p>
          📍 Sydney, NSW
        </p>

        <p>
          📞 0450 890 096
        </p>

        <p>
          ✉ info@starwoodconstructions.com.au
        </p>

      </div>


    </div>



    {/* Quote Form */}

    <form className="grid gap-6 bg-black p-8 rounded-xl border border-yellow-500/30">


      <input
        type="text"
        placeholder="Your Name"
        className="bg-zinc-950 border border-yellow-500/30 px-5 py-4 rounded-lg focus:outline-none focus:border-yellow-500 text-white"
      />


      <input
        type="tel"
        placeholder="Phone Number"
        className="bg-zinc-950 border border-yellow-500/30 px-5 py-4 rounded-lg focus:outline-none focus:border-yellow-500 text-white"
      />


      <input
        type="email"
        placeholder="Email Address"
        className="bg-zinc-950 border border-yellow-500/30 px-5 py-4 rounded-lg focus:outline-none focus:border-yellow-500 text-white"
      />


      <select
        className="bg-zinc-950 border border-yellow-500/30 px-5 py-4 rounded-lg text-gray-300"
      >

        <option>
          Select Service
        </option>

        <option>
          Formwork
        </option>

        <option>
          Steel Fixing
        </option>

        <option>
          Concrete
        </option>

        <option>
          Retaining Walls
        </option>

      </select>



      <textarea
        placeholder="Project Details"
        rows={5}
        className="bg-zinc-950 border border-yellow-500/30 px-5 py-4 rounded-lg focus:outline-none focus:border-yellow-500 text-white resize-none"
      />


      <button
        type="submit"
        className="bg-yellow-500 text-black py-4 rounded-lg font-bold hover:bg-yellow-600 transition"
      >
        Send Request
      </button>


    </form>


  </div>

</section>
      {/* Footer */}

<footer className="border-t border-yellow-500/20 py-12 px-8 bg-zinc-950">


  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">



    <div>

      <h2 className="text-3xl font-bold text-yellow-500">
        STARWOOD
      </h2>


      <p className="text-gray-400 mt-4">
        Premium Formwork • Steel Fixing • Concrete
      </p>


      <p className="text-gray-500 mt-4 text-sm">
        Building strong structures across Sydney.
      </p>

    </div>





    <div>

      <h3 className="text-yellow-500 font-bold mb-5">
        Contact
      </h3>


      <p className="text-gray-300">
        Sydney, NSW
      </p>


      <p className="text-gray-300 mt-2">
        Phone: 0450 890 096
      </p>


      <p className="text-gray-300 mt-2">
        Email: info@starwoodconstructions.com.au
      </p>


    </div>





    <div>

      <h3 className="text-yellow-500 font-bold mb-5">
        Services
      </h3>


      <p className="text-gray-300">
        Formwork
      </p>


      <p className="text-gray-300 mt-2">
        Steel Fixing
      </p>


      <p className="text-gray-300 mt-2">
        Concrete
      </p>


    </div>



  </div>





  <div className="text-center text-gray-500 text-sm mt-12 border-t border-yellow-500/10 pt-6">

    © 2026 Starwood Constructions. All Rights Reserved.

  </div>



</footer>
    </main>
  );
}