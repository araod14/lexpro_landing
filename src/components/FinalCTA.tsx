import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTA } from "@/lib/site";

export function FinalCTA() {
  return (
    <section id="contacto" className="bg-surface py-20 lg:py-28">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal to-teal-dark px-8 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20 text-center">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
              }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight text-balance">
                ¿Tienes un proyecto o reto en tu industria?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-white/90">
                Cuéntanos tu necesidad y diseñamos una solución a tu medida. Sin compromiso.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
                <Button href={CTA.consult} variant="light" size="lg">
                  Hablemos hoy
                  <ArrowRight size={18} aria-hidden="true" />
                </Button>
                <Button
                  href={CTA.email}
                  variant="ghost"
                  size="lg"
                  className="!text-white hover:!bg-white/10"
                >
                  Escríbenos
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
