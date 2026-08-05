"use client";

export default function BuildBanner() {
  if (process.env.NEXT_PUBLIC_BUILD_MODE !== "true") return null;

  return (
    <div className="w-full bg-terracotta text-cream text-center text-xs font-semibold uppercase tracking-wide py-1.5">
      BUILD MODE &middot; {process.env.NEXT_PUBLIC_BUILD_VERSION} &middot; loaded{" "}
      {new Date().toLocaleString()}
    </div>
  );
}
