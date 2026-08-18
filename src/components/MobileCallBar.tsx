export default function MobileCallBar() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 grid grid-cols-2 border-t border-navy/10 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.06)]">
      <a
        href="tel:+18018605225"
        className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white bg-terracotta"
      >
        Call Lance
      </a>
      <a
        href="sms:+18018605225"
        className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-cream bg-navy"
      >
        Text Lance
      </a>
    </div>
  );
}
