export type Workshop = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  price: number;
  image: string;
  spotsLeft: number;
  description: string;
};

export type PreviousHistoryEvent = {
  id: number;
  title: string;
  date: string;
  image: string;
};

export const WORKSHOPS: Workshop[] = [
  {
    id: 1,
    title: "Texture Art on Canvas",
    date: "Sat, Oct 14",
    time: "3:00 PM - 6:00 PM",
    location: "Roastery Coffee House, Banjara Hills",
    price: 1500,
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1945&auto=format&fit=crop",
    spotsLeft: 4,
    description: "A beginner-friendly guided session focused on texture layering and palette techniques.",
  },
  {
    id: 2,
    title: "Knife Painting Party",
    date: "Sun, Oct 15",
    time: "11:00 AM - 2:00 PM",
    location: "The Garden Café, Jubilee Hills",
    price: 1800,
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1780&auto=format&fit=crop",
    spotsLeft: 8,
    description: "Create expressive landscapes and abstract compositions using bold palette knife strokes.",
  },
  {
    id: 3,
    title: "Tote Bag Painting",
    date: "Sat, Oct 21",
    time: "4:00 PM - 7:00 PM",
    location: "Aromas of China, City Center",
    price: 1200,
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=2070&auto=format&fit=crop",
    spotsLeft: 0,
    description: "Design and paint your own functional art tote bag and take it home the same day.",
  },
  {
    id: 4,
    title: "Mandala Dot Art",
    date: "Sun, Oct 29",
    time: "10:30 AM - 1:30 PM",
    location: "Conçu Café, Jubilee Hills",
    price: 999,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1887&auto=format&fit=crop",
    spotsLeft: 6,
    description: "Learn calming dot techniques and symmetry to create your own vibrant mandala artwork.",
  },
  {
    id: 5,
    title: "Coffee Painting Session",
    date: "Sat, Nov 04",
    time: "5:00 PM - 8:00 PM",
    location: "Third Wave Coffee, Hitech City",
    price: 899,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1770&auto=format&fit=crop",
    spotsLeft: 9,
    description: "Paint beautiful monochrome art using coffee tones with step-by-step artist guidance.",
  },
];

export const PREVIOUS_HISTORY: PreviousHistoryEvent[] = [
  {
    id: 1,
    title: "Acrylic Bloom Session",
    date: "Last week · Saturday",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Cafe Sketch & Sip",
    date: "Last week · Sunday",
    image: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Palette Knife Landscapes",
    date: "Last week · Sunday",
    image: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1974&auto=format&fit=crop",
  },
];

export const UPCOMING_EVENT = {
  title: "Vihara Art Workshop in Cafes",
  date: "Sun, Oct 22",
  time: "4:00 PM - 7:00 PM",
  location: "Autumn Leaf Café, Film Nagar",
  price: 1600,
};
