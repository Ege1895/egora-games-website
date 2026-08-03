import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/AboutHero";
import { MissionVision } from "@/components/sections/MissionVision";
import { CompanyValues } from "@/components/sections/CompanyValues";
import { Timeline } from "@/components/sections/Timeline";
import { Team } from "@/components/sections/Team";
import { Technology } from "@/components/sections/Technology";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, personJsonLd } from "@/lib/jsonld";
import { en } from "@/lib/i18n/en";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Learn about Egora Games' mission, vision, values, and the story behind the studio.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col">
      <JsonLd data={breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ])} />
      {en.team.members.map((member) => (
        <JsonLd key={member.name} data={personJsonLd(member)} />
      ))}
      <AboutHero />
      <MissionVision />
      <CompanyValues />
      <Timeline />
      <Team />
      <Technology />
    </main>
  );
}
