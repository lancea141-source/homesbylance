import Link from "next/link";
import { testimonials } from "@/lib/testimonials";
import TestimonialCard from "@/components/TestimonialCard";
import HomeHero from "@/components/HomeHero";
import WelcomeHero from "@/components/WelcomeHero";
import CategoryCards from "@/components/CategoryCards";
import ThumbnailLinks from "@/components/ThumbnailLinks";
import WhoIsLance from "@/components/WhoIsLance";
import Top500 from "@/components/Top500";
import LetsTalk from "@/components/LetsTalk";

export default function Home() {
  return (
    <>
      <HomeHero />
      <WelcomeHero />
      <CategoryCards />
      <ThumbnailLinks />
      <WhoIsLance />

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
        <p className="uppercase tracking-[0.2em] text-xs font-semibold text-olive mb-2">
          I Let You Do The Talking
        </p>
        <h2 className="font-display text-3xl sm:text-4xl mb-10 text-navy">
          Hear it from the people who worked with Lance.
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
        <Link
          href="/testimonials"
          className="inline-block mt-8 text-sm font-semibold text-terracotta"
        >
          See All Testimonials &rarr;
        </Link>
      </section>

      <Top500 />

      {/* Facebook Appreciation Group */}
      <section className="bg-olive text-cream">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-20 text-center">
          <p className="uppercase tracking-[0.2em] text-xs font-semibold text-camel mb-4">
            Clients &amp; Friends
          </p>
          <h2 className="font-display text-3xl sm:text-4xl italic mb-6">
            Join the Client &amp; Friend Appreciation Group
          </h2>
          <p className="text-cream/85 leading-relaxed max-w-2xl mx-auto">
            Local giveaways, first looks at new listings, jerky and lunch recs before they hit the
            channel, and a real community of Traverse Mountain &amp; Lehi neighbors. Free to join,
            just good people and good local stuff.
          </p>
          <a
            href="https://www.facebook.com/groups/817743620755776"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-block rounded-full bg-terracotta text-cream px-8 py-4 text-sm font-semibold hover:bg-navy transition-colors"
          >
            Join the Facebook Group
          </a>
        </div>
      </section>

      <LetsTalk />
    </>
  );
}
