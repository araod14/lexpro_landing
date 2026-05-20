import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Counter } from "@/components/ui/Counter";
import { METRICS } from "@/lib/content";

export function Metrics() {
  return (
    <section className="relative overflow-hidden bg-teal text-white py-20 lg:py-24">
      {/* Decorative grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <FadeIn>
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight">
            Resultados que hablan por nosotros
          </h2>
        </FadeIn>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {METRICS.map((m, idx) => (
            <FadeIn key={m.label} delay={idx * 0.08}>
              <div className="text-center">
                <Counter
                  value={m.value}
                  prefix={m.prefix}
                  suffix={m.suffix}
                  className="block text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
                />
                <p className="mt-2 text-sm sm:text-base text-white/85">
                  {m.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
