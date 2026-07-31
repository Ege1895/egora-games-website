import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { TECH_STACK } from "@/lib/mock-about";

export function Technology() {
  return (
    <section className="border-t border-border bg-background-elevated py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-8 text-center">
        <Reveal className="flex flex-col items-center gap-4">
          <Badge>Technology</Badge>
          <h2 className="max-w-2xl text-3xl font-bold text-foreground sm:text-4xl">
            Built with tools that scale with our ambition
          </h2>
          <p className="max-w-xl text-foreground-muted">
            We pick proven, industry-standard tools so our team can focus on
            craft instead of infrastructure.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-wrap justify-center gap-3">
          {TECH_STACK.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-background px-5 py-2 text-sm font-medium text-foreground"
            >
              {tech}
            </span>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
