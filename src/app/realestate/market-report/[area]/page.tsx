// v0.5 — 2026-10-27 — latest market report, rendered natively from the
// pipeline's data.json (no more iframe of the GitHub Pages report).
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { marketAreas } from "@/lib/marketAreas";
import { getLatestEdition, hasMarketData, listEditions } from "@/lib/marketData";
import MarketReport from "@/components/MarketReport";
import { datasetJsonLd } from "@/lib/marketJsonLd";

export const revalidate = 3600;

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
  const latest = await getLatestEdition(item);
  const title = latest ? `${item.name} Market Report, ${latest.reportMonth}` : `${item.name} Market Report`;
  return {
    title,
    description: latest
      ? `${item.name}, ${item.region} housing market for ${latest.reportMonth}: median price, price per sq ft, days on market, Market Index and the CMA adjustment table.`
      : `Hyperlocal real estate pricing data for ${item.name}, ${item.region}.`,
    alternates: { canonical: `/realestate/market-report/${item.slug}` },
  };
}

export default async function MarketAreaReport({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area } = await params;
  const item = marketAreas.find((a) => a.slug === area);
  if (!item) notFound();

  if (hasMarketData(item)) {
    const latest = await getLatestEdition(item);
    if (latest) {
      const editions = await listEditions(item, latest.monthKey);
      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(datasetJsonLd(item, latest, `/realestate/market-report/${item.slug}`)),
            }}
          />
          <MarketReport area={item} data={latest} editions={editions} isLatest />
        </>
      );
    }
  }

  return (
    <section className="max-w-4xl mx-auto px-5 sm:px-8 py-16">
      <Link href="/realestate/market-report" className="text-sm font-semibold text-terracotta hover:text-navy">
        &larr; All areas
      </Link>
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-navy/55">{item.region}</p>
      <h1 className="font-display font-bold text-5xl text-navy mt-2 mb-4">{item.name} Market Report</h1>
      <p className="text-lg text-navy/75 leading-relaxed mb-8 max-w-2xl">{item.blurb}</p>
      <div className="rounded-[4px] border border-line p-8">
        <p className="text-navy/80 mb-5">
          Monthly {item.name} data is on the way. Want a real, current read on your street right now?
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="tel:+18018605225"
            className="inline-block rounded-[3px] bg-terracotta text-white px-6 py-3 text-sm font-semibold hover:bg-navy transition-colors"
          >
            Call Lance (801) 860-5225
          </a>
          {item.reportUrl && (
            <a
              href={item.reportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-[3px] border border-navy/20 text-navy px-6 py-3 text-sm font-semibold hover:border-navy transition-colors"
            >
              View the current report &rarr;
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
