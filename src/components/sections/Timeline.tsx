"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { useLocale } from "@/lib/i18n/LocaleContext";

export function Timeline() {
  const { t } = useLocale();

  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <Reveal>
          <SectionHeading
            eyebrow={t.timeline.eyebrow}
            title={t.timeline.title}
            description={t.timeline.description}
          />
        </Reveal>

        <div className="relative flex flex-col gap-10">
          {/* Dikey çizgi: nokta genişliğinin (w-6 = 24px) tam ortasında,
              left-3 = 12px — dot'ların left-0 konumuyla matematiksel olarak
              hizalı, ekran boyutuna göre kayan ayrı sabitler yok. */}
          <div aria-hidden className="absolute bottom-0 left-3 top-0 w-px bg-border" />
          {t.timeline.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1} className="relative pl-10">
              <span className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-background">
                <span className="h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-sm font-semibold uppercase tracking-wide text-accent-ink">
                {item.year}
              </span>
              <h3 className="mt-1 text-xl font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-1 text-foreground-muted">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
