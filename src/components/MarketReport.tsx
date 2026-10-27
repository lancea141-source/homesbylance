// v0.5 — 2026-10-27 — native market report rendered from pipeline data.json.
import Link from "next/link";
import type { MarketArea } from "@/lib/marketAreas";
import { cmaRows, monthLabel, type Confidence, type MarketEdition } from "@/lib/marketData";

const money = (v: number) => "$" + Math.round(v).toLocaleString("en-US");
const moneyK = (v: number) =>
  v >= 1_000_000 ? `$${(v / 1_000_000).toFixed(2)}M` : `$${Math.round(v / 1000)}K`;
const pct = (v: number) => `${v.toFixed(1)}%`;

const CONFIDENCE: Record<Confidence, { label: string; dot: string }> = {
  high: { label: "High", dot: "bg-olive" },
  medium: { label: "Use with care", dot: "bg-camel" },
  low: { label: "Do not adjust", dot: "bg-rust" },
  none: { label: "", dot: "bg-line" },
};

// Same zones as indexLabel in pipeline.gs.
function indexLabel(i: number) {
  if (i >= 60) return "Strong seller's market";
  if (i >= 50) return "Leaning sellers";
  if (i >= 40) return "Leaning buyers";
  return "Buyer's market";
}

function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="border-t-2 border-navy pt-3">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-navy/55">{label}</p>
      <p className="font-display font-bold text-3xl sm:text-4xl text-navy mt-1 tabular-nums">{value}</p>
      {sub && <p className="text-sm text-navy/60 mt-0.5">{sub}</p>}
    </div>
  );
}

