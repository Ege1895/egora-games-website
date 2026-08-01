"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GameShowcaseRow } from "@/components/ui/GameShowcaseRow";
import { GradientBackdrop } from "@/components/ui/GradientBackdrop";
import { Reveal } from "@/components/ui/Reveal";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { GAMES } from "@/lib/mock-games";

export function GamesPageContent() {
  const { t } = useLocale();

  return (
    <main className="relative flex flex-1 flex-col overflow-hidden py-24 sm:py-32">
      <GradientBackdrop className="opacity-60" />
      <Container className="relative flex flex-col gap-16">
        <Reveal>
          <SectionHeading
            as="h1"
            eyebrow={t.gamesPage.eyebrow}
            title={t.gamesPage.title}
            description={t.gamesPage.description}
          />
        </Reveal>

        <div className="flex flex-col gap-24">
          {GAMES.map((game, index) => (
            <Reveal key={game.slug} delay={index * 0.1}>
              <GameShowcaseRow game={game} reverse={index % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </Container>
    </main>
  );
}
