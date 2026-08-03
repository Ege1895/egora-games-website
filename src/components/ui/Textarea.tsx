import { cn } from "@/lib/utils";

type TextareaState = "default" | "error" | "success";

const stateClasses: Record<TextareaState, string> = {
  default: "border-border-hi focus:border-primary focus:shadow-ring",
  error: "border-danger focus:border-danger focus:shadow-ring",
  success: "border-success focus:border-success focus:shadow-ring",
};

export function Textarea({
  label,
  id,
  state = "default",
  className,
  ...props
}: {
  label: string;
  state?: TextareaState;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <textarea
        id={id}
        className={cn(
          "max-h-96 min-h-32 resize-y rounded-md border bg-surface-hi px-3.5 py-3 text-sm text-foreground placeholder:text-foreground-dim outline-none transition-colors disabled:opacity-60",
          stateClasses[state],
          className
        )}
        {...props}
      />
    </div>
  );
}
