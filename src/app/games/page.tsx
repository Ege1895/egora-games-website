import type { Metadata } from "next";
import { GamesPageContent } from "@/components/sections/GamesPageContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Games",
  description:
    "Explore the worlds Egora Games is currently building and shipping.",
  path: "/games",
});

export default function GamesPage() {
  return <GamesPageContent />;
}
