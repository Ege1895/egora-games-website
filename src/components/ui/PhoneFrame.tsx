import Image from "next/image";
import { cn } from "@/lib/utils";

export function PhoneFrame({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-[9/19.5] w-full max-w-[280px] rounded-[2.75rem] bg-[#0b0b0f] p-2 shadow-2xl ring-1 ring-border-hi",
        className
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[2.25rem] bg-black">
        <Image
          src={src}
          alt={alt}
          fill
          loading="lazy"
          sizes="280px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
