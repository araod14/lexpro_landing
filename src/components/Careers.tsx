import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CAREER_BENEFITS } from "@/lib/content";
import { CTA } from "@/lib/site";

export function Careers() {
  return (
    <section id="empleo" className="bg-surface-alt py-20 lg:py-28">
      <Container>
        <FadeIn>
          <SectionTitle
            eyebrow="Trabaja con Nosotros"
            title="Crece con un equipo que valora tu talento"
            subtitle="En Lexpro encontrarás un excelente ambiente laboral, buenas remuneraciones y proyectos retadores en las principales industrias de Venezuela."
          />
        </FadeIn>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <FadeIn y={24}>
            <div className="relative overflow-hidden rounded-2xl shadow-card ring-1 ring-ink/5">
              <Image
                src="/images/empleo-equipo.jpg"
                alt="Equipo de Lexpro colaborando en una reunión de trabajo"
                width={1200}
                height={800}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto object-cover"
              />
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-6">
            {CAREER_BENEFITS.map((benefit, idx) => {
              const Icon = benefit.Icon;
              return (
                <FadeIn key={benefit.title} delay={idx * 0.08} y={24}>
                  <article className="group h-full rounded-2xl bg-white border border-ink/5 shadow-card hover:shadow-card-hover hover:border-teal/40 hover:-translate-y-1 transition-all duration-300 p-7">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-light text-teal group-hover:bg-teal group-hover:text-white transition-colors duration-300">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-ink-deep leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {benefit.description}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>

        <FadeIn delay={0.1}>
          <div className="mt-12 flex flex-col items-center text-center gap-4">
            <p className="max-w-xl text-base text-ink-soft">
              ¿Quieres formar parte de Lexpro? Envíanos tu CV y cuéntanos en qué
              área te gustaría aportar.
            </p>
            <Button href={CTA.careers} variant="primary" size="lg">
              Envía tu CV
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
