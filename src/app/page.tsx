import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { FeaturedGames } from "@/components/sections/FeaturedGames";
import { WhyEgora } from "@/components/sections/WhyEgora";
import { SITE_NAME, SOCIAL_LINKS } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = buildMetadata({ title: SITE_NAME, path: "" });

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <JsonLd data={organizationJsonLd(Object.values(SOCIAL_LINKS))} />
      <JsonLd data={websiteJsonLd()} />
      <Hero />
      <FeaturedGames />
      <WhyEgora />
    </main>
  );
}
