import { Badge } from "@/components/ui/Badge";
import { Platform } from "@/types";

export function PlatformBadges({ platforms }: { platforms: Platform[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {platforms.map((platform) => (
        <Badge key={platform}>{platform}</Badge>
      ))}
    </div>
  );
}
