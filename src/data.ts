export interface FeaturedDestination {
  country: string;
  city: string;
  image: string;
  price: string;
  description: string;
}

export interface Offer {
  badge: string;
  title: string;
  description: string;
  icon: string;
}

export interface FlightRoute {
  from: string;
  to: string;
  price: number;
  oldPrice: number;
  discount?: string;
}

export interface AirlineTicket {
  hub: string;
  destinations: { city: string; price: number }[];
}

export interface WorldDestination {
  country: string;
  price: number;
  airlines: number;
  image: string;
  flag: string;
}

export const featuredDestinations: FeaturedDestination[] = [
  {
    country: 'Canada',
    city: 'Vancouver',
    image: 'https://images.pexels.com/photos/11424605/pexels-photo-11424605.jpeg?auto=compress&cs=tinysrgb&w=1200',
    price: 'From $200',
    description: 'Mountains meet the sea in Canada\'s gateway to the Pacific. Explore Stanley Park, Granville Island, and the North Shore.',
  },
  {
    country: 'France',
    city: 'Paris',
    image: 'https://images.pexels.com/photos/16116225/pexels-photo-16116225.jpeg?auto=compress&cs=tinysrgb&w=1200',
    price: 'From $200',
    description: 'The City of Light awaits — from the Eiffel Tower at golden hour to the Louvre and charming cobblestone streets.',
  },
  {
    country: 'United Kingdom',
    city: 'London',
    image: 'https://images.pexels.com/photos/16009996/pexels-photo-16009996.jpeg?auto=compress&cs=tinysrgb&w=1200',
    price: 'From $200',
    description: 'Tower Bridge, the Shard, and centuries of history along the Thames. A world-class city that never disappoints.',
  },
];

export const offers: Offer[] = [
  {
    badge: 'Student Offer',
    title: 'Get 20kg extra baggage free on every student booking!',
    description: 'Students fly with more — we include an extra 20kg checked baggage at no additional cost on every student reservation.',
    icon: 'GraduationCap',
  },
  {
    badge: '10% Bonus',
    title: 'Save 10% on your next flight — limited time offer for all passengers.',
    description: 'Book your next journey and enjoy an exclusive 10% discount. Available for a limited time across all routes and classes.',
    icon: 'Percent',
  },
  {
    badge: 'New Offer',
    title: 'Exclusive deals on business & economy class. Book now and save big!',
    description: 'Whether you fly business or economy, unlock exclusive fares on top routes worldwide. Premium travel at unbeatable prices.',
    icon: 'Plane',
  },
];

export const flightRoutes: FlightRoute[] = [
  { from: 'Vancouver', to: 'Ottawa', price: 420, oldPrice: 500, discount: '-30%' },
  { from: 'Montreal', to: 'Toronto', price: 420, oldPrice: 500, discount: 'Sunday' },
  { from: 'London', to: 'Moscow', price: 420, oldPrice: 500, discount: '-30%' },
  { from: 'Milan', to: 'Stockholm', price: 420, oldPrice: 500, discount: 'Limited' },
];

export const airlineTickets: AirlineTicket[] = [
  {
    hub: 'Toronto',
    destinations: [
      { city: 'Vancouver', price: 200 },
      { city: 'Montreal', price: 453 },
      { city: 'Ottawa', price: 342 },
    ],
  },
  {
    hub: 'Montreal',
    destinations: [
      { city: 'Quebec City', price: 200 },
      { city: 'Halifax', price: 453 },
      { city: 'Victoria', price: 342 },
    ],
  },
  {
    hub: 'London',
    destinations: [
      { city: 'Paris', price: 200 },
      { city: 'Rome', price: 453 },
      { city: 'Berlin', price: 342 },
    ],
  },
];

export const worldDestinations: WorldDestination[] = [
  { country: 'Australia', price: 451, airlines: 35, image: 'https://images.pexels.com/photos/33378301/pexels-photo-33378301.jpeg?auto=compress&cs=tinysrgb&w=800', flag: 'AU' },
  { country: 'Greece', price: 610, airlines: 18, image: 'https://images.pexels.com/photos/38487586/pexels-photo-38487586.jpeg?auto=compress&cs=tinysrgb&w=800', flag: 'GR' },
  { country: 'Japan', price: 320, airlines: 31, image: 'https://images.pexels.com/photos/31048513/pexels-photo-31048513.jpeg?auto=compress&cs=tinysrgb&w=800', flag: 'JP' },
  { country: 'UAE', price: 621, airlines: 21, image: 'https://images.pexels.com/photos/3581162/pexels-photo-3581162.jpeg?auto=compress&cs=tinysrgb&w=800', flag: 'AE' },
  { country: 'Italy', price: 480, airlines: 6, image: 'https://images.pexels.com/photos/5069333/pexels-photo-5069333.jpeg?auto=compress&cs=tinysrgb&w=800', flag: 'IT' },
  { country: 'Turkey', price: 320, airlines: 31, image: 'https://images.pexels.com/photos/18478620/pexels-photo-18478620.jpeg?auto=compress&cs=tinysrgb&w=800', flag: 'TR' },
  { country: 'Maldives', price: 451, airlines: 35, image: 'https://images.pexels.com/photos/3293192/pexels-photo-3293192.jpeg?auto=compress&cs=tinysrgb&w=800', flag: 'MV' },
  { country: 'USA', price: 610, airlines: 18, image: 'https://images.pexels.com/photos/17879779/pexels-photo-17879779.jpeg?auto=compress&cs=tinysrgb&w=800', flag: 'US' },
  { country: 'Switzerland', price: 621, airlines: 21, image: 'https://images.pexels.com/photos/37984998/pexels-photo-37984998.jpeg?auto=compress&cs=tinysrgb&w=800', flag: 'CH' },
  { country: 'France', price: 480, airlines: 6, image: 'https://images.pexels.com/photos/34503355/pexels-photo-34503355.jpeg?auto=compress&cs=tinysrgb&w=800', flag: 'FR' },
];

export const topPlaces = [
  { name: 'Japan', image: 'https://images.pexels.com/photos/31048513/pexels-photo-31048513.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Maldives', image: 'https://images.pexels.com/photos/3293192/pexels-photo-3293192.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'New York', image: 'https://images.pexels.com/photos/17879779/pexels-photo-17879779.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Dubai', image: 'https://images.pexels.com/photos/3581162/pexels-photo-3581162.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Swiss Alps', image: 'https://images.pexels.com/photos/37984998/pexels-photo-37984998.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Santorini', image: 'https://images.pexels.com/photos/38487586/pexels-photo-38487586.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

export const heroBackgroundImage = 'https://images.pexels.com/photos/11278700/pexels-photo-11278700.jpeg?auto=compress&cs=tinysrgb&w=1920';

export const heroVideoUrl = 'https://videos.pexels.com/video-files/28829996/12488679_1080_1920_24fps.mp4';

export const natureTourImage = 'https://images.pexels.com/photos/37984998/pexels-photo-37984998.jpeg?auto=compress&cs=tinysrgb&w=1600';

export const cabinImage = 'https://images.pexels.com/photos/4061487/pexels-photo-4061487.jpeg?auto=compress&cs=tinysrgb&w=1200';
