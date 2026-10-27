// v0.5 — 2026-10-27 — permanent monthly edition of an area's market report,
// e.g. /realestate/market-report/traverse-mountain/2026-09.
// Each edition reads its own frozen history/YYYY-MM/data.json, so numbers
// people have cited never change underneath them.
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { marketAreas } from "@/lib/marketAreas";
import { getEdition, getLatestEdition, hasMarketData, isMonthKey, listEditions } from "@/lib/marketData";
import MarketReport from "@/components/MarketReport";
import { datasetJsonLd } from "@/lib/marketJsonLd";

export const revalidate = 3600;
// New months published by the pipeline render on first visit, no rebuild needed.
export const dynamicParams = true;

export async function generateStaticParams() {
  const params: { area: string; month: string }[] = [];
  for (const a of marketAreas.filter(hasMarketData)) {
    for (const month of await listEditions(a)) params.push({ area: a.slug, month });
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string; month: string }>;
}): Promise<Metadata> {
  const { area, month } = await params;
  const item = marketAreas.find((a) => a.slug === area);
  if (!item || !isMonthKey(month)) return {};
  const d = await getEdition(item, month);
  if (!d) return {};
  return {
    title: `${item.name} Market Report, ${d.reportMonth}`,
    description: `${item.name}, ${item.region} housing market for ${d.reportMonth}: median price, price per sq ft, days on market, Market Index and the CMA adjustment table.`,
    alternates: { canonical: `/realestate/market-report/${item.slug}/${month}` },
  };
}

export default async function MarketEditionPage({
  params,
}: {
  params: Promise<{ area: string; month: string }>;
}) {
  const { area, month } = await params;
  const item = marketAreas.find((a) => a.slug === area);
  if (!item || !hasMarketData(item) || !isMonthKey(month)) notFound();

  const latest = await getLatestEdition(item);
  // Don't publish a partial month (e.g. a mid-month run) ahead of the LIVE report.
  if (latest && month > latest.monthKey) notFound();

  const data = await getEdition(item, month);
  if (!data) notFound();
  const editions = await listEditions(item, latest?.monthKey ?? month);
  const isLatest = latest?.monthKey === month;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(datasetJsonLd(item, data, `/realestate/market-report/${item.slug}/${month}`)),
        }}
      />
      <MarketReport area={item} data={data} editions={editions} isLatest={isLatest} />
    </>
  );
}
