"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";
import ImageGallery from "@/components/ImageGallery";
import useScrollFadeIn from "@/hooks/useScrollFadeIn";
import FloatingButtons from "@/components/FloatingButtons";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import AreasWeServe from "@/components/AreasWeServe";
import StatsBar from "@/components/StatsBar";
import HowItWorks from "@/components/HowItWorks";
import ParallaxHero from "@/components/ParallaxHero";
import Reveal from "@/components/Reveal";
import PinnedWords from "@/components/PinnedWords";
import TypewriterCycle from "@/components/TypewriterCycle";



export default function Home() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  useScrollFadeIn();

  return (
    <main className="bg-black text-white min-h-screen">
  <FloatingButtons />



      {/* Navigation */}
    <nav className="sticky top-0 z-50 h-30 flex justify-between items-center px-8 bg-black/90 backdrop-blur border-b border-yellow-500/20">


  <div className="flex items-center h-full">

  <Image
  src="/images/starwood-logo.png"
  alt="Starwood Constructions Logo"
  width={300}
  height={300}
  priority
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
  className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden fade-up"
>

  {/* Background image (optimized, priority-loaded since it's the LCP element) */}
  <ParallaxHero />

  {/* Dark Overlay */}

  <div className="absolute inset-0 bg-black/70"></div>



  <div className="relative text-center max-w-5xl">

<div className="inline-block border border-yellow-500/40 rounded-full px-6 py-2 mb-8">

  <TypewriterCycle className="text-yellow-500 text-lg font-bold tracking-[0.3em] uppercase" />

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
{/* Hero ends above */}

<PinnedWords />

<StatsBar />


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
{/* Services ends above */}

<HowItWorks />



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

{/* Projects section ends above */}

<AreasWeServe />

<Reveal>
  <Testimonials />
</Reveal>

  
        

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
          ✉ starwood.construction1@gmail.com
        </p>

      </div>


    </div>



   {/* Quote Form */}

<form
  className="grid gap-6 bg-black p-8 rounded-xl border border-yellow-500/30"
  onSubmit={async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    // Honeypot check — bots tend to fill every field, humans never see this one
    const honeypot = (form.elements.namedItem("company") as HTMLInputElement)?.value;
    if (honeypot) {
      // Silently pretend success so bots don't learn anything from the response
      form.reset();
      return;
    }

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
    }
  }}
>
  {/* Honeypot field — hidden from real users via CSS, bots often fill it anyway */}
  <input
    name="company"
    type="text"
    tabIndex={-1}
    autoComplete="off"
    className="absolute left-[-9999px] w-px h-px overflow-hidden"
    aria-hidden="true"
  />

  <div>
    <label htmlFor="name" className="sr-only">Your Name</label>
    <input
      id="name"
      name="name"
      type="text"
      placeholder="Your Name"
      required
      className="w-full bg-zinc-950 border border-yellow-500/30 px-5 py-4 rounded-lg focus:outline-none focus:border-yellow-500 text-white"
    />
  </div>

  <div>
    <label htmlFor="phone" className="sr-only">Phone Number</label>
    <input
      id="phone"
      name="phone"
      type="tel"
      placeholder="Phone Number"
      required
      className="w-full bg-zinc-950 border border-yellow-500/30 px-5 py-4 rounded-lg focus:outline-none focus:border-yellow-500 text-white"
    />
  </div>

  <div>
    <label htmlFor="email" className="sr-only">Email Address</label>
    <input
      id="email"
      name="email"
      type="email"
      placeholder="Email Address"
      required
      className="w-full bg-zinc-950 border border-yellow-500/30 px-5 py-4 rounded-lg focus:outline-none focus:border-yellow-500 text-white"
    />
  </div>

  <div>
    <label htmlFor="service" className="sr-only">Select Service</label>
    <select
      id="service"
      name="service"
      required
      defaultValue=""
      className="w-full bg-zinc-950 border border-yellow-500/30 px-5 py-4 rounded-lg text-gray-300"
    >
      <option value="" disabled>Select Service</option>
      <option value="Formwork">Formwork</option>
      <option value="Steel Fixing">Steel Fixing</option>
      <option value="Concrete">Concrete</option>
      <option value="Retaining Walls">Retaining Walls</option>
    </select>
  </div>

  <div>
    <label htmlFor="message" className="sr-only">Project Details</label>
    <textarea
      id="message"
      name="message"
      placeholder="Project Details"
      rows={5}
      required
      className="w-full bg-zinc-950 border border-yellow-500/30 px-5 py-4 rounded-lg focus:outline-none focus:border-yellow-500 text-white resize-none"
    />
  </div>

  <button
    type="submit"
    disabled={status === "loading"}
    className="bg-yellow-500 text-black py-4 rounded-lg font-bold hover:bg-yellow-600 transition disabled:opacity-60 disabled:cursor-not-allowed"
  >
    {status === "loading" ? "Sending..." : "Send Request"}
  </button>

  {/* Inline status messages instead of browser alert() */}
  {status === "success" && (
    <p role="status" className="text-green-400 text-center font-medium">
      Quote request sent successfully! We&apos;ll be in touch soon.
    </p>
  )}

  {status === "error" && (
    <p role="alert" className="text-red-400 text-center font-medium">
      Something went wrong. Please try again or call us directly.
    </p>
  )}
</form>


  </div>

</section>
<Footer />
    </main>
  );
}