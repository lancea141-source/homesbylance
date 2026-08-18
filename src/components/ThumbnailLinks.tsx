import Image from "next/image";
import Link from "next/link";

const THUMBNAILS = [
  {
    key: "buyers",
    label: "Buyers Academy",
    image: "/images/thumbnails/buyers-academy.jpg",
    href: "/series/academy",
    external: false,
  },
  {
    key: "sellers",
    label: "Sellers Academy",
    image: "/images/thumbnails/sellers-academy.jpg",
    href: "/series/academy",
    external: false,
  },
  {
    key: "investors",
    label: "Investors Academy",
    image: "/images/thumbnails/investors-academy.jpg",
    href: "/series/cap-rate",
    external: false,
  },
  {
    key: "market",
    label: "Market Reports",
    image: "/images/thumbnails/market-reports.jpg",
    href: "https://www.youtube.com/playlist?list=PLK8tY-dftL7g",
    external: true,
  },
  {
    key: "local",
    label: "Living Local",
    image: "/images/thumbnails/living-local.jpg",
    href: "https://www.youtube.com/playlist?list=PLG1es-OvltHXeI8Orzz47LgHJ_1YvGW0p",
    external: true,
  },
];

export default function ThumbnailLinks() {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
      <p className="uppercase tracking-[0.2em] text-xs font-semibold text-olive mb-2 text-center sm:text-left">
        Watch &amp; Learn
      </p>
      <h2 className="font-display text-3xl sm:text-4xl text-navy mb-10 text-center sm:text-left">
        Local with Lance on YouTube
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {THUMBNAILS.map((t) => (
          <Link
            key={t.key}
            href={t.href}
            target={t.external ? "_blank" : undefined}
            rel={t.external ? "noopener noreferrer" : undefined}
            className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 aspect-video"
          >
            <Image
              src={t.image}
              alt={t.label}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
