import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PlatformBadges } from "@/components/ui/PlatformBadge";
import { Reveal } from "@/components/ui/Reveal";
import { Game } from "@/types";

export function GameDetail({ game }: { game: Game }) {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative border-b border-border">
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-background-elevated">
          <Image
            src={game.bannerImage}
            alt={`${game.title} banner görseli`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        <Container className="relative -mt-24 flex flex-col gap-4 pb-12">
          <Badge>{game.genre}</Badge>
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
            {game.title}
          </h1>
          <p className="max-w-2xl text-lg text-foreground-muted">
            {game.tagline}
          </p>
          {/* TODO: gerçek kullanıcı puanı bağlanacak */}
          <div className="flex items-center gap-1" aria-label="Değerlendirme: 4.5 / 5 (TODO)">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon
                key={i}
                aria-hidden
                className={i < 4 ? "h-5 w-5 text-accent" : "h-5 w-5 text-foreground-muted/30"}
              />
            ))}
            <span className="ml-1 text-sm text-foreground-muted">(TODO)</span>
          </div>
          <PlatformBadges platforms={game.platforms} />
          {game.storeLinks.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-4">
              {game.storeLinks.map((link) => (
                <Button key={link.label} href={link.url} variant="primary">
                  {link.label}
                </Button>
              ))}
            </div>
          )}
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-16 lg:grid-cols-3">
          <Reveal className="flex flex-col gap-4 lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground">
              About the Game
            </h2>
            <p className="text-foreground-muted">{game.description}</p>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-foreground">Features</h2>
            <ul className="flex flex-col gap-3">
              {game.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircleIcon
                    aria-hidden
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  />
                  <span className="text-sm text-foreground-muted">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {game.trailerUrl && (
        <section className="border-t border-border py-16 sm:py-24">
          <Container className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-foreground">Trailer</h2>
            {/* TODO: Faz 5 — YouTube/Vimeo embed ile değiştirilecek */}
            <div className="aspect-video w-full rounded-2xl border border-border bg-background-elevated" />
          </Container>
        </section>
      )}

      {game.screenshots.length > 0 && (
        <section className="border-t border-border py-16 sm:py-24">
          <Container className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-foreground">Screenshots</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {game.screenshots.map((screenshot) => (
                <div
                  key={screenshot}
                  className="relative aspect-video overflow-hidden rounded-xl border border-border bg-background-elevated"
                >
                  <Image
                    src={screenshot}
                    alt={`${game.title} ekran görüntüsü`}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}
    </main>
  );
}
