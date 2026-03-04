import Link from "next/link";
import Image from "next/image";
import { PREVIOUS_HISTORY, UPCOMING_EVENT, WORKSHOPS } from "@/data/workshops";

export default function FeaturedWorkshops() {
  return (
    <section id="catalogue" className="py-20 px-4 bg-gradient-to-b from-brand-black via-zinc-950 to-brand-black text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-gold">
            Art Workshops in Cafes
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto font-light text-lg">
            Join Vihara Workshop experiences designed for small groups. No prior experience needed.
          </p>
        </div>

        <div id="upcoming-event" className="mb-10 rounded-2xl border border-brand-gold/40 bg-black/70 text-brand-white p-6 md:p-8 shadow-[0_0_30px_rgba(198,167,94,0.15)]">
          <p className="text-brand-gold uppercase tracking-[0.2em] text-xs mb-2">Upcoming Event</p>
          <h3 className="font-serif text-2xl md:text-3xl mb-2">{UPCOMING_EVENT.title}</h3>
          <p className="text-white/80 mb-4">
            {UPCOMING_EVENT.date} · {UPCOMING_EVENT.time} · {UPCOMING_EVENT.location}
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-2xl font-bold text-brand-gold">₹{UPCOMING_EVENT.price}</span>
            <Link
              href="/workshops"
              className="px-6 py-2 bg-brand-gold text-brand-black rounded-full text-sm font-semibold hover:bg-yellow-600 transition-colors"
            >
              Reserve Seat
            </Link>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-white text-center">
            Vihara Workshop Catalogue with Prices
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WORKSHOPS.map((workshop) => (
            <div 
              key={workshop.id} 
              className="group bg-zinc-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.45)] transition-all duration-300 border border-brand-gold/20 flex flex-col transform-gpu hover:[transform:perspective(1000px)_rotateX(4deg)_rotateY(-4deg)_translateY(-8px)]"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={workshop.image}
                  alt={workshop.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {workshop.spotsLeft === 0 && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="bg-brand-white text-brand-black px-4 py-1 font-bold rounded-full uppercase tracking-wider text-sm">
                      Sold Out
                    </span>
                  </div>
                )}
                {workshop.spotsLeft > 0 && workshop.spotsLeft <= 5 && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                    Only {workshop.spotsLeft} seats left!
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white mb-1 group-hover:text-brand-gold transition-colors">
                      {workshop.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium">{workshop.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-300 mb-6 font-medium">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    {workshop.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {workshop.time}
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-brand-gold/15 pt-4">
                  <span className="text-xl font-bold text-brand-gold">
                    ₹{workshop.price}
                  </span>
                  
                  {workshop.spotsLeft > 0 ? (
                    <Link 
                      href={`/workshops/${workshop.id}`}
                      className="px-6 py-2 bg-brand-black text-brand-white rounded-full text-sm font-semibold hover:bg-brand-gold hover:text-brand-black transition-colors"
                    >
                      Book Now
                    </Link>
                  ) : (
                    <button disabled className="px-6 py-2 bg-gray-200 text-gray-400 rounded-full text-sm font-semibold cursor-not-allowed">
                      Full
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/workshops" 
            className="inline-flex items-center gap-2 border-b-2 border-brand-gold text-brand-gold font-semibold hover:text-white hover:border-white transition-colors pb-1 text-lg"
          >
            View All Upcoming Workshops
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </Link>
        </div>

        <div id="history" className="mt-20">
          <div className="text-center mb-10">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-brand-gold">
              Last Week Gallery Highlights
            </h3>
            <p className="text-gray-300 mt-2">A quick look at last week&apos;s Vihara moments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PREVIOUS_HISTORY.map((event) => (
              <article key={event.id} className="rounded-2xl overflow-hidden border border-brand-gold/25 shadow-sm bg-zinc-900 hover:shadow-[0_16px_40px_rgba(198,167,94,0.2)] transition-all duration-500 hover:-translate-y-1">
                <div className="relative h-56 w-full photo-pop overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                </div>
                <div className="p-4">
                  <h4 className="font-serif text-xl text-white">{event.title}</h4>
                  <p className="text-sm text-gray-400 mt-1">{event.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
