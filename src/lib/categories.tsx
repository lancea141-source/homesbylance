export type Category = {
  key: string;
  label: string;
  description: string;
  href: string;
  accent: string;
  image: string;
  icon: React.ReactNode;
};

const ICON = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#fff",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const CATEGORIES: Category[] = [
  {
    key: "buy",
    label: "Buy",
    description: "Find the right home.",
    href: "/realestate/homes",
    accent: "#C0652A",
    image: "/images/category/buy.png",
    icon: (
      <svg {...ICON}>
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
      </svg>
    ),
  },
  {
    key: "sell",
    label: "Sell",
    description: "Sell with a strategy.",
    href: "/realestate/sellers-guide",
    accent: "#2F3E46",
    image: "/images/category/sell.png",
    icon: (
      <svg {...ICON}>
        <path d="M4 21V9l7-5 7 5v12" />
        <path d="M9 21v-6h4v6" />
        <path d="M14 9h5" />
      </svg>
    ),
  },
  {
    key: "invest",
    label: "Invest",
    description: "Make the numbers work.",
    href: "/series/cap-rate",
    accent: "#6B7A3A",
    image: "/images/category/invest.png",
    icon: (
      <svg {...ICON}>
        <path d="M4 20V10" />
        <path d="M10 20V4" />
        <path d="M16 20v-7" />
        <path d="M22 20V14" />
      </svg>
    ),
  },
  {
    key: "market",
    label: "The Market",
    description: "Know what's happening.",
    href: "/realestate/market-report",
    accent: "#4F7C82",
    image: "/images/category/market.png",
    icon: (
      <svg {...ICON}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v9l6 3" />
      </svg>
    ),
  },
  {
    key: "local",
    label: "Local",
    description: "Know where you live.",
    href: "/realestate/traverse-mountain",
    accent: "#A44A2F",
    image: "/images/category/local.png",
    icon: (
      <svg {...ICON}>
        <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 12 2.5a7 7 0 0 1 7 7C19 14.8 12 21 12 21Z" />
        <circle cx="12" cy="9.5" r="2.25" />
      </svg>
    ),
  },
];
