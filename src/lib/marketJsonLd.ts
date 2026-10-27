// v0.5 — 2026-10-27 — schema.org Dataset markup so search engines and AI
// answer engines can cite each monthly report as a primary source.
import type { MarketArea } from "@/lib/marketAreas";
import type { MarketEdition } from "@/lib/marketData";

const SITE = "https://homesbylance.com";

export function datasetJsonLd(area: MarketArea, d: MarketEdition, path: string) {
  const [y, m] = d.monthKey.split("-").map(Number);
  const last = new Date(Date.UTC(y, m, 0)).getUTCDate();
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: `${area.name} Housing Market Report, ${d.reportMonth}`,
    description: `Monthly ${area.name}, ${area.region} housing market statistics from aggregated MLS (WFRMLS) sales: Market Index ${d.index}/100, median price $${Math.round(d.medPrice3).toLocaleString("en-US")}, median $${Math.round(d.medPpsf3)}/sq ft, ${d.moi.toFixed(1)} months of supply, plus a CMA adjustment table with per-row confidence ratings.`,
    url: `${SITE}${path}`,
    temporalCoverage: `${d.monthKey}-01/${d.monthKey}-${String(last).padStart(2, "0")}`,
    spatialCoverage: { "@type": "Place", name: `${area.name}, ${area.region}` },
    creator: {
      "@type": "RealEstateAgent",
      name: "Lance Anderson",
      alternateName: "Local with Lance",
      url: SITE,
    },
    isAccessibleForFree: true,
    measurementTechnique: `${SITE}/methodology`,
    version: d.version,
  };
}
