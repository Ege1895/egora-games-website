import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/AboutHero";
import { MissionVision } from "@/components/sections/MissionVision";
import { CompanyValues } from "@/components/sections/CompanyValues";
import { Timeline } from "@/components/sections/Timeline";
import { Technology } from "@/components/sections/Technology";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Learn about Egora Games' mission, vision, values, and the story behind the studio.",
  path: "/about",
});

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
