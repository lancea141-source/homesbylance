import Image from "next/image";

// v0.4 — bio trimmed to two paragraphs; Top 500 folded in as an inline badge
// (standalone Top500 section removed from homepage).
export default function WhoIsLance() {
  return (
    <section id="who-is-lance" className="w-full bg-white border-t border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24 grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-center">
        <div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-navy mb-6">
            Who Is Lance?
          </h2>
          <div className="space-y-5 text-navy/75 leading-relaxed">
            <p className="text-lg text-navy">
              A Realtor, an engineer, a numbers guy, and a Utah local. I believe
              better information leads to better decisions&mdash;but real estate
              has always been about people, and I take care of my clients like
              I do my own family.
            </p>
            <p>
              My approach is simple: understand the numbers, ask the right
              questions, explain the options, and find the solution that makes
              the most sense for you. My clients start as people I&apos;m helping
              buy or sell a home and end up becoming friends&mdash;and I&apos;m
              here long after the transaction is over.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-4 rounded-xl border border-line p-4 max-w-md">
            <div className="relative h-16 w-16 shrink-0">
              <Image
                src="/images/top500-badge.jpg"
                alt="Utah's Top 500 Realtors badge"
                fill
                sizes="64px"
                className="object-contain"
              />
            </div>
            <div>
              <p className="font-bold text-navy">3&times; Top 500 Realtor in Utah</p>
              <p className="text-sm text-navy/65">Recognized three consecutive years.</p>
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
          <Image
            src="/images/lance-family.jpg"
            alt="Lance Anderson with his family"
            fill
            sizes="(min-width: 1024px) 33vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
