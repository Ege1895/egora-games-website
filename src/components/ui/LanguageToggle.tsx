"use client";

import { useLocale } from "@/lib/i18n/LocaleContext";
import { cn } from "@/lib/utils";

const OPTIONS: { code: "en" | "tr"; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "tr", label: "TR" },
];

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-background-elevated p-1",
        className
      )}
    >
      {OPTIONS.map((option) => (
        <button
          key={option.code}
          type="button"
          onClick={() => setLocale(option.code)}
          aria-pressed={locale === option.code}
          className={cn(
            "rounded-full px-3 py-1.5 text-sm font-semibold transition-colors",
            locale === option.code
              ? "bg-primary text-white"
              : "text-foreground-muted hover:text-foreground"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
