import Link from "next/link";
import Image from "next/image";

// v0.4 — light footer on white; headshot and oversized phone block removed.
export default function Footer() {
  return (
    <footer className="bg-white border-t border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 grid gap-10 sm:grid-cols-3">
        <div>
          <Image
            src="/images/lance-the-realtor-logo.png"
            alt="Lance the Realtor"
            width={120}
            height={155}
            className="h-14 w-auto mb-4"
          />
          <p className="text-sm text-navy/65 leading-relaxed">
            Lance Anderson, Realtor &middot; Traverse Mountain / Lehi, UT &middot; URE / WFRMLS
          </p>
          <p className="text-sm text-navy/65 leading-relaxed mt-2">
            <a
              href="https://www.utahrealestate.com/roster/office.listings.report/id/71299"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-terracotta"
            >
              Jason Mitchell Real Estate Utah LLC
            </a>
          </p>
          <Image
            src="/images/jmg-logo.png"
            alt="Jason Mitchell Group"
            width={140}
            height={101}
            className="h-9 w-auto mt-4"
          />
        </div>
        <div className="text-sm">
          <p className="uppercase tracking-wide text-navy/45 mb-3 text-xs font-semibold">Real Estate</p>
          <ul className="space-y-2 text-navy/75">
            <li><Link href="/realestate/homes" className="hover:text-terracotta">Search Homes</Link></li>
            <li><Link href="/realestate/traverse-mountain" className="hover:text-terracotta">Traverse Mountain</Link></li>
            <li><Link href="/realestate/market-report" className="hover:text-terracotta">Market Report</Link></li>
            <li><Link href="/realestate/sellers-guide" className="hover:text-terracotta">What&apos;s My Home Worth</Link></li>
            <li><Link href="/testimonials" className="hover:text-terracotta">Testimonials</Link></li>
            <li><Link href="/methodology" className="hover:text-terracotta">Data &amp; Methodology</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="uppercase tracking-wide text-navy/45 mb-3 text-xs font-semibold">Contact</p>
          <ul className="space-y-2 text-navy/75">
            <li><a href="tel:+18018605225" className="font-semibold text-navy hover:text-terracotta">(801) 860-5225</a></li>
            <li><a href="mailto:lancea141@gmail.com" className="hover:text-terracotta">lancea141@gmail.com</a></li>
            <li><a href="https://www.youtube.com/@LocalwithLance" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta">YouTube</a></li>
            <li><a href="https://www.instagram.com/lancea141" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta">Instagram</a></li>
            <li><a href="https://www.facebook.com/lance141" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta">Facebook</a></li>
            <li><a href="https://www.tiktok.com/@lancea141" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta">TikTok</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-xs text-navy/50">
        {`© ${new Date().getFullYear()} Local with Lance · Lance Anderson, Realtor · Jason Mitchell Real Estate Utah LLC`}
      </div>
    </footer>
  );
}
