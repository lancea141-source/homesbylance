import Link from "next/link";
import Image from "next/image";
import { CATEGORIES } from "@/lib/categories";

// v0.4 — white cards, pillar color as a thin top rule + label accent only.
export default function CategoryCards() {
  return (
    <section className="w-full bg-white border-t border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy mb-8 text-center sm:text-left">
          Where do you want to start?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.key}
              href={cat.href}
              target={cat.href.startsWith("http") ? "_blank" : undefined}
              rel={cat.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex flex-col rounded-xl overflow-hidden bg-white border border-line hover:border-navy/20 hover:shadow-md transition-all duration-200"
              style={{ borderTop: `3px solid ${cat.accent}` }}
            >
              <div className="relative h-40 sm:h-44 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="px-5 py-5 flex-1">
                <h3
                  className="font-display font-bold text-base uppercase tracking-wide"
                  style={{ color: cat.accent }}
                >
                  {cat.label}
                </h3>
                <p className="mt-1 text-sm text-navy/70">{cat.description}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-navy group-hover:text-terracotta transition-colors">
                  Explore &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
