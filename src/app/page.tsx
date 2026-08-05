import Link from "next/link";
import Image from "next/image";
import { series, categoryLabels } from "@/lib/series";
import { testimonials } from "@/lib/testimonials";
import TestimonialCard from "@/components/TestimonialCard";
import IntentRouter from "@/components/IntentRouter";

const headshot = "/images/lance-headshot.jpg";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="grain relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <p className="uppercase tracking-[0.2em] text-xs font-semibold text-olive mb-5">
            Traverse Mountain &middot; Lehi, Utah
          </p>
          <h1 className="font-display text-[13vw] sm:text-6xl md:text-7xl leading-[0.95] text-navy">
            Local <span className="italic text-terracotta">with Lance</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-navy/80 leading-relaxed">
            The neighborhoods. The market. The lake. The jerky. The peaches.
            <br />
            <span className="font-semibold">The guy who knows Utah.</span>
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#series"
              className="rounded-full bg-navy text-cream px-6 py-3 text-sm font-semibold hover:bg-terracotta transition-colors"
            >
              Explore the Series
            </a>
            <Link
              href="/realestate"
              className="rounded-full border border-navy/25 text-navy px-6 py-3 text-sm font-semibold hover:border-terracotta hover:text-terracotta transition-colors"
            >
              Buy or Sell
            </Link>
          </div>
        </div>
        <div className="contour-rule" />
      </section>

      <IntentRouter />

      {/* Series grid, grouped by category */}
      <section id="series" className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
        <p className="uppercase tracking-[0.2em] text-xs font-semibold text-olive mb-2">The Series</p>
        <h2 className="font-display text-3xl sm:text-4xl mb-12 text-navy">
          Utah, from every angle Lance actually lives.
        </h2>

        {(["lifestyle", "real-estate", "investing"] as const).map((cat) => (
          <div key={cat} className="mb-16 last:mb-0">
            <h3 className="font-display text-xl italic text-terracotta mb-6">
              {categoryLabels[cat]}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {series
                .filter((s) => s.category === cat)
                .map((s) => (
                  <Link
                    key={s.slug}
                    href={`/series/${s.slug}`}
                    className="group rounded-2xl border border-navy/10 bg-white/60 p-6 hover:border-terracotta hover:shadow-lg transition-all"
                  >
                    <span className="text-3xl">{s.emoji}</span>
                    <h4 className="font-display text-xl mt-4 text-navy group-hover:text-terracotta transition-colors">
                      {s.title}
                    </h4>
                    <p className="mt-2 text-sm text-navy/70 leading-relaxed">{s.blurb}</p>
                    <p className="mt-4 text-xs uppercase tracking-wide text-camel font-semibold">
                      {s.channels.join(" \u00B7 ")}
                    </p>
                    <span className="mt-4 inline-block text-sm font-semibold text-terracotta">
                      View &rarr;
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </section>

      {/* Authority statement */}
      <section className="bg-navy text-cream">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-20 text-center">
          <Image
            src={headshot}
            alt="Lance Anderson"
            width={112}
            height={112}
            className="rounded-full mx-auto mb-8 border-2 border-camel object-cover h-28 w-28"
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
            <span className="rounded-full border border-camel/50 px-4 py-1.5">Lehi Primary Market</span>
            <span className="rounded-full border border-camel/50 px-4 py-1.5">TM Traverse Mountain</span>
            <span className="rounded-full border border-camel/50 px-4 py-1.5">Utah County</span>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:lancea141@gmail.com"
              className="rounded-full bg-terracotta px-6 py-3 text-sm font-semibold hover:bg-camel hover:text-navy transition-colors"
            >
              Talk to Lance
            </a>
            <Link
              href="/realestate"
              className="rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold hover:border-camel transition-colors"
            >
              See Real Estate
            </Link>
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
    </>
  );
}
