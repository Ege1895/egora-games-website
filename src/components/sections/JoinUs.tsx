import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function JoinUs() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal className="flex flex-col items-center gap-8 rounded-3xl border border-border bg-background-elevated px-8 py-16 text-center">
          <h2 className="max-w-2xl text-3xl font-bold text-foreground sm:text-4xl">
            Join us in building what&apos;s next
          </h2>
          <p className="max-w-xl text-foreground-muted">
            We're always looking for talented, passionate people to join our
            growing studio.
          </p>
          <Button href="/careers">See Open Roles</Button>
        </Reveal>
      </Container>
    </section>
  );
}
