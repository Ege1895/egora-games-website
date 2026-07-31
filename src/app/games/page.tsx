import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GameCard } from "@/components/ui/GameCard";
import { Reveal } from "@/components/ui/Reveal";
import { GAMES } from "@/lib/mock-games";

export default function GamesPage() {
  return (
    <main className="flex flex-1 flex-col py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Our Games"
            title="All Games"
            description="Every world we're currently building, from early prototypes to shipped titles."
          />
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {GAMES.map((game, index) => (
            <Reveal key={game.slug} delay={index * 0.1}>
              <GameCard game={game} />
            </Reveal>
          ))}
        </div>
      </Container>
    </main>
  );
}
