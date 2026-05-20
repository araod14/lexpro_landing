import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "light" | "ghost";
type Size = "md" | "lg";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-tight transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-teal text-white hover:bg-teal-dark hover:-translate-y-0.5 hover:shadow-card-hover active:translate-y-0",
  secondary:
    "border-2 border-teal text-teal bg-transparent hover:bg-teal hover:text-white hover:-translate-y-0.5",
  light:
    "bg-white text-teal-dark hover:bg-teal-light hover:-translate-y-0.5 hover:shadow-card-hover",
  ghost:
    "text-ink hover:text-teal hover:bg-teal-light/40",
};

const SIZES: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type Props = {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  external?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  external,
  children,
  ...rest
}: Props) {
  const isExternal =
    external ??
    (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("https://wa.me"));
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
