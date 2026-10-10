import { Plane, ArrowRight, TreePine, Tag, Check } from 'lucide-react';
import { airlineTickets, natureTourImage } from '@/data';
import { useReveal } from '@/hooks/useReveal';

export default function AirlineTickets() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative py-20 lg:py-32 bg-stone-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        {/* Nature tour banner */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center mb-20 lg:mb-28 reveal ${visible ? 'reveal-visible' : ''}`}>
          <div className="relative rounded-2xl overflow-hidden h-[420px] lg:h-[520px] shadow-xl shadow-slate-300/40 group">
            <img src={natureTourImage} alt="Swiss Alps nature tour" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full">
              <TreePine className="w-3.5 h-3.5 text-emerald-300" />
              <span className="text-white text-xs font-semibold">Nature Tour</span>
            </div>
            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md rounded-xl px-5 py-3 text-center">
              <div className="text-slate-400 text-[10px] font-medium uppercase tracking-wider">From</div>
              <div className="text-display text-3xl font-bold text-slate-900">$420</div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-px bg-emerald-600" />
              <span className="text-emerald-600 text-xs font-bold uppercase tracking-[0.2em]">Discount 20–30%</span>
            </div>
            <h2 className="text-display text-3xl lg:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-5">
              Special nature
              <br />
              <span className="italic text-emerald-700">tour offer</span>
            </h2>
            <p className="text-slate-500 text-base lg:text-lg leading-relaxed mb-7 max-w-md">
              Escape into nature with our exclusive tour packages. Breathtaking landscapes, guided experiences, and memories that last a lifetime.
            </p>

            <div className="space-y-3.5 mb-8">
              {[
                'Guided experiences by local experts',
                'Breathtaking landscapes and hidden gems',
                'Flexible booking with free rescheduling',
                'All-inclusive packages — no hidden fees',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-emerald-600" strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="btn-shine inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 hover:scale-105 transition-all duration-300">
              Explore Nature Tours
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Cheap airline tickets */}
        <div className={`reveal reveal-delay-2 ${visible ? 'reveal-visible' : ''}`}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-blue-600" />
                <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.2em]">Cheap Airline Tickets</span>
              </div>
              <h2 className="text-display text-3xl lg:text-4xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                Best fares to <span className="italic text-blue-700">top cities</span>
              </h2>
            </div>
            <p className="text-slate-500 text-sm max-w-xs mt-5 lg:mt-0 lg:text-right">
              Compare and book the cheapest airline tickets worldwide. Best fares guaranteed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
            {airlineTickets.map((hub, i) => (
              <div key={i} className={`reveal ${visible ? 'reveal-visible' : ''}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500">
                  <div className="bg-slate-900 px-6 py-5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <Plane className="w-5 h-5 text-white" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="text-white/50 text-[10px] font-medium uppercase tracking-wider">Departing from</div>
                      <div className="text-white text-xl font-bold">{hub.hub}</div>
                    </div>
                  </div>
                  <div className="p-4 space-y-1">
                    {hub.destinations.map((dest, j) => (
                      <div key={j} className="group flex items-center justify-between p-3 rounded-xl hover:bg-stone-50 transition-colors duration-300 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-blue-100 flex items-center justify-center transition-colors duration-300">
                            <Plane className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors duration-300" />
                          </div>
                          <span className="text-slate-700 font-semibold text-sm">{dest.city}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate-400 text-[11px]">From</span>
                          <span className="text-display text-lg font-bold text-slate-900">${dest.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
