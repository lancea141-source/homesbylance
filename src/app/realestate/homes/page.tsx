import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Homes",
  description: "Search homes for sale in Traverse Mountain and Lehi, UT.",
};

export default function Homes() {
  return (
    <section className="max-w-3xl mx-auto px-5 sm:px-8 py-16">
      <p className="uppercase tracking-[0.2em] text-xs font-semibold text-olive mb-2">Search Homes</p>
      <h1 className="font-display text-4xl sm:text-5xl text-navy mb-6">Find Your Home</h1>
      <p className="text-lg text-navy/75 leading-relaxed mb-8">
        Full IDX search is coming directly to this page, powered by Lance&apos;s own MLS API
        access. In the meantime, search live URE / WFRMLS listings below.
      </p>
      <a
        href="https://www.utahrealestate.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-full bg-terracotta text-cream px-6 py-3 text-sm font-semibold hover:bg-navy transition-colors"
      >
        Search on UtahRealEstate.com &rarr;
      </a>
    </section>
  );
}
