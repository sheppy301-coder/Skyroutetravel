import { GraduationCap, Percent, Plane, ArrowRight, Tag } from 'lucide-react';
import { offers, cabinImage } from '@/data';
import { useReveal } from '@/hooks/useReveal';

const iconMap: Record<string, typeof GraduationCap> = {
  GraduationCap,
  Percent,
  Plane,
};

export default function Offers() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="offers" className="relative py-20 lg:py-32 bg-stone-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        {/* Split: image + offers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Left: cabin image with promo */}
          <div className={`lg:col-span-5 reveal ${visible ? 'reveal-visible' : ''}`}>
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden group shadow-lg shadow-slate-300/40">
              <img src={cabinImage} alt="Airplane cabin" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 mb-4">
                  <Tag className="w-3 h-3 text-emerald-300" />
                  <span className="text-emerald-200 text-[10px] font-bold uppercase tracking-wider">First Booking</span>
                </div>
                <h3 className="text-display text-3xl font-bold text-white mb-2">
                  Get <span className="text-amber-400">25% OFF</span>
                </h3>
                <p className="text-white/60 text-sm mb-5 max-w-xs">Your first reservation — automatically applied at checkout.</p>
                <button className="btn-shine inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-bold hover:scale-105 transition-all duration-300">
                  Claim Discount
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: offer cards */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {offers.map((offer, i) => {
              const Icon = iconMap[offer.icon] ?? Plane;
              return (
                <div
                  key={i}
                  className={`reveal ${visible ? 'reveal-visible' : ''}`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="group bg-white rounded-2xl p-6 lg:p-7 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 cursor-pointer">
                    <div className="flex items-start gap-5">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-500">
                        <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-500" strokeWidth={1.8} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-amber-600 bg-amber-50 px-2 py-0.5 rounded">{offer.badge}</span>
                        </div>
                        <h3 className="text-slate-900 font-bold text-base lg:text-lg leading-snug mb-2">{offer.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{offer.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300 shrink-0 mt-1" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
