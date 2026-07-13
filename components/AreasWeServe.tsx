"use client";

// Grouped by broad Sydney region so the page reads naturally rather than
// as a keyword-stuffed suburb list. The "Recent Projects" line reuses
// real project locations for credibility and extra local-search signal.
const regions = [
  "Eastern Suburbs",
  "Inner West",
  "North Shore",
  "Western Sydney",
  "South Sydney",
  "Hills District",
  "Sutherland Shire",
  "South West Sydney",
];

export default function AreasWeServe() {
  return (
    <section id="areas" className="py-20 px-8 bg-zinc-950 fade-up">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-yellow-500 mb-6">
          Areas We Serve
        </h2>
        <p className="text-gray-300 text-lg">
          Starwood Constructions provides formwork, steel fixing and
          concrete services across Greater Sydney, including:
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
        {regions.map((region) => (
          <div
            key={region}
            className="border border-yellow-500/30 rounded-lg py-4 px-3 text-center text-gray-300 hover:border-yellow-500 hover:text-yellow-500 transition"
          >
            {region}
          </div>
        ))}
      </div>

      <p className="text-center text-gray-500 text-sm max-w-2xl mx-auto">
        Recent projects completed in Maroubra, Randwick, Homebush,
        Leppington and Pemulwuy — and surrounding Sydney suburbs. Don&apos;t
        see your area listed? Get in touch, we likely still cover it.
      </p>
    </section>
  );
}
