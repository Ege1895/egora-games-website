"use client";

import { motion } from "framer-motion";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GradientBackdrop } from "@/components/ui/GradientBackdrop";
import { CONTACT_INFO, FORMSPREE_ENDPOINT, SOCIAL_LINKS } from "@/lib/constants";

const SOCIAL_ITEMS = [
  { label: "Twitter", href: SOCIAL_LINKS.twitter },
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin },
  { label: "YouTube", href: SOCIAL_LINKS.youtube },
  { label: "Discord", href: SOCIAL_LINKS.discord },
];

export function ContactSection() {
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
            <Badge>Contact</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Let&apos;s talk
            </h1>
            <p className="max-w-md text-lg text-foreground-muted">
              Whether it&apos;s press, partnerships, or just to say hi — we&apos;d
              love to hear from you.
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
              {CONTACT_INFO.address}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
              Follow us
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

        <motion.form
          action={FORMSPREE_ENDPOINT}
          method="POST"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col gap-5 rounded-3xl border border-border bg-background-elevated p-8"
        >
          {/* TODO: FORMSPREE_ENDPOINT (lib/constants.ts) gerçek form ID'siyle değiştirilecek */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted focus:border-primary focus:outline-none"
              placeholder="Your name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted focus:border-primary focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-sm font-medium text-foreground">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted focus:border-primary focus:outline-none"
              placeholder="What's this about?"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted focus:border-primary focus:outline-none"
              placeholder="Tell us more..."
            />
          </div>

          <Button type="submit" className="mt-2 w-full">
            Send Message
          </Button>
        </motion.form>
      </Container>
    </section>
  );
}
