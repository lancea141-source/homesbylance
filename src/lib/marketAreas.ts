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
  /**
   * v0.5: folder of this area inside the tm-market-update GitHub Pages site
   * ("" = site root). When set, the website renders the report natively from
   * the pipeline's data.json files instead of embedding the GitHub Pages page.
   */
  dataPath?: string;
  /** YouTube playlist for this area's report videos. */
  videoUrl?: string;
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
    dataPath: "",
    videoUrl: "https://www.youtube.com/playlist?list=PLK8tY-dftL7g",
  },
  {
    slug: "lehi",
    name: "Lehi",
    region: "Utah County, UT",
    blurb: "Silicon Slopes growth, new construction, and established neighborhoods.",
    reportUrl: "https://lancea141-source.github.io/tm-market-update/lehi/",
    historyUrl: "https://lancea141-source.github.io/tm-market-update/lehi/history/",
    cmaRatesUrl: "https://lancea141-source.github.io/tm-market-update/lehi/cma-rates/",
    dataPath: "lehi/",
    videoUrl: "https://www.youtube.com/playlist?list=PLK8tY-dftL7g",
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
    reportUrl: "https://lancea141-source.github.io/tm-market-update/saratoga-springs/",
    historyUrl: "https://lancea141-source.github.io/tm-market-update/saratoga-springs/history/",
    cmaRatesUrl: "https://lancea141-source.github.io/tm-market-update/saratoga-springs/cma-rates/",
    dataPath: "saratoga-springs/",
    videoUrl: "https://www.youtube.com/playlist?list=PLK8tY-dftL7g",
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
