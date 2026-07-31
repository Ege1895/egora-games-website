import { Hero } from "@/components/sections/Hero";
import { FeaturedGames } from "@/components/sections/FeaturedGames";
import { WhyEgora } from "@/components/sections/WhyEgora";
import { Vision } from "@/components/sections/Vision";
import { LatestNews } from "@/components/sections/LatestNews";
import { JoinUs } from "@/components/sections/JoinUs";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <FeaturedGames />
      <WhyEgora />
      <Vision />
      <LatestNews />
      <JoinUs />
    </main>
  );
}
