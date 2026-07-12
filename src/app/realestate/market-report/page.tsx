import Link from "next/link";
import type { Metadata } from "next";
import { marketAreas } from "@/lib/marketAreas";

export const metadata: Metadata = {
  title: "Market Report",
  description:
    "Hyperlocal market data for Traverse Mountain, Lehi, Eagle Mountain, Saratoga Springs, Tooele, and Stansbury Park, UT.",
};

const groups = [
  { label: "Primary Market", slugs: ["traverse-mountain", "lehi"] },
  { label: "Utah County West", slugs: ["eagle-mountain", "saratoga-springs"] },
  { label: "Tooele County", slugs: ["tooele", "stansbury-park"] },
];

export default function MarketReportIndex() {
  return (
    <section className="max-w-5xl mx-auto px-5 sm:px-8 py-16">
      <p className="uppercase tracking-[0.2em] text-xs font-semibold text-olive mb-2">
        Market with Lance
      </p>
      <h1 className="font-display text-4xl sm:text-5xl text-navy mb-6">Market Report</h1>
      <p className="text-lg text-navy/75 max-w-2xl leading-relaxed mb-14">
        Real numbers, by neighborhood. Your street, your market &mdash; not a statewide average
        that means nothing for what your home is actually worth.
      </p>

      {groups.map((group) => (
        <div key={group.label} className="mb-14">
          <h2 className="font-display text-2xl text-navy mb-5">{group.label}</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {marketAreas
              .filter((a) => group.slugs.includes(a.slug))
              .map((a) => (
                <Link
                  key={a.slug}
                  href={`/realestate/market-report/${a.slug}`}
                  className="rounded-2xl border border-navy/10 bg-white/60 p-6 hover:border-terracotta hover:shadow-lg transition-all"
                >
                  <h3 className="font-display text-xl text-navy">{a.name}</h3>
                  <p className="text-xs uppercase tracking-wide text-camel font-semibold mt-1">
                    {a.region}
                  </p>
                  <p className="mt-3 text-sm text-navy/70">{a.blurb}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-terracotta">
                    View Report &rarr;
                  </span>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}
