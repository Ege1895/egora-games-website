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

        <div className="relative flex flex-col gap-10 border-l border-border pl-8 sm:pl-12">
          {t.timeline.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1} className="relative">
              <span className="absolute -left-[2.6rem] top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-background sm:-left-[3.6rem]">
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
