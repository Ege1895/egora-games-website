"use client";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { GradientBackdrop } from "@/components/ui/GradientBackdrop";
import { useLocale } from "@/lib/i18n/LocaleContext";

export default function NotFound() {
  const { t } = useLocale();

  return (
    <main className="flex flex-1 flex-col">
      <section className="relative flex flex-1 items-center overflow-hidden py-24 sm:py-32">
        <GradientBackdrop />
        <Container className="relative flex flex-col items-center gap-6 text-center">
          <Eyebrow>{t.notFound.eyebrow}</Eyebrow>
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            {t.notFound.title}
          </h1>
          <p className="max-w-md text-lg text-foreground-muted">
            {t.notFound.description}
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <Button href="/">{t.notFound.homeButton}</Button>
            <Button href="/games" variant="secondary">
              {t.notFound.gamesButton}
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
