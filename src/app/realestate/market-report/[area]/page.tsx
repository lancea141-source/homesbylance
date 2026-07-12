import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { marketAreas } from "@/lib/marketAreas";

export function generateStaticParams() {
  return marketAreas.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area } = await params;
  const item = marketAreas.find((a) => a.slug === area);
  if (!item) return {};
  return {
    title: `${item.name} Market Report`,
    description: `Hyperlocal real estate pricing data for ${item.name}, ${item.region}.`,
  };
}

// Placeholder stat shape. Wire this up to the MLS/RESO API feed later —
// same route, just replace this static block with a live fetch.
const placeholderStats = [
  { label: "Median List Price", value: "Coming Soon" },
  { label: "Median Days on Market", value: "Coming Soon" },
  { label: "Active Listings", value: "Coming Soon" },
  { label: "$ / Sq Ft", value: "Coming Soon" },
];

export default async function MarketAreaReport({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area } = await params;
  const item = marketAreas.find((a) => a.slug === area);
  if (!item) notFound();

  return (
    <section className="max-w-4xl mx-auto px-5 sm:px-8 py-16">
      <Link href="/realestate/market-report" className="text-sm text-terracotta font-semibold">
        &larr; All Areas
      </Link>
      <p className="uppercase tracking-[0.2em] text-xs font-semibold text-olive mt-6 mb-2">
        {item.region}
      </p>
      <h1 className="font-display text-4xl sm:text-5xl text-navy mb-4">{item.name} Market Report</h1>
      <p className="text-lg text-navy/75 leading-relaxed mb-10 max-w-2xl">{item.blurb}</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {placeholderStats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-navy/10 bg-white/60 p-5">
            <p className="text-xs uppercase tracking-wide text-camel font-semibold">{s.label}</p>
            <p className="font-display text-2xl text-navy mt-2">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-camel/25 border border-camel/40 p-8 text-center">
        <p className="text-navy/80 mb-4">
          Live {item.name} data is on the way. Want a real, current read on your street right now?
        </p>
        <a
          href={`mailto:lancea141@gmail.com?subject=${encodeURIComponent(
            `${item.name} Market Report Request`
          )}`}
          className="inline-block rounded-full bg-terracotta text-cream px-6 py-3 text-sm font-semibold hover:bg-navy transition-colors"
        >
          Ask Lance Directly
        </a>
      </div>
    </section>
  );
}
