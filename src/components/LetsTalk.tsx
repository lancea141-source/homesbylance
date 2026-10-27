import SocialIcons from "@/components/SocialIcons";

// v0.4 — white closer; single social row + Facebook group as one line.
export default function LetsTalk() {
  return (
    <section className="w-full bg-white border-t border-line">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-20 sm:py-28 text-center">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-4">
          Ready to make your next move?
        </h2>
        <p className="text-navy/70 leading-relaxed max-w-xl mx-auto mb-8">
          Whether you&apos;re buying, selling, investing, or just have a
          question, I&apos;d love to help.
        </p>

        <a
          href="tel:+18018605225"
          className="block whitespace-nowrap font-display font-extrabold tracking-tight text-[12vw] sm:text-7xl text-terracotta hover:text-navy transition-colors mb-8"
        >
          (801) 860-5225
        </a>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <a
            href="tel:+18018605225"
            className="rounded-full bg-terracotta text-white px-8 py-3.5 text-sm font-semibold hover:bg-navy transition-colors"
          >
            Call Lance
          </a>
          <a
            href="sms:+18018605225"
            className="rounded-full border border-navy/20 text-navy px-8 py-3.5 text-sm font-semibold hover:border-navy transition-colors"
          >
            Text Lance
          </a>
        </div>

        <SocialIcons className="justify-center" />

        <p className="mt-6 text-sm text-navy/65">
          Clients &amp; neighbors:{" "}
          <a
            href="https://www.facebook.com/groups/817743620755776"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-terracotta hover:text-navy"
          >
            join the Client &amp; Friend Appreciation Group &rarr;
          </a>
        </p>
      </div>
    </section>
  );
}
