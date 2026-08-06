import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";

export default function BottomLinks() {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.key}
            href={cat.href}
            target={cat.href.startsWith("http") ? "_blank" : undefined}
            rel={cat.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group flex items-center justify-between rounded-xl px-5 py-4 text-white font-display font-bold uppercase tracking-wide text-sm hover:brightness-90 transition-[filter]"
            style={{ background: cat.accent }}
          >
            {cat.label}
            <span aria-hidden="true" className="text-white/80 group-hover:translate-x-0.5 transition-transform">
              &rarr;
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
