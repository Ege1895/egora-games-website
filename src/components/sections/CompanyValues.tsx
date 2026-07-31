import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { VALUES } from "@/lib/mock-about";

export function CompanyValues() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-background-elevated py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-primary/10 blur-[120px]"
      />
      <Container className="relative flex flex-col gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Company Values"
            title="What we believe in"
            description="The principles that shape every decision we make as a studio."
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.1}>
              <Card className="flex h-full flex-col gap-3 bg-background transition-transform hover:-translate-y-1">
                <span className="text-3xl font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-foreground-muted">
                  {value.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
