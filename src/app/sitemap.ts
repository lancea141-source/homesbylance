import type { MetadataRoute } from "next";
import { series } from "@/lib/series";
import { marketAreas } from "@/lib/marketAreas";

const base = "https://homesbylance.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/realestate",
    "/realestate/homes",
    "/realestate/traverse-mountain",
    "/realestate/market-report",
    "/realestate/buyers-guide",
    "/realestate/sellers-guide",
    "/realestate/contact",
    "/blog",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const seriesRoutes = series.map((s) => ({
    url: `${base}/series/${s.slug}`,
    lastModified: new Date(),
  }));

  const marketRoutes = marketAreas.map((a) => ({
    url: `${base}/realestate/market-report/${a.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...seriesRoutes, ...marketRoutes];
}
