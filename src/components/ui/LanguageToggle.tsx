"use client";

import { useLocale } from "@/lib/i18n/LocaleContext";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();
  const prefersReducedMotion = usePrefersReducedMotion();
  const isTr = locale === "tr";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isTr}
      aria-label="Toggle language"
      onClick={() => setLocale(isTr ? "en" : "tr")}
      className={cn(
        "relative inline-flex h-10 w-[68px] shrink-0 items-center rounded-full border border-border-hi bg-surface-hi p-1",
        className
      )}
    >
      <span
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-full bg-primary font-mono text-xs font-semibold text-white shadow-1",
          !prefersReducedMotion && "transition-transform duration-200 ease-out",
          isTr ? "translate-x-7" : "translate-x-0"
        )}
      >
        {isTr ? "TR" : "EN"}
      </span>
    </button>
  );
}
