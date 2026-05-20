import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
};

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  invert = false,
}: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      {eyebrow ? (
        <span
          className={`inline-block text-xs font-semibold uppercase tracking-[0.18em] mb-3 ${
            invert ? "text-teal-light" : "text-teal"
          }`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold leading-tight tracking-tight text-balance ${
          invert ? "text-white" : "text-ink-deep"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            invert ? "text-white/85" : "text-ink-soft"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
