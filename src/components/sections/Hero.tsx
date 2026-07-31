"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--color-primary)_0%,_transparent_50%)] opacity-20"
      />
      <Container className="relative flex flex-col items-center gap-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge>Independent Game Studio</Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl text-5xl font-bold tracking-tight text-foreground sm:text-6xl"
        >
          {/* TODO: gerçek marka sloganı belirlenecek */}
          We craft worlds players remember
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl text-lg text-foreground-muted"
        >
          Egora Games is an independent studio building premium, story-driven
          games across PC and console platforms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Button href="/games">Explore Our Games</Button>
          <Button href="/about" variant="secondary">
            About the Studio
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
