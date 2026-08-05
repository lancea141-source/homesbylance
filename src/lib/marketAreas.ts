export type MarketArea = {
  slug: string;
  name: string;
  region: string;
  blurb: string;
  /** URL of a live report published by the Google Sheets pipeline (GitHub Pages, etc). Omit until one exists. */
  reportUrl?: string;
  /** URL of the report's past-months archive, if it publishes one. */
  historyUrl?: string;
  /** URL of the report's CMA adjustment rates page, if it publishes one. */
  cmaRatesUrl?: string;
};

export const marketAreas: MarketArea[] = [
  {
    slug: "traverse-mountain",
    name: "Traverse Mountain",
    region: "Lehi, UT",
    blurb: "Lance's home turf \u2014 the tightest, most detailed data on the mountain.",
    reportUrl: "https://lancea141-source.github.io/tm-market-update/",
    historyUrl: "https://lancea141-source.github.io/tm-market-update/history/",
    cmaRatesUrl: "https://lancea141-source.github.io/tm-market-update/cma-rates/",
  },
  {
    slug: "lehi",
    name: "Lehi",
    region: "Utah County, UT",
    blurb: "Silicon Slopes growth, new construction, and established neighborhoods.",
    reportUrl: "https://lancea141-source.github.io/tm-market-update/lehi/",
  },
  {
    slug: "eagle-mountain",
    name: "Eagle Mountain",
    region: "Utah County, UT",
    blurb: "Fast-growing, price-competitive alternative just west of Lehi.",
  },
  {
    slug: "saratoga-springs",
    name: "Saratoga Springs",
    region: "Utah County, UT",
    blurb: "Lakeside living and new-build inventory on Utah Lake's west shore.",
  },
  {
    slug: "tooele",
    name: "Tooele",
    region: "Tooele County, UT",
    blurb: "Value and space within commuting range of the Salt Lake Valley.",
  },
  {
    slug: "stansbury-park",
    name: "Stansbury Park",
    region: "Tooele County, UT",
    blurb: "Golf-course community with a tight-knit, established resale market.",
  },
];
