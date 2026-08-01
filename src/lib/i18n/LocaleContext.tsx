"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Dictionary, Locale } from "./types";
import { en } from "./en";
import { tr } from "./tr";

const DICTIONARIES: Record<Locale, Dictionary> = { en, tr };
const STORAGE_KEY = "egora-locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    // Bilinçli olarak effect içinde setState: sunucu/ilk istemci render'ı
    // her zaman "en" ile eşleşmeli (hydration mismatch olmasın diye),
    // localStorage'daki gerçek tercih ancak hydration TAMAMLANDIKTAN sonra
    // uygulanabilir.
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "tr") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocaleState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  function setLocale(next: Locale) {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  const value = useMemo(
    () => ({ locale, setLocale, t: DICTIONARIES[locale] }),
    [locale]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
