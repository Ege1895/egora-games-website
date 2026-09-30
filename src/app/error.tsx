"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GradientBackdrop } from "@/components/ui/GradientBackdrop";
import { useLocale } from "@/lib/i18n/LocaleContext";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { t } = useLocale();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-1 flex-col">
      <section className="relative flex flex-1 items-center overflow-hidden py-24 sm:py-32">
        <GradientBackdrop />
        <Container className="relative flex flex-col items-center gap-6 text-center">
          <span className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-danger">
            {t.errorPage.eyebrow}
          </span>
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            {t.errorPage.title}
          </h1>
          <p className="max-w-md text-lg text-foreground-muted">
            {t.errorPage.description}
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <Button onClick={() => reset()}>{t.errorPage.retryButton}</Button>
            <Button href="/" variant="secondary">
              {t.errorPage.homeButton}
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
