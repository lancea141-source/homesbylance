import { series, type Episode } from "@/lib/series";
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

function EpisodeCard({ ep }: { ep: Episode }) {
  if (ep.youtubeId) {
    return (
      <div className="rounded-2xl overflow-hidden border border-navy/10 bg-white/60">
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${ep.youtubeId}`}
            title={ep.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="p-4">
          <p className="text-xs uppercase tracking-wide text-camel font-semibold">{ep.description}</p>
          <h3 className="font-display text-lg text-navy mt-1">{ep.title}</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-dashed border-navy/20 p-6 bg-white/30">
      <p className="text-xs uppercase tracking-wide text-camel font-semibold">{ep.description}</p>
      <h3 className="font-display text-lg text-navy mt-1">{ep.title}</h3>
      <p className="text-sm text-navy/50 mt-3">Coming Soon</p>
    </div>
  );
}

export default async function SeriesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = series.find((s) => s.slug === slug);
  if (!item) notFound();

  const isAcademy = slug === "academy";
  const buyerEps = item.episodes.filter((e) => e.track === "buyer");
  const sellerEps = item.episodes.filter((e) => e.track === "seller");

  return (
    <section className="max-w-4xl mx-auto px-5 sm:px-8 py-16">
      <Link href="/#series" className="text-sm text-terracotta font-semibold">&larr; All Series</Link>
      <span className="text-5xl block mt-6">{item.emoji}</span>
      <h1 className="font-display text-4xl mt-4 text-navy">{item.title}</h1>
      <p className="mt-4 text-lg text-navy/75 leading-relaxed max-w-2xl">{item.blurb}</p>
      <p className="mt-6 text-xs uppercase tracking-wide text-camel font-semibold">
        {item.channels.join(" \u00B7 ")}
      </p>

      {isAcademy ? (
        <>
          <div className="mt-14">
            <h2 className="font-display text-2xl text-navy mb-5">Buyer&apos;s Academy</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {buyerEps.map((ep) => (
                <EpisodeCard key={ep.title} ep={ep} />
              ))}
            </div>
            <Link
              href="/realestate/buyers-guide"
              className="inline-block mt-5 text-sm font-semibold text-terracotta"
            >
              Full Buyer&apos;s Guide &rarr;
            </Link>
          </div>
          <div className="mt-14">
            <h2 className="font-display text-2xl text-navy mb-5">Seller&apos;s Academy</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {sellerEps.map((ep) => (
                <EpisodeCard key={ep.title} ep={ep} />
              ))}
            </div>
            <Link
              href="/realestate/sellers-guide"
              className="inline-block mt-5 text-sm font-semibold text-terracotta"
            >
              Get My Free Home Valuation &rarr;
            </Link>
          </div>
        </>
      ) : (
        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {item.episodes.map((ep) => (
            <EpisodeCard key={ep.title} ep={ep} />
          ))}
        </div>
      )}

      {slug === "market" ? (
        <div className="mt-14 rounded-2xl bg-camel/25 border border-camel/40 p-8 text-center">
          <p className="text-navy/80 mb-4">See the live numbers behind these updates.</p>
          <Link
            href="/realestate/market-report"
            className="inline-block rounded-full bg-terracotta text-cream px-6 py-3 text-sm font-semibold hover:bg-navy transition-colors"
          >
            View Market Report &rarr;
          </Link>
        </div>
      ) : null}

      {slug === "cap-rate" ? (
        <div className="mt-14 rounded-2xl bg-camel/25 border border-camel/40 p-8 text-center">
          <p className="text-navy/80 mb-4">Talk investment strategy directly with Lance.</p>
          <Link
            href="/realestate/contact"
            className="inline-block rounded-full bg-terracotta text-cream px-6 py-3 text-sm font-semibold hover:bg-navy transition-colors"
          >
            Talk to Lance &rarr;
          </Link>
        </div>
      ) : null}

      {slug === "neighborhoods" ? (
        <div className="mt-14 rounded-2xl bg-camel/25 border border-camel/40 p-8 text-center">
          <p className="text-navy/80 mb-4">Want the real numbers for your street right now?</p>
          <Link
            href="/realestate/sellers-guide"
            className="inline-block rounded-full bg-terracotta text-cream px-6 py-3 text-sm font-semibold hover:bg-navy transition-colors"
          >
            Get My Free Home Valuation &rarr;
          </Link>
        </div>
      ) : null}
    </section>
  );
}
