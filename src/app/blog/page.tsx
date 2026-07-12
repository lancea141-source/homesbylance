import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
  description: "Local insight on Traverse Mountain, Lehi, and Utah County real estate.",
};

export default function Blog() {
  return (
    <section className="max-w-3xl mx-auto px-5 sm:px-8 py-16">
      <p className="uppercase tracking-[0.2em] text-xs font-semibold text-olive mb-2">Journal</p>
      <h1 className="font-display text-4xl sm:text-5xl text-navy mb-6">Local Insight</h1>
      <p className="text-lg text-navy/75 leading-relaxed">
        First posts coming soon &mdash; neighborhood breakdowns, market reads, and everything
        else that doesn&apos;t fit neatly into a video series.
      </p>
    </section>
  );
}
