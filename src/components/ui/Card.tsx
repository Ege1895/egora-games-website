import { cn } from "@/lib/utils";

const variantClasses = {
  elevated: "border-border bg-background-elevated hover:border-primary",
  flat: "border-border bg-background flex h-full flex-col transition-transform hover:-translate-y-1 hover:border-primary",
};

export function Card({
  children,
  variant = "elevated",
  className,
}: {
  children: React.ReactNode;
  variant?: "elevated" | "flat";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-6 transition-colors",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </div>
  );
}
