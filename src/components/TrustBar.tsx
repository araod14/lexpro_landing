import { Container } from "@/components/ui/Container";
import { INDUSTRIES } from "@/lib/content";

export function TrustBar() {
  return (
    <section className="bg-surface border-y border-ink/5 py-12">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
          Presentes en las principales industrias del país
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-6">
          {INDUSTRIES.map((industry) => {
            const Icon = industry.Icon;
            return (
              <div
                key={industry.title}
                className="flex items-center justify-center gap-2.5 text-ink-soft"
              >
                <Icon size={22} className="shrink-0 text-teal" aria-hidden="true" />
                <span className="text-sm font-semibold">{industry.title}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
