"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PortraitCard } from "@/components/ui/PortraitCard";
import { Reveal } from "@/components/ui/Reveal";
import { useLocale } from "@/lib/i18n/LocaleContext";

const photos = ["/images/team/ege-kaya.jpg", "/images/team/deniz-kaya.jpg"];

export function Team() {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden border-t border-border bg-background py-24 sm:py-32">
      <Container className="relative flex flex-col gap-16">
        <Reveal>
          <SectionHeading
            eyebrow={t.team.eyebrow}
            title={t.team.title}
            description={t.team.description}
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {t.team.members.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.15}>
              <PortraitCard
                photo={photos[index]}
                name={member.name}
                role={member.role}
                className="border-white/10"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