function TrendChart({ trend }: { trend: MarketEdition["trend"] }) {
  const pts = trend.filter((t) => t.medPrice > 0);
  if (pts.length < 2) return null;
  const max = Math.max(...pts.map((p) => p.medPrice));
  const min = Math.min(...pts.map((p) => p.medPrice));
  const floor = Math.max(0, min - (max - min) * 0.6);
  const W = 720, H = 220, padL = 8, padB = 34, padT = 26;
  const bw = (W - padL * 2) / pts.length;
  const y = (v: number) => padT + (H - padT - padB) * (1 - (v - floor) / (max - floor || 1));
  return (
    <figure className="m-0">
      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full min-w-[520px] h-auto" role="img"
          aria-label="Median sold price by month, last 12 months">
          {pts.map((p, i) => {
            const x = padL + i * bw + bw * 0.15;
            const top = y(p.medPrice);
            const last = i === pts.length - 1;
            return (
              <g key={p.month}>
                <rect x={x} y={top} width={bw * 0.7} height={H - padB - top}
                  className={last ? "fill-terracotta" : "fill-navy/15"} />
                <text x={x + bw * 0.35} y={top - 6} textAnchor="middle"
                  className={`text-[11px] tabular-nums ${last ? "fill-terracotta font-semibold" : "fill-navy/60"}`}>
                  {moneyK(p.medPrice)}
                </text>
                <text x={x + bw * 0.35} y={H - padB + 15} textAnchor="middle" className="text-[11px] fill-navy/70">
                  {monthLabel(p.month).slice(0, 3)}
                </text>
                <text x={x + bw * 0.35} y={H - padB + 28} textAnchor="middle" className="text-[10px] fill-navy/45 tabular-nums">
                  {p.n} sold
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <figcaption className="text-sm text-navy/55 mt-2">
        Median sold price by month, last 12 months, with number of sales.
      </figcaption>
    </figure>
  );
}

export default function MarketReport({
  area,
  data,
  editions,
  isLatest,
}: {
  area: MarketArea;
  data: MarketEdition;
  editions: string[];
  isLatest: boolean;
}) {
  const base = `/realestate/market-report/${area.slug}`;
  const rows = data.cm ? cmaRows(data.cm) : [];
  const short = data.farmShort || area.name;

  return (
    <article className="bg-white">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-8">
        <Link href="/realestate/market-report" className="text-sm font-semibold text-terracotta hover:text-navy">
          &larr; All areas
        </Link>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-navy/55">
          {area.region} &middot; {isLatest ? "Latest report" : "Archived report"}
        </p>
        <h1 className="font-display font-bold text-navy text-5xl sm:text-6xl leading-[0.95] mt-2">
          {area.name} Market Report
        </h1>
        <p className="font-display font-semibold text-2xl sm:text-3xl text-terracotta mt-2">{data.reportMonth}</p>
        <p className="text-sm text-navy/55 mt-3">
          As of {data.updated} &middot; pipeline {data.version} &middot; aggregate MLS data (WFRMLS)
        </p>
        {!isLatest && editions[0] && (
          <p className="mt-4 text-sm bg-navy/[0.04] border border-line rounded-[4px] px-4 py-3 text-navy/80">
            This is a frozen monthly edition.{" "}
            <Link href={base} className="font-semibold text-terracotta hover:text-navy">
              See the latest {area.name} report &rarr;
            </Link>
          </p>
        )}
      </header>

      {/* Market Index + key stats */}
      <section className="border-t border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2fr)]">
          <div className="rounded-[4px] bg-navy text-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">{short} Market Index</p>
            <p className="font-display font-bold text-7xl leading-none mt-3 tabular-nums">
              {data.index}
              <span className="text-2xl text-white/50">/100</span>
            </p>
            <p className="font-display font-semibold text-2xl text-camel mt-2">{indexLabel(data.index)}</p>
            <div className="mt-5 h-2 rounded-full bg-white/15 overflow-hidden" aria-hidden="true">
              <div className="h-full bg-terracotta" style={{ width: `${Math.min(100, Math.max(0, data.index))}%` }} />
            </div>
            <p className="text-sm text-white/70 mt-4">
              {data.moi.toFixed(1)} months of supply &middot; {data.moiRating}
            </p>
            <p className="text-xs text-white/45 mt-3">50 = neutral. Built from sales pace, price momentum, days on market, sale-to-list and supply.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8 content-start">
            <Stat label="Median price" value={moneyK(data.medPrice3)} sub="last 3 months" />
            <Stat label="Price per sq ft" value={money(data.medPpsf3)} sub="median, last 3 months" />
            <Stat label="Days on market" value={String(Math.round(data.medDom3))} sub="median" />
            <Stat label="Sale-to-list" value={pct(data.stl3)} sub="median" />
            <Stat label="Homes sold" value={String(data.sales3)} sub="last 3 months" />
            <Stat label="Homes sold" value={String(data.sales12)} sub="last 12 months" />
          </div>
        </div>
      </section>

      {/* Trend */}
      {data.trend.length > 1 && (
        <section className="border-t border-line">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
            <h2 className="font-display font-bold text-3xl text-navy mb-6">12-month trend</h2>
            <TrendChart trend={data.trend} />
          </div>
        </section>
      )}

      {/* Segments */}
      {data.segments.length > 0 && (
        <section className="border-t border-line">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
            <h2 className="font-display font-bold text-3xl text-navy mb-6">By home type</h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] text-sm tabular-nums">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-[0.1em] text-navy/55 border-b-2 border-navy">
                    <th className="py-2 pr-4 font-semibold">Segment</th>
                    <th className="py-2 px-3 font-semibold text-right">Sales</th>
                    <th className="py-2 px-3 font-semibold text-right">Median price</th>
                    <th className="py-2 px-3 font-semibold text-right">$/sq ft</th>
                    <th className="py-2 px-3 font-semibold text-right">Days on mkt</th>
                    <th className="py-2 pl-3 font-semibold text-right">Sale-to-list</th>
                  </tr>
                </thead>
                <tbody>
                  {data.segments.map((s) => (
                    <tr key={s.label} className="border-b border-line">
                      <td className="py-3 pr-4 font-semibold text-navy">{s.label.replace(" — ", " · ")}</td>
                      <td className="py-3 px-3 text-right text-navy/75">{s.n}</td>
                      <td className="py-3 px-3 text-right text-navy">{money(s.medPrice)}</td>
                      <td className="py-3 px-3 text-right text-navy/75">{money(s.medPpsf)}</td>
                      <td className="py-3 px-3 text-right text-navy/75">{Math.round(s.medDom)}</td>
                      <td className="py-3 pl-3 text-right text-navy/75">{pct(s.stl)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-navy/55 mt-3">Sales over the trailing 12 months.</p>
          </div>
        </section>
      )}

      {/* CMA Adjustment Table */}
      {data.cm && (
        <section id="cma-adjustments" className="border-t border-line scroll-mt-24">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
            <h2 className="font-display font-bold text-3xl text-navy">{short} CMA Adjustment Table</h2>
            <p className="text-navy/70 mt-2 max-w-3xl leading-relaxed">
              What each feature is worth in {area.name} right now, fitted from {data.cm.n.toLocaleString("en-US")}{" "}resale
              single-family sales. Model fit R&sup2; {data.cm.r2.toFixed(2)}, typical error &plusmn;
              {data.cm.medErr.toFixed(1)}%. Each row carries its own confidence rating rather than one number for the whole model.
            </p>
            <div className="overflow-x-auto mt-6">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-[0.1em] text-navy/55 border-b-2 border-navy">
                    <th className="py-2 pr-4 font-semibold">Feature</th>
                    <th className="py-2 px-3 font-semibold">Adjustment</th>
                    <th className="py-2 px-3 font-semibold">Confidence</th>
                    <th className="py-2 pl-3 font-semibold">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.field} className="border-b border-line align-top">
                      <td className="py-3 pr-4 font-semibold text-navy">{r.field}</td>
                      <td className="py-3 px-3 text-navy tabular-nums whitespace-nowrap">{r.adjustment}</td>
                      <td className="py-3 px-3 whitespace-nowrap">
                        <span className="inline-flex items-center gap-2 text-navy/80">
                          <span className={`h-2.5 w-2.5 rounded-full ${CONFIDENCE[r.confidence].dot}`} aria-hidden="true" />
                          {CONFIDENCE[r.confidence].label}
                        </span>
                      </td>
                      <td className="py-3 pl-3 text-navy/65">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-navy/55 mt-4">
              Refit every month from MLS sales. Use as a starting point for a CMA, not as an appraisal.{" "}
              <Link href="/methodology" className="font-semibold text-terracotta hover:text-navy">How this is built &rarr;</Link>
            </p>
          </div>
        </section>
      )}

      {/* Video + CTA */}
      <section className="border-t border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 grid gap-6 md:grid-cols-2">
          {area.videoUrl && (
            <a href={area.videoUrl} target="_blank" rel="noopener noreferrer"
              className="group block rounded-[4px] border border-line p-6 hover:border-navy/30 transition-colors">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy/55">&#9654; YouTube</p>
              <p className="font-display font-bold text-2xl text-navy mt-1">Watch the market report videos</p>
              <p className="text-sm text-navy/65 mt-1">Lance walks through the numbers each month.</p>
              <span className="inline-block mt-3 text-sm font-semibold text-terracotta group-hover:text-navy">Open playlist &rarr;</span>
            </a>
          )}
          <Link href="/realestate/sellers-guide"
            className="group block rounded-[4px] bg-terracotta text-white p-6 hover:bg-navy transition-colors">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">Your home</p>
            <p className="font-display font-bold text-2xl mt-1">What&apos;s my home worth in {area.name}?</p>
            <p className="text-sm text-white/80 mt-1">Get a real CMA built from these numbers.</p>
            <span className="inline-block mt-3 text-sm font-semibold">Request a CMA &rarr;</span>
          </Link>
        </div>
      </section>

      {/* Archive */}
      {editions.length > 0 && (
        <section id="past-reports" className="border-t border-line">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
            <h2 className="font-display font-bold text-3xl text-navy mb-5">Past {area.name} reports</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {editions.map((key) => {
                const current = key === data.monthKey;
                return (
                  <li key={key}>
                    <Link href={`${base}/${key}`}
                      aria-current={current ? "page" : undefined}
                      className={`block rounded-[4px] border px-4 py-3 text-sm font-semibold transition-colors ${
                        current ? "border-navy bg-navy text-white" : "border-line text-navy hover:border-terracotta hover:text-terracotta"
                      }`}>
                      {monthLabel(key)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}
    </article>
  );
}
