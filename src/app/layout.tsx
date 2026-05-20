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
    default: "Lexpro Soluciones — Software a medida y automatización empresarial",
    template: "%s | Lexpro Soluciones",
  },
  description:
    "Desarrollamos soluciones SaaS y automatizamos procesos empresariales para que tu negocio escale con eficiencia, seguridad y soporte continuo.",
  keywords: [
    "SaaS Venezuela",
    "automatización de procesos",
    "software a medida",
    "integración de sistemas",
    "transformación digital",
    "RPA",
    "Lexpro",
  ],
  authors: [{ name: "Lexpro Soluciones, C.A." }],
  openGraph: {
    title: "Lexpro Soluciones — Software a medida y automatización",
    description:
      "Soluciones SaaS y automatización de procesos que escalan con tu empresa.",
    url: SITE.url,
    siteName: SITE.name,
    locale: "es_VE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lexpro Soluciones",
    description:
      "Soluciones SaaS y automatización de procesos que escalan con tu empresa.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
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
