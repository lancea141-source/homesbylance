import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Traverse Mountain Market Update | Lance the Realtor",
  description:
    "Live, hyperlocal Traverse Mountain, Lehi, UT market report — updated pricing trends and data for buyers and sellers.",
};

const REPORT_URL = "https://lancea141-source.github.io/tm-market-update/";

export default function TraverseMountainMarketUpdate() {
  return (
    <>
      <section className="max-w-4xl mx-auto px-5 sm:px-8 pt-16 pb-8">
        <p className="uppercase tracking-[0.2em] text-xs font-semibold text-olive mb-2">
          Market with Lance
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-navy mb-4">
          Traverse Mountain Market Update
        </h1>
        <p className="text-lg text-navy/75 leading-relaxed mb-6 max-w-2xl">
          Live, hyperlocal pricing data for Traverse Mountain, Lehi &mdash; your street, your
          neighborhood, real numbers, updated regularly.
        </p>
        <a
          href={REPORT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-semibold text-terracotta hover:text-navy transition-colors"
        >
          View the full report &rarr;
        </a>
      </section>

      <div className="w-full border-y border-navy/10 bg-white/40">
        <iframe
          src={REPORT_URL}
          title="Traverse Mountain Market Update"
          className="block w-full h-[2400px] border-0"
          loading="lazy"
        />
      </div>
    </>
  );
}
