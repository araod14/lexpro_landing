import { Container } from "@/components/ui/Container";
import { TRUST_LOGOS } from "@/lib/content";

export function TrustBar() {
  return (
    <section className="bg-surface border-y border-ink/5 py-12">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
          Empresas que confían en nosotros
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-6 items-center">
          {TRUST_LOGOS.map((logo) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={logo}
              src={`/logos/${logo}.svg`}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="mx-auto h-8 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
