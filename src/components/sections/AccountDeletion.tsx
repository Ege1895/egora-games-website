"use client";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { CONTACT_INFO } from "@/lib/constants";

export function AccountDeletion() {
  const { t } = useLocale();
  const d = t.accountDeletion;

  return (
    <section className="py-20 sm:py-28">
      <Container className="mx-auto flex max-w-3xl flex-col gap-6">
        <div className="flex flex-col items-start gap-4 text-left">
          <Eyebrow>{d.eyebrow}</Eyebrow>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {d.title}
          </h1>
        </div>

        <p className="text-lg text-foreground-muted">{d.intro}</p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">
          {d.memberSectionTitle}
        </h2>
        <ol className="flex flex-col gap-3">
          {d.steps.map((step, index) => (
            <li key={index} className="flex gap-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border-hi text-sm font-semibold text-foreground">
                {index + 1}
              </span>
              <span className="pt-0.5 text-foreground-muted">{step}</span>
            </li>
          ))}
        </ol>

        <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-border bg-background-elevated p-6">
          <div>
            <h3 className="font-semibold text-foreground">
              {d.dataDeletedTitle}
            </h3>
            <p className="mt-1 text-sm text-foreground-muted">
              {d.dataDeletedText}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">
              {d.dataRetainedTitle}
            </h3>
            <p className="mt-1 text-sm text-foreground-muted">
              {d.dataRetainedText}
            </p>
          </div>
        </div>

        <h2 className="mt-6 text-2xl font-bold text-foreground">
          {d.adminSectionTitle}
        </h2>
        <p className="text-foreground-muted">
          {d.adminTextBefore}
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-primary underline-offset-4 hover:underline"
          >
            {CONTACT_INFO.email}
          </a>
          {d.adminTextAfter}
        </p>
      </Container>
    </section>
  );
}
