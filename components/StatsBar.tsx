"use client";

const stats = [
  { value: "20+", label: "Projects Completed" },
  { value: "5★", label: "Google Reviews" },
  { value: "Sydney-Wide", label: "Service Area" },
  { value: "Free", label: "No-Obligation Quotes" },
];

export default function StatsBar() {
  return (
    <section className="bg-yellow-500 py-8 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl md:text-4xl font-bold text-black">
              {stat.value}
            </p>
            <p className="text-black/70 text-sm md:text-base mt-1 font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
