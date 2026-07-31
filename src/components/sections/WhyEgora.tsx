import {
  SparklesIcon,
  UsersIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

const REASONS = [
  {
    icon: SparklesIcon,
    title: "Craft-first design",
    description:
      "Every system, every level, every line of dialogue is iterated until it feels right.",
  },
  {
    icon: UsersIcon,
    title: "Player-driven development",
    description:
      "We build alongside our community through playtests and open feedback loops.",
  },
  {
    icon: RocketLaunchIcon,
    title: "Ambitious, focused scope",
    description:
      "Small, senior teams shipping fewer games at a much higher bar.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Sustainable studio culture",
    description:
      "Reasonable crunch policies and long-term thinking over short-term hype.",
  },
];

export function WhyEgora() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-background-elevated py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-accent/10 blur-[120px]"
      />
      <Container className="relative flex flex-col gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Why Egora Games"
            title="What sets us apart"
            description="A few principles that guide how we build games and run our studio."
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 0.1}>
              <Card className="group flex h-full flex-col gap-4 bg-background transition-transform hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <reason.icon aria-hidden className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="text-sm text-foreground-muted">
                  {reason.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
