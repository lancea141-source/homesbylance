"use client";

import Link from "next/link";
import Image from "next/image";

type Category = {
  key: string;
  label: string;
  description: string;
  href: string;
  accent: string;
  image: string;
  icon: React.ReactNode;
};

const ICON = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#fff",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const CATEGORIES: Category[] = [
  {
    key: "buy",
    label: "Buy",
    description: "Find the right home.",
    href: "/realestate/homes",
    accent: "#C0652A",
    image: "/images/category/buy.png",
    icon: (
      <svg {...ICON}>
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
      </svg>
    ),
  },
  {
    key: "sell",
    label: "Sell",
    description: "Sell with a strategy.",
    href: "/realestate/sellers-guide",
    accent: "#2F3E46",
    image: "/images/category/sell.png",
    icon: (
      <svg {...ICON}>
        <path d="M4 21V9l7-5 7 5v12" />
        <path d="M9 21v-6h4v6" />
        <path d="M14 9h5" />
      </svg>
    ),
  },
  {
    key: "invest",
    label: "Invest",
    description: "Make the numbers work.",
    href: "/series/cap-rate",
    accent: "#6B7A3A",
    image: "/images/category/invest.png",
    icon: (
      <svg {...ICON}>
        <path d="M4 20V10" />
        <path d="M10 20V4" />
        <path d="M16 20v-7" />
        <path d="M22 20V14" />
      </svg>
    ),
  },
  {
    key: "market",
    label: "The Market",
    description: "Know what's happening.",
    href: "/realestate/market-report",
    accent: "#4F7C82",
    image: "/images/category/market.png",
    icon: (
      <svg {...ICON}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v9l6 3" />
      </svg>
    ),
  },
  {
    key: "local",
    label: "Local",
    description: "Know where you live.",
    href: "/realestate/traverse-mountain",
    accent: "#A44A2F",
    image: "/images/category/local.png",
    icon: (
      <svg {...ICON}>
        <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 12 2.5a7 7 0 0 1 7 7C19 14.8 12 21 12 21Z" />
        <circle cx="12" cy="9.5" r="2.25" />
      </svg>
    ),
  },
];

export default function CategoryCards() {
  return (
    <section className="w-full bg-[#F4EDE4]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-10 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.key}
              href={cat.href}
              target={cat.href.startsWith("http") ? "_blank" : undefined}
              rel={cat.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex flex-col rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <div
                className="flex flex-col items-center text-center px-4 py-6 flex-1 transition-[filter] duration-200 group-hover:brightness-90"
                style={{ background: cat.accent }}
              >
                <span aria-hidden="true">{cat.icon}</span>
                <h3 className="mt-3 font-display font-bold text-lg text-white uppercase tracking-wide">
                  {cat.label}
                </h3>
                <p className="mt-1 text-sm text-white/85">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
