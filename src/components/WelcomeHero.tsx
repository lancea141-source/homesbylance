import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";
import SocialIcons from "@/components/SocialIcons";

const CTA_COPY: Record<string, string> = {
  buy: "Ready to Buy?",
  sell: "Ready to Sell?",
  invest: "Ready to Invest?",
  market: "See The Market?",
  local: "Live Local?",
};

export default function WelcomeHero() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 sm:py-20 grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14 items-center">
        {/* Photo comes first in DOM on mobile (stacked above text), moves right on desktop */}
        <div className="order-1 md:order-2 relative w-full max-w-sm mx-auto md:max-w-none aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/images/lance-headshot.jpg"
            alt="Lance Anderson, Realtor"
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover object-top"
            priority
          />
        </div>

        <div className="order-2 md:order-1 text-center md:text-left">
          <h2 className="font-display text-3xl sm:text-4xl text-navy mb-4">
            I&apos;m Lance Anderson.
          </h2>
          <p className="text-navy/75 leading-relaxed max-w-md mx-auto md:mx-0 mb-6">
            Whatever your real estate goals, I&apos;m here to help you
            understand your options, navigate the complexities, and
            confidently make your next move.
          </p>

          <a
            href="tel:+18018605225"
            className="inline-block font-display text-3xl sm:text-4xl text-terracotta hover:text-navy transition-colors mb-8"
          >
            (801) 860-5225
          </a>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 sm:[&>a:last-child]:col-span-2">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.key}
                href={cat.href}
                className="group flex items-center justify-between rounded-xl px-5 py-4 text-white font-semibold hover:brightness-90 transition-[filter]"
                style={{ background: cat.accent }}
              >
                <span>{CTA_COPY[cat.key] ?? cat.label}</span>
                <span className="text-sm uppercase tracking-wide text-white/85 group-hover:translate-x-0.5 transition-transform">
                  Click Here &rarr;
                </span>
              </Link>
            ))}
          </div>

          <a
            href="https://share.google/XXTT1EE0G7dCoYuws"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy/80 hover:text-terracotta transition-colors mb-6"
          >
            <span aria-hidden="true" className="text-camel">
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </span>
            5.0 &middot; 42 Google Reviews
          </a>

          <SocialIcons className="justify-center md:justify-start" />
        </div>
      </div>
    </section>
  );
}
