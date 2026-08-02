import Image from "next/image";
import { cn } from "@/lib/utils";

export function PortraitCard({
  photo,
  name,
  role,
  className,
}: {
  photo: string;
  name: string;
  role: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-border transition-colors sm:aspect-[4/5]",
        className
      )}
    >
      <Image
        src={photo}
        alt={name}
        fill
        loading="lazy"
        sizes="(min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Fotoğraf üstü scrim kasıtlı olarak hardcoded — her iki temada da metin okunur kalmalı */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(10,10,15,0.75) 0%, rgba(10,10,15,0.45) 55%, rgba(10,10,15,0) 100%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-6 sm:p-8">
        <h3 className="text-lg font-semibold tracking-[-0.01em] text-white">
          {name}
        </h3>
        <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent-on-scrim">
          {role}
        </p>
      </div>
    </div>
  );
}
