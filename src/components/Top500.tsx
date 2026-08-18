import Image from "next/image";

const top500Badge = "/images/top500-badge.jpg";

export default function Top500() {
  return (
    <section className="bg-cream">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-20 sm:py-28 grid sm:grid-cols-[0.9fr_1.1fr] gap-10 sm:gap-14 items-center">
        <div className="relative h-56 sm:h-72 mx-auto sm:mx-0 w-full max-w-xs">
          <Image
            src={top500Badge}
            alt="Utah's Top 500 Realtors badge"
            fill
            sizes="(min-width: 640px) 30vw, 60vw"
            className="object-contain"
          />
        </div>

        <div className="text-center sm:text-left">
          <p className="font-display text-2xl sm:text-3xl text-navy mb-3">
            3&times; Top 500 Realtor in Utah
          </p>
          <p className="text-navy/75 leading-relaxed mb-5">
            Recognized among Utah&apos;s Top 500 Realtors for three
            consecutive years.
          </p>
          <p className="text-navy/60 leading-relaxed italic">
            I&apos;m proud of the recognition, but even more grateful for the
            clients, friends, and referrals who made it possible.
          </p>
        </div>
      </div>
    </section>
  );
}
