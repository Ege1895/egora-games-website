import type { LocalizedText } from "@/lib/i18n/types";

export type Platform = "PC" | "PlayStation" | "Xbox" | "Nintendo Switch" | "Mobile";

export type Game = {
  slug: string;
  title: string; // proper noun — not translated
  tagline: LocalizedText;
  description: LocalizedText;
  coverImage: string;
  bannerImage: string;
  // Mağaza ekran görüntüleri dile göre değişir (TR arayüz metni farklı) —
  // her locale kendi ekran görüntü setini tutar.
  screenshots: { en: string[]; tr: string[] };
  trailerUrl?: string;
  genre: LocalizedText;
  platforms: Platform[];
  features: LocalizedText[];
  // url yoksa mağazada "Coming Soon" (inceleme/test sürecinde) olarak gösterilir
  storeLinks: {
    label: string; // "App Store" / "Google Play" — proper noun, not translated
    url?: string;
  }[];
};
