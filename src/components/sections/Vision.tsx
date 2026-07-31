import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export function Vision() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-background-elevated">
          <Image
            src="/images/studio/vision.webp"
            alt="Egora Games stüdyo görseli"
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal delay={0.15} className="flex flex-col gap-6">
          <Badge>Our Vision</Badge>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Building the next generation of memorable games
          </h2>
          <p className="text-foreground-muted">
            {/* TODO: gerçek vizyon metni eklenecek */}
            We believe great games come from small, empowered teams who care
            deeply about craft, story, and player experience. Our goal is to
            build a studio that lasts for decades, not just ship a single
            hit.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
