import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  CONTACT_INFO,
  FOOTER_LINKS,
  NAV_LINKS,
  SITE_NAME,
  SOCIAL_LINKS,
} from "@/lib/constants";

const SOCIAL_ITEMS = [
  { label: "Twitter", href: SOCIAL_LINKS.twitter },
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin },
  { label: "YouTube", href: SOCIAL_LINKS.youtube },
  { label: "Discord", href: SOCIAL_LINKS.discord },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background-elevated">
      <Container className="border-b border-border py-12">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-border bg-background px-8 py-10 text-center lg:flex-row lg:text-left">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Find out about new games
            </h2>
            <p className="mt-2 text-sm text-foreground-muted">
              Subscribe to get updated on future releases and studio news.
            </p>
          </div>
          {/* TODO: Faz 5 — Formspree/Web3Forms endpoint'i ile bağlanacak */}
          <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <label htmlFor="footer-email" className="sr-only">
              E-posta adresiniz
            </label>
            <input
              id="footer-email"
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-full border border-border bg-background-elevated px-5 py-3 text-sm text-foreground placeholder:text-foreground-muted focus:border-primary focus:outline-none"
            />
            <Button type="submit" className="shrink-0">
              Subscribe
            </Button>
          </form>
        </div>
      </Container>

      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <span className="text-xl font-bold text-foreground">{SITE_NAME}</span>
          <p className="text-sm text-foreground-muted">
            {/* TODO: gerçek şirket açıklaması eklenecek */}
            Premium oyun deneyimleri tasarlıyoruz.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-foreground">Navigasyon</h3>
          {NAV_LINKS.map((link) => (
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
          <h3 className="text-sm font-semibold text-foreground">İletişim</h3>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-sm text-foreground-muted transition-colors hover:text-foreground"
          >
            {CONTACT_INFO.email}
          </a>
          <p className="text-sm text-foreground-muted">{CONTACT_INFO.address}</p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-foreground">Sosyal</h3>
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
            &copy; {year} {SITE_NAME}. Tüm hakları saklıdır.
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
