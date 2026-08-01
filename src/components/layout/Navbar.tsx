"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Container } from "@/components/ui/Container";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { SITE_NAME } from "@/lib/constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLocale();

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.games, href: "/games" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <Container>
        <nav
          aria-label={t.nav.mainNav}
          className="flex h-20 items-center justify-between"
        >
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-foreground"
            onClick={() => setIsOpen(false)}
          >
            {SITE_NAME}
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <LanguageToggle />
          </div>

          <button
            type="button"
            className="text-foreground lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </nav>
      </Container>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-border lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground-muted transition-colors hover:bg-background-elevated hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <LanguageToggle className="mt-2" />
          </Container>
        </div>
      )}
    </header>
  );
}
