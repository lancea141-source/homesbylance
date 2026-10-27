import type { Metadata } from "next";
import { Barlow_Condensed, Barlow } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BuildBanner from "@/components/BuildBanner";
import MobileCallBar from "@/components/MobileCallBar";
import "./globals.css";

// v0.4 type system: Barlow Condensed (headlines, matches YouTube thumbnails)
// + Barlow (nav, body, buttons).
const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://homesbylance.com"),
  title: {
    default: "Local with Lance | Lance Anderson, Realtor \u2014 Traverse Mountain & Lehi, UT",
    template: "%s | Local with Lance",
  },
  description:
    "Lance Anderson, Realtor (URE/WFRMLS), Traverse Mountain & Lehi, Utah. Hyperlocal market data, neighborhood walkthroughs, and the guy who actually knows Utah.",
  alternates: { canonical: "https://homesbylance.com" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Lance Anderson",
  alternateName: "Local with Lance",
  url: "https://homesbylance.com",
  image: "https://homesbylance.com/images/lance-headshot.jpg",
  areaServed: [
    { "@type": "Place", name: "Traverse Mountain, Lehi, UT" },
    { "@type": "Place", name: "Utah County, UT" },
  ],
  memberOf: {
    "@type": "Organization",
    name: "UtahRealEstate.com / WFRMLS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${barlow.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-navy">
        <BuildBanner />
        <Nav />
        <main className="flex-1 pb-16 sm:pb-0">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
