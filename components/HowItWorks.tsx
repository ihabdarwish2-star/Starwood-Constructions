"use client";

const steps = [
  {
    number: "01",
    title: "Enquire",
    description:
      "Send us your project details through our quick quote form, or call/WhatsApp us directly.",
  },
  {
    number: "02",
    title: "Free Quote",
    description:
      "We assess your project and provide a clear, no-obligation quote — usually within 24-48 hours.",
  },
  {
    number: "03",
    title: "We Build",
    description:
      "Our team delivers precise, high-quality formwork, steel fixing and concrete work, on schedule.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-8 bg-black fade-up">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-yellow-500 mb-6">
          How It Works
        </h2>
        <p className="text-gray-300 text-lg">
          Getting started with Starwood Constructions is simple.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <div key={step.number} className="relative text-center px-6">
            <div className="text-6xl font-bold text-yellow-500/20 mb-2">
              {step.number}
            </div>

            <h3 className="text-2xl font-bold text-yellow-500 mb-3">
              {step.title}
            </h3>

            <p className="text-gray-300 leading-relaxed">
              {step.description}
            </p>

            {/* Connector line between steps, hidden on mobile and after the last step */}
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-[calc(100%-1rem)] w-8 h-px bg-yellow-500/30" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
