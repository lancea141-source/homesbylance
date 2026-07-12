import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Buyer's Guide",
  description: "Why use a buyer's agent in Utah's market \u2014 with Lance Anderson.",
};

export default function BuyersGuide() {
  return (
    <section className="max-w-2xl mx-auto px-5 sm:px-8 py-16">
      <p className="uppercase tracking-[0.2em] text-xs font-semibold text-olive mb-2">Buyer&apos;s Guide</p>
      <h1 className="font-display text-4xl sm:text-5xl text-navy mb-6">
        Why Use a Buyer&apos;s Agent in Utah&apos;s Market
      </h1>
      <p className="text-lg text-navy/75 leading-relaxed mb-10">
        Full guide coming soon. In the meantime, tell Lance what you&apos;re looking for and
        he&apos;ll walk you through it directly.
      </p>
      <LeadForm source="buyers-guide" />
    </section>
  );
}
