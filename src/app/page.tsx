import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { FeaturedGames } from "@/components/sections/FeaturedGames";
import { WhyEgora } from "@/components/sections/WhyEgora";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, SOCIAL_LINKS } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ title: SITE_NAME, path: "" });

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  sameAs: Object.values(SOCIAL_LINKS),
};

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Hero />
      <FeaturedGames />
      <WhyEgora />
    </main>
  );
}
