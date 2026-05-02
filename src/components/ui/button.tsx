import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary";

export type ButtonSize = "default" | "lg";

const baseClassName =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";

const primaryVisual =
  "bg-primary/90 text-primary-foreground shadow-[0_0_0_1px_hsl(var(--primary)/0.35),0_10px_30px_-14px_hsl(var(--primary)/0.6)] hover:bg-primary";

const secondaryVisual =
  "border border-input/60 bg-background/40 backdrop-blur-sm text-foreground hover:border-primary/40 hover:bg-primary/10";

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-10 px-4 py-2",
  lg: "h-11 px-8",
};

function variantClasses(variant: ButtonVariant, size: ButtonSize) {
  const s = sizeClasses[size];
  return variant === "primary"
    ? `${baseClassName} ${primaryVisual} ${s}`
    : `${baseClassName} ${secondaryVisual} ${s}`;
}

function mergeClass(...parts: (string | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export type ButtonLinkProps = {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

export function ButtonLink({
  href,
  variant = "primary",
  size = "default",
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  const cls = mergeClass(variantClasses(variant, size), className);
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
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button({
  variant = "primary",
  size = "default",
  className,
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={mergeClass(variantClasses(variant, size), className)}
      {...rest}
    >
      {children}
    </button>
  );
}
