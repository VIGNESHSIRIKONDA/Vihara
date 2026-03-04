import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white/80 py-12 border-t border-brand-gold/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="font-playfair text-2xl text-brand-gold italic">
              Vihara Workshops
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-xs text-white/60">
              Hyderabad, India
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg text-brand-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/workshops" className="hover:text-brand-gold transition-colors">
                  Upcoming Workshops
                </Link>
              </li>
              <li>
                <Link href="/workshops" className="hover:text-brand-gold transition-colors">
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-brand-gold transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/#custom-events" className="hover:text-brand-gold transition-colors">
                  Custom Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-lg text-brand-gold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919876543210?text=Hi,%20I%E2%80%99d%20like%20to%20book%20a%20seat%20for%20the%20upcoming%20Vihara%20Workshop.%20Please%20share%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex gap-4 mt-4">
                <a href="mailto:hello@viharaworkshops.com" className="hover:text-brand-gold transition-colors">Email</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 text-center text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Vihara Workshops. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
