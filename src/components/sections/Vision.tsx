"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { useLocale } from "@/lib/i18n/LocaleContext";

export function Vision() {
  const { t } = useLocale();

  return (
    <section className="py-24 sm:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-background-elevated">
          <Image
            src="/images/studio/vision.webp"
            alt="Egora Games studio"
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal delay={0.15} className="flex flex-col gap-6">
          <Eyebrow>{t.vision.badge}</Eyebrow>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            {t.vision.title}
          </h2>
          <p className="text-foreground-muted">{t.vision.description}</p>
        </Reveal>
      </Container>
    </section>
  );
}
