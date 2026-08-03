"use client";

import Image from "next/image";
import { useTheme } from "@/lib/theme/ThemeContext";
import { SITE_NAME } from "@/lib/constants";

// logo3-dark: beyaz/mavi, koyu zeminler için. logo3-light: koyu lacivert/mavi,
// açık zeminler için. İkisi de aynı oranda kırpıldı (bkz. crop script) —
// tema değişince kutu boyutu sabit kalır, sadece görsel değişir.
const LOGO_SRC = {
  dark: { src: "/images/brand/logo3-dark.png", width: 1094, height: 427 },
  light: { src: "/images/brand/logo3-light.png", width: 1036, height: 404 },
} as const;

export function BrandLogo({
  className,
  priority,
  loading,
}: {
  className?: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
}) {
  const { theme } = useTheme();
  const variant = LOGO_SRC[theme];

  return (
    <Image
      src={variant.src}
      alt={SITE_NAME}
      width={variant.width}
      height={variant.height}
      priority={priority}
      loading={priority ? undefined : loading}
      className={className}
    />
  );
}
