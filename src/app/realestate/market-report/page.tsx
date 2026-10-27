// v0.5 — 2026-10-27 — market report hub; live areas show their latest month and Market Index.
import Link from "next/link";
import type { Metadata } from "next";
import { marketAreas } from "@/lib/marketAreas";
import { getLatestEdition } from "@/lib/marketData";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Market Report",
  description:
    "Monthly hyperlocal housing market reports for Traverse Mountain, Lehi and Saratoga Springs, UT, built from MLS sales data.",
};

const groups = [
  { label: "Primary market", slugs: ["traverse-mountain", "lehi"] },
  { label: "Utah County west", slugs: ["saratoga-springs", "eagle-mountain"] },
  { label: "Tooele County", slugs: ["tooele", "stansbury-park"] },
];

export default async function MarketReportIndex() {
  const latest = Object.fromEntries(
    await Promise.all(marketAreas.map(async (a) => [a.slug, await getLatestEdition(a)] as const))
  );

  return (
    <section className="max-w-5xl mx-auto px-5 sm:px-8 py-14 sm:py-16">
      <h1 className="font-display font-bold text-5xl sm:text-6xl text-navy">Market Report</h1>
      <p className="text-lg text-navy/75 max-w-2xl leading-relaxed mt-4 mb-12">
        Real numbers, by neighborhood, updated the first of every month. Your street, your market, not a
        statewide average.
      </p>

      {groups.map((group) => (
        <div key={group.label} className="mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-navy/55 mb-4">{group.label}</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {group.slugs
              .map((slug) => marketAreas.find((a) => a.slug === slug))
              .filter((a) => a !== undefined)
              .map((a) => {
                const d = latest[a.slug];
                return (
                  <Link
                    key={a.slug}
                    href={`/realestate/market-report/${a.slug}`}
                    className="group block rounded-[4px] border border-line p-6 hover:border-navy/30 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h3 className="font-display font-bold text-2xl text-navy">{a.name}</h3>
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-navy/50 mt-1">{a.region}</p>
                      </div>
                      {d && (
                        <div className="text-right shrink-0">
                          <p className="font-display font-bold text-3xl text-terracotta leading-none tabular-nums">{d.index}</p>
                          <p className="text-[11px] text-navy/50 mt-1">Market Index</p>
                        </div>
                      )}
                    </div>
                    <p className="mt-3 text-sm text-navy/70">{a.blurb}</p>
                    <span className="mt-4 inline-block text-sm font-semibold text-navy group-hover:text-terracotta">
                      {d ? `${d.reportMonth} report →` : "Coming soon →"}
                    </span>
                  </Link>
                );
              })}
          </div>
        </div>
      ))}

      <p className="text-sm text-navy/55">
        Want to know how these numbers are built?{" "}
        <Link href="/methodology" className="font-semibold text-terracotta hover:text-navy">
          Read the methodology &rarr;
        </Link>
      </p>
    </section>
  );
}
