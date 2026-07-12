import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Contact Lance",
  description: "Get in touch with Lance Anderson, Realtor, Traverse Mountain & Lehi, UT.",
};

export default function Contact() {
  return (
    <section className="max-w-2xl mx-auto px-5 sm:px-8 py-16">
      <p className="uppercase tracking-[0.2em] text-xs font-semibold text-olive mb-2">Talk to Lance</p>
      <h1 className="font-display text-4xl sm:text-5xl text-navy mb-6">Let&apos;s Talk</h1>
      <p className="text-lg text-navy/75 leading-relaxed mb-10">
        Buying, selling, or just want the real read on a neighborhood &mdash; reach out directly.
      </p>
      <LeadForm source="contact-page" />
    </section>
  );
}
