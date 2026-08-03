import type { Metadata } from "next";
import { GamesPageContent } from "@/components/sections/GamesPageContent";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Games",
  description:
    "Explore the worlds Egora Games is currently building and shipping.",
  path: "/games",
});

export default function GamesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Games", path: "/games" },
      ])} />
      <GamesPageContent />
    </>
  );
}
