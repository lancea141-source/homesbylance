import Link from "next/link";
import Image from "next/image";
import { testimonials } from "@/lib/testimonials";
import TestimonialCard from "@/components/TestimonialCard";
import HomeHero from "@/components/HomeHero";
import CategoryCards from "@/components/CategoryCards";
import WhoIsLance from "@/components/WhoIsLance";
import BottomLinks from "@/components/BottomLinks";

const headshot = "/images/lance-headshot.jpg";

export default function Home() {
  return (
    <>
      <HomeHero />
      <CategoryCards />

      <WhoIsLance />

      {/* Authority statement */}
      <section className="bg-navy text-cream">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-20 text-center">
          <Image
            src={headshot}
            alt="Lance Anderson"
            width={112}
            height={112}
            className="rounded-full mx-auto mb-8 border-2 border-camel object-cover object-top h-28 w-28"
          />
          <h2 className="font-display text-3xl sm:text-4xl italic mb-6">
            I Know Utah!
          </h2>
          <p className="text-cream/80 leading-relaxed max-w-2xl mx-auto">
            The jerky spots, the orchard seasons, the boat ramps, the best lunch stops &mdash;
            and exactly what your home on that street is worth right now. That&apos;s not a
            pitch. That&apos;s just what happens when you live it every day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs font-semibold uppercase tracking-wide">
            <span className="rounded-full border border-camel/50 px-4 py-1.5">Lehi Market</span>
            <span className="rounded-full border border-camel/50 px-4 py-1.5">TM Traverse Mountain</span>
            <span className="rounded-full border border-camel/50 px-4 py-1.5">Utah County</span>
            <span className="rounded-full border border-camel/50 px-4 py-1.5">SL County</span>
          </div>
        </div>
      </section>

      {/* Testimonials teaser */}
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

      {/* Real estate bridge / lead capture */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
        <div className="rounded-3xl bg-camel/25 border border-camel/40 p-8 sm:p-12 grid sm:grid-cols-2 gap-8 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-olive mb-2">
              Market with Lance
            </p>
            <h2 className="font-display text-3xl text-navy mb-4">What&apos;s your home actually worth?</h2>
            <p className="text-navy/75 leading-relaxed">
              Hyperlocal pricing data for Traverse Mountain and Lehi &mdash; your street, your
              neighborhood, real numbers. No canned Zestimate. An actual data-driven read from
              an agent who works this market every day.
            </p>
          </div>
          <div className="flex sm:justify-end">
            <Link
              href="/realestate/sellers-guide"
              className="rounded-full bg-navy text-cream px-7 py-4 text-sm font-semibold hover:bg-terracotta transition-colors text-center"
            >
              Get My Free Home Valuation
            </Link>
          </div>
        </div>
      </section>

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

      <BottomLinks />
    </>
  );
}
