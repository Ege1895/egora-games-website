import { notFound } from "next/navigation";
import { GameDetail } from "@/components/sections/GameDetail";
import { GAMES, getGameBySlug } from "@/lib/mock-games";

export function generateStaticParams() {
  return GAMES.map((game) => ({ slug: game.slug }));
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

  return <GameDetail game={game} />;
}
