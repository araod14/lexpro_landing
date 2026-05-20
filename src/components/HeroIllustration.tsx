export function HeroIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 460"
      role="img"
      aria-label="Ilustración de dashboard moderno con flujos de automatización"
      className={className}
    >
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1FA8A8" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#1FA8A8" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="barGrad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#1FA8A8" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#1FA8A8" />
        </linearGradient>
        <linearGradient id="card2Grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#178585" />
          <stop offset="100%" stopColor="#1FA8A8" />
        </linearGradient>
      </defs>

      {/* Glow background */}
      <circle cx="430" cy="120" r="200" fill="url(#bgGrad)" />

      {/* Main dashboard window */}
      <g>
        <rect
          x="40"
          y="60"
          width="440"
          height="300"
          rx="16"
          fill="#FFFFFF"
          stroke="#E5E7EB"
          strokeWidth="1"
        />
        {/* Window chrome */}
        <rect x="40" y="60" width="440" height="34" rx="16" fill="#F7F9FA" />
        <rect x="40" y="78" width="440" height="16" fill="#F7F9FA" />
        <circle cx="60" cy="77" r="4.5" fill="#FF6155" />
        <circle cx="76" cy="77" r="4.5" fill="#FFBE2E" />
        <circle cx="92" cy="77" r="4.5" fill="#27C840" />
        <rect x="170" y="68" width="180" height="18" rx="6" fill="#FFFFFF" />

        {/* KPI cards */}
        <g>
          <rect x="60" y="112" width="120" height="60" rx="10" fill="#F7F9FA" />
          <rect x="72" y="124" width="44" height="8" rx="3" fill="#9CA3AF" />
          <rect x="72" y="140" width="70" height="14" rx="4" fill="#1F2937" />
          <rect x="72" y="160" width="36" height="6" rx="2" fill="#1FA8A8" />
        </g>
        <g>
          <rect x="190" y="112" width="120" height="60" rx="10" fill="#E6F5F5" />
          <rect x="202" y="124" width="44" height="8" rx="3" fill="#1FA8A8" />
          <rect x="202" y="140" width="80" height="14" rx="4" fill="#178585" />
          <rect x="202" y="160" width="30" height="6" rx="2" fill="#1FA8A8" />
        </g>
        <g>
          <rect x="320" y="112" width="140" height="60" rx="10" fill="url(#card2Grad)" />
          <rect x="332" y="124" width="44" height="8" rx="3" fill="#FFFFFF" opacity="0.7" />
          <rect x="332" y="140" width="90" height="14" rx="4" fill="#FFFFFF" />
          <rect x="332" y="160" width="40" height="6" rx="2" fill="#FFFFFF" opacity="0.7" />
        </g>

        {/* Chart area */}
        <rect x="60" y="190" width="250" height="148" rx="10" fill="#F7F9FA" />
        <rect x="72" y="202" width="86" height="8" rx="3" fill="#9CA3AF" />

        {/* Bars */}
        <g>
          <rect x="80" y="290" width="22" height="40" rx="4" fill="url(#barGrad)" opacity="0.45" />
          <rect x="112" y="270" width="22" height="60" rx="4" fill="url(#barGrad)" opacity="0.6" />
          <rect x="144" y="246" width="22" height="84" rx="4" fill="url(#barGrad)" opacity="0.75" />
          <rect x="176" y="230" width="22" height="100" rx="4" fill="url(#barGrad)" opacity="0.85" />
          <rect x="208" y="260" width="22" height="70" rx="4" fill="url(#barGrad)" opacity="0.7" />
          <rect x="240" y="218" width="22" height="112" rx="4" fill="url(#barGrad)" />
          <rect x="272" y="240" width="22" height="90" rx="4" fill="url(#barGrad)" opacity="0.85" />
        </g>

        {/* Line chart card */}
        <g>
          <rect x="320" y="190" width="140" height="148" rx="10" fill="#FFFFFF" stroke="#E5E7EB" />
          <rect x="332" y="202" width="64" height="8" rx="3" fill="#9CA3AF" />
          <polyline
            points="332,300 352,280 372,288 392,260 412,266 432,238 452,224"
            fill="none"
            stroke="#1FA8A8"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="452" cy="224" r="4" fill="#1FA8A8" />
          <path
            d="M332,300 L352,280 L372,288 L392,260 L412,266 L432,238 L452,224 L452,318 L332,318 Z"
            fill="#1FA8A8"
            opacity="0.1"
          />
        </g>
      </g>

      {/* Floating workflow card */}
      <g transform="translate(0,0)">
        <rect
          x="380"
          y="320"
          width="160"
          height="86"
          rx="14"
          fill="#FFFFFF"
          stroke="#E5E7EB"
          style={{ filter: "drop-shadow(0 12px 24px rgba(31,168,168,0.18))" }}
        />
        <circle cx="404" cy="346" r="12" fill="#E6F5F5" />
        <path
          d="M398 346 l4 4 l8 -8"
          stroke="#1FA8A8"
          strokeWidth="2.4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="424" y="338" width="98" height="8" rx="3" fill="#1F2937" />
        <rect x="424" y="352" width="70" height="6" rx="2" fill="#9CA3AF" />
        <rect x="396" y="374" width="128" height="6" rx="3" fill="#E6F5F5" />
        <rect x="396" y="374" width="86" height="6" rx="3" fill="#1FA8A8" />
        <rect x="396" y="388" width="64" height="6" rx="2" fill="#9CA3AF" />
      </g>

      {/* Small floating chip */}
      <g transform="translate(0,0)">
        <rect
          x="20"
          y="330"
          width="120"
          height="42"
          rx="21"
          fill="#FFFFFF"
          stroke="#E5E7EB"
          style={{ filter: "drop-shadow(0 8px 18px rgba(0,0,0,0.08))" }}
        />
        <circle cx="42" cy="351" r="9" fill="#1FA8A8" />
        <path
          d="M37 351 l4 4 l8 -8"
          stroke="#FFFFFF"
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="60" y="343" width="70" height="6" rx="2" fill="#1F2937" />
        <rect x="60" y="354" width="50" height="6" rx="2" fill="#9CA3AF" />
      </g>
    </svg>
  );
}
