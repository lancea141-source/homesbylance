import Image from "next/image";

const familyPhoto =
  "https://drive.google.com/uc?id=1NI03AGInIIvQNt5-d-upTrmppxi8-0yu";
const top500Badge =
  "https://drive.google.com/uc?id=19ON9IUmPcXyk_PJv9PIYYhg44QFHia4v";

const CREDS = [
  {
    stat: "3\u00D7 TOP 500 REALTOR IN UTAH",
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
    <section id="who-is-lance" className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
      <p className="uppercase tracking-[0.2em] text-xs font-semibold text-olive mb-2">
        The Person Behind The Data
      </p>
      <h2 className="font-display text-3xl sm:text-4xl mb-10 text-navy">
        Who Is Lance?
      </h2>

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14 items-start">
        <div className="space-y-5 text-navy/80 leading-relaxed">
          <p className="text-lg text-navy font-medium">
            A Realtor, an engineer, a numbers guy, and a Utah local. I believe
            better information leads to better decisions&mdash;but real estate
            has always been about more than numbers to me. It&apos;s about
            people, relationships, and taking care of my clients like I do my
            own family.
          </p>
          <p>
            I&apos;ve spent my career solving problems, building businesses,
            connecting people, and helping others make big decisions with
            confidence. This background shapes how I approach real estate
            today: understand the numbers, ask the right questions, explain
            the options, and find the solution that makes the most sense for
            you.
          </p>
          <p>
            For the past three years, I&apos;ve been recognized among
            Utah&apos;s Top 500 Realtors, but what I value most are the
            relationships that come from serving others. My clients start as
            people I&apos;m helping buy or sell a home and end up becoming
            friends. That&apos;s one of my favorite parts of this business.
          </p>
          <p>
            Local with Lance brings those two sides of me together&mdash;the
            engineer and numbers guy who loves digging into the market, and
            the Realtor who genuinely cares about the people behind every
            decision.
          </p>
          <p className="text-navy font-medium">
            Because buying or selling a home is a big deal. I take the trust
            you place in me personally&mdash;and I&apos;m here long after the
            transaction is over.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-navy/10 shadow-sm bg-cream min-h-[320px] sm:min-h-[420px] lg:min-h-[520px]">
          <Image
            src={familyPhoto}
            alt="Lance Anderson with his family"
            fill
            sizes="(min-width: 1024px) 33vw, 90vw"
            className="object-contain"
            unoptimized
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
              <div className="relative h-24 w-24 sm:h-28 sm:w-28 mb-3">
                <Image
                  src={c.badge}
                  alt="Utah Top 500 Realtor badge"
                  fill
                  sizes="112px"
                  className="object-contain"
                  unoptimized
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
    </section>
  );
}
