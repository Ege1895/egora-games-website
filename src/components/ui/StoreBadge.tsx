"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/theme/ThemeContext";

type StorePlatform = "app-store" | "google-play";

function detectPlatform(label: string): StorePlatform {
  return label.toLowerCase().includes("google") ? "google-play" : "app-store";
}

// Rozetler beyaz/transparan (dark) ve siyah/transparan (light) olmak üzere iki
// ayrı çizimle geliyor — her biri kendi temasında görünür olacak şekilde
// tasarlandı, bu yüzden light modda light varyantı, dark modda dark varyantı
// gösteriliyor. Sekiz PNG de aynı script ile aynı yükseklikte (240px) ve pil
// sınırının kutuya oranı birebir aynı (%86 dolgu) olacak şekilde yeniden
// kırpıldı, bu yüzden hepsi className'deki tek bir sabit yükseklikle (h-24)
// gösterildiğinde aynı görsel ağırlıkta (kenarlık kalınlığı, köşe yarıçapı,
// boşluk oranı) görünüyor — genişlik metne göre doğal olarak değişiyor.
const BADGE_SRC: Record<
  StorePlatform,
  {
    download: Record<"dark" | "light", { src: string; width: number }>;
    comingSoon: Record<"dark" | "light", { src: string; width: number }>;
  }
> = {
  "app-store": {
    download: {
      dark: { src: "/images/store-badges/app-store-download-dark.png", width: 738 },
      light: { src: "/images/store-badges/app-store-download-light.png", width: 790 },
    },
    comingSoon: {
      dark: { src: "/images/store-badges/app-store-coming-soon-dark.png", width: 669 },
      light: { src: "/images/store-badges/app-store-coming-soon-light.png", width: 768 },
    },
  },
  "google-play": {
    download: {
      dark: { src: "/images/store-badges/google-play-download-dark.png", width: 701 },
      light: { src: "/images/store-badges/google-play-download-light.png", width: 729 },
    },
    comingSoon: {
      dark: { src: "/images/store-badges/google-play-coming-soon-dark.png", width: 629 },
      light: { src: "/images/store-badges/google-play-coming-soon-light.png", width: 749 },
    },
  },
};

const BADGE_HEIGHT = 240;

export function StoreBadge({
  label,
  url,
  comingSoonLabel,
  className,
}: {
  label: string;
  url?: string;
  comingSoonLabel?: string;
  className?: string;
}) {
  const { theme } = useTheme();
  const platform = detectPlatform(label);
  const badgeType = url ? "download" : "comingSoon";
  const variant = BADGE_SRC[platform][badgeType][theme];
  const alt = url ? label : `${label}: ${comingSoonLabel}`;

  const badge = (
    <Image
      src={variant.src}
      alt={alt}
      width={variant.width}
      height={BADGE_HEIGHT}
      loading="lazy"
      className="h-16 w-auto"
    />
  );

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex transition-transform hover:-translate-y-0.5",
          className
        )}
      >
        {badge}
      </a>
    );
  }

  return (
    <div className={cn("inline-flex", className)} role="img" aria-label={alt}>
      {badge}
    </div>
  );
}
