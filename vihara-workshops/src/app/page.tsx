import Hero from "@/components/Hero";
import FeaturedWorkshops from "@/components/FeaturedWorkshops";
import HomeExtras from "@/components/HomeExtras";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Hero />
      <FeaturedWorkshops />
      <HomeExtras />
    </main>
  );
}
