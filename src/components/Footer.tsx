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
          <p className="text-sm text-cream/70 leading-relaxed mt-3">
            <a href="https://www.utahrealestate.com/roster/office.listings.report/id/71299" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta">Jason Mitchell Real Estate Utah LLC</a>
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
            <li><a href="tel:+18018605225" className="hover:text-terracotta">(801) 860-5225</a></li>
            <li><a href="mailto:lancea141@gmail.com" className="hover:text-terracotta">lancea141@gmail.com</a></li>
            <li><a href="https://www.youtube.com/@lance141" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta">YouTube</a></li>
            <li><a href="https://www.instagram.com/lancea141" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta">Instagram</a></li>
            <li><a href="https://www.facebook.com/lance141" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta">Facebook</a></li>
            <li><a href="https://www.tiktok.com/@lancea141" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta">TikTok</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 py-5 text-center text-xs text-cream/50">
        &copy; {new Date().getFullYear()} Local with Lance &middot; Lance Anderson, Realtor &middot; Jason Mitchell Real Estate Utah LLC &middot; All rights reserved
      </div>
    </footer>
  );
}
