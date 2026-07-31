import Image from "next/image";
import Link from "next/link";
import { Game } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function GameCard({ game }: { game: Game }) {
  return (
    <Link href={`/games/${game.slug}`} className="group block h-full">
      <Card className="flex h-full flex-col gap-4 overflow-hidden p-0">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-background">
          <Image
            src={game.coverImage}
            alt={`${game.title} kapak görseli`}
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-6 pt-0">
          <Badge>{game.genre}</Badge>
          <h3 className="text-xl font-bold text-foreground">{game.title}</h3>
          <p className="text-sm text-foreground-muted">{game.tagline}</p>
        </div>
      </Card>
    </Link>
  );
}
