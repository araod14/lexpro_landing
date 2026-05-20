import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { WHY_BULLETS } from "@/lib/content";

export function WhyLexpro() {
  return (
    <section id="por-que" className="bg-surface py-20 lg:py-28">
      <Container className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <FadeIn>
          <WhyIllustration className="w-full h-auto max-w-lg" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-teal mb-3">
            ¿Por qué Lexpro?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-ink-deep text-balance">
            Un aliado tecnológico que entiende tu negocio
          </h2>
          <p className="mt-4 text-base text-ink-soft leading-relaxed">
            No solo entregamos software: construimos relaciones de largo plazo con
            equipos comprometidos con tus resultados.
          </p>

          <ul className="mt-8 space-y-5">
            {WHY_BULLETS.map((bullet) => {
              const Icon = bullet.Icon;
              return (
                <li key={bullet.title} className="flex gap-4">
                  <div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-light text-teal">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-ink-deep">
                      {bullet.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-soft leading-relaxed">
                      {bullet.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}

function WhyIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 420" role="img" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="why-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E6F5F5" />
          <stop offset="100%" stopColor="#F7F9FA" />
        </linearGradient>
        <linearGradient id="why-card" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1FA8A8" />
          <stop offset="100%" stopColor="#178585" />
        </linearGradient>
      </defs>
      <rect x="20" y="20" width="440" height="380" rx="24" fill="url(#why-bg)" />

      {/* People silhouettes — abstract collaboration */}
      <g transform="translate(60,80)">
        <circle cx="60" cy="60" r="28" fill="#FFFFFF" stroke="#1FA8A8" strokeWidth="2" />
        <circle cx="60" cy="52" r="10" fill="#1FA8A8" />
        <path d="M40 76 Q60 60 80 76 L80 92 Q60 100 40 92 Z" fill="#1FA8A8" />
      </g>
      <g transform="translate(180,40)">
        <circle cx="60" cy="60" r="32" fill="url(#why-card)" />
        <circle cx="60" cy="50" r="11" fill="#FFFFFF" />
        <path d="M38 78 Q60 60 82 78 L82 96 Q60 104 38 96 Z" fill="#FFFFFF" />
      </g>
      <g transform="translate(300,80)">
        <circle cx="60" cy="60" r="28" fill="#FFFFFF" stroke="#178585" strokeWidth="2" />
        <circle cx="60" cy="52" r="10" fill="#178585" />
        <path d="M40 76 Q60 60 80 76 L80 92 Q60 100 40 92 Z" fill="#178585" />
      </g>

      {/* Connection lines */}
      <path
        d="M150 140 Q240 100 330 140"
        stroke="#1FA8A8"
        strokeWidth="2"
        strokeDasharray="4 4"
        fill="none"
      />

      {/* Stats card */}
      <g transform="translate(70,220)">
        <rect width="340" height="160" rx="16" fill="#FFFFFF" stroke="#E5E7EB" />
        <rect x="20" y="20" width="120" height="10" rx="3" fill="#1F2937" />
        <rect x="20" y="38" width="80" height="6" rx="2" fill="#9CA3AF" />

        <g transform="translate(20,70)">
          <rect width="92" height="72" rx="10" fill="#E6F5F5" />
          <rect x="12" y="14" width="40" height="6" rx="2" fill="#178585" />
          <rect x="12" y="30" width="60" height="20" rx="4" fill="#1FA8A8" />
          <rect x="12" y="56" width="30" height="6" rx="2" fill="#178585" />
        </g>
        <g transform="translate(124,70)">
          <rect width="92" height="72" rx="10" fill="url(#why-card)" />
          <rect x="12" y="14" width="40" height="6" rx="2" fill="#FFFFFF" opacity="0.8" />
          <rect x="12" y="30" width="60" height="20" rx="4" fill="#FFFFFF" />
          <rect x="12" y="56" width="30" height="6" rx="2" fill="#FFFFFF" opacity="0.8" />
        </g>
        <g transform="translate(228,70)">
          <rect width="92" height="72" rx="10" fill="#F7F9FA" />
          <rect x="12" y="14" width="40" height="6" rx="2" fill="#9CA3AF" />
          <polyline
            points="12,58 28,46 44,52 60,36 76,42"
            stroke="#1FA8A8"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}
