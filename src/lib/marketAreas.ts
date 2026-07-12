export type MarketArea = {
  slug: string;
  name: string;
  region: string;
  blurb: string;
};

export const marketAreas: MarketArea[] = [
  {
    slug: "traverse-mountain",
    name: "Traverse Mountain",
    region: "Lehi, UT",
    blurb: "Lance's home turf \u2014 the tightest, most detailed data on the mountain.",
  },
  {
    slug: "lehi",
    name: "Lehi",
    region: "Utah County, UT",
    blurb: "Silicon Slopes growth, new construction, and established neighborhoods.",
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
