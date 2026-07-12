import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-cream mt-24">
      <div className="contour-rule opacity-40" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 grid gap-10 sm:grid-cols-3">
        <div>
          <p className="font-display italic text-xl mb-2">Local with Lance</p>
          <p className="text-sm text-cream/70 leading-relaxed">
            Lance Anderson, Realtor &middot; Traverse Mountain / Lehi, UT &middot; URE / WFRMLS
          </p>
        </div>
        <div className="text-sm">
          <p className="uppercase tracking-wide text-camel mb-3 text-xs font-semibold">Real Estate</p>
          <ul className="space-y-2 text-cream/80">
            <li><Link href="/realestate/homes" className="hover:text-terracotta">Search Homes</Link></li>
            <li><Link href="/realestate/traverse-mountain" className="hover:text-terracotta">Traverse Mountain</Link></li>
            <li><Link href="/realestate/market-report" className="hover:text-terracotta">Market Report</Link></li>
            <li><Link href="/realestate/sellers-guide" className="hover:text-terracotta">What&apos;s My Home Worth</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="uppercase tracking-wide text-camel mb-3 text-xs font-semibold">Connect</p>
          <ul className="space-y-2 text-cream/80">
            <li><a href="mailto:lance@homesbylance.com" className="hover:text-terracotta">lance@homesbylance.com</a></li>
            <li><a href="#" className="hover:text-terracotta">YouTube</a></li>
            <li><a href="#" className="hover:text-terracotta">Instagram</a></li>
            <li><a href="#" className="hover:text-terracotta">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 py-5 text-center text-xs text-cream/50">
        &copy; {new Date().getFullYear()} Local with Lance &middot; Lance the Realtor &middot; All rights reserved
      </div>
    </footer>
  );
}
