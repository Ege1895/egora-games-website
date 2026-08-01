"use client";

import { Badge } from "@/components/ui/Badge";
import { Platform } from "@/types";
import { useLocale } from "@/lib/i18n/LocaleContext";

export function PlatformBadges({ platforms }: { platforms: Platform[] }) {
  const { t } = useLocale();

  return (
    <div className="flex flex-wrap gap-2">
      {platforms.map((platform) => (
        <Badge key={platform}>{t.platform[platform]}</Badge>
      ))}
    </div>
  );
}
