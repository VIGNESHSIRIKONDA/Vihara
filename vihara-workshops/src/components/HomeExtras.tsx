import Link from "next/link";
import Image from "next/image";
import CustomExperiences from "@/components/CustomExperiences";

const WEEKEND_PRICING = [
  { title: "🎨 Resin Art", price: "₹999", image: "https://images.unsplash.com/photo-1578301978069-1c3adf265f47?q=80&w=1740&auto=format&fit=crop" },
  { title: "🏺 Hand-Build Pottery", price: "₹899", image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1887&auto=format&fit=crop" },
  { title: "👤 Clay Portrait Sculpture", price: "₹899", image: "https://images.unsplash.com/photo-1582041148887-67274b989593?q=80&w=1770&auto=format&fit=crop" },
  { title: "🔵 Mandala Art", price: "₹799", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1887&auto=format&fit=crop" },
  { title: "🎨 Acrylic Painting", price: "₹799", image: "https://images.unsplash.com/photo-1501472312651-726afe119ff1?q=80&w=1887&auto=format&fit=crop" },
  { title: "🎨 Gouache Painting", price: "₹799", image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1780&auto=format&fit=crop" },
  { title: "🎨 Pichwai Painting", price: "₹799", image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=1887&auto=format&fit=crop" },
  { title: "🌊 Water Colour Painting", price: "₹699", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1945&auto=format&fit=crop" },
  { title: "☕ Coffee Painting", price: "₹699", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1770&auto=format&fit=crop" },
  { title: "✏ Charcoal Sketch", price: "₹699", image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1932&auto=format&fit=crop" },
  { title: "🧿 Key Chain Making", price: "₹699", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1935&auto=format&fit=crop" },
  { title: "🧲 Fridge Magnet Making", price: "₹699", image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=1887&auto=format&fit=crop" },
];

const FAQS = [
  {
    question: "Do I need prior experience?",
    answer: "No. Completely beginner friendly.",
  },
  {
    question: "Are materials included?",
    answer: "Yes, everything is provided.",
  },
  {
    question: "Can kids join?",
    answer: "Yes, all age groups welcome.",
  },
  {
    question: "How long is the session?",
    answer: "3 hours.",
  },
  {
    question: "How many seats are available?",
    answer: "12–15 seats only.",
  },
  {
    question: "Do I take my artwork home?",
    answer: "Absolutely.",
  },
  {
    question: "Where are workshops held?",
    answer: "Selected cafés across Hyderabad. Location shared after booking.",
  },
];

export default function HomeExtras() {
  return (
    <>
      <section id="about" className="py-20 px-4 bg-white text-brand-black">
        <div className="container mx-auto max-w-5xl text-center reveal-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold">Why Vihara Workshops?</h2>
          <div className="w-28 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto my-6" />
          <p className="text-lg text-gray-700 leading-relaxed">
            At Vihara Workshops, we create mindful, fun, and aesthetic art experiences inside Hyderabad&apos;s coziest cafés.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Whether you&apos;re a beginner, a working professional, a student, a parent, or simply looking for a creative break,
            you&apos;ll walk in with curiosity and leave with a handmade artwork, new creative skills, meaningful connections,
            and a relaxed mind.
          </p>
          <p className="text-brand-gold font-bold text-2xl md:text-3xl mt-6 tracking-wide">No prior experience required.</p>
        </div>
      </section>

      <section id="special" className="py-20 px-4 bg-brand-black text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 reveal-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-gold">What Makes Us Special</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "✨ 3-Hour Guided Sessions",
              "🖌 All Materials Included",
              "🎁 Take Home Your Artwork",
              "👩‍🎨 Beginner Friendly",
              "☕ Hosted in Beautiful Cafés",
              "👥 Intimate Groups (12–15 participants)",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-brand-gold/30 bg-zinc-900 px-5 py-4 reveal-up"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-white text-brand-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 reveal-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Weekend Workshops</h2>
            <p className="text-gray-600 mt-3">Black cards with gold borders.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WEEKEND_PRICING.map((item, index) => (
              <article
                key={item.title}
                className="group rounded-xl border border-brand-gold bg-brand-black text-white overflow-hidden shadow-sm reveal-up hover:shadow-[0_18px_40px_rgba(198,167,94,0.32)] transition-all duration-500 hover:[transform:perspective(900px)_rotateX(5deg)_rotateY(-4deg)_translateY(-8px)]"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-brand-gold text-brand-black animate-pulse">
                    Activity
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-lg leading-snug">{item.title}</p>
                  <div className="mt-3 pt-3 border-t border-brand-gold/30 flex items-center justify-between">
                    <p className="text-brand-gold text-2xl font-bold">{item.price}</p>
                    <span className="text-xs uppercase tracking-[0.2em] text-brand-gold/80">Weekend</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-8 space-y-2">
            <p className="text-brand-gold font-semibold">🔥 Early bird discount for first 5 bookings</p>
            <p className="text-gray-700 font-medium">🎟 Group discounts available</p>
          </div>
        </div>
      </section>

      <CustomExperiences />

      <section className="py-20 px-4 bg-brand-black text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10 reveal-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-gold">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              "1️⃣ Choose Your Workshop",
              "2️⃣ Book via Website or WhatsApp",
              "3️⃣ Show Up at the Café",
              "4️⃣ Create & Relax",
              "5️⃣ Take Home Your Artwork",
            ].map((step, idx) => (
              <div key={step} className="rounded-xl border border-brand-gold/30 bg-zinc-900 p-4 text-center reveal-up" style={{ animationDelay: `${idx * 90}ms` }}>
                {step}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-300 mt-6">Simple. No stress.</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white text-brand-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 reveal-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Who Is This For?</h2>
            <p className="text-gray-600 mt-3">All age groups welcome.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "✔ First-time artists",
              "✔ Date nights",
              "✔ Friends hangouts",
              "✔ Solo creative time",
              "✔ Parents & kids",
              "✔ Team bonding activities",
            ].map((item, idx) => (
              <div key={item} className="rounded-xl border border-brand-gold/30 p-4 bg-white shadow-sm reveal-up" style={{ animationDelay: `${idx * 80}ms` }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-brand-black text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-gold mb-10 reveal-up">Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Such a calming experience. I didn’t know I could paint!",
                author: "Aanya, Hyderabad",
              },
              {
                quote: "Perfect weekend plan instead of scrolling all day.",
                author: "Rahul, Gachibowli",
              },
              {
                quote: "The café + art vibe was just amazing.",
                author: "Sneha, Jubilee Hills",
              },
            ].map((item, idx) => (
              <blockquote
                key={item.author}
                className="rounded-xl border border-brand-gold/30 bg-zinc-900 p-6 text-left reveal-up"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <p className="text-brand-gold text-3xl leading-none mb-3">“</p>
                <p className="text-gray-100">{item.quote}</p>
                <footer className="mt-4 text-brand-gold text-sm">— {item.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-white text-brand-black">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-10 reveal-up">FAQ</h2>
          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <details
                key={faq.question}
                className="rounded-xl border border-brand-gold/30 bg-white p-4 group reveal-up"
                style={{ animationDelay: `${idx * 70}ms` }}
              >
                <summary className="cursor-pointer list-none font-semibold flex items-center justify-between">
                  {faq.question}
                  <span className="text-brand-gold">+</span>
                </summary>
                <p className="text-gray-700 mt-3">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-brand-black text-white text-center">
        <div className="container mx-auto max-w-3xl reveal-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-gold mb-4">
            Ready to Create Something Beautiful?
          </h2>
          <p className="text-gray-300 mb-8">Seats fill fast every weekend.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/workshops"
              className="px-8 py-4 rounded-full bg-brand-gold text-brand-black font-semibold hover:bg-yellow-600 transition-colors"
            >
              👉 Reserve Your Spot Now
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi,%20I%E2%80%99d%20like%20to%20book%20a%20seat%20for%20the%20upcoming%20Vihara%20Workshop.%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-brand-gold text-brand-gold font-semibold hover:bg-brand-gold/10 transition-colors"
            >
              💬 Message Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
