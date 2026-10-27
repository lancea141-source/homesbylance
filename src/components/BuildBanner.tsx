"use client";

import { useEffect, useState } from "react";

// Bump on every release.
const BUILD_VERSION = "v0.5 · 2026-10-27";

export default function BuildBanner() {
  const [loadedAt, setLoadedAt] = useState<string | null>(null);

  useEffect(() => {
    // Client-only timestamp: intentionally set after mount to avoid a
    // server/client hydration mismatch (server has no "current time" to render).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoadedAt(new Date().toLocaleString());
  }, []);

  if (process.env.NEXT_PUBLIC_BUILD_MODE !== "true") return null;

  return (
    <div className="w-full bg-navy text-white text-center text-[11px] font-semibold uppercase tracking-wide py-1.5">
      BUILD MODE &middot; {BUILD_VERSION}
      {loadedAt ? <> &middot; loaded {loadedAt}</> : null}
    </div>
  );
}
