import type { Testimonial } from "@/lib/testimonials";

export default function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="rounded-2xl border border-navy/10 bg-white/60 overflow-hidden hover:shadow-lg transition-all">
      {t.youtubeId ? (
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${t.youtubeId}`}
            title={`${t.name} testimonial`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="aspect-video bg-navy/5 flex items-center justify-center">
          <span className="text-xs uppercase tracking-wide text-camel font-semibold">
            Video Coming Soon
          </span>
        </div>
      )}
      <div className="p-6">
        <p className="text-xs uppercase tracking-wide text-camel font-semibold mb-2">{t.role}</p>
        <p className="text-navy/80 leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
        <p className="mt-4 text-sm font-semibold text-navy">{t.name}</p>
        <p className="text-xs text-navy/50">{t.location}</p>
      </div>
    </div>
  );
}
