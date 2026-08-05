import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Traverse Mountain Real Estate",
  description: "Street-by-street guide to Traverse Mountain, Lehi, UT real estate.",
};

export default function TraverseMountain() {
  return (
    <section className="max-w-3xl mx-auto px-5 sm:px-8 py-16">
      <p className="uppercase tracking-[0.2em] text-xs font-semibold text-olive mb-2">Neighborhood Guide</p>
      <h1 className="font-display text-4xl sm:text-5xl text-navy mb-6">Traverse Mountain</h1>
      <p className="text-lg text-navy/75 leading-relaxed mb-6">
        Lance&apos;s home turf. Street-level knowledge of every pocket of the mountain &mdash;
        which streets trade fast, which builders are active, and what your home is actually
        worth right now.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/market-updates/traverse-mountain"
          className="rounded-full bg-navy text-cream px-6 py-3 text-sm font-semibold hover:bg-terracotta transition-colors"
        >
          View Live Market Update
        </Link>
        <Link
          href="/series/neighborhoods"
          className="rounded-full border border-navy/25 text-navy px-6 py-3 text-sm font-semibold hover:border-terracotta hover:text-terracotta transition-colors"
        >
          Watch Neighborhood Walkthroughs
        </Link>
      </div>
    </section>
  );
}
