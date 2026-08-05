import type { Metadata } from "next";
import { Fraunces, Public_Sans, Archivo } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
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
      className={`${fraunces.variable} ${publicSans.variable} ${archivo.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-navy">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}