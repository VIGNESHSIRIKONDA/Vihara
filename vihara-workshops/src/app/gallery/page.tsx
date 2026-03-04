import Image from "next/image";
import { PREVIOUS_HISTORY } from "@/data/workshops";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-black via-zinc-950 to-brand-black pt-28 pb-20 px-4 text-white">
      <section className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-gold mb-4">Gallery</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Previous history from last week with photos from Vihara workshop moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PREVIOUS_HISTORY.map((event, index) => (
            <article
              key={event.id}
              className="rounded-2xl overflow-hidden border border-brand-gold/30 shadow-sm bg-zinc-900 hover:shadow-[0_16px_40px_rgba(198,167,94,0.25)] transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 140}ms` }}
            >
              <div className="relative h-64 w-full photo-pop overflow-hidden">
                <Image src={event.image} alt={event.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              </div>
              <div className="p-4">
                <h2 className="font-serif text-2xl text-white">{event.title}</h2>
                <p className="text-sm text-gray-400 mt-1">{event.date}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
