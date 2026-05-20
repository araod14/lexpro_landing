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
            title="Conocemos tu sector"
            subtitle="Construimos soluciones específicas para los retos de cada industria que atendemos."
          />
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, idx) => {
            const Icon = industry.Icon;
            return (
              <FadeIn key={industry.title} delay={idx * 0.06} y={20}>
                <article className="group flex gap-4 rounded-xl border border-ink/5 bg-white p-6 hover:border-teal/40 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
                  <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-teal-light text-teal group-hover:bg-teal group-hover:text-white transition-colors">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <div>
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
