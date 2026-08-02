"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Container } from "@/components/ui/Container";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
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
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              src="/images/brand/logo.png"
              alt={SITE_NAME}
              width={200}
              height={102}
              priority
              className="h-16 w-auto rounded-lg"
            />
          </Link>

          <ul className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-base font-semibold text-foreground-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageToggle />
            <ThemeToggle />
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
                className="rounded-lg px-3 py-3 text-base font-semibold text-foreground-muted transition-colors hover:bg-background-elevated hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-3">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
