import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Lexpro Soluciones — Consultoría, ingeniería y tecnología para la industria",
    template: "%s | Lexpro Soluciones",
  },
  description:
    "Consultoría y asesoría estratégica, estudios de factibilidad técnica y económica, gestión de proyectos y contratos, tecnología, automatización y software para las industrias de Venezuela, con foco en el sector petrolero.",
  keywords: [
    "consultoría Venezuela",
    "asesoría estratégica",
    "estudios de factibilidad",
    "gestión de proyectos y contratos",
    "industria petrolera",
    "automatización de procesos",
    "software a medida",
    "Lexpro",
  ],
  authors: [{ name: "Lexpro Soluciones, C.A." }],
  openGraph: {
    title:
      "Lexpro Soluciones — Consultoría, ingeniería y tecnología para la industria",
    description:
      "Consultoría, factibilidad, gestión de proyectos, tecnología y software para la industria venezolana, con foco en el sector petrolero.",
    url: SITE.url,
    siteName: SITE.name,
    locale: "es_VE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lexpro Soluciones",
    description:
      "Consultoría, factibilidad, gestión de proyectos, tecnología y software para la industria venezolana, con foco en el sector petrolero.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  description:
    "Firma de consultoría, ingeniería y tecnología para las industrias de Venezuela, con especial foco en el sector petrolero.",
  knowsAbout: [
    "Consultoría y asesoría estratégica",
    "Estudios de factibilidad técnica y económica",
    "Gestión de proyectos y contratos",
    "Tecnología y automatización",
    "Soluciones de software",
    "Industria petrolera",
  ],
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phone,
  taxID: SITE.rif,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Caracas",
    addressCountry: "VE",
    streetAddress: SITE.address,
  },
  sameAs: [SITE.social.linkedin, SITE.social.instagram, SITE.social.x],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body className="font-sans antialiased bg-surface text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
