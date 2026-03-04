export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-white pt-28 pb-20 px-4">
      <section className="container mx-auto max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-black mb-6 text-center">About Vihara Workshop</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Vihara Workshop curates intimate art workshops in cafes across Hyderabad. We blend mindful creativity, warm community,
          and hands-on guidance so every participant can create confidently.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Every session includes all materials, a structured 3-hour flow, and personal mentoring from artists. Whether you are a
          beginner or hobbyist, the experience is designed for calm, expression, and joy.
        </p>
        <div className="rounded-2xl bg-brand-black text-brand-white p-8">
          <h2 className="font-serif text-3xl mb-3 text-brand-gold">What makes us different</h2>
          <ul className="list-disc pl-5 space-y-2 text-white/90">
            <li>Art workshop in cafes with cozy ambience</li>
            <li>Small-group format for better guidance</li>
            <li>Catalogue with transparent prices</li>
            <li>Frequent upcoming events and weekly history highlights</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
