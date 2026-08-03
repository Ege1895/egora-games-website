import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GameDetail } from "@/components/sections/GameDetail";
import { GAMES, getGameBySlug } from "@/lib/mock-games";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/constants";

export function generateStaticParams() {
  return GAMES.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    return buildMetadata({ title: "Game Not Found", path: `/games/${slug}` });
  }

  return buildMetadata({
    title: game.title,
    description: game.description.en,
    path: `/games/${game.slug}`,
    image: game.ogImage,
  });
}

export default async function GamePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  const videoGameJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: game.title,
    description: game.description.en,
    genre: game.genre.en,
    url: `${SITE_URL}/games/${game.slug}`,
    image: `${SITE_URL}${game.coverImage}`,
    gamePlatform: game.platforms,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameJsonLd) }}
      />
      <GameDetail game={game} />
    </>
  );
}
