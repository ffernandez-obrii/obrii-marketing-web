import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary";

const primaryClassName =
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all h-11 rounded-[0.6rem] px-8 bg-primary/90 text-primary-foreground hover:bg-primary shadow-[0_0_0_1px_hsl(var(--primary)/0.35),0_10px_30px_-14px_hsl(var(--primary)/0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

const secondaryClassName =
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all h-11 rounded-[0.6rem] px-8 border border-input/60 bg-background/40 backdrop-blur-sm text-foreground hover:border-primary/40 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

const compactPrimaryClassName =
  "h-10 px-5 text-sm md:h-11 md:px-8";

const compactSecondaryClassName =
  "h-10 px-5 text-sm md:h-11 md:px-8";

function variantClasses(variant: ButtonVariant, compact: boolean) {
  const base = variant === "primary" ? primaryClassName : secondaryClassName;
  if (!compact) return base;
  return `${base} ${variant === "primary" ? compactPrimaryClassName : compactSecondaryClassName}`;
}

function mergeClass(...parts: (string | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export type ButtonLinkProps = {
  href: string;
  variant?: ButtonVariant;
  compact?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

export function ButtonLink({
  href,
  variant = "primary",
  compact = false,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  const cls = mergeClass(variantClasses(variant, compact), className);
  const external = /^https?:\/\//.test(href);

  if (external) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}

export type ButtonProps = {
  variant?: ButtonVariant;
  compact?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button({
  variant = "primary",
  compact = false,
  className,
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={mergeClass(variantClasses(variant, compact), className)}
      {...rest}
    >
      {children}
    </button>
  );
}
