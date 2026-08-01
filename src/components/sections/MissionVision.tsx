"use client";

import { RocketLaunchIcon, EyeIcon } from "@heroicons/react/24/outline";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { useLocale } from "@/lib/i18n/LocaleContext";

export function MissionVision() {
  const { t } = useLocale();

  return (
    <section className="py-24 sm:py-32">
      <Container className="grid gap-8 lg:grid-cols-2">
        <Reveal className="flex flex-col gap-4 rounded-3xl border border-border bg-background-elevated p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <RocketLaunchIcon aria-hidden className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">
            {t.missionVision.missionTitle}
          </h2>
          <p className="text-foreground-muted">{t.missionVision.missionText}</p>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-4 rounded-3xl border border-border bg-background-elevated p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <EyeIcon aria-hidden className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">
            {t.missionVision.visionTitle}
          </h2>
          <p className="text-foreground-muted">{t.missionVision.visionText}</p>
        </Reveal>
      </Container>
    </section>
  );
}
