"use client";

import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "@/lib/theme/ThemeContext";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const prefersReducedMotion = usePrefersReducedMotion();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isLight}
      aria-label="Toggle color theme"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className={cn(
        "relative inline-flex h-10 w-[68px] shrink-0 items-center rounded-full border border-border-hi bg-surface-hi p-1",
        className
      )}
    >
      <span
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-1",
          !prefersReducedMotion && "transition-transform duration-200 ease-out",
          isLight ? "translate-x-7" : "translate-x-0"
        )}
      >
        {isLight ? (
          <SunIcon aria-hidden className="h-4 w-4" />
        ) : (
          <MoonIcon aria-hidden className="h-4 w-4" />
        )}
      </span>
    </button>
  );
}
