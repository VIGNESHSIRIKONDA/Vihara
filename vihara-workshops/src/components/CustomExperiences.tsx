export default function CustomExperiences() {
  return (
    <section id="custom-events" className="py-20 px-4 bg-gradient-to-b from-brand-black via-zinc-950 to-brand-black text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent mb-12" />
        <div className="text-center mb-12 reveal-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-gold mb-4">
            Celebrations &amp; Custom Experiences
          </h2>
          <p className="text-gray-300 text-lg md:text-xl">
            Premium Services Beyond Weekend Workshops
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <article className="rounded-2xl border border-brand-gold/25 bg-zinc-900 p-8 shadow-sm reveal-up reveal-delay-1">
            <h3 className="font-serif text-3xl text-brand-gold mb-5">🏡 Offline Services</h3>
            <ul className="space-y-3 text-gray-200 list-disc pl-5">
              <li>In-home birthday celebrations</li>
              <li>Outdoor birthday events</li>
              <li>T-shirt painting for 1st birthday</li>
              <li>Fun clay making for gifting</li>
            </ul>
            <p className="mt-6 text-gray-300">
              Perfect for families, kids parties, private gatherings, and customized celebrations.
            </p>
          </article>

          <article className="rounded-2xl border border-brand-gold/25 bg-zinc-900 p-8 shadow-sm reveal-up reveal-delay-2">
            <h3 className="font-serif text-3xl text-brand-gold mb-5">🌐 Online Services</h3>
            <ul className="space-y-3 text-gray-200 list-disc pl-5">
              <li>Marriage Varamala Resin Preserve Making</li>
              <li>Rose Preservation</li>
              <li>Custom Resin Gifting Solutions</li>
            </ul>
            <p className="mt-6 text-gray-300">
              Preserve memories beautifully with handcrafted resin keepsakes.
            </p>
          </article>
        </div>

        <div className="text-center mt-12 reveal-up reveal-delay-3">
          <a
            href="https://wa.me/919876543210?text=Hi,%20I%E2%80%99d%20like%20to%20enquire%20about%20custom%20birthday%2Fresin%20preservation%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-full bg-brand-gold text-brand-black font-semibold hover:bg-yellow-600 transition-colors"
          >
            👉 Enquire for Custom Events
          </a>
        </div>
      </div>
    </section>
  );
}
