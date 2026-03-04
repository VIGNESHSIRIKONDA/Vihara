import Image from "next/image";
import Link from "next/link";
import { UPCOMING_EVENT, WORKSHOPS } from "@/data/workshops";

export default function WorkshopsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-black via-zinc-950 to-brand-black pt-28 pb-20 px-4 text-white">
      <section className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 reveal-up">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-gold mb-4">
            Vihara Workshop Catalogue with Prices
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Art workshops in cafes with all materials included. Pick your session and book your seat.
          </p>
        </div>

        <div className="mb-12 rounded-2xl border border-brand-gold/30 bg-brand-black text-brand-white p-6 md:p-8 reveal-up reveal-delay-1">
          <p className="text-brand-gold uppercase tracking-[0.2em] text-xs mb-2">Upcoming Event</p>
          <h2 className="font-serif text-2xl md:text-3xl mb-2">{UPCOMING_EVENT.title}</h2>
          <p className="text-white/80 mb-4">
            {UPCOMING_EVENT.date} · {UPCOMING_EVENT.time} · {UPCOMING_EVENT.location}
          </p>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <span className="text-2xl font-bold text-brand-gold">₹{UPCOMING_EVENT.price}</span>
            <a
              href="https://wa.me/919876543210?text=Hi,%20I%20want%20to%20book%20the%20upcoming%20Vihara%20workshop"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-brand-gold text-brand-black font-semibold hover:bg-yellow-600 transition"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WORKSHOPS.map((workshop, index) => (
            <article
              key={workshop.id}
              className="rounded-2xl overflow-hidden border border-brand-gold/20 shadow-sm bg-zinc-900 flex flex-col hover:shadow-[0_16px_40px_rgba(198,167,94,0.2)] transition-all duration-500 hover:-translate-y-1 reveal-up"
              style={{ animationDelay: `${200 + index * 110}ms` }}
            >
              <div className="relative h-56 w-full">
                <Image src={workshop.image} alt={workshop.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-2xl text-white mb-1">{workshop.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{workshop.location}</p>
                <p className="text-sm text-gray-300 mb-4">{workshop.date} · {workshop.time}</p>
                <p className="text-sm text-gray-300 mb-6">{workshop.description}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-bold text-xl text-brand-gold">₹{workshop.price}</span>
                  <Link
                    href={`/workshops/${workshop.id}`}
                    className="px-5 py-2 rounded-full bg-brand-black text-brand-white text-sm font-semibold hover:bg-brand-gold hover:text-brand-black transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
