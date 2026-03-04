"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const HERO_MOODS = [
  "Resin Glow",
  "Cafe Sketching",
  "Palette Knife Energy",
  "Mindful Mandalas",
];

export default function Hero() {
  const [cursor, setCursor] = useState({ x: 50, y: 45 });
  const [moodIndex, setMoodIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setMoodIndex((prev) => (prev + 1) % HERO_MOODS.length);
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  const normalizedX = (cursor.x - 50) / 50;
  const normalizedY = (cursor.y - 50) / 50;

  const stackTransform = `perspective(1200px) rotateY(${normalizedX * 8 - 14}deg) rotateX(${normalizedY * -5 + 6}deg)`;
  const backCardTransform = `translate3d(${normalizedX * -18}px, ${normalizedY * -14}px, 0) rotate(-6deg)`;
  const midCardTransform = `translate3d(${normalizedX * 10}px, ${normalizedY * -8}px, 0) rotate(1deg)`;
  const frontCardTransform = `translate3d(${normalizedX * 22}px, ${normalizedY * -16}px, 0) rotate(7deg)`;

  return (
    <section
      className="relative w-full h-screen min-h-[680px] flex items-center justify-center overflow-hidden bg-brand-black text-brand-white"
      onMouseMove={(event) => {
        const target = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - target.left) / target.width) * 100;
        const y = ((event.clientY - target.top) / target.height) * 100;
        setCursor({ x, y });
      }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
          alt="Cozy Art Cafe Atmosphere"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      <div className="absolute top-20 md:top-24 right-4 md:right-8 z-20 reveal-up">
        <div className="flex justify-end">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-black/60 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-brand-gold animate-pulse" />
            <span className="text-brand-gold text-sm uppercase tracking-[0.18em]">Now Featuring</span>
            <span className="text-white hero-mood-swap">{HERO_MOODS[moodIndex]}</span>
          </div>
        </div>
      </div>

      {/* 3D Art Stack */}
      <div className="hidden lg:block absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 z-10 hero-tilt reveal-up reveal-delay-2">
        <div className="relative w-64 h-72 transition-transform duration-200" style={{ transform: stackTransform }}>
          <div
            className="absolute -left-10 top-10 w-44 h-56 rounded-2xl overflow-hidden border border-brand-gold/60 shadow-2xl transition-transform duration-500 ease-out"
            style={{ transform: backCardTransform }}
          >
            <Image
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1887&auto=format&fit=crop"
              alt="Color palette"
              fill
              className="object-cover"
            />
          </div>
          <div
            className="absolute left-8 top-0 w-48 h-64 rounded-2xl overflow-hidden border border-white/40 shadow-2xl transition-transform duration-500 ease-out"
            style={{ transform: midCardTransform }}
          >
            <Image
              src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1945&auto=format&fit=crop"
              alt="Textured painting"
              fill
              className="object-cover"
            />
          </div>
          <div
            className="absolute right-0 top-16 w-44 h-52 rounded-2xl overflow-hidden border border-brand-gold/60 shadow-2xl transition-transform duration-500 ease-out"
            style={{ transform: frontCardTransform }}
          >
            <Image
              src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1780&auto=format&fit=crop"
              alt="Palette knife art"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 mt-16 md:mt-20 text-center lg:text-left lg:mr-72 xl:mr-80 flex flex-col items-center lg:items-start gap-6 max-w-4xl">
        <h1 className="reveal-up font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-brand-white drop-shadow-lg">
          🎨 Escape the Routine. <br />
          <span className="text-brand-gold italic">Create Something Beautiful</span> This Weekend.
        </h1>
        
        <p className="reveal-up reveal-delay-1 text-lg md:text-xl text-gray-200 metadata max-w-2xl font-light">
          Curated 3-hour guided art workshops in cozy Hyderabad cafés. <br />
          All materials included. Take your artwork home.
        </p>

        <div className="reveal-up reveal-delay-2 flex flex-col sm:flex-row gap-4 mt-8 w-full justify-center">
          <Link 
            href="/workshops" 
            className="px-8 py-4 bg-brand-gold text-brand-black font-semibold rounded-full hover:bg-yellow-600 transition duration-300 shadow-[0_0_15px_rgba(198,167,94,0.3)] text-lg"
          >
            👉 Book Your Seat Now
          </Link>
          <a 
            href="https://wa.me/919876543210?text=Hi,%20I%E2%80%99d%20like%20to%20book%20a%20seat%20for%20the%20upcoming%20Vihara%20Workshop.%20Please%20share%20details." 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-brand-gold text-brand-gold font-medium rounded-full hover:bg-brand-gold/10 transition duration-300 text-lg flex items-center justify-center gap-2"
          >
            💬 Chat on WhatsApp
          </a>
        </div>

        <p className="reveal-up reveal-delay-3 text-sm text-brand-gold/80 mt-4 font-medium tracking-wide uppercase">
          Limited to 12–15 seats per workshop.
        </p>

        <div className="reveal-up reveal-delay-3 mt-2 flex items-center gap-2 text-white/70 text-sm">
          <span>Scroll to explore</span>
          <span className="hero-scroll-arrow">↓</span>
        </div>
      </div>
    </section>
  );
}
