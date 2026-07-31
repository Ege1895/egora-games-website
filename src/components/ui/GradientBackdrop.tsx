import { cn } from "@/lib/utils";

export function GradientBackdrop({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />
      <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-accent/20 blur-[100px]" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}
