export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-black via-zinc-950 to-brand-black pt-28 pb-20 px-4 text-white">
      <section className="container mx-auto max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-gold mb-4 text-center reveal-up">Contact</h1>
        <p className="text-center text-gray-300 mb-10 reveal-up reveal-delay-1">Have questions or want to book a Vihara workshop? Reach out anytime.</p>

        <div className="grid gap-6">
          <div className="rounded-2xl border border-brand-gold/25 p-6 bg-zinc-900 shadow-sm reveal-up reveal-delay-1">
            <h2 className="font-serif text-2xl text-white mb-2">WhatsApp</h2>
            <a
              href="https://wa.me/919876543210?text=Hi,%20I%20want%20to%20know%20more%20about%20Vihara%20workshops"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold font-semibold hover:underline"
            >
              Chat now: +91 98765 43210
            </a>
          </div>

          <div className="rounded-2xl border border-brand-gold/25 p-6 bg-zinc-900 shadow-sm reveal-up reveal-delay-2">
            <h2 className="font-serif text-2xl text-white mb-2">Email</h2>
            <a href="mailto:hello@viharaworkshops.com" className="text-brand-gold font-semibold hover:underline">
              hello@viharaworkshops.com
            </a>
          </div>

          <div className="rounded-2xl border border-brand-gold/25 p-6 bg-zinc-900 shadow-sm reveal-up reveal-delay-3">
            <h2 className="font-serif text-2xl text-white mb-2">Instagram</h2>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-brand-gold font-semibold hover:underline">
              @viharaworkshops
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
