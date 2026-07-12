export type Episode = {
  title: string;
  description: string;
  youtubeId?: string; // set once the video is live; leave undefined for "Coming Soon"
  track?: "buyer" | "seller"; // only used by the academy series
};

export type SeriesItem = {
  slug: string;
  emoji: string;
  title: string;
  blurb: string;
  channels: string[];
  category: "lifestyle" | "real-estate" | "investing";
  episodes: Episode[];
};

export const series: SeriesItem[] = [
  {
    slug: "jerky",
    emoji: "\u{1F969}",
    title: "Jerky with Lance",
    blurb: "Utah's craft jerky scene, rated and reviewed. Local brands, honest takes, real smoke.",
    channels: ["YouTube", "Instagram", "Facebook", "Google Maps"],
    category: "lifestyle",
    episodes: [
      { title: "Utah's Best Craft Jerky \u2014 Ranked", description: "Episode 1" },
    ],
  },
  {
    slug: "peaches",
    emoji: "\u{1F351}",
    title: "Peaches with Lance",
    blurb: "Utah orchard reviews, harvest season guides, and the best peaches the state has to offer.",
    channels: ["YouTube", "Instagram", "Facebook", "Google Maps"],
    category: "lifestyle",
    episodes: [
      { title: "Best Orchards for Peach Season", description: "Episode 1" },
    ],
  },
  {
    slug: "boating",
    emoji: "\u{1F6A4}",
    title: "Boating with Lance",
    blurb: "Utah Lake defender. Lake Powell adventurer. Warm water, close to home \u2014 and I'll prove it's worth it.",
    channels: ["YouTube", "Instagram", "Facebook"],
    category: "lifestyle",
    episodes: [
      { title: "Why I Love Utah Lake (And You Should Too)", description: "Episode 1" },
    ],
  },
  {
    slug: "lunch",
    emoji: "\u{1F37D}\uFE0F",
    title: "Lunch with Lance",
    blurb: "Local restaurants, honest reviews, and the best spots between showings in Lehi and beyond.",
    channels: ["Instagram", "Facebook", "Google Maps"],
    category: "lifestyle",
    episodes: [
      { title: "Best Lunch Spots Between Showings", description: "Episode 1" },
    ],
  },
  {
    slug: "neighborhoods",
    emoji: "\u{1F3D8}\uFE0F",
    title: "Neighborhoods with Lance",
    blurb: "Street-level walkthroughs of Traverse Mountain, Lehi, and surrounding areas. Know before you buy.",
    channels: ["YouTube", "Instagram", "Facebook"],
    category: "real-estate",
    episodes: [
      { title: "Traverse Mountain \u2014 Street by Street", description: "Episode 1" },
    ],
  },
  {
    slug: "builders",
    emoji: "\u{1F528}",
    title: "Builders with Lance",
    blurb: "New construction deep dives. Who's building what, where, and whether it's worth it \u2014 before it hits the MLS.",
    channels: ["YouTube", "Instagram", "Facebook"],
    category: "real-estate",
    episodes: [
      { title: "Who's Building Where Right Now", description: "Episode 1" },
    ],
  },
  {
    slug: "market",
    emoji: "\u{1F4CA}",
    title: "Market with Lance",
    blurb: "Hyperlocal pricing data for Traverse Mountain and Lehi. Your street. Your neighborhood. Real numbers.",
    channels: ["YouTube", "Instagram", "Facebook", "Web Tool"],
    category: "real-estate",
    episodes: [
      { title: "Traverse Mountain Prices \u2014 This Month", description: "Episode 1" },
    ],
  },
  {
    slug: "academy",
    emoji: "\u{1F393}",
    title: "Buyer's & Seller's Academy",
    blurb: "Everything you need to know before you buy or sell in Utah \u2014 explained straight, no jargon.",
    channels: ["YouTube", "Instagram"],
    category: "real-estate",
    episodes: [
      { title: "Why Use a Buyer's Agent in Utah's Market", description: "Buyer's Academy \u00B7 Episode 1", track: "buyer" },
      { title: "What's My Home Actually Worth? The Hyperlocal Model", description: "Seller's Academy \u00B7 Episode 1", track: "seller" },
    ],
  },
  {
    slug: "cap-rate",
    emoji: "\u{1F4C8}",
    title: "Cap Rate with Lance",
    blurb: "Investor-focused breakdowns \u2014 cap rates, cash flow, and what actually pencils in this market.",
    channels: ["YouTube", "Instagram"],
    category: "investing",
    episodes: [
      { title: "How to Actually Calculate Cap Rate in Utah", description: "Episode 1" },
    ],
  },
];

export const categoryLabels: Record<SeriesItem["category"], string> = {
  lifestyle: "The Series",
  "real-estate": "Real Estate with Lance",
  investing: "For Investors",
};
