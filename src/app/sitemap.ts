import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { GAMES } from "@/lib/mock-games";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/games", "/about", "/contact"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const gameRoutes = GAMES.map((game) => ({
    url: `${SITE_URL}/games/${game.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...gameRoutes];
}
