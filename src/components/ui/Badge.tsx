import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-background-elevated px-3 py-1 text-xs font-medium uppercase tracking-wide text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}
