import type { LocalizedText } from "@/lib/i18n/types";

export type Platform = "PC" | "PlayStation" | "Xbox" | "Nintendo Switch" | "Mobile";

export type Game = {
  slug: string;
  // Belirtilmezse "game". Oyun olmayan ürünler (örn. Egoractive) için "app":
  // VideoGame JSON-LD'si üretilmez, kategori BusinessApplication olur.
  kind?: "game" | "app";
  // "phone" (varsayılan): ham ekran görüntüsü iPhone çerçevesine konur.
  // "flat": görsel zaten çerçeveli/pazarlama tasarımı, çerçevesiz kartta gösterilir.
  screenshotStyle?: "phone" | "flat";
  title: string; // proper noun — not translated
  tagline: LocalizedText;
  description: LocalizedText;
  coverImage: string;
  bannerImage: string;
  // Belirtilmezse site genelindeki varsayılan OG görseline düşer (bkz. seo.ts)
  ogImage?: string;
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
