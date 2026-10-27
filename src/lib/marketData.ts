// v0.5 — 2026-10-27
// Reads the monthly market report data published by Lance's Apps Script
// pipeline (pipeline.gs) to the tm-market-update GitHub Pages site:
//   {base}/{dataPath}data.json                    latest (LIVE) edition
//   {base}/{dataPath}history/YYYY-MM/data.json    permanent monthly editions
// Only aggregate figures are exposed (no addresses, no individual sold
// prices), matching Utah non-disclosure + IDX terms. The pipeline's internal
// pricing model ("pm") is deliberately never rendered.

import type { MarketArea } from "@/lib/marketAreas";

export const MARKET_DATA_BASE = (
  process.env.MARKET_DATA_BASE || "https://lancea141-source.github.io/tm-market-update"
).replace(/\/+$/, "");

/** Pages refresh from the pipeline output at most once an hour. */
export const MARKET_REVALIDATE_SECONDS = 3600;

/** First month the archive is probed from. */
const ARCHIVE_START = "2025-01";

export type TrendPoint = { month: string; n: number; medPrice: number };

export type Segment = {
  label: string;
  n: number;
  medPrice: number;
  medPpsf: number;
  medDom: number;
  stl: number;
};

export type CmaModel = {
  n: number;
  r2: number;
  medErr: number;
  l1: number;
  up: number;
  fin: number;
  unf: number;
  walk: number;
  gar: number;
  acre: number;
  age: number;
  fb: number;
  tq: number;
  hb: number;
  bathSizeCorr?: number;
  bathGarCorr?: number;
};

export type MarketEdition = {
  farmName: string;
  farmShort: string;
  version: string;
  updated: string;
  reportMonth: string;
  /** YYYY-MM, always filled in (older editions only carry reportMonth). */
  monthKey: string;
  index: number;
  moi: number;
  moiRating: string;
  medPrice3: number;
  medPpsf3: number;
  medDom3: number;
  stl3: number;
  sales3: number;
  sales12: number;
  trend: TrendPoint[];
  segments: Segment[];
  cm?: CmaModel;
};

const MONTH_KEY = /^\d{4}-(0[1-9]|1[0-2])$/;

export function isMonthKey(v: string): boolean {
  return MONTH_KEY.test(v);
}

