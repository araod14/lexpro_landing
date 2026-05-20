import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { HeroIllustration } from "@/components/HeroIllustration";
import { CTA } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-hero-gradient pt-12 pb-20 lg:min-h-[calc(100vh-5rem)] lg:pt-16 lg:pb-24 lg:flex lg:items-center"
    >
      {/* Decorative subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern bg-grid opacity-[0.4]"
        aria-hidden="true"
      />

      <Container className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <FadeIn className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-teal-light px-3 py-1.5 text-xs font-semibold text-teal-dark mb-6">
            <Sparkles size={14} aria-hidden="true" />
            Tecnología que escala con tu negocio
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-ink-deep text-balance">
            Transformamos tu negocio con{" "}
            <span className="text-teal">software a tu medida</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-ink-soft text-balance">
            Soluciones SaaS y automatización de procesos que escalan con tu empresa.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button href={CTA.consult} variant="primary" size="lg">
              Agenda una consultoría gratis
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button href="#servicios" variant="secondary" size="lg" external={false}>
              Ver soluciones
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-8 text-sm text-ink-soft">
            <div>
              <p className="text-2xl font-extrabold text-ink-deep">+50</p>
              <p>Proyectos entregados</p>
            </div>
            <div className="h-10 w-px bg-ink/15" aria-hidden="true" />
            <div>
              <p className="text-2xl font-extrabold text-ink-deep">98%</p>
              <p>Satisfacción</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} y={28} className="relative">
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl bg-teal/5 blur-2xl"
              aria-hidden="true"
            />
            <HeroIllustration className="relative w-full h-auto" />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
