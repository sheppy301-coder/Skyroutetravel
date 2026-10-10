import { useEffect, useState, useRef } from 'react';
import { Plane, Search, Calendar, Users, MapPin, Star, ArrowRight } from 'lucide-react';
import { heroBackgroundImage, heroVideoUrl } from '@/data';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [searchTab, setSearchTab] = useState<'flights' | 'tours' | 'hotels'>('flights');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a1525]">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={heroBackgroundImage}
          className="w-full h-full object-cover"
          onCanPlay={() => setVideoReady(true)}
          style={{ opacity: videoReady ? 1 : 0, transition: 'opacity 1.5s ease' }}
        >
          <source src={heroVideoUrl} type="video/mp4" />
        </video>
        {/* Fallback image while video loads */}
        {!videoReady && (
          <img
            src={heroBackgroundImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ transform: loaded ? 'scale(1.05)' : 'scale(1.15)', transition: 'transform 8s ease-out' }}
          />
        )}
        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1525]/70 via-[#0a1525]/40 to-[#0a1525]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1525]/60 via-transparent to-[#0a1525]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 lg:px-8 pt-28 pb-16">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-8 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute h-2 w-2 rounded-full bg-emerald-400 opacity-75" />
              <span className="relative rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-white/90 text-xs font-medium tracking-[0.15em] uppercase">TICO Registered · IATA Accredited · Since 1996</span>
          </div>

          {/* Heading */}
          <h1
            className={`text-display text-white text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[1.02] tracking-tight max-w-5xl transition-all duration-1000 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.15s' }}
          >
            Your Journey
            <br />
            <span className="italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-400 to-sky-200">Begins in the Sky</span>
          </h1>

          {/* Subtext */}
          <p
            className={`text-white/70 text-base lg:text-lg max-w-xl mt-7 leading-relaxed font-light transition-all duration-1000 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            Canada's foremost independently owned travel consolidator.
            Exclusive net fares, curated tours, and seamless worldwide bookings.
          </p>

          {/* Search bar */}
          <div
            className={`w-full max-w-3xl mt-10 transition-all duration-1000 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.45s' }}
          >
            <div className="flex gap-1 mb-0 justify-center">
              {([
                { id: 'flights', label: 'Flights', icon: Plane },
                { id: 'tours', label: 'Tours', icon: MapPin },
                { id: 'hotels', label: 'Hotels', icon: Star },
              ] as const).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSearchTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-t-xl text-sm font-medium transition-all duration-300 ${
                    searchTab === tab.id
                      ? 'bg-white/10 backdrop-blur-md text-white border-t border-x border-white/15'
                      : 'text-white/50 hover:text-white/80'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl rounded-tl-none p-4 shadow-2xl border border-white/15">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                <div className="flex flex-col gap-1 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 text-left">
                  <label className="text-sky-300/80 text-[10px] font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" /> From
                  </label>
                  <input type="text" placeholder="Toronto (YYZ)" className="bg-transparent text-white text-sm font-medium placeholder-white/30 outline-none pb-0.5" />
                </div>
                <div className="flex flex-col gap-1 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 text-left">
                  <label className="text-sky-300/80 text-[10px] font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <Plane className="w-3 h-3" /> To
                  </label>
                  <input type="text" placeholder="Vancouver (YVR)" className="bg-transparent text-white text-sm font-medium placeholder-white/30 outline-none pb-0.5" />
                </div>
                <div className="flex flex-col gap-1 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 text-left">
                  <label className="text-sky-300/80 text-[10px] font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" /> Departure
                  </label>
                  <input type="date" className="bg-transparent text-white text-sm font-medium outline-none pb-0.5 [color-scheme:dark]" />
                </div>
                <div className="flex flex-col gap-1 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 text-left">
                  <label className="text-sky-300/80 text-[10px] font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <Users className="w-3 h-3" /> Passengers
                  </label>
                  <select className="bg-transparent text-white text-sm font-medium outline-none pb-0.5 [color-scheme:dark]">
                    <option className="bg-[#0d213f]">1 Adult</option>
                    <option className="bg-[#0d213f]">2 Adults</option>
                    <option className="bg-[#0d213f]">Family (4+)</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3 px-1">
                <div className="flex items-center gap-2 text-white/40 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live fares updated every 60 seconds
                </div>
                <button className="btn-shine flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 text-sm font-bold hover:scale-105 transition-all duration-300">
                  <Search className="w-4 h-4" />
                  Search {searchTab === 'flights' ? 'Flights' : searchTab === 'tours' ? 'Tours' : 'Hotels'}
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div
            className={`flex flex-wrap items-center justify-center gap-x-10 gap-y-4 mt-14 transition-all duration-1000 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            {[
              { value: '30+', label: 'Years' },
              { value: '100+', label: 'Experts' },
              { value: '500K+', label: 'Travelers' },
              { value: '24/7', label: 'Support' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-display text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-white/40 text-xs mt-0.5 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/30 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
