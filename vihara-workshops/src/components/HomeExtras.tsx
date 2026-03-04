import Link from "next/link";
import CustomExperiences from "@/components/CustomExperiences";
import WeekendWorkshopsShowcase from "@/components/WeekendWorkshopsShowcase";

const SPECIAL_ITEMS = [
  {
    title: "3-Hour Guided Sessions",
    description: "Structured, artist-led flow so you never feel lost.",
    icon: "⏳",
  },
  {
    title: "All Materials Included",
    description: "Canvas, paints, tools, and setup are ready for you.",
    icon: "🖌",
  },
  {
    title: "Take Home Your Artwork",
    description: "You leave with a finished piece you made yourself.",
    icon: "🎁",
  },
  {
    title: "Beginner Friendly",
    description: "No prior experience needed. We guide every step.",
    icon: "👩‍🎨",
  },
  {
    title: "Hosted in Beautiful Cafés",
    description: "Warm ambience, good coffee, and creative vibes.",
    icon: "☕",
  },
  {
    title: "Intimate Groups",
    description: "Only 12–15 participants for personal attention.",
    icon: "👥",
  },
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
            <p className="text-gray-300 mt-3">Not just a class — a complete creative experience.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-5">
            <article className="lg:col-span-5 rounded-2xl border border-brand-gold/35 overflow-hidden relative min-h-[380px] reveal-up">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1887&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
              <div className="relative h-full p-6 md:p-8 flex flex-col justify-end">
                <p className="text-brand-gold uppercase tracking-[0.2em] text-xs mb-2">Signature Vibe</p>
                <h3 className="font-serif text-3xl md:text-4xl text-white">Art, Café & Calm</h3>
                <p className="text-gray-200 mt-3 leading-relaxed">
                  Every session blends artistic guidance, premium ambience, and small-group warmth.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full border border-brand-gold/60 text-brand-gold text-sm">3 Hours</span>
                  <span className="px-3 py-1 rounded-full border border-brand-gold/60 text-brand-gold text-sm">12–15 Seats</span>
                  <span className="px-3 py-1 rounded-full border border-brand-gold/60 text-brand-gold text-sm">All Materials</span>
                </div>
              </div>
            </article>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {SPECIAL_ITEMS.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-brand-gold/25 bg-zinc-900/90 px-5 py-5 reveal-up transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(198,167,94,0.22)] hover:border-brand-gold/50"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/50 bg-brand-gold/10 text-lg">
                      {item.icon}
                    </div>
                    <span className="font-serif text-brand-gold/60 text-3xl leading-none">0{index + 1}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-brand-gold leading-tight mt-4">{item.title}</h3>
                  <p className="text-gray-300 mt-2 leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-brand-gold/20 bg-zinc-900/70 overflow-hidden">
            <div className="special-marquee-track py-3 text-sm text-brand-gold/90 tracking-wide whitespace-nowrap">
              <span className="mx-4">✨ Guided · Curated · Aesthetic · Beginner-Friendly · Social · Premium</span>
              <span className="mx-4">✨ Guided · Curated · Aesthetic · Beginner-Friendly · Social · Premium</span>
              <span className="mx-4">✨ Guided · Curated · Aesthetic · Beginner-Friendly · Social · Premium</span>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-white text-brand-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 reveal-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Weekend Workshops</h2>
            <p className="text-gray-600 mt-3">Black cards with gold borders.</p>
          </div>

          <WeekendWorkshopsShowcase />

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
