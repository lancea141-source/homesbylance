import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "What's My Home Worth",
  description: "A real, hyperlocal home valuation from Lance Anderson \u2014 not a canned estimate.",
};

export default function SellersGuide() {
  return (
    <section className="max-w-2xl mx-auto px-5 sm:px-8 py-16">
      <p className="uppercase tracking-[0.2em] text-xs font-semibold text-olive mb-2">Seller&apos;s Guide</p>
      <h1 className="font-display text-4xl sm:text-5xl text-navy mb-6">
        What&apos;s My Home Actually Worth?
      </h1>
      <p className="text-lg text-navy/75 leading-relaxed mb-10">
        Skip the algorithm. Get a real, hyperlocal valuation based on what&apos;s actually
        happening on your street &mdash; from an agent who works this market every day.
      </p>
      <LeadForm source="sellers-guide" />
    </section>
  );
}
