import { cn } from "@/lib/utils";

export type GameStatus = "comingSoon" | "live" | "inDevelopment" | "beta";

const statusClasses: Record<GameStatus, string> = {
  live: "bg-success/15 text-success",
  comingSoon: "bg-accent-soft text-accent-ink",
  inDevelopment: "bg-warning/15 text-warning",
  beta: "bg-primary-soft text-primary-hover",
};

export function StatusBadge({
  status,
  children,
  variant = "solid",
  className,
}: {
  status: GameStatus;
  children: React.ReactNode;
  variant?: "solid" | "glass";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-xs uppercase tracking-[0.08em]",
        variant === "glass"
          ? "border border-border-hi bg-background/70 text-foreground backdrop-blur-md"
          : statusClasses[status],
        className
      )}
    >
      <span
        aria-hidden
        className="h-1.5 w-1.5 rounded-full bg-current"
      />
      {children}
    </span>
  );
}
