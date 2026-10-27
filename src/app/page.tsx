import Link from "next/link";
import { testimonials } from "@/lib/testimonials";
import TestimonialCard from "@/components/TestimonialCard";
import HomeHero from "@/components/HomeHero";
import CategoryCards from "@/components/CategoryCards";
import ThumbnailLinks from "@/components/ThumbnailLinks";
import WhoIsLance from "@/components/WhoIsLance";
import LetsTalk from "@/components/LetsTalk";

// v0.4 — 2026-10-26 — simplified white homepage.
// Flip to true once real testimonials are in src/lib/testimonials.
const SHOW_TESTIMONIALS = false;

export default function Home() {
  return (
    <>
      <HomeHero />
      <CategoryCards />
      <ThumbnailLinks />
      <WhoIsLance />

      {SHOW_TESTIMONIALS && (
        <section className="w-full bg-white border-t border-line">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-10 text-navy">
              Hear it from the people who worked with Lance.
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {testimonials.slice(0, 3).map((t) => (
                <TestimonialCard key={t.name} t={t} />
              ))}
            </div>
            <Link href="/testimonials" className="inline-block mt-8 text-sm font-semibold text-terracotta">
              See All Testimonials &rarr;
            </Link>
          </div>
        </section>
      )}

      <LetsTalk />
    </>
  );
}
