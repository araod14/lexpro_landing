type Props = {
  variant?: "dark" | "light";
  className?: string;
};

export function LexproLogo({ variant = "dark", className = "h-8 w-auto" }: Props) {
  const text = variant === "dark" ? "#1F2937" : "#FFFFFF";
  return (
    <svg
      viewBox="0 0 180 40"
      role="img"
      aria-label="Lexpro Soluciones"
      className={className}
    >
      {/* Glifo: cuadrados isométricos */}
      <g transform="translate(2,4)">
        <rect x="0" y="8" width="14" height="14" rx="3" fill="#1FA8A8" />
        <rect
          x="10"
          y="0"
          width="14"
          height="14"
          rx="3"
          fill="#1FA8A8"
          opacity="0.55"
        />
        <rect
          x="20"
          y="14"
          width="14"
          height="14"
          rx="3"
          fill="#1FA8A8"
          opacity="0.8"
        />
      </g>
      {/* Wordmark */}
      <text
        x="46"
        y="26"
        fontFamily="var(--font-montserrat), Montserrat, system-ui, sans-serif"
        fontWeight="800"
        fontSize="20"
        letterSpacing="-0.5"
        fill={text}
      >
        Lexpro
      </text>
      <text
        x="46"
        y="36"
        fontFamily="var(--font-montserrat), Montserrat, system-ui, sans-serif"
        fontWeight="500"
        fontSize="7"
        letterSpacing="2"
        fill="#1FA8A8"
      >
        SOLUCIONES
      </text>
    </svg>
  );
}
