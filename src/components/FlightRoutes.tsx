import { Plane, ArrowRight } from 'lucide-react';
import { flightRoutes } from '@/data';
import { useReveal } from '@/hooks/useReveal';

export default function FlightRoutes() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="flights" className="relative py-20 lg:py-32 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16 reveal ${visible ? 'reveal-visible' : ''}`}>
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-blue-600" />
              <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.2em]">Top Flight Routes</span>
            </div>
            <h2 className="text-display text-3xl lg:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              Popular routes
              <br />
              <span className="italic text-blue-700">within Canada</span>
            </h2>
          </div>
          <p className="text-slate-500 text-base max-w-sm mt-6 lg:mt-0 lg:text-right">
            Unbeatable fares and flexible timings on Canada's most traveled routes.
          </p>
        </div>

        {/* Route cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {flightRoutes.map((route, i) => (
            <div
              key={i}
              className={`reveal ${visible ? 'reveal-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="group relative bg-stone-50 rounded-2xl p-6 border border-stone-100 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500 overflow-hidden">
                {/* Discount tag */}
                <div className="absolute top-4 right-4">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md"
                    style={{
                      background: route.discount?.includes('%')
                        ? '#fee2e2'
                        : route.discount?.includes('Sunday') || route.discount?.includes('Limited')
                        ? '#fef3c7'
                        : '#dbeafe',
                      color: route.discount?.includes('%')
                        ? '#dc2626'
                        : route.discount?.includes('Sunday') || route.discount?.includes('Limited')
                        ? '#d97706'
                        : '#2563eb',
                    }}
                  >
                    {route.discount}
                  </span>
                </div>

                {/* Route visual */}
                <div className="flex items-center gap-3 mb-6 mt-2">
                  <div className="text-center">
                    <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">From</div>
                    <div className="text-base font-bold text-slate-800">{route.from.slice(0, 3).toUpperCase()}</div>
                  </div>
                  <div className="flex-1 relative flex items-center">
                    <div className="w-full h-px bg-slate-200" />
                    <div className="absolute inset-0 h-px bg-gradient-to-r from-blue-400 to-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                    <Plane className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-blue-500 bg-stone-50 group-hover:bg-white rounded-full p-0.5 transition-colors duration-500" />
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">To</div>
                    <div className="text-base font-bold text-slate-800">{route.to.slice(0, 3).toUpperCase()}</div>
                  </div>
                </div>

                <div className="text-slate-700 font-semibold text-sm mb-4">
                  {route.from} <span className="text-slate-300 mx-1">→</span> {route.to}
                </div>

                <div className="flex items-end justify-between pt-4 border-t border-stone-100">
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-slate-300 line-through text-xs">${route.oldPrice}</span>
                      <span className="text-display text-3xl font-bold text-slate-900">${route.price}</span>
                    </div>
                    <div className="text-slate-400 text-[11px] mt-0.5">per person, one way</div>
                  </div>
                  <button className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
