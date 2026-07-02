import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
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
            Consultoría, ingeniería y tecnología
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-ink-deep text-balance">
            Impulsamos la industria venezolana con{" "}
            <span className="text-teal">soluciones a tu medida</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-ink-soft text-balance">
            Consultoría estratégica, estudios de factibilidad, gestión de proyectos,
            tecnología y software para tu industria, con foco en el sector petrolero.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button href={CTA.consult} variant="primary" size="lg">
              Agenda una consultoría gratis
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button href="#servicios" variant="secondary" size="lg" external={false}>
              Ver servicios
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-8 text-sm text-ink-soft">
            <div>
              <p className="text-2xl font-extrabold text-ink-deep">+50</p>
              <p>Proyectos gestionados</p>
            </div>
            <div className="h-10 w-px bg-ink/15" aria-hidden="true" />
            <div>
              <p className="text-2xl font-extrabold text-ink-deep">+15</p>
              <p>Años de experiencia</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} y={28} className="relative">
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl bg-teal/10 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-2xl shadow-card ring-1 ring-ink/5">
              <Image
                src="/images/hero-industria.jpg"
                alt="Equipo de ingenieros de Lexpro revisando datos en una planta industrial"
                width={1400}
                height={931}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
