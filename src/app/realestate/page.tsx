import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate",
  description: "Buy or sell in Traverse Mountain and Lehi, UT with Lance Anderson, Realtor (URE/WFRMLS).",
};

const links = [
  { href: "/realestate/homes", title: "Search Homes", blurb: "Browse active listings across Traverse Mountain and Lehi." },
  { href: "/realestate/traverse-mountain", title: "Traverse Mountain", blurb: "Street-by-street neighborhood guide." },
  { href: "/realestate/market-report", title: "Market Report", blurb: "Hyperlocal pricing trends, updated regularly." },
  { href: "/market-updates/traverse-mountain", title: "Traverse Mountain Market Update", blurb: "Lance's live market report, embedded right here." },
  { href: "/realestate/buyers-guide", title: "Buyer's Guide", blurb: "Why work with a buyer's agent in this market." },
  { href: "/realestate/sellers-guide", title: "What's My Home Worth", blurb: "A real, data-driven valuation \u2014 not a canned estimate." },
  { href: "/series/academy", title: "Buyer's & Seller's Academy", blurb: "Video lessons on buying and selling in Utah." },
  { href: "/series/cap-rate", title: "Cap Rate with Lance", blurb: "Investor breakdowns \u2014 what actually pencils in this market." },
];

export default function RealEstate() {
  return (
    <section className="max-w-5xl mx-auto px-5 sm:px-8 py-16">
      <p className="uppercase tracking-[0.2em] text-xs font-semibold text-olive mb-2">Lance the Realtor</p>
      <h1 className="font-display text-4xl sm:text-5xl text-navy mb-6">Buy or Sell in Traverse Mountain &amp; Lehi</h1>
      <p className="text-lg text-navy/75 max-w-2xl leading-relaxed mb-12">
        URE / WFRMLS licensed. Data-driven pricing, street-level neighborhood knowledge, and
        the local perspective you only get from someone who actually lives this market.
      </p>
      <div className="grid sm:grid-cols-2 gap-6">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="rounded-2xl border border-navy/10 bg-white/60 p-6 hover:border-terracotta hover:shadow-lg transition-all"
          >
            <h2 className="font-display text-xl text-navy">{l.title}</h2>
            <p className="mt-2 text-sm text-navy/70">{l.blurb}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
