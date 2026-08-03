import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GameDetail } from "@/components/sections/GameDetail";
import { GAMES, getGameBySlug } from "@/lib/mock-games";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, softwareApplicationJsonLd, videoGameJsonLd } from "@/lib/jsonld";

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

  return (
    <>
      <JsonLd data={videoGameJsonLd(game)} />
      <JsonLd data={softwareApplicationJsonLd(game)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Games", path: "/games" },
          { name: game.title, path: `/games/${game.slug}` },
        ])}
      />
      <GameDetail game={game} />
    </>
  );
}
