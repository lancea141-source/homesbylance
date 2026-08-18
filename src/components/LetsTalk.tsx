export default function LetsTalk() {
  return (
    <section className="bg-navy text-cream">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-24 sm:py-32 text-center">
        <h2 className="font-display text-3xl sm:text-4xl mb-4">
          Ready to make your next move?
        </h2>
        <p className="text-cream/75 leading-relaxed max-w-xl mx-auto mb-10">
          Whether you&apos;re buying, selling, investing, or just have a
          question, I&apos;d love to help.
        </p>

        <a
          href="tel:+18018605225"
          className="block font-display text-5xl sm:text-7xl text-terracotta hover:text-camel transition-colors mb-6"
        >
          (801) 860-5225
        </a>

        <a
          href="tel:+18018605225"
          className="inline-block rounded-full bg-terracotta text-cream px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-camel hover:text-navy transition-colors"
        >
          Let&apos;s Talk &rarr;
        </a>
      </div>
    </section>
  );
}
