export type SeriesItem = {
  slug: string;
  emoji: string;
  title: string;
  blurb: string;
  channels: string[];
};

export const series: SeriesItem[] = [
  {
    slug: "jerky",
    emoji: "\u{1F969}",
    title: "Jerky with Lance",
    blurb: "Utah's craft jerky scene, rated and reviewed. Local brands, honest takes, real smoke.",
    channels: ["YouTube", "Instagram", "Facebook", "Google Maps"],
  },
  {
    slug: "peaches",
    emoji: "\u{1F351}",
    title: "Peaches with Lance",
    blurb: "Utah orchard reviews, harvest season guides, and the best peaches the state has to offer.",
    channels: ["YouTube", "Instagram", "Facebook", "Google Maps"],
  },
  {
    slug: "boating",
    emoji: "\u{1F6A4}",
    title: "Boating with Lance",
    blurb: "Utah Lake defender. Lake Powell adventurer. Warm water, close to home \u2014 and I'll prove it's worth it.",
    channels: ["YouTube", "Instagram", "Facebook"],
  },
  {
    slug: "lunch",
    emoji: "\u{1F37D}\uFE0F",
    title: "Lunch with Lance",
    blurb: "Local restaurants, honest reviews, and the best spots between showings in Lehi and beyond.",
    channels: ["Instagram", "Facebook", "Google Maps"],
  },
  {
    slug: "neighborhoods",
    emoji: "\u{1F3D8}\uFE0F",
    title: "Neighborhoods with Lance",
    blurb: "Street-level walkthroughs of Traverse Mountain, Lehi, and surrounding areas. Know before you buy.",
    channels: ["YouTube", "Instagram", "Facebook"],
  },
  {
    slug: "builders",
    emoji: "\u{1F528}",
    title: "Builders with Lance",
    blurb: "New construction deep dives. Who's building what, where, and whether it's worth it \u2014 before it hits the MLS.",
    channels: ["YouTube", "Instagram", "Facebook"],
  },
  {
    slug: "market",
    emoji: "\u{1F4CA}",
    title: "Market with Lance",
    blurb: "Hyperlocal pricing data for Traverse Mountain and Lehi. Your street. Your neighborhood. Real numbers.",
    channels: ["YouTube", "Instagram", "Facebook", "Web Tool"],
  },
];
