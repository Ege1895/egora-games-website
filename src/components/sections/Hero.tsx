"use client";

import { motion } from "framer-motion";
import {
  PlayCircleIcon,
  StarIcon,
  DevicePhoneMobileIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { GradientBackdrop } from "@/components/ui/GradientBackdrop";
import { useLocale } from "@/lib/i18n/LocaleContext";

export function Hero() {
  const { t } = useLocale();

  const stats = [
    { icon: PlayCircleIcon, label: t.hero.statGamesLabel, value: "2" },
    {
      icon: DevicePhoneMobileIcon,
      label: t.hero.statPlatformsLabel,
      value: "iOS & Android",
    },
    { icon: CalendarIcon, label: t.hero.statFoundedLabel, value: "2026" },
  ];

  return (
    <section className="relative overflow-hidden border-b border-border py-20 sm:py-28">
      <GradientBackdrop />

      <Container className="relative grid items-center gap-16 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge>{t.hero.badge}</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl text-5xl font-bold tracking-tight text-foreground sm:text-6xl"
          >
            {t.hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md text-lg text-foreground-muted"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button href="/games">{t.hero.exploreGames}</Button>
            <Button href="/about" variant="secondary">
              {t.hero.aboutStudio}
            </Button>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 grid grid-cols-3 gap-6 border-t border-border pt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <stat.icon aria-hidden className="h-5 w-5 text-accent" />
                <dt className="text-2xl font-bold text-foreground">
                  {stat.value}
                </dt>
                <dd className="text-xs text-foreground-muted">{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative aspect-square w-full max-w-lg justify-self-center"
        >
          {/*
            TODO: gerçek oyun/karakter görseliyle (hero illustration veya key art)
            değiştirilecek. Şimdilik marka rengiyle soyut bir kompozisyon.
          */}
          <div className="absolute inset-0 rounded-[2.5rem] border border-border bg-gradient-to-br from-primary/30 via-background-elevated to-accent/20" />
          <div className="absolute inset-8 rounded-[2rem] border border-border/60 bg-background-elevated/60 backdrop-blur-sm" />
          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40 blur-3xl" />
          <div className="absolute bottom-10 left-10 flex items-center gap-2 rounded-2xl border border-border bg-background/90 px-4 py-3 shadow-lg backdrop-blur">
            <StarIcon aria-hidden className="h-5 w-5 text-accent" />
            <span className="text-sm font-semibold text-foreground">
              {t.hero.keyArtPlaceholder}
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
