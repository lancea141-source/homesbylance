import Image from "next/image";
import Link from "next/link";

// v0.4 — merged HomeHero + WelcomeHero into a single white hero.
export default function HomeHero() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-10 sm:pt-16 pb-16 sm:pb-24 grid md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-16 items-center">
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1 className="font-display font-bold text-navy text-[14vw] leading-[0.95] sm:text-6xl md:text-7xl">
            Local with Lance
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-navy/70 max-w-lg mx-auto md:mx-0">
            Turning Real Estate Information into Better Decisions.
          </p>

          <div className="mt-8 h-px w-full max-w-lg bg-line mx-auto md:mx-0" />

          <p className="mt-8 text-navy/75 leading-relaxed max-w-lg mx-auto md:mx-0">
            <span className="block font-display font-bold text-3xl sm:text-4xl text-navy mb-3">I&apos;m Lance Anderson.</span>
            Whatever your real estate goals, I&apos;ll help you understand your
            options, navigate the complexities, and confidently make your next move.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <Link
              href="/realestate/contact"
              className="rounded-[3px] bg-terracotta text-white px-7 py-3.5 text-sm font-semibold hover:bg-navy transition-colors"
            >
              Let&apos;s Talk
            </Link>
            <a
              href="https://share.google/XXTT1EE0G7dCoYuws"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy/80 hover:text-terracotta transition-colors"
            >
              <span aria-hidden="true" className="text-camel tracking-tight">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
              5.0 &middot; 42 Google Reviews
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 relative w-full max-w-xs sm:max-w-sm mx-auto md:max-w-none aspect-[4/5] rounded-[4px] overflow-hidden bg-navy/[0.03]">
          <Image
            src="/images/lance-headshot.jpg"
            alt="Lance Anderson, Realtor"
            fill
            sizes="(min-width: 768px) 38vw, 90vw"
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </section>
  );
}
