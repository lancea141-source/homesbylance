export default function HomeHero() {
  return (
    <section className="w-full bg-[#F4EDE4]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20 pb-10 sm:pb-14 text-center">
        <h1 className="font-display font-extrabold tracking-tight text-[#2F3E46] text-[10vw] leading-[1.02] sm:text-6xl md:text-7xl">
          Local with Lance
        </h1>
        <div className="mx-auto mt-4 mb-3 h-[2px] w-10 bg-[#C0652A]" />

        <p className="uppercase tracking-[0.25em] text-xs sm:text-sm font-bold text-[#2F3E46]">
          Know More. <span className="text-[#C0652A]">Decide</span> Better.
        </p>

        <p className="mt-5 text-base sm:text-lg text-[#2F3E46]/70 max-w-xl mx-auto">
          Local knowledge. Real numbers. Better decisions.
        </p>
      </div>
    </section>
  );
}
