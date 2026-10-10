import { Award, Users, Globe2, Headset, Building2, ShieldCheck, Plane } from 'lucide-react';
import { useReveal, useCountUp } from '@/hooks/useReveal';

function StatCard({
  icon: Icon,
  value,
  suffix,
  label,
  delay,
  visible,
}: {
  icon: typeof Award;
  value: number;
  suffix: string;
  label: string;
  delay: number;
  visible: boolean;
}) {
  const count = useCountUp(value, 2000, visible);

  return (
    <div
      className="text-center"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      <div className="inline-flex w-12 h-12 rounded-xl bg-blue-50 items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-blue-600" strokeWidth={1.8} />
      </div>
      <div className="text-display text-3xl lg:text-4xl font-bold text-slate-900">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-slate-400 text-xs mt-2 uppercase tracking-widest font-medium">{label}</div>
    </div>
  );
}

export default function About() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="about" className="relative py-20 lg:py-32 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 reveal ${visible ? 'reveal-visible' : ''}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-px bg-blue-600" />
            <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.2em]">About Skyroute</span>
            <div className="w-8 h-px bg-blue-600" />
          </div>
          <h2 className="text-display text-3xl lg:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
            Three decades of
            <span className="italic text-blue-700"> trusted travel</span>
          </h2>
          <p className="text-slate-500 text-base mt-5 leading-relaxed">
            Founded in 1996, Skyroute Travel Services Inc. is one of Canada's foremost independently owned and operated travel consolidators.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7 mb-12">
          <div className={`reveal ${visible ? 'reveal-visible' : ''}`}>
            <div className="bg-stone-50 rounded-2xl p-8 lg:p-10 border border-stone-100 h-full">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
                <Globe2 className="w-6 h-6 text-white" strokeWidth={1.8} />
              </div>
              <h3 className="text-display text-2xl font-bold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Deliver trusted, technology-driven travel solutions. Empower agents and travelers through competitive pricing. Provide personalized service with continuous 24/7 support.
              </p>
              <div className="space-y-2.5">
                {['Technology-driven solutions', 'Competitive net fares', '24/7 personalized support'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="text-slate-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`reveal reveal-delay-2 ${visible ? 'reveal-visible' : ''}`}>
            <div className="bg-slate-900 rounded-2xl p-8 lg:p-10 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/15 rounded-full blur-3xl" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-white" strokeWidth={1.8} />
                </div>
                <h3 className="text-display text-2xl font-bold text-white mb-3">Our Vision</h3>
                <p className="text-white/60 leading-relaxed mb-6">
                  To be Canada's most innovative and reliable travel partner — seamlessly connecting global travellers and agencies through advanced technology and unmatched expertise.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="text-sky-300/80 text-[10px] font-semibold uppercase tracking-wider mb-1">Founded</div>
                    <div className="text-white text-2xl font-bold">1996</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="text-sky-300/80 text-[10px] font-semibold uppercase tracking-wider mb-1">Offices</div>
                    <div className="text-white text-2xl font-bold">3 Cities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={`reveal reveal-delay-3 ${visible ? 'reveal-visible' : ''}`}>
          <div className="bg-stone-50 rounded-2xl p-10 lg:p-14 border border-stone-100">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <StatCard icon={Award} value={30} suffix="+" label="Years" delay={0} visible={visible} />
              <StatCard icon={Users} value={100} suffix="+" label="Experts" delay={0.1} visible={visible} />
              <StatCard icon={Globe2} value={500} suffix="K+" label="Travelers" delay={0.2} visible={visible} />
              <StatCard icon={Headset} value={24} suffix="/7" label="Support" delay={0.3} visible={visible} />
            </div>

            <div className="mt-10 pt-8 border-t border-stone-200 flex flex-wrap items-center justify-center gap-6 lg:gap-10">
              {[
                { icon: ShieldCheck, label: 'TICO Registration No.: 4488805' },
                { icon: Award, label: 'IATA Accredited' },
                { icon: Building2, label: 'Toronto · North York · Vancouver' },
              ].map((cred, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                  <cred.icon className="w-4 h-4 text-blue-600" />
                  {cred.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
