import { series } from "@/lib/series";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return series.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = series.find((s) => s.slug === slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.blurb,
  };
}

export default async function SeriesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = series.find((s) => s.slug === slug);
  if (!item) notFound();

  return (
    <section className="max-w-3xl mx-auto px-5 sm:px-8 py-16">
      <Link href="/#series" className="text-sm text-terracotta font-semibold">&larr; All Series</Link>
      <span className="text-5xl block mt-6">{item.emoji}</span>
      <h1 className="font-display text-4xl mt-4 text-navy">{item.title}</h1>
      <p className="mt-4 text-lg text-navy/75 leading-relaxed">{item.blurb}</p>
      <p className="mt-6 text-xs uppercase tracking-wide text-camel font-semibold">
        {item.channels.join(" \u00B7 ")}
      </p>

      <div className="mt-14 rounded-2xl border border-dashed border-navy/20 p-10 text-center">
        <p className="font-display text-2xl text-navy mb-2">Episode 1 &middot; Coming Soon</p>
        <p className="text-navy/60 text-sm">
          New {item.title} content drops here first. Follow along on the channels above.
        </p>
      </div>

      {slug === "market" || slug === "neighborhoods" ? (
        <div className="mt-10 rounded-2xl bg-camel/25 border border-camel/40 p-8 text-center">
          <p className="text-navy/80 mb-4">Want the real numbers for your street right now?</p>
          <Link
            href="/realestate/sellers-guide"
            className="inline-block rounded-full bg-terracotta text-cream px-6 py-3 text-sm font-semibold hover:bg-navy transition-colors"
          >
            Get My Free Home Valuation
          </Link>
        </div>
      ) : null}
    </section>
  );
}
