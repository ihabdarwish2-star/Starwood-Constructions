"use client";

// Real customer reviews from Google. To add more later, follow the same
// structure — name, project (optional label), quote, and rating.
const testimonials = [
  {
    name: "Oussama al Saytari",
    project: "Google Review",
    quote:
      "I've seen several of Starwood Constructions' completed projects, and the quality is outstanding. Their formwork and concrete finishes are clean, precise, and completed to a very high standard. Highly recommended.",
    rating: 5,
  },
  {
    name: "Mahim Hasan",
    project: "Google Review",
    quote:
      "Really good experience with this construction company. The team was easy to deal with, showed up on time, and got the job done properly. Communication was clear the whole way, and they didn't mess around when it came to quality. Everything turned out exactly how I wanted, if not better. Definitely recommended.",
    rating: 5,
  },
  {
    name: "Hany Kassem",
    project: "Google Review",
    quote:
      "Thank you for the excellent service from start to finish. Great communication, top-quality workmanship, and a professional team that gets the job done right.",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-4" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={i < rating ? "#eab308" : "none"}
          stroke="#eab308"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-8 bg-black fade-up">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-5xl font-bold text-yellow-500 mb-6">
          What Our Clients Say
        </h2>
        <p className="text-gray-300 text-lg">
          Trusted by homeowners and builders across Sydney for reliable,
          high-quality formwork, steel fixing and concrete work.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="border border-yellow-500/30 rounded-xl p-8 bg-zinc-950 hover:border-yellow-500 transition flex flex-col"
          >
            <StarRating rating={t.rating} />

            <p className="text-gray-300 leading-7 flex-1">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="mt-6 pt-6 border-t border-yellow-500/10">
              <p className="text-yellow-500 font-bold">{t.name}</p>
              <p className="text-gray-500 text-sm mt-1">{t.project}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
