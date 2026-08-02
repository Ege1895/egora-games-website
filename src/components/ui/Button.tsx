import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "accent" | "secondary" | "ghost" | "ghost-link";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-transparent bg-primary text-white hover:bg-primary-hover focus-visible:outline-primary",
  accent:
    "border border-transparent bg-accent font-semibold text-foreground-on-accent hover:bg-accent-hover focus-visible:outline-accent",
  secondary:
    "border border-border-hi bg-transparent text-foreground hover:border-primary hover:bg-primary-soft focus-visible:outline-primary",
  ghost:
    "border border-transparent bg-transparent text-foreground-muted hover:bg-surface-hi hover:text-foreground focus-visible:outline-primary",
  "ghost-link":
    "border-none bg-transparent p-0 text-accent-ink hover:no-underline",
};

const sizeClasses: Record<ButtonVariant, Record<ButtonSize, string>> = {
  primary: {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-6 text-sm",
    lg: "h-12 px-8 text-base",
  },
  accent: {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-6 text-sm",
    lg: "h-12 px-8 text-base",
  },
  secondary: {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-6 text-sm",
    lg: "h-12 px-8 text-base",
  },
  ghost: {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-6 text-base",
  },
  "ghost-link": {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  },
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors disabled:opacity-[.38] disabled:pointer-events-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} & (
  | ({ href: string } & Omit<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      "className" | "href"
    >)
  | ({ href?: undefined } & Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      "className"
    >)
);

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[variant][size],
    variant === "ghost-link" && "rounded-none",
    className
  );

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props;
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...anchorProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
