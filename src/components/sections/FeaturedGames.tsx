import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GameCard } from "@/components/ui/GameCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { GAMES } from "@/lib/mock-games";

export function FeaturedGames() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Our Games"
            title="Featured Games"
            description="A selection of the worlds we're currently building and shipping."
          />
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {GAMES.map((game, index) => (
            <Reveal key={game.slug} delay={index * 0.1}>
              <GameCard game={game} />
            </Reveal>
          ))}
        </div>

        <Reveal className="flex justify-center">
          <Button href="/games" variant="secondary">
            View All Games
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
