import Image from "next/image";
import Link from "next/link";

const familyPhoto = "/images/lance-family.jpg";
const top500Badge = "/images/top500-badge.jpg";

const CREDS = [
  {
    stat: "3× TOP 500 REALTOR IN UTAH",
    label: "Proven experience and results",
    badge: top500Badge,
  },
  {
    stat: "ENGINEER + NUMBERS GUY",
    label: "Data, analysis & real-world problem solving",
    badge: null,
  },
  {
    stat: "UTAH LOCAL",
    label: "Real estate, neighborhoods & local living",
    badge: null,
  },
];

export default function WhoIsLance() {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
      <p className="uppercase tracking-[0.2em] text-xs font-semibold text-olive mb-2">
        The Person Behind The Data
      </p>
      <h2 className="font-display text-3xl sm:text-4xl mb-10 text-navy">
        Who Is Lance?
      </h2>

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14 items-start">
        <div className="space-y-5 text-navy/80 leading-relaxed">
          <p className="text-lg text-navy font-medium">
            A Realtor, an engineer, a numbers guy, a local&mdash;and someone who
            believes better information leads to better decisions.
          </p>
          <p>
            I&apos;m Lance Anderson. I&apos;ve spent my career solving problems,
            building businesses, connecting people, and helping clients make big
            decisions with confidence.
          </p>
          <p>Today, that means real estate.</p>
          <p>
            For the past three years, I&apos;ve been recognized among Utah&apos;s
            Top 500 Realtors, but what matters more to me is how I got there: by
            listening, digging into the numbers, explaining the options, and
            helping clients figure out what actually makes sense for them.
          </p>
          <p>
            My background is a little different from most Realtors. I&apos;m an
            engineer, an entrepreneur, and a numbers guy. I&apos;ve built and
            operated businesses, developed products, and spent years in sales and
            entrepreneurship. I naturally want to understand why something
            works&mdash;not just repeat what everyone else is doing.
          </p>
          <p>That mindset is behind Local with Lance.</p>
          <p>
            I&apos;m building better market reports, pricing tools, investment
            analysis, and local resources because I believe real estate should be
            easier to understand. And because real estate is local, I also want to
            share the places and experiences that make Utah home&mdash;from
            neighborhoods and new construction to local lunches, peaches, jerky,
            and days on the lake.
          </p>
          <p>But real estate is only part of my life.</p>
          <p>
            I&apos;m a husband, a dad, and a Utah local who loves spending time
            with my family, getting out on the water, and discovering the people
            and places around us.
          </p>
          <p className="text-navy font-medium">
            The goal is simple: know more, understand your options, and make a
            better decision.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-navy/10 shadow-sm aspect-[4/5] lg:aspect-[3/4]">
          <Image
            src={familyPhoto}
            alt="Lance Anderson with his family"
            fill
            sizes="(min-width: 1024px) 33vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Credibility strip */}
      <div className="mt-16 grid sm:grid-cols-3 gap-6">
        {CREDS.map((c) => (
          <div
            key={c.stat}
            className="rounded-2xl border border-navy/10 bg-white/60 p-6 text-center flex flex-col items-center"
          >
            {c.badge && (
              <div className="relative h-14 w-14 mb-3">
                <Image
                  src={c.badge}
                  alt="Utah Top 500 Realtor badge"
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
            )}
            <p className="font-display font-bold text-navy tracking-wide text-sm sm:text-base">
              {c.stat}
            </p>
            <p className="mt-1 text-sm text-navy/65">{c.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/realestate/contact"
          className="inline-block text-sm font-semibold text-terracotta hover:text-navy transition-colors"
        >
          More About Lance &rarr;
        </Link>
      </div>
    </section>
  );
}
