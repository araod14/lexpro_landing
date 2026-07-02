import { Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LexproLogo } from "@/components/LexproLogo";
import { SITE, CTA } from "@/lib/site";

const COLUMNS = [
  {
    title: "Empresa",
    links: [
      { label: "Sobre Nosotros", href: "#por-que" },
      { label: "Trabaja con Nosotros", href: "#empleo" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Consultoría Estratégica", href: "#servicios" },
      { label: "Estudios de Factibilidad", href: "#servicios" },
      { label: "Gestión de Proyectos", href: "#servicios" },
      { label: "Tecnología y Software", href: "#servicios" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Industrias", href: "#industrias" },
      { label: "Testimonios", href: "#testimonios" },
      { label: "Soporte", href: CTA.contact, external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink-deep text-white/85">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <LexproLogo variant="light" className="h-10 w-auto" />
            <p className="mt-5 text-sm leading-relaxed text-white/70 max-w-sm">
              Consultoría, ingeniería y tecnología para las industrias de
              Venezuela, con especial foco en el sector petrolero y energético.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-teal hover:bg-teal hover:text-white transition-colors"
              >
                <LinkedInIcon />
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-teal hover:bg-teal hover:text-white transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href={SITE.social.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-teal hover:bg-teal hover:text-white transition-colors"
              >
                <XIcon />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-white/70 hover:text-teal transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0 text-teal" aria-hidden="true" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-teal transition-colors break-words"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 shrink-0 text-teal" aria-hidden="true" />
                <a
                  href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
                  className="hover:text-teal transition-colors"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-teal" aria-hidden="true" />
                <span>{SITE.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between text-xs text-white/55">
          <p>
            © 2026 {SITE.name} · RIF {SITE.rif}
          </p>
          <p>
            Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}

function XIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
