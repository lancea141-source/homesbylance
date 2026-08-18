"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type NavLink = { label: string; href: string };
type Pillar = { label: string; href: string; children: NavLink[] };

const PILLARS: Pillar[] = [
  {
    label: "Buy",
    href: "/realestate/homes",
    children: [
      { label: "Home Search", href: "/realestate/homes" },
      { label: "Buyer's Academy", href: "/series/academy" },
      { label: "New Construction", href: "/series/builders" },
      { label: "Neighborhoods", href: "/series/neighborhoods" },
    ],
  },
  {
    label: "Sell",
    href: "/realestate/sellers-guide",
    children: [
      { label: "Home Value", href: "/realestate/sellers-guide" },
      { label: "Seller's Academy", href: "/series/academy" },
      { label: "Pricing Strategy", href: "/realestate/sellers-guide" },
      { label: "How I Market Your Home", href: "/realestate/sellers-guide" },
    ],
  },
  {
    label: "Invest",
    href: "/series/cap-rate",
    children: [
      { label: "Cap Rate Report", href: "/series/cap-rate" },
      { label: "Multi-Unit Search", href: "/realestate/homes" },
      { label: "Investor Academy", href: "/series/cap-rate" },
      { label: "Investment Tools", href: "/series/cap-rate" },
    ],
  },
  {
    label: "The Market",
    href: "/realestate/market-report",
    children: [
      { label: "Market Reports", href: "/realestate/market-report" },
      { label: "Traverse Mountain", href: "/realestate/traverse-mountain" },
      { label: "Market Index", href: "https://lancea141-source.github.io/utah-housing-intelligence" },
      { label: "Utah Housing Intelligence", href: "https://lancea141-source.github.io/utah-housing-intelligence" },
    ],
  },
  {
    label: "Local",
    href: "/series/lunch",
    children: [
      { label: "Lunch with Lance", href: "/series/lunch" },
      { label: "Jerky with Lance", href: "/series/jerky" },
      { label: "Peaches with Lance", href: "/series/peaches" },
      { label: "Boating with Lance", href: "/series/boating" },
      { label: "Neighborhoods", href: "/series/neighborhoods" },
    ],
  },
  {
    label: "About",
    href: "/#who-is-lance",
    children: [
      { label: "Who Is Lance", href: "/#who-is-lance" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Journal", href: "/blog" },
    ],
  },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openPillar, setOpenPillar] = useState<string | null>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenPillar(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-navy/10">
      <a
        href="tel:+18018605225"
        className="block bg-navy text-center py-2 text-sm sm:text-base font-bold text-[#C0652A] hover:text-camel transition-colors"
      >
        (801) 860-5225
      </a>
      <div className="contour-rule" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/lance-headshot.jpg"
            alt="Lance Anderson"
            width={36}
            height={36}
            className="rounded-full border border-navy/15 object-cover object-top h-9 w-9"
          />
          <span className="font-display italic text-lg tracking-tight text-navy">
            Local <span className="text-terracotta not-italic">with Lance</span>
          </span>
        </Link>

        <nav ref={navRef} className="hidden md:flex items-center gap-1 text-sm font-medium">
          {PILLARS.map((p) => (
            <div key={p.label} className="relative">
              <button
                onClick={() => setOpenPillar((v) => (v === p.label ? null : p.label))}
                className={`px-3 py-2 rounded-lg text-navy/80 hover:text-terracotta transition-colors flex items-center gap-1 ${
                  openPillar === p.label ? "text-terracotta" : ""
                }`}
              >
                {p.label}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className={`transition-transform ${openPillar === p.label ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {openPillar === p.label && (
                <div className="absolute top-full left-0 mt-1 min-w-[220px] rounded-xl border border-navy/10 bg-white shadow-lg py-2 z-50">
                  {p.children.map((c) => (
                    <Link
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      onClick={() => setOpenPillar(null)}
                      className="block px-4 py-2.5 text-sm text-navy/80 hover:bg-cream hover:text-terracotta transition-colors"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/realestate/contact"
            className="rounded-full bg-terracotta text-cream px-5 py-2.5 text-sm font-semibold hover:bg-navy transition-colors"
          >
            Contact
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden text-navy p-2 -mr-2"
        >
          <span className="sr-only">Menu</span>
          <div className="w-6 h-0.5 bg-navy mb-1.5" />
          <div className="w-6 h-0.5 bg-navy mb-1.5" />
          <div className="w-6 h-0.5 bg-navy" />
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden flex flex-col px-5 pb-5 text-sm font-medium">
          {PILLARS.map((p) => (
            <div key={p.label} className="border-b border-navy/10">
              <button
                onClick={() => setOpenAccordion((v) => (v === p.label ? null : p.label))}
                className="w-full flex items-center justify-between py-3 text-navy/80"
              >
                {p.label}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className={`transition-transform ${openAccordion === p.label ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {openAccordion === p.label && (
                <div className="pb-3 flex flex-col gap-1">
                  {p.children.map((c) => (
                    <Link
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      onClick={() => {
                        setMobileOpen(false);
                        setOpenAccordion(null);
                      }}
                      className="py-2 pl-3 text-navy/70 text-sm border-l-2 border-camel/40"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/realestate/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 rounded-full bg-terracotta text-cream px-4 py-2.5 text-center font-semibold"
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
