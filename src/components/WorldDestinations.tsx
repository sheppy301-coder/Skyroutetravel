import { ArrowUpRight, Plane } from 'lucide-react';
import { worldDestinations } from '@/data';
import { useReveal } from '@/hooks/useReveal';

export default function WorldDestinations() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative py-20 lg:py-32 bg-slate-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16 reveal ${visible ? 'reveal-visible' : ''}`}>
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-sky-400" />
              <span className="text-sky-400 text-xs font-bold uppercase tracking-[0.2em]">Top Destinations Worldwide</span>
            </div>
            <h2 className="text-display text-3xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
              From Asia to Europe,
              <br />
              <span className="italic text-sky-300">discover the world</span>
            </h2>
          </div>
          <p className="text-white/50 text-base max-w-sm mt-6 lg:mt-0 lg:text-right">
            The world's most sought-after destinations at prices you'll love.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
          {worldDestinations.map((dest, i) => (
            <div
              key={i}
              className={`reveal ${visible ? 'reveal-visible' : ''}`}
              style={{ transitionDelay: `${(i % 5) * 0.08}s` }}
            >
              <div className="group relative rounded-xl overflow-hidden h-72 cursor-pointer bg-slate-800">
                <img
                  src={dest.image}
                  alt={dest.country}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-[1.2s] group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

                <div className="absolute top-3 right-3">
                  <span className="text-white/80 text-[9px] font-bold tracking-wider bg-white/10 backdrop-blur-md border border-white/15 px-1.5 py-0.5 rounded">{dest.flag}</span>
                </div>

                <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-sm mb-1.5">{dest.country}</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white/40 text-[10px]">From</div>
                      <div className="text-display text-lg font-bold text-white">${dest.price}</div>
                    </div>
                    <div className="flex items-center gap-1 text-white/40 text-[10px]">
                      <Plane className="w-2.5 h-2.5" />
                      {dest.airlines}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
