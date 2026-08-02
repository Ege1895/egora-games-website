import { cn } from "@/lib/utils";

type InputState = "default" | "error" | "success";

const stateClasses: Record<InputState, string> = {
  default: "border-border-hi focus:border-primary focus:shadow-ring",
  error: "border-danger focus:border-danger focus:shadow-ring",
  success: "border-success focus:border-success focus:shadow-ring",
};

export function Input({
  label,
  id,
  state = "default",
  className,
  ...props
}: {
  label: string;
  state?: InputState;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        className={cn(
          "h-11 rounded-md border bg-surface-hi px-3.5 text-sm text-foreground placeholder:text-foreground-dim outline-none transition-colors disabled:opacity-60",
          stateClasses[state],
          className
        )}
        {...props}
      />
    </div>
  );
}
