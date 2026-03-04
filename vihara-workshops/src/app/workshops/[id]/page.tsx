import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WORKSHOPS } from "@/data/workshops";

type WorkshopDetailsPageProps = {
  params: {
    id: string;
  };
};

export function generateStaticParams() {
  return WORKSHOPS.map((workshop) => ({ id: workshop.id.toString() }));
}

export default function WorkshopDetailsPage({ params }: WorkshopDetailsPageProps) {
  const workshopId = Number(params.id);
  const workshop = WORKSHOPS.find((item) => item.id === workshopId);

  if (!workshop) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-black via-zinc-950 to-brand-black pt-28 pb-20 px-4 text-white">
      <section className="container mx-auto max-w-4xl">
        <Link href="/workshops" className="text-sm text-gray-300 hover:text-brand-gold transition-colors reveal-up">
          ← Back to all workshops
        </Link>

        <div className="mt-6 rounded-2xl overflow-hidden border border-brand-gold/20 bg-zinc-900 shadow-sm reveal-up reveal-delay-1">
          <div className="relative h-80 w-full">
            <Image src={workshop.image} alt={workshop.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
          </div>

          <div className="p-6 md:p-8">
            <h1 className="font-serif text-4xl text-brand-gold mb-2">{workshop.title}</h1>
            <p className="text-gray-300 mb-6">{workshop.description}</p>

            <div className="grid md:grid-cols-2 gap-4 text-sm mb-8">
              <div className="rounded-xl bg-black/40 border border-brand-gold/20 p-4">
                <p className="text-gray-400">Date</p>
                <p className="font-semibold text-white">{workshop.date}</p>
              </div>
              <div className="rounded-xl bg-black/40 border border-brand-gold/20 p-4">
                <p className="text-gray-400">Time</p>
                <p className="font-semibold text-white">{workshop.time}</p>
              </div>
              <div className="rounded-xl bg-black/40 border border-brand-gold/20 p-4 md:col-span-2">
                <p className="text-gray-400">Location</p>
                <p className="font-semibold text-white">{workshop.location}</p>
              </div>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4 border-t border-brand-gold/15 pt-6">
              <p className="text-2xl font-bold text-brand-gold">₹{workshop.price}</p>
              <a
                href={`https://wa.me/919876543210?text=Hi,%20I%20want%20to%20book%20${encodeURIComponent(workshop.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-brand-gold text-brand-black font-semibold hover:bg-yellow-600 transition"
              >
                Book this workshop
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