export function monthLabel(key: string): string {
  const [y, m] = key.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

function monthKeyFromLabel(label: string | undefined): string | undefined {
  if (!label) return undefined;
  const d = new Date(`${label} 1 UTC`);
  if (Number.isNaN(d.getTime())) return undefined;
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
}

function normalize(raw: Record<string, unknown>, fallbackKey?: string): MarketEdition | null {
  const r = raw as Partial<MarketEdition> & { reportMonthKey?: string };
  const monthKey = r.reportMonthKey || fallbackKey || monthKeyFromLabel(r.reportMonth);
  if (!monthKey || typeof r.index !== "number" || !Array.isArray(r.segments)) return null;
  return {
    farmName: r.farmName ?? "",
    farmShort: r.farmShort ?? "",
    version: r.version ?? "",
    updated: r.updated ?? "",
    reportMonth: monthLabel(monthKey),
    monthKey,
    index: r.index,
    moi: Number(r.moi ?? 0),
    moiRating: r.moiRating ?? "",
    medPrice3: Number(r.medPrice3 ?? 0),
    medPpsf3: Number(r.medPpsf3 ?? 0),
    medDom3: Number(r.medDom3 ?? 0),
    stl3: Number(r.stl3 ?? 0),
    sales3: Number(r.sales3 ?? 0),
    sales12: Number(r.sales12 ?? 0),
    trend: Array.isArray(r.trend) ? r.trend : [],
    segments: r.segments.filter((s) => s && s.n > 0),
    cm: r.cm && typeof r.cm.r2 === "number" ? r.cm : undefined,
  };
}

async function getJson(url: string): Promise<Record<string, unknown> | null> {
  try {
    const res = await fetch(url, { next: { revalidate: MARKET_REVALIDATE_SECONDS } });
    if (!res.ok) return null;
    return (await res.json()) as Record<string, unknown>;
  } catch {
    return null;
  }
}

export function hasMarketData(area: MarketArea): boolean {
  return typeof area.dataPath === "string";
}

/** The pipeline's current LIVE edition for an area. */
export async function getLatestEdition(area: MarketArea): Promise<MarketEdition | null> {
  if (!hasMarketData(area)) return null;
  const raw = await getJson(`${MARKET_DATA_BASE}/${area.dataPath}data.json`);
  return raw ? normalize(raw) : null;
}

/** One permanent monthly edition (YYYY-MM). */
export async function getEdition(area: MarketArea, monthKey: string): Promise<MarketEdition | null> {
  if (!hasMarketData(area) || !isMonthKey(monthKey)) return null;
  const raw = await getJson(`${MARKET_DATA_BASE}/${area.dataPath}history/${monthKey}/data.json`);
  return raw ? normalize(raw, monthKey) : null;
}

function monthRange(from: string, to: string): string[] {
  const out: string[] = [];
  let [y, m] = from.split("-").map(Number);
  const [ty, tm] = to.split("-").map(Number);
  while (y < ty || (y === ty && m <= tm)) {
    out.push(`${y}-${String(m).padStart(2, "0")}`);
    m += 1;
    if (m > 12) {
      m = 1;
      y += 1;
    }
  }
  return out;
}

/**
 * Archived monthly editions, newest first. Only months up to the LIVE
 * edition are listed, so a partial current month (e.g. a mid-month run)
 * never appears as a finished report.
 */
export async function listEditions(area: MarketArea, latestKey?: string): Promise<string[]> {
  if (!hasMarketData(area)) return [];
  const upTo = latestKey ?? (await getLatestEdition(area))?.monthKey;
  if (!upTo) return [];
  const months = monthRange(ARCHIVE_START, upTo);
  const found = await Promise.all(
    months.map(async (key) =>
      (await getJson(`${MARKET_DATA_BASE}/${area.dataPath}history/${key}/data.json`)) ? key : null
    )
  );
  return found.filter((k): k is string => k !== null).reverse();
}

// ---- CMA Adjustment Table ------------------------------------------------
// Mirrors cmaRows_() / bathConfidence_() in pipeline.gs so the website shows
// exactly what the public cma-rates page shows.

export type Confidence = "high" | "medium" | "low" | "none";
export type CmaRow = { field: string; adjustment: string; confidence: Confidence; note: string };

const signed = (v: number) =>
  (v < 0 ? "−$" : "+$") + Math.round(Math.abs(v)).toLocaleString("en-US");

function bathConfidence(cm: CmaModel): { confidence: Confidence; note: string } {
  const maxCorr = Math.max(Math.abs(cm.bathSizeCorr ?? 0), Math.abs(cm.bathGarCorr ?? 0));
  const r = `r=${maxCorr.toFixed(2)} vs sqft/garage`;
  if (maxCorr > 0.6)
    return { confidence: "medium", note: `${r}. Highly correlated with size; treat as an upper bound and verify against real comps.` };
  if (maxCorr > 0.4) return { confidence: "medium", note: `${r}. Some overlap with size; use with a bit of caution.` };
  return { confidence: "high", note: `${r}. Reasonably independent of size and garage.` };
}

export function cmaRows(cm: CmaModel): CmaRow[] {
  const bath = bathConfidence(cm);
  return [
    { field: "Main floor (L1) sq ft", adjustment: `$${Math.round(cm.l1)}/sq ft`, confidence: "high", note: "Main-level space is typically worth more than upper floors (rambler premium)." },
    { field: "Upper floors (L2–L4) sq ft", adjustment: `$${Math.round(cm.up)}/sq ft`, confidence: "high", note: "" },
    { field: "Finished basement sq ft", adjustment: `$${Math.round(cm.fin)}/sq ft`, confidence: "high", note: "From the stable 5-component model." },
    { field: "Unfinished basement sq ft", adjustment: `$${Math.round(cm.unf)}/sq ft`, confidence: "medium", note: "" },
    { field: "Walkout / daylight basement", adjustment: `${signed(cm.walk)} flat`, confidence: "high", note: "Applies once." },
    { field: "Garage", adjustment: `${signed(cm.gar)} per bay`, confidence: "high", note: "" },
    { field: "Lot size", adjustment: `${signed(cm.acre)} per acre`, confidence: "high", note: "" },
    { field: "Year built", adjustment: `${signed(cm.age)} per year of age`, confidence: "medium", note: "Use for gaps of about 10 years, not 30." },
    { field: "Full baths", adjustment: signed(cm.fb), confidence: bath.confidence, note: bath.note },
    { field: "¾ baths", adjustment: signed(cm.tq), confidence: bath.confidence, note: "0.75 × the full-bath rate; same confidence." },
    { field: "½ baths", adjustment: signed(cm.hb), confidence: bath.confidence, note: "0.50 × the full-bath rate; same confidence." },
    { field: "Bedrooms", adjustment: "$0", confidence: "low", note: "Do not adjust. Bedrooms are priced inside square footage." },
  ];
}
