"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GradientBackdrop } from "@/components/ui/GradientBackdrop";
import { useLocale } from "@/lib/i18n/LocaleContext";

export function AboutHero() {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden border-b border-border py-20 sm:py-28">
      <GradientBackdrop />
      <Container className="relative grid items-center gap-16 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow>{t.aboutHero.badge}</Eyebrow>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          >
            {t.aboutHero.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl text-lg text-foreground-muted"
          >
            {t.aboutHero.description}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative aspect-square w-full max-w-lg justify-self-center overflow-hidden rounded-[2.5rem] border border-border bg-gradient-to-br from-primary/30 via-background-elevated to-accent/20"
        >
          <Image
            src="/images/studio/team.jpg"
            alt="Egora Games team"
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </Container>
    </section>
  );
}
