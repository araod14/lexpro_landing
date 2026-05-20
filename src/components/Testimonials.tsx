import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/ui/FadeIn";
import { TESTIMONIALS } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="bg-surface-alt py-20 lg:py-28">
      <Container>
        <FadeIn>
          <SectionTitle
            eyebrow="Testimonios"
            title="Lo que dicen nuestros clientes"
            subtitle="Empresas de distintos sectores ya transformaron su operación con nosotros."
          />
        </FadeIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => (
            <FadeIn key={t.name} delay={idx * 0.1} y={24}>
              <figure className="relative h-full rounded-2xl bg-white border border-ink/5 shadow-card p-7 hover:shadow-card-hover transition-shadow duration-300">
                <Quote
                  size={42}
                  className="absolute -top-3 left-6 text-teal"
                  aria-hidden="true"
                  strokeWidth={1.5}
                  fill="currentColor"
                />
                <blockquote className="mt-4 text-ink leading-relaxed">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-teal to-teal-dark text-white font-bold text-sm"
                    aria-hidden="true"
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink-deep">{t.name}</p>
                    <p className="text-xs text-ink-soft">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
