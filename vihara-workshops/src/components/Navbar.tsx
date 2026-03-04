"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-black/90 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.45)] py-3 border-b border-brand-gold/25"
          : "bg-gradient-to-b from-black/60 to-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-serif text-2xl font-bold text-brand-gold tracking-wide">
          Vihara Workshops
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7">
          <Link href="/" className="text-white hover:text-brand-gold transition-colors font-medium">
            Home
          </Link>
          <Link href="/#upcoming-event" className="text-white hover:text-brand-gold transition-colors font-medium">
            Upcoming Event
          </Link>
          <Link href="/#catalogue" className="text-white hover:text-brand-gold transition-colors font-medium">
            Catalogue
          </Link>
          <Link href="/workshops" className="text-white hover:text-brand-gold transition-colors font-medium">
            All Workshops
          </Link>
          <Link href="/gallery" className="text-white hover:text-brand-gold transition-colors font-medium">
            Gallery
          </Link>
          <Link href="/contact" className="text-white hover:text-brand-gold transition-colors font-medium">
            Contact
          </Link>
          
          <Link 
            href="/workshops" 
            className="px-5 py-2 bg-brand-gold text-brand-black font-semibold rounded-full hover:bg-yellow-600 transition-all shadow-[0_0_10px_rgba(198,167,94,0.4)]"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-brand-gold transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-black/95 backdrop-blur-xl border-t border-white/10 p-4 flex flex-col gap-4 items-center animate-in slide-in-from-top-2">
            <Link 
              href="/" 
              className="text-white hover:text-brand-gold py-2 text-lg w-full text-center border-b border-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/#upcoming-event" 
              className="text-white hover:text-brand-gold py-2 text-lg w-full text-center border-b border-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Upcoming Event
            </Link>
            <Link 
              href="/#catalogue" 
              className="text-white hover:text-brand-gold py-2 text-lg w-full text-center border-b border-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Catalogue
            </Link>
            <Link 
              href="/workshops" 
              className="text-white hover:text-brand-gold py-2 text-lg w-full text-center border-b border-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              All Workshops
            </Link>
            <Link 
              href="/gallery" 
              className="text-white hover:text-brand-gold py-2 text-lg w-full text-center border-b border-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              href="/contact" 
              className="text-white hover:text-brand-gold py-2 text-lg w-full text-center mb-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            <Link 
              href="/workshops" 
              className="px-8 py-3 bg-brand-gold text-brand-black font-bold rounded-full w-full text-center shadow-lg mb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Link>
        </div>
      )}
    </nav>
  );
}
