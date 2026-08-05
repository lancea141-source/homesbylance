"use client";

import Link from "next/link";

type Tile = {
  label: string;
  tagline: string;
  href: string;
  accent: string;
  accentText: string;
  icon: React.ReactNode;
};

const ICON_PROPS = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const TILES: Tile[] = [
  {
    label: "Buy",
    tagline: "Find the right home.",
    href: "/realestate/homes",
    accent: "#C0652A",
    accentText: "text-[#C0652A]",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
      </svg>
    ),
  },
  {
    label: "Sell",
    tagline: "Sell with a strategy.",
    href: "/realestate/sellers-guide",
    accent: "#2F3E46",
    accentText: "text-[#2F3E46]",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M4 21V9l7-5 7 5v12" />
        <path d="M9 21v-6h4v6" />
        <path d="M14 9h5" />
      </svg>
    ),
  },
  {
    label: "Invest",
    tagline: "Make the numbers work.",
    href: "/series/cap-rate",
    accent: "#6B7A3A",
    accentText: "text-[#6B7A3A]",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M4 20V10" />
        <path d="M10 20V4" />
        <path d="M16 20v-7" />
        <path d="M22 20V14" />
      </svg>
    ),
  },
  {
    label: "The Market",
    tagline: "Know what's happening.",
    href: "/realestate/market-report",
    accent: "#4F7C82",
    accentText: "text-[#4F7C82]",
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v9l6 3" />
      </svg>
    ),
  },
  {
    label: "Local",
    tagline: "Know where you live.",
    href: "/realestate/traverse-mountain",
    accent: "#A44A2F",
    accentText: "text-[#A44A2F]",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 12 2.5a7 7 0 0 1 7 7C19 14.8 12 21 12 21Z" />
        <circle cx="12" cy="9.5" r="2.25" />
      </svg>
    ),
  },
];

export default function HomeHero() {
  return (
    <section className="w-full bg-[#F4EDE4]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20 pb-10 sm:pb-14 text-center">
        <p className="uppercase tracking-[0.25em] text-xs sm:text-sm font-bold text-[#2F3E46]">
          Local <span className="text-[#C0652A]">with</span> Lance
        </p>
        <div className="mx-auto mt-2 mb-6 h-[2px] w-10 bg-[#C0652A]" />

        <h1 className="font-display font-extrabold tracking-tight text-[#2F3E46] text-[10vw] leading-[1.02] sm:text-6xl md:text-7xl">
          Know More. Decide Better.
        </h1>

        <p className="mt-5 text-base sm:text-lg text-[#2F3E46]/70 max-w-xl mx-auto">
          Local knowledge. Real numbers. Better decisions.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {TILES.map((tile) => (
            <Link
              key={tile.label}
              href={tile.href}
              target={tile.href.startsWith("http") ? "_blank" : undefined}
              rel={tile.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[3/4] flex flex-col justify-end"
              style={{
                background: `linear-gradient(160deg, ${tile.accent}33 0%, ${tile.accent}66 100%)`,
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-200"
                style={{ background: tile.accent }}
                aria-hidden="true"
              />

              <div className="relative bg-white/90 backdrop-blur-sm px-4 py-4">
                <div className="h-[3px] w-8 mb-3" style={{ background: tile.accent }} />
                <span className={`block ${tile.accentText}`} aria-hidden="true">
                  {tile.icon}
                </span>
                <h3 className="mt-3 font-display font-bold text-lg text-[#2F3E46] uppercase tracking-wide">
                  {tile.label}
                </h3>
                <p
                  className="mt-1 text-sm text-[#2F3E46]/70 sm:max-h-0 sm:opacity-0 sm:group-hover:max-h-12 sm:group-hover:opacity-100 sm:transition-all sm:duration-200 sm:overflow-hidden"
                >
                  {tile.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 pb-14 sm:pb-20 text-center">
        <p className="text-sm sm:text-base text-[#2F3E46]/80">
          Real estate is local.{" "}
          <span className="italic font-semibold text-[#C0652A]">So is the insight.</span>
        </p>
      </div>
    </section>
  );
}
