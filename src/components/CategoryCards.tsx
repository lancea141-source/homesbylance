"use client";

import Link from "next/link";
import Image from "next/image";
import { CATEGORIES } from "@/lib/categories";

export default function CategoryCards() {
  return (
    <section className="w-full bg-[#F4EDE4]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-10 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.key}
              href={cat.href}
              target={cat.href.startsWith("http") ? "_blank" : undefined}
              rel={cat.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex flex-col rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <div
                className="flex flex-col items-center text-center px-4 py-6 flex-1 transition-[filter] duration-200 group-hover:brightness-90"
                style={{ background: cat.accent }}
              >
                <span aria-hidden="true">{cat.icon}</span>
                <h3 className="mt-3 font-display font-bold text-lg text-white uppercase tracking-wide">
                  {cat.label}
                </h3>
                <p className="mt-1 text-sm text-white/85">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
