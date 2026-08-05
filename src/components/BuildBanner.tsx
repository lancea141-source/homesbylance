"use client";

import { useEffect, useState } from "react";

export default function BuildBanner() {
  const [loadedAt, setLoadedAt] = useState<string | null>(null);

  useEffect(() => {
    setLoadedAt(new Date().toLocaleString());
  }, []);

  if (process.env.NEXT_PUBLIC_BUILD_MODE !== "true") return null;

  return (
    <div className="w-full bg-terracotta text-cream text-center text-xs font-semibold uppercase tracking-wide py-1.5">
      BUILD MODE &middot; {process.env.NEXT_PUBLIC_BUILD_VERSION}
      {loadedAt ? <> &middot; loaded {loadedAt}</> : null}
    </div>
  );
}
