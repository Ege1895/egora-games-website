"use client";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { TECH_STACK } from "@/lib/mock-about";
import { TECH_ICONS } from "@/components/ui/TechIcon";

export function Technology() {
  const { t } = useLocale();

  return (
    <section className="border-t border-border bg-background-elevated py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-8 text-center">
        <Reveal className="flex flex-col items-center gap-4">
          <Eyebrow>{t.technology.badge}</Eyebrow>
          <h2 className="max-w-2xl text-3xl font-bold text-foreground sm:text-4xl">
            {t.technology.title}
          </h2>
          <p className="max-w-xl text-foreground-muted">
            {t.technology.description}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-wrap justify-center gap-3">
          {TECH_STACK.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2 text-sm font-medium text-foreground"
            >
              {TECH_ICONS[tech]}
              {tech}
            </span>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
