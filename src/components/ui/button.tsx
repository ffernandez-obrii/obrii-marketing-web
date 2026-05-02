import { forwardRef, type ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium bg-primary text-primary-foreground shadow-[0_0_0_1px_hsl(var(--primary)/0.35),0_10px_30px_-14px_hsl(var(--primary)/0.6)] hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 transition-colors",
  outline:
    "inline-flex items-center justify-center gap-2 rounded-lg border border-input/60 bg-background/40 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-sm hover:border-primary/40 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 transition-colors",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={[variantClasses[variant], className].filter(Boolean).join(" ")}
      {...props}
    />
  ),
);

Button.displayName = "Button";
