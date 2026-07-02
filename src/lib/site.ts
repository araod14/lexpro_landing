// ============================================================================
// Datos de contacto y meta-información del sitio.
// Reemplaza estos valores con los datos reales antes de publicar.
// ============================================================================

export const SITE = {
  name: "Lexpro Soluciones, C.A.",
  shortName: "Lexpro",
  url: "https://lexpro.com.ve",
  rif: "J-507995348",
  email: "mbello@lexprosoluciones.com",
  emailDemo: "mbello@lexprosoluciones.com",
  emailCareers: "mbello@lexprosoluciones.com",
  phone: "+58 424-8354898",
  whatsapp: "584248354898", // Solo dígitos, formato internacional
  address: "Barcelona, Venezuela",
  founded: "2025",
  social: {
    linkedin: "https://www.linkedin.com/company/lexpro",
    instagram: "https://www.instagram.com/lexpro",
    x: "https://x.com/lexpro",
  },
} as const;

const enc = (s: string) => encodeURIComponent(s);

export const CTA = {
  demo: `mailto:${SITE.emailDemo}?subject=${enc(
    "Solicitud de Demo — Lexpro"
  )}&body=${enc(
    "Hola Lexpro,\n\nMe gustaría agendar una demo de sus soluciones.\n\nNombre:\nEmpresa:\nTeléfono:\n\nGracias."
  )}`,
  consult: `https://wa.me/${SITE.whatsapp}?text=${enc(
    "Hola Lexpro, me gustaría agendar una consultoría gratis."
  )}`,
  contact: `https://wa.me/${SITE.whatsapp}?text=${enc(
    "Hola Lexpro, quiero conocer más sobre sus servicios."
  )}`,
  email: `mailto:${SITE.email}`,
  careers: `mailto:${SITE.emailCareers}?subject=${enc(
    "Postulación de talento — Lexpro"
  )}&body=${enc(
    "Hola Lexpro,\n\nMe gustaría formar parte de su equipo. Adjunto mi CV.\n\nNombre:\nProfesión / Área:\nTeléfono:\nExperiencia:\n\nGracias."
  )}`,
} as const;
