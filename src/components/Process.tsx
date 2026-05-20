import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/ui/FadeIn";
import { PROCESS_STEPS } from "@/lib/content";

export function Process() {
  return (
    <section className="bg-surface-alt py-20 lg:py-28">
      <Container>
        <FadeIn>
          <SectionTitle
            eyebrow="Cómo trabajamos"
            title="Un proceso claro, ágil y orientado a resultados"
            subtitle="De la idea a la producción en cuatro pasos validados con tu equipo en cada iteración."
          />
        </FadeIn>

        <div className="mt-16 relative">
          {/* Horizontal connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-teal/30 via-teal to-teal/30"
            aria-hidden="true"
          />

          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <FadeIn as="li" key={step.step} delay={idx * 0.1} y={20}>
                <div className="relative flex flex-col items-center text-center px-4">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white border-2 border-teal text-teal text-xl font-extrabold shadow-card">
                    {step.step}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-ink-deep">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft max-w-xs">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
