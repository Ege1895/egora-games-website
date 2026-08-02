import Image from "next/image";
import { cn } from "@/lib/utils";

type StorePlatform = "app-store" | "google-play";

function detectPlatform(label: string): StorePlatform {
  return label.toLowerCase().includes("google") ? "google-play" : "app-store";
}

const BADGE_SRC: Record<StorePlatform, { download: string; comingSoon: string }> = {
  "app-store": {
    download: "/images/store-badges/app-store-download.png",
    comingSoon: "/images/store-badges/app-store-coming-soon.png",
  },
  "google-play": {
    download: "/images/store-badges/google-play-download.png",
    comingSoon: "/images/store-badges/google-play-coming-soon.png",
  },
};

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
  const src = url ? BADGE_SRC[platform].download : BADGE_SRC[platform].comingSoon;
  const alt = url ? label : `${label}: ${comingSoonLabel}`;

  const badge = (
    <Image
      src={src}
      alt={alt}
      width={480}
      height={320}
      loading="lazy"
      className="h-20 w-auto"
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
