import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/market-updates/traverse-mountain",
        destination: "/realestate/market-report/traverse-mountain",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
