const partners = [
  'Emirates', 'Air Canada', 'Lufthansa', 'British Airways', 'Qatar Airways',
  'Air France', 'KLM', 'Turkish Airlines', 'Singapore Airlines', 'Delta',
  'United', 'Cathay Pacific',
];

export default function PartnerMarquee() {
  return (
    <section className="relative py-10 bg-white border-y border-stone-100 overflow-hidden">
      <div className="text-center mb-5">
        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.25em]">
          Trusted by Leading Airlines Worldwide
        </p>
      </div>
      <div className="marquee-wrapper relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="inline-flex animate-marquee">
          {[...partners, ...partners].map((partner, i) => (
            <div key={i} className="flex items-center gap-2 px-8 shrink-0">
              <div className="w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center">
                <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-blue-400 to-blue-600" />
              </div>
              <span className="text-slate-400 font-bold text-base whitespace-nowrap">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
