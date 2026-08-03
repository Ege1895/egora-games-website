"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { GradientBackdrop } from "@/components/ui/GradientBackdrop";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { CONTACT_API_ENDPOINT, CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";

const SOCIAL_ITEMS = [
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin },
  { label: "YouTube", href: SOCIAL_LINKS.youtube },
  { label: "Instagram", href: SOCIAL_LINKS.instagram },
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const { t } = useLocale();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(CONTACT_API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || t.contact.genericError);
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : t.contact.genericError);
    }
  }

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <GradientBackdrop />
      <Container className="relative grid gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <Eyebrow>{t.contact.badge}</Eyebrow>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {t.contact.title}
            </h1>
            <p className="max-w-md text-lg text-foreground-muted">
              {t.contact.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4 rounded-2xl border border-border bg-background-elevated p-6"
          >
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
            >
              <EnvelopeIcon aria-hidden className="h-5 w-5 text-primary" />
              {CONTACT_INFO.email}
            </a>
            <div className="flex items-center gap-3 text-foreground-muted">
              <MapPinIcon aria-hidden className="h-5 w-5 text-primary" />
              {t.companyAddress}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
              {t.contact.followUs}
            </h2>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border px-4 py-2 text-sm text-foreground-muted transition-colors hover:border-primary hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-3xl border border-border bg-background-elevated p-8"
        >
          {status === "success" ? (
            <div className="flex flex-col items-center gap-4 py-12 text-center">
              <CheckCircleIcon aria-hidden className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold text-foreground">
                {t.contact.successTitle}
              </h3>
              <p className="text-sm text-foreground-muted">
                {t.contact.successDescription}
              </p>
              <Button variant="secondary" onClick={() => setStatus("idle")}>
                {t.contact.sendAnother}
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <Input
                id="name"
                name="name"
                type="text"
                required
                disabled={status === "submitting"}
                label={t.contact.formNameLabel}
                placeholder={t.contact.formNamePlaceholder}
              />

              <Input
                id="email"
                name="email"
                type="email"
                required
                disabled={status === "submitting"}
                label={t.contact.formEmailLabel}
                placeholder={t.contact.formEmailPlaceholder}
              />

              <Input
                id="subject"
                name="subject"
                type="text"
                required
                disabled={status === "submitting"}
                label={t.contact.formSubjectLabel}
                placeholder={t.contact.formSubjectPlaceholder}
              />

              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                disabled={status === "submitting"}
                label={t.contact.formMessageLabel}
                placeholder={t.contact.formMessagePlaceholder}
              />

              {status === "error" && (
                <p role="alert" className="text-sm text-danger">
                  {errorMessage}
                </p>
              )}

              <Button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 w-full"
              >
                {status === "submitting" ? t.contact.sending : t.contact.sendMessage}
              </Button>
            </form>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
