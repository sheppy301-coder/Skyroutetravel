import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { topPlaces } from '@/data';
import { useReveal } from '@/hooks/useReveal';
import Logo from '@/components/Logo';

export default function Contact() {
  const { ref, visible } = useReveal<HTMLElement>();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section ref={ref} id="contact" className="relative pt-20 lg:pt-32 pb-0 bg-slate-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-14 reveal ${visible ? 'reveal-visible' : ''}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-px bg-sky-400" />
            <span className="text-sky-400 text-xs font-bold uppercase tracking-[0.2em]">Get in Touch</span>
            <div className="w-8 h-px bg-sky-400" />
          </div>
          <h2 className="text-display text-3xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
            Start your next
            <span className="italic text-sky-300"> adventure</span>
          </h2>
          <p className="text-white/50 text-base mt-5 leading-relaxed">
            Our travel experts are available 24/7 to help you plan the perfect trip.
          </p>
        </div>

        {/* Contact cards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 reveal reveal-delay-1 ${visible ? 'reveal-visible' : ''}`}>
          {[
            { icon: Phone, title: 'Call Us', detail: '1-800-555-9200', sub: '24/7 Support' },
            { icon: Mail, title: 'Email Us', detail: 'info@skyroutetravel.com', sub: 'Reply within 2 hours' },
            { icon: MapPin, title: 'Visit Us', detail: 'Scarborough, Toronto, ON', sub: 'North York · Vancouver' },
          ].map((card, i) => (
            <div key={i} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-sky-400/30 transition-all duration-500">
              <div className="w-10 h-10 rounded-xl bg-sky-500/15 flex items-center justify-center mb-4 group-hover:bg-sky-500 transition-colors duration-500">
                <card.icon className="w-5 h-5 text-sky-400 group-hover:text-white transition-colors duration-500" strokeWidth={1.8} />
              </div>
              <h3 className="text-white font-bold text-sm mb-1">{card.title}</h3>
              <p className="text-sky-300/80 text-sm font-medium">{card.detail}</p>
              <p className="text-white/30 text-xs mt-0.5">{card.sub}</p>
            </div>
          ))}
        </div>

        {/* Form + sidebar */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-5 mb-16 reveal reveal-delay-2 ${visible ? 'reveal-visible' : ''}`}>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-display text-xl font-bold text-white mb-1">Send us a message</h3>
            <p className="text-white/40 text-sm mb-6">We'll get back to you shortly.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sky-300/60 text-[10px] font-semibold uppercase tracking-wider mb-2 block">Full Name</label>
                <input type="text" required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 outline-none focus:border-sky-400 transition-all duration-300" />
              </div>
              <div>
                <label className="text-sky-300/60 text-[10px] font-semibold uppercase tracking-wider mb-2 block">Email Address</label>
                <input type="email" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 outline-none focus:border-sky-400 transition-all duration-300" />
              </div>
              <div>
                <label className="text-sky-300/60 text-[10px] font-semibold uppercase tracking-wider mb-2 block">Message</label>
                <textarea required rows={4} value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} placeholder="Tell us about your dream trip..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 outline-none focus:border-sky-400 transition-all duration-300 resize-none" />
              </div>
              <button type="submit" disabled={submitted} className="btn-shine w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-900 text-sm font-bold hover:scale-[1.02] transition-all duration-300 disabled:opacity-70">
                {submitted ? 'Message Sent!' : (<><Send className="w-4 h-4" />Send Message</>)}
              </button>
            </form>
          </div>

          <div className="space-y-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-7 border border-white/10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-sky-400" strokeWidth={1.8} />
                </div>
                <h3 className="text-white font-bold text-base">Business Hours</h3>
              </div>
              <div className="space-y-2">
                {[
                  { day: 'Monday – Friday', time: '8:00 AM – 10:00 PM' },
                  { day: 'Saturday', time: '9:00 AM – 8:00 PM' },
                  { day: 'Sunday', time: '10:00 AM – 6:00 PM' },
                  { day: 'Emergency Support', time: '24/7 Available' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <span className="text-white/60 text-sm">{row.day}</span>
                    <span className="text-white text-sm font-semibold">{row.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-7 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-sky-500/10 rounded-full blur-3xl" />
              <div className="relative">
                <h3 className="text-display text-lg font-bold text-white mb-1">Newsletter</h3>
                <p className="text-white/40 text-sm mb-4">Best travel offers, delivered to your inbox.</p>
                <div className="flex gap-2">
                  <input type="email" placeholder="Your email" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 outline-none focus:border-sky-400 transition-all duration-300" />
                  <button className="btn-shine px-5 py-3 rounded-xl bg-sky-500 text-white text-sm font-bold hover:scale-105 transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top places gallery */}
        <div className={`mb-16 reveal reveal-delay-3 ${visible ? 'reveal-visible' : ''}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-sky-400" />
            <span className="text-sky-400 text-xs font-bold uppercase tracking-[0.2em]">Top Places</span>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 lg:gap-4">
            {topPlaces.map((place, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden h-28 lg:h-36 cursor-pointer">
                <img src={place.image} alt={place.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                  <span className="text-white text-xs lg:text-sm font-bold">{place.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-white/10 bg-slate-950">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            <div className="md:col-span-2">
              <div className="mb-4"><Logo size={40} /></div>
              <p className="text-white/40 text-sm leading-relaxed max-w-md mb-4">
                Skyroute Travel is your trusted partner for flights, tours, and unforgettable travel experiences. We make every journey smooth, affordable, and memorable.
              </p>
              <p className="text-white/30 text-xs font-medium">TICO Registration No.: 4488805</p>
              <div className="flex items-center gap-3 mt-5">
                {[
                  { icon: Facebook, label: 'Facebook' },
                  { icon: Twitter, label: 'Twitter' },
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Linkedin, label: 'LinkedIn' },
                ].map((social, i) => (
                  <a key={i} href="#" aria-label={social.label} className="w-9 h-9 rounded-lg bg-white/5 hover:bg-sky-500 flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <social.icon className="w-4 h-4 text-sky-300/70 hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2.5">
                {['Home', 'Destinations', 'Offers', 'Flights', 'About', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-white/40 hover:text-sky-400 text-sm transition-colors duration-300">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-white/40 text-sm"><Phone className="w-4 h-4 text-sky-500 shrink-0" />1-800-555-9200</li>
                <li className="flex items-center gap-2 text-white/40 text-sm"><Mail className="w-4 h-4 text-sky-500 shrink-0" />info@skyroutetravel.com</li>
                <li className="flex items-center gap-2 text-white/40 text-sm"><MapPin className="w-4 h-4 text-sky-500 shrink-0" />Scarborough, Toronto, ON</li>
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-white/25 text-xs">© 2026 Skyroute Travel Services Inc. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/25 hover:text-sky-400 text-xs transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/25 hover:text-sky-400 text-xs transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
