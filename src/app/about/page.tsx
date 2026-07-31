import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/AboutHero";
import { MissionVision } from "@/components/sections/MissionVision";
import { CompanyValues } from "@/components/sections/CompanyValues";
import { Timeline } from "@/components/sections/Timeline";
import { Technology } from "@/components/sections/Technology";

// TODO: Faz 4'te gerçek metadata (description, OG, Twitter Card) ile genişletilecek
export const metadata: Metadata = {
  title: "About — Egora Games",
};

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col">
      <AboutHero />
      <MissionVision />
      <CompanyValues />
      <Timeline />
      <Technology />
    </main>
  );
}
