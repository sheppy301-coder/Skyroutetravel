import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PartnerMarquee from '@/components/PartnerMarquee';
import FeaturedDestinations from '@/components/FeaturedDestinations';
import Offers from '@/components/Offers';
import FlightRoutes from '@/components/FlightRoutes';
import AirlineTickets from '@/components/AirlineTickets';
import WorldDestinations from '@/components/WorldDestinations';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <PartnerMarquee />
        <FeaturedDestinations />
        <Offers />
        <FlightRoutes />
        <AirlineTickets />
        <WorldDestinations />
        <About />
        <Contact />
      </main>
    </div>
  );
}
