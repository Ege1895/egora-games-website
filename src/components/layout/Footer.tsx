"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/lib/i18n/LocaleContext";
import {
  CONTACT_INFO,
  FOOTER_LINKS,
  NEWSLETTER_API_ENDPOINT,
  SITE_NAME,
  SOCIAL_LINKS,
} from "@/lib/constants";

const SOCIAL_ITEMS = [
  { label: "Twitter", href: SOCIAL_LINKS.twitter },
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin },
  { label: "YouTube", href: SOCIAL_LINKS.youtube },
  { label: "Discord", href: SOCIAL_LINKS.discord },
];

type SubscribeStatus = "idle" | "submitting" | "success" | "error";

export function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();
  const [status, setStatus] = useState<SubscribeStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(NEWSLETTER_API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || t.footer.subscribeGenericError);
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : t.footer.subscribeGenericError
      );
    }
  }

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.games, href: "/games" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <footer className="border-t border-border bg-background-elevated">
      <Container className="border-b border-border py-12">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-border bg-background px-8 py-10 text-center lg:flex-row lg:text-left">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              {t.footer.newsletterTitle}
            </h2>
            <p className="mt-2 text-sm text-foreground-muted">
              {t.footer.newsletterDescription}
            </p>
          </div>
          {status === "success" ? (
            <div className="flex w-full max-w-md items-center justify-center gap-2 text-sm font-medium text-foreground lg:justify-start">
              <CheckCircleIcon aria-hidden className="h-5 w-5 text-primary" />
              {t.footer.subscribeSuccess}
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex w-full max-w-md flex-col gap-3"
            >
              <div className="flex w-full flex-col gap-3 sm:flex-row">
                <label htmlFor="footer-email" className="sr-only">
                  {t.footer.emailSrLabel}
                </label>
                <input
                  id="footer-email"
                  name="email"
                  type="email"
                  required
                  disabled={status === "submitting"}
                  placeholder={t.footer.emailPlaceholder}
                  className="w-full rounded-full border border-border bg-background-elevated px-5 py-3 text-sm text-foreground placeholder:text-foreground-muted focus:border-primary focus:outline-none disabled:opacity-60"
                />
                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="shrink-0"
                >
                  {status === "submitting" ? t.footer.subscribing : t.footer.subscribe}
                </Button>
              </div>
              {status === "error" && (
                <p role="alert" className="text-sm text-danger">
                  {errorMessage}
                </p>
              )}
            </form>
          )}
        </div>
      </Container>

      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Image
            src="/images/brand/logo.png"
            alt={SITE_NAME}
            width={200}
            height={102}
            loading="lazy"
            className="h-16 w-auto self-start rounded-lg"
          />
          <p className="text-sm text-foreground-muted">{t.footer.tagline}</p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-foreground">
            {t.footer.navigationHeading}
          </h3>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-foreground">
            {t.footer.contactHeading}
          </h3>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-sm text-foreground-muted transition-colors hover:text-foreground"
          >
            {CONTACT_INFO.email}
          </a>
          <p className="text-sm text-foreground-muted">{t.companyAddress}</p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-foreground">
            {t.footer.socialHeading}
          </h3>
          {SOCIAL_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-foreground-muted">
            {t.footer.rightsReserved.replace("{year}", String(year))}
          </p>
          <div className="flex gap-6">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-foreground-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
