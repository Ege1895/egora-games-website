"use client";

import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/24/solid";
import { Game } from "@/types";
import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/i18n/LocaleContext";
import type { Dictionary } from "@/lib/i18n/types";

function storeSublabel(label: string, t: Dictionary) {
  if (label.toLowerCase().includes("app store"))
    return t.gameShowcase.storeSublabelAppStore;
  if (label.toLowerCase().includes("google play"))
    return t.gameShowcase.storeSublabelGooglePlay;
  return t.gameShowcase.storeSublabelGeneric;
}

export function GameShowcaseRow({
  game,
  reverse = false,
}: {
  game: Game;
  reverse?: boolean;
}) {
  const { locale, t } = useLocale();
  const thumbnails = game.screenshots.slice(0, 2);
  const isLive = game.storeLinks.some((link) => link.url);

  return (
    <div className={cn("relative", reverse && "lg:flex lg:justify-end")}>
      <div className="relative lg:w-[85%]">
        {/* Ana key art görseli */}
        <Link
          href={`/games/${game.slug}`}
          className="group relative block aspect-[16/9] overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/30 via-background-elevated to-accent/20 lg:ml-24"
        >
          <Image
            src={game.bannerImage}
            alt={`${game.title} key art`}
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <span className="absolute bottom-6 left-6 text-3xl font-extrabold uppercase tracking-wide text-foreground drop-shadow-lg sm:text-4xl">
            {game.title}
          </span>
        </Link>

        {/* Bilgi kartı: sol üstte, görselin üzerine taşan */}
        <div className="relative z-10 -mt-16 flex max-w-md flex-col gap-3 rounded-2xl border border-primary/40 bg-primary p-6 text-white shadow-xl sm:-mt-20 lg:absolute lg:left-0 lg:top-0 lg:mt-0">
          <div className="flex items-start gap-4">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-white/20 bg-white/10">
              <Image
                src={game.coverImage}
                alt=""
                fill
                loading="lazy"
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold leading-tight">
                {game.title}
              </h3>
              {/* Yayınlanmamış oyunlarda puan gösterilmiyor. TODO: gerçek kullanıcı puanı bağlanacak */}
              {isLive && (
                <div
                  className="flex items-center gap-0.5"
                  aria-label={t.gameShowcase.ratingSrLabel}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon
                      key={i}
                      aria-hidden
                      className={cn(
                        "h-3.5 w-3.5",
                        i < 4 ? "text-accent" : "text-white/30"
                      )}
                    />
                  ))}
                  <span className="ml-1 text-xs text-white">(TODO)</span>
                </div>
              )}
            </div>
          </div>

          <p className="text-sm text-white">{game.description[locale]}</p>

          <Link
            href={`/games/${game.slug}`}
            className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
          >
            {t.gameShowcase.readMore}
          </Link>
        </div>

        {/* Ekran görüntüsü thumbnail'ları: görselin sağ alt köşesine taşan */}
        {thumbnails.length > 0 && (
          <div className="mt-4 flex justify-end gap-3 pr-2 lg:absolute lg:bottom-4 lg:right-4 lg:mt-0">
            {thumbnails.map((shot, i) => (
              <div
                key={shot}
                className={cn(
                  "relative h-20 w-28 overflow-hidden rounded-xl border border-border shadow-lg sm:h-24 sm:w-36",
                  i === 1 && "hidden sm:block"
                )}
              >
                <Image
                  src={shot}
                  alt={`${game.title} screenshot`}
                  fill
                  loading="lazy"
                  sizes="144px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* Mağaza linkleri — canlı olan tıklanabilir, olmayan "Coming Soon" olarak gösterilir */}
        {game.storeLinks.length > 0 && (
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-wide text-foreground-muted">
              {t.gameShowcase.downloadNowAt}
            </span>
            {game.storeLinks.map((link) =>
              link.url ? (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-border bg-background-elevated px-4 py-2 text-foreground transition-colors hover:border-primary"
                >
                  <span className="flex flex-col leading-tight">
                    <span className="text-[10px] text-foreground-muted">
                      {storeSublabel(link.label, t)}
                    </span>
                    <span className="text-sm font-semibold">{link.label}</span>
                  </span>
                </a>
              ) : (
                <span
                  key={link.label}
                  aria-label={`${link.label}: ${t.gameShowcase.comingSoon}`}
                  className="flex items-center gap-2 rounded-xl border border-dashed border-border px-4 py-2 text-foreground-muted"
                >
                  <span className="flex flex-col leading-tight">
                    <span className="text-[10px]">
                      {t.gameShowcase.comingSoon}
                    </span>
                    <span className="text-sm font-semibold">{link.label}</span>
                  </span>
                </span>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
