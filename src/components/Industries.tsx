import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/ui/FadeIn";
import { INDUSTRIES } from "@/lib/content";

export function Industries() {
  return (
    <section id="industrias" className="bg-surface py-20 lg:py-28">
      <Container>
        <FadeIn>
          <SectionTitle
            eyebrow="Industrias"
            title="Experiencia sectorial en Venezuela"
            subtitle="Atendemos a las principales industrias del país, con especial foco en el sector petrolero y energético."
          />
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, idx) => {
            const Icon = industry.Icon;
            return (
              <FadeIn key={industry.title} delay={idx * 0.06} y={20}>
                <article className="group h-full overflow-hidden rounded-xl border border-ink/5 bg-white hover:border-teal/40 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-ink-deep/40 to-transparent"
                      aria-hidden="true"
                    />
                    <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/95 text-teal shadow-card">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-bold text-ink-deep">
                      {industry.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-soft leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
