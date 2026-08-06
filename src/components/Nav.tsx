"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/series", label: "Series" },
  { href: "/realestate", label: "Real Estate" },
  { href: "/realestate/traverse-mountain", label: "Traverse Mountain" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Journal" },
  { href: "/realestate/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-navy/10">
      <a
        href="tel:+18018605225"
        className="block bg-cream text-center py-2 text-sm sm:text-base font-bold text-terracotta hover:text-navy transition-colors border-b border-navy/10"
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
            className="rounded-full border border-navy/15 object-cover h-9 w-9"
          />
          <span className="font-display italic text-lg tracking-tight text-navy">
            Local <span className="text-terracotta not-italic">with Lance</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-navy/80 hover:text-terracotta transition-colors">
              {l.label}
            </Link>
          ))}
          <Link
            href="/realestate/contact"
            className="rounded-full bg-terracotta text-cream px-4 py-2 text-sm font-semibold hover:bg-navy transition-colors"
          >
            Talk to Lance
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-navy p-2 -mr-2"
        >
          <span className="sr-only">Menu</span>
          <div className="w-6 h-0.5 bg-navy mb-1.5" />
          <div className="w-6 h-0.5 bg-navy mb-1.5" />
          <div className="w-6 h-0.5 bg-navy" />
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-1 px-5 pb-5 text-sm font-medium">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 border-b border-navy/10 text-navy/80"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/realestate/contact"
            onClick={() => setOpen(false)}
            className="mt-3 rounded-full bg-terracotta text-cream px-4 py-2.5 text-center font-semibold"
          >
            Talk to Lance
          </Link>
        </nav>
      )}
    </header>
  );
}
