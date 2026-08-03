"use client";

import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { PlatformBadges } from "@/components/ui/PlatformBadge";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { StoreBadge } from "@/components/ui/StoreBadge";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { Reveal } from "@/components/ui/Reveal";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { getGameStatus } from "@/lib/mock-games";
import { Game } from "@/types";

export function GameDetail({ game }: { game: Game }) {
  const { locale, t } = useLocale();
  const status = getGameStatus(game);
  const screenshots = game.screenshots[locale];

  return (
    <main className="flex flex-1 flex-col">
      <section className="relative border-b border-border">
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-background-elevated">
          <Image
            src={game.bannerImage}
            alt={`${game.title} banner`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        <Container className="relative -mt-24 flex flex-col gap-4 pb-12">
          <div className="flex flex-wrap items-center gap-3">
            <Badge>{game.genre[locale]}</Badge>
            {status === "comingSoon" && (
              <StatusBadge status="comingSoon">
                {t.gameShowcase.comingSoon}
              </StatusBadge>
            )}
          </div>
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
            {game.title}
          </h1>
          <p className="max-w-2xl text-lg text-foreground-muted">
            {game.tagline[locale]}
          </p>
          <div
            className="flex items-center gap-1"
            aria-label={t.gameShowcase.ratingSrLabel}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} aria-hidden className="h-5 w-5 text-accent" />
            ))}
          </div>
          <PlatformBadges platforms={game.platforms} />
          {game.storeLinks.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-4">
              {game.storeLinks.map((link) => (
                <StoreBadge
                  key={link.label}
                  label={link.label}
                  url={link.url}
                  comingSoonLabel={t.gameShowcase.comingSoon}
                />
              ))}
            </div>
          )}
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-16 lg:grid-cols-3">
          <Reveal className="flex flex-col gap-4 lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground">
              {t.gameDetail.aboutGame}
            </h2>
            <p className="text-foreground-muted">{game.description[locale]}</p>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-foreground">
              {t.gameDetail.features}
            </h2>
            <ul className="flex flex-col gap-3">
              {game.features.map((feature) => (
                <li key={feature.en} className="flex items-start gap-3">
                  <CheckCircleIcon
                    aria-hidden
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  />
                  <span className="text-sm text-foreground-muted">
                    {feature[locale]}
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
            <h2 className="text-2xl font-bold text-foreground">
              {t.gameDetail.trailer}
            </h2>
            <VideoEmbed url={game.trailerUrl} title={`${game.title} trailer`} />
          </Container>
        </section>
      )}

      {screenshots.length > 0 && (
        <section className="border-t border-border py-16 sm:py-24">
          <Container className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-foreground">
              {t.gameDetail.screenshots}
            </h2>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
              {screenshots.map((screenshot, i) => (
                <PhoneFrame
                  key={screenshot}
                  src={screenshot}
                  alt={`${game.title} screenshot ${i + 1}`}
                />
              ))}
            </div>
          </Container>
        </section>
      )}
    </main>
  );
}
