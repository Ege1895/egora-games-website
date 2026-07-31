"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { GradientBackdrop } from "@/components/ui/GradientBackdrop";

export function AboutHero() {
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
            <Badge>Our Story</Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          >
            {/* TODO: gerçek kuruluş hikayesi eklenecek */}
            Built by players, for players
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl text-lg text-foreground-muted"
          >
            Egora Games started as a small team of developers who wanted to
            build the kind of games they always wanted to play. TODO: gerçek
            kuruluş hikayesi ile değiştirilecek.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative aspect-square w-full max-w-lg justify-self-center overflow-hidden rounded-[2.5rem] border border-border bg-gradient-to-br from-primary/30 via-background-elevated to-accent/20"
        >
          {/* TODO: gerçek stüdyo/ekip fotoğrafıyla değiştirilecek */}
          <Image
            src="/images/studio/team.webp"
            alt="Egora Games ekip görseli"
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
