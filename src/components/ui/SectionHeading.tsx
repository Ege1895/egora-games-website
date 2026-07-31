import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-widest text-accent">
          {eyebrow}
        </span>
      )}
      <Heading className="text-3xl font-bold text-foreground sm:text-4xl">
        {title}
      </Heading>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-foreground-muted",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
