import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Game } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function GameCard({ game }: { game: Game }) {
  return (
    <Link href={`/games/${game.slug}`} className="group block h-full">
      <Card className="flex h-full flex-col gap-0 overflow-hidden p-0">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-primary/20 via-background-elevated to-accent/10">
          <Image
            src={game.coverImage}
            alt={`${game.title} kapak görseli`}
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-elevated via-transparent to-transparent" />
          <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
            <ArrowUpRightIcon aria-hidden className="h-4 w-4 text-foreground" />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-3 p-6">
          <div className="flex items-center justify-between gap-2">
            <Badge>{game.genre}</Badge>
            <span className="text-xs text-foreground-muted">
              {game.platforms.join(" · ")}
            </span>
          </div>
          <h3 className="text-xl font-bold text-foreground">{game.title}</h3>
          <p className="text-sm text-foreground-muted">{game.tagline}</p>
        </div>
      </Card>
    </Link>
  );
}
