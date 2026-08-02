import Image from "next/image";
import { cn } from "@/lib/utils";

type StorePlatform = "app-store" | "google-play";

function detectPlatform(label: string): StorePlatform {
  return label.toLowerCase().includes("google") ? "google-play" : "app-store";
}

// Her PNG farklı doğal genişliğe sahip (metne göre) ama hepsi aynı yüksekliğe
// (240px) kırpılıp normalize edildi — bu yüzden aspect ratio görsel başına
// ayrı tanımlanıyor, className'deki sabit yükseklik hepsini aynı boyda gösteriyor.
const BADGE_SRC: Record<
  StorePlatform,
  { download: { src: string; width: number }; comingSoon: { src: string; width: number } }
> = {
  "app-store": {
    download: { src: "/images/store-badges/app-store-download.png", width: 689 },
    comingSoon: { src: "/images/store-badges/app-store-coming-soon.png", width: 651 },
  },
  "google-play": {
    download: { src: "/images/store-badges/google-play-download.png", width: 666 },
    comingSoon: { src: "/images/store-badges/google-play-coming-soon.png", width: 616 },
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
  const platform = detectPlatform(label);
  const variant = url ? BADGE_SRC[platform].download : BADGE_SRC[platform].comingSoon;
  const alt = url ? label : `${label}: ${comingSoonLabel}`;

  const badge = (
    <Image
      src={variant.src}
      alt={alt}
      width={variant.width}
      height={BADGE_HEIGHT}
      loading="lazy"
      className="h-24 w-auto"
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
