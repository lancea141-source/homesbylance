import type { Metadata } from "next";
import Link from "next/link";
import { series, categoryLabels } from "@/lib/series";

export const metadata: Metadata = {
  title: "The Series",
  description:
    "Every Local with Lance series — Utah real estate, investing, and lifestyle content, from every angle Lance actually lives.",
};

export default function SeriesPage() {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
      <p className="uppercase tracking-[0.2em] text-xs font-semibold text-olive mb-2">
        The Series
      </p>
      <h1 className="font-display text-4xl sm:text-5xl mb-12 text-navy">
        Utah, from every angle Lance actually lives.
      </h1>

      {(["lifestyle", "real-estate", "investing"] as const).map((cat) => (
        <div key={cat} className="mb-16 last:mb-0">
          <h2 className="font-display text-xl italic text-terracotta mb-6">
            {categoryLabels[cat]}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {series
              .filter((s) => s.category === cat)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/series/${s.slug}`}
                  className="group rounded-2xl border border-navy/10 bg-white/60 p-6 hover:border-terracotta hover:shadow-lg transition-all"
                >
                  <span className="text-3xl">{s.emoji}</span>
                  <h3 className="font-display text-xl mt-4 text-navy group-hover:text-terracotta transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-navy/70 leading-relaxed">{s.blurb}</p>
                  <p className="mt-4 text-xs uppercase tracking-wide text-camel font-semibold">
                    {s.channels.join(" · ")}
                  </p>
                  <span className="mt-4 inline-block text-sm font-semibold text-terracotta">
                    View &rarr;
                  </span>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}
