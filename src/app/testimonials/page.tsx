import type { Metadata } from "next";
import Link from "next/link";
import { testimonials } from "@/lib/testimonials";
import TestimonialCard from "@/components/TestimonialCard";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Hear directly from Lance Anderson's buyers and sellers in Traverse Mountain and Lehi, UT.",
};

export default function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
      <p className="uppercase tracking-[0.2em] text-xs font-semibold text-olive mb-2">
        I Let You Do The Talking
      </p>
      <h1 className="font-display text-4xl sm:text-5xl text-navy mb-6">Testimonials</h1>
      <p className="text-lg text-navy/75 max-w-2xl leading-relaxed mb-14">
        Real buyers, sellers, and investors on what it&apos;s actually like working with Lance.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} t={t} />
        ))}
      </div>

      <div className="mt-16 rounded-2xl bg-camel/25 border border-camel/40 p-8 text-center">
        <p className="text-navy/80 mb-4">Ready to write your own success story?</p>
        <Link
          href="/realestate/contact"
          className="inline-block rounded-full bg-terracotta text-cream px-6 py-3 text-sm font-semibold hover:bg-navy transition-colors"
        >
          Talk to Lance
        </Link>
      </div>
    </section>
  );
}
