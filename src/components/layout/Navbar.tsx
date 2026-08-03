"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Container } from "@/components/ui/Container";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLocale();
  const pathname = usePathname();

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.games, href: "/games" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.contact, href: "/contact" },
  ];

  // "/games" linki /games/nublox gibi alt sayfalarda da aktif görünmeli
  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname?.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <Container>
        <nav
          aria-label={t.nav.mainNav}
          className="flex h-20 items-center justify-between"
        >
          <Link href="/" onClick={() => setIsOpen(false)}>
            <BrandLogo priority className="h-16 w-auto" />
          </Link>

          <ul className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative py-1 text-base font-semibold transition-colors",
                      active
                        ? "text-foreground"
                        : "text-foreground-muted hover:text-foreground",
                      "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:content-['']",
                      active ? "after:scale-x-100" : "hover:after:scale-x-100"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
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
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-lg px-3 py-3 text-base font-semibold transition-colors",
                    active
                      ? "bg-primary-soft text-foreground"
                      : "text-foreground-muted hover:bg-background-elevated hover:text-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
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
