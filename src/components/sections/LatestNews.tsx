import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NewsCard } from "@/components/ui/NewsCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { NEWS_ITEMS } from "@/lib/mock-news";

export function LatestNews() {
  return (
    <section className="border-t border-border bg-background-elevated py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="News"
            title="Latest News"
            description="Updates from our games, our team, and our studio."
          />
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {NEWS_ITEMS.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.1}>
              <NewsCard item={item} />
            </Reveal>
          ))}
        </div>

        <Reveal className="flex justify-center">
          <Button href="/news" variant="secondary">
            View All News
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
