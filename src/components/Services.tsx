import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/ui/FadeIn";
import { SERVICES } from "@/lib/content";

export function Services() {
  return (
    <section id="servicios" className="bg-surface-alt py-20 lg:py-28">
      <Container>
        <FadeIn>
          <SectionTitle
            eyebrow="Servicios"
            title="Servicios integrales para tu industria"
            subtitle="Combinamos consultoría, ingeniería y tecnología para acompañar tus proyectos de principio a fin."
          />
        </FadeIn>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => {
            const Icon = service.Icon;
            return (
              <FadeIn key={service.title} delay={idx * 0.08} y={24}>
                <article
                  className="group h-full rounded-2xl bg-white border border-ink/5 shadow-card hover:shadow-card-hover hover:border-teal/40 hover:-translate-y-1 transition-all duration-300 p-7"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-light text-teal group-hover:bg-teal group-hover:text-white transition-colors duration-300">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-ink-deep leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {service.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
