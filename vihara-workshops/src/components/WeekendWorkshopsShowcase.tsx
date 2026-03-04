"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type WeekendActivity = {
  title: string;
  price: string;
  image: string;
  vibe: string;
};

const WEEKEND_ACTIVITIES: WeekendActivity[] = [
  { title: "🎨 Resin Art", price: "₹999", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1945&auto=format&fit=crop", vibe: "Glossy keepsakes" },
  { title: "🏺 Hand-Build Pottery", price: "₹899", image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1887&auto=format&fit=crop", vibe: "Clay & calm" },
  { title: "👤 Clay Portrait Sculpture", price: "₹899", image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=2070&auto=format&fit=crop", vibe: "Faces in form" },
  { title: "🔵 Mandala Art", price: "₹799", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1887&auto=format&fit=crop", vibe: "Mindful patterns" },
  { title: "🎨 Acrylic Painting", price: "₹799", image: "https://images.unsplash.com/photo-1501472312651-726afe119ff1?q=80&w=1887&auto=format&fit=crop", vibe: "Bold colors" },
  { title: "🎨 Gouache Painting", price: "₹799", image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1780&auto=format&fit=crop", vibe: "Soft matte textures" },
  { title: "🎨 Pichwai Painting", price: "₹799", image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=1887&auto=format&fit=crop", vibe: "Traditional elegance" },
  { title: "🌊 Water Colour Painting", price: "₹699", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1945&auto=format&fit=crop", vibe: "Fluid storytelling" },
  { title: "☕ Coffee Painting", price: "₹699", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1770&auto=format&fit=crop", vibe: "Monochrome warmth" },
  { title: "✏ Charcoal Sketch", price: "₹699", image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1932&auto=format&fit=crop", vibe: "Light & shadow" },
  { title: "🧿 Key Chain Making", price: "₹699", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1935&auto=format&fit=crop", vibe: "Tiny art gifts" },
  { title: "🧲 Fridge Magnet Making", price: "₹699", image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=1887&auto=format&fit=crop", vibe: "Playful decor" },
];

export default function WeekendWorkshopsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % WEEKEND_ACTIVITIES.length);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  const active = WEEKEND_ACTIVITIES[activeIndex];

  return (
    <div className="rounded-2xl border border-brand-gold/35 bg-brand-black p-4 md:p-6 shadow-[0_16px_40px_rgba(0,0,0,0.3)] reveal-up">
      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-5">
        <article className="relative min-h-[360px] md:min-h-[430px] overflow-hidden rounded-2xl border border-brand-gold/30 weekend-spotlight">
          <Image
            src={active.image}
            alt={active.title}
            fill
            className="object-cover transition-transform duration-700 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <p className="text-brand-gold/90 uppercase tracking-[0.2em] text-xs mb-2">Weekend Spotlight</p>
            <h3 className="font-serif text-3xl md:text-4xl text-white mb-2">{active.title}</h3>
            <p className="text-gray-200 mb-4">{active.vibe}</p>
            <div className="flex items-center gap-3">
              <p className="text-2xl font-bold text-brand-gold">{active.price}</p>
              <button
                type="button"
                aria-label="Next activity"
                className="ml-auto h-11 w-11 rounded-full border border-brand-gold/70 text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300 text-xl gold-shine flex items-center justify-center"
                onClick={() => setActiveIndex((prev) => (prev + 1) % WEEKEND_ACTIVITIES.length)}
              >
                ➜
              </button>
            </div>
          </div>
        </article>

        <div className="grid grid-cols-2 gap-3 max-h-[430px] overflow-auto pr-1">
          {WEEKEND_ACTIVITIES.map((activity, index) => (
            <button
              key={activity.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`text-left rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 ${
                index === activeIndex
                  ? "border-brand-gold shadow-[0_8px_24px_rgba(198,167,94,0.35)]"
                  : "border-brand-gold/20"
              }`}
            >
              <div className="relative h-24 w-full">
                <Image src={activity.image} alt={activity.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/35" />
              </div>
              <div className="bg-zinc-900 p-3">
                <p className="text-sm text-white leading-snug">{activity.title}</p>
                <p className="text-brand-gold font-semibold mt-1">{activity.price}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {WEEKEND_ACTIVITIES.map((activity, index) => (
          <button
            key={`${activity.title}-dot`}
            type="button"
            aria-label={`Go to ${activity.title}`}
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition-all ${index === activeIndex ? "w-8 bg-brand-gold" : "w-2.5 bg-white/30"}`}
          />
        ))}
      </div>
    </div>
  );
}
