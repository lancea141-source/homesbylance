// components/IntentRouter.tsx
// Drop into homepage between hero and Series section.
// Import: import IntentRouter from "@/components/IntentRouter"
// Usage: <IntentRouter />
//
// FONT CHANGE: headlines now use a bold grotesk instead of Fraunces.
// Add to app/layout.tsx if not already present:
//
// import { Archivo } from "next/font/google";
// const archivo = Archivo({ subsets: ["latin"], variable: "--font-display", weight: ["600","700","800"] });
// // then add archivo.variable to the <html> or <body> className
//
// Tailwind config (globals.css or tailwind.config) needs:
// --font-display: var(--font-archivo, sans-serif);
// Replace any `font-fraunces` class below with `font-display` once wired up.
import Link from "next/link";

type IntentOption = {
  label: string;
  sub: string;
  href: string;
  emoji: string;
};

const OPTIONS: IntentOption[] = [
  {
    label: "I'm buying",
    sub: "Find the right neighborhood and know what a home is really worth.",
    href: "/realestate/homes",
    emoji: "🔑",
  },
  {
    label: "I'm selling",
    sub: "See what homes like yours are actually closing at right now.",
    href: "/realestate/sellers-guide",
    emoji: "🏷️",
  },
  {
    label: "I'm building new",
    sub: "Compare builders, incentives, and timelines before you sign.",
    href: "/series/builders",
    emoji: "🏗️",
  },
  {
    label: "I'm investing",
    sub: "Cap rates and cash flow for Utah County — what actually pencils.",
    href: "/series/cap-rate",
    emoji: "📈",
  },
  {
    label: "I'm exploring where to live",
    sub: "Neighborhoods, streets, and what it's actually like day to day.",
    href: "/series/neighborhoods",
    emoji: "🧭",
  },
];

export default function IntentRouter() {
  return (
    <section className="w-full bg-[#F4EDE4] py-14 px-4 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#2F3E46] text-center">
          What are you trying to figure out?
        </h2>
        <p className="mt-3 text-center text-[#2F3E46]/70 text-base sm:text-lg max-w-xl mx-auto">
          Pick one. I&apos;ll show you the real numbers, not a canned estimate.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {OPTIONS.map((opt, i) => (
            <Link
              key={opt.href}
              href={opt.href}
              className={`group flex items-start gap-4 rounded-2xl border border-[#2F3E46]/10 bg-white p-5
                transition-all duration-150 hover:border-[#C0652A] hover:shadow-md
                ${i === OPTIONS.length - 1 ? "sm:col-span-2" : ""}`}
            >
              <span className="text-2xl leading-none shrink-0" aria-hidden="true">
                {opt.emoji}
              </span>
              <span className="flex-1">
                <span className="block font-display text-lg font-bold text-[#2F3E46]">
                  {opt.label}
                </span>
                <span className="block mt-1 text-sm text-[#2F3E46]/70">
                  {opt.sub}
                </span>
              </span>
              <span
                className="shrink-0 self-center text-[#C0652A] font-bold text-lg
                transition-transform duration-150 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
