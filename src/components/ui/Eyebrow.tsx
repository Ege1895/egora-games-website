import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-mono text-sm font-medium uppercase tracking-[0.14em] text-accent-ink",
        className
      )}
    >
      {children}
    </span>
  );
}
