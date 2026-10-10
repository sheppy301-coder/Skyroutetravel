import { ArrowUpRight } from 'lucide-react';
import { featuredDestinations } from '@/data';
import { useReveal } from '@/hooks/useReveal';

export default function FeaturedDestinations() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="destinations" className="relative py-20 lg:py-32 bg-stone-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16 reveal ${visible ? 'reveal-visible' : ''}`}>
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-blue-600" />
              <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.2em]">Featured Destinations</span>
            </div>
            <h2 className="text-display text-3xl lg:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              Explore the world's most
              <br />
              <span className="italic text-blue-700">beautiful destinations</span>
            </h2>
          </div>
          <p className="text-slate-500 text-base max-w-sm mt-6 lg:mt-0 lg:text-right leading-relaxed">
            Handpicked cities, exclusive fares, and curated travel experiences designed for the discerning traveler.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
          {featuredDestinations.map((dest, i) => (
            <div
              key={dest.city}
              className={`reveal ${visible ? 'reveal-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="group relative h-[560px] rounded-2xl overflow-hidden cursor-pointer bg-slate-900 shadow-lg shadow-slate-300/50">
                {/* Image */}
                <img
                  src={dest.image}
                  alt={dest.city}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                {/* Top label */}
                <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
                  <span className="text-white/90 text-xs font-medium uppercase tracking-[0.2em]">{dest.country}</span>
                  <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-100 scale-75">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3 className="text-display text-3xl lg:text-4xl font-bold text-white mb-3">{dest.city}</h3>
                  <p className="text-white/70 text-sm leading-relaxed max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-700 ease-out">
                    {dest.description}
                  </p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/15">
                    <span className="text-sky-300 text-sm font-semibold">{dest.price}</span>
                    <span className="text-white/50 text-xs">Explore tours</span>
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
