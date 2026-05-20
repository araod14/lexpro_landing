import {
  Code2,
  Workflow,
  Plug,
  Lightbulb,
  ShoppingBag,
  Truck,
  Banknote,
  HeartPulse,
  Factory,
  Briefcase,
  Users,
  ShieldCheck,
  Headphones,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Soluciones", href: "#industrias" },
  { label: "Sobre Nosotros", href: "#por-que" },
  { label: "Contacto", href: "#contacto" },
];

export type Service = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    title: "Software a Medida (SaaS)",
    description:
      "Plataformas web personalizadas que se adaptan a la operación real de tu empresa, no al revés.",
    Icon: Code2,
  },
  {
    title: "Automatización de Procesos",
    description:
      "RPA, integraciones y flujos de trabajo eficientes para eliminar tareas repetitivas y errores manuales.",
    Icon: Workflow,
  },
  {
    title: "Integración de Sistemas",
    description:
      "APIs, ERPs y CRMs conectados sin fricción para que la información fluya de punta a punta.",
    Icon: Plug,
  },
  {
    title: "Consultoría Tecnológica",
    description:
      "Diagnóstico y roadmap de transformación digital alineados a tus objetivos de negocio.",
    Icon: Lightbulb,
  },
];

export type WhyBullet = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

export const WHY_BULLETS: WhyBullet[] = [
  {
    title: "Equipo experto en tecnología empresarial",
    description:
      "Profesionales con experiencia comprobada en proyectos críticos de software y datos.",
    Icon: Users,
  },
  {
    title: "Soluciones escalables y seguras",
    description:
      "Arquitecturas modernas que crecen contigo y cumplen con buenas prácticas de seguridad.",
    Icon: ShieldCheck,
  },
  {
    title: "Soporte continuo y personalizado",
    description:
      "Acompañamiento real después del lanzamiento, no solo durante el desarrollo.",
    Icon: Headphones,
  },
  {
    title: "Implementación ágil con metodologías modernas",
    description:
      "Entregas iterativas, transparencia total y resultados visibles desde la semana uno.",
    Icon: Rocket,
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Diagnóstico",
    description:
      "Entendemos tu negocio, mapeamos procesos y detectamos oportunidades de mejora.",
  },
  {
    step: "02",
    title: "Diseño",
    description:
      "Definimos arquitectura, UX y plan de entrega validado contigo antes de escribir una línea de código.",
  },
  {
    step: "03",
    title: "Desarrollo",
    description:
      "Construimos la solución en sprints cortos con demos frecuentes y feedback constante.",
  },
  {
    step: "04",
    title: "Implementación y soporte",
    description:
      "Despliegue, capacitación de tu equipo y soporte continuo para garantizar resultados.",
  },
];

export type Industry = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

export const INDUSTRIES: Industry[] = [
  {
    title: "Retail",
    description: "POS, inventarios y omnicanalidad para una operación sin fricción.",
    Icon: ShoppingBag,
  },
  {
    title: "Logística",
    description: "Trazabilidad, rutas y gestión de flota integrada en tiempo real.",
    Icon: Truck,
  },
  {
    title: "Finanzas",
    description: "Conciliaciones, reportería y automatización contable confiable.",
    Icon: Banknote,
  },
  {
    title: "Salud",
    description: "Expedientes, agendas y plataformas seguras para pacientes y staff.",
    Icon: HeartPulse,
  },
  {
    title: "Manufactura",
    description: "MES, OEE e integración con ERP para producción inteligente.",
    Icon: Factory,
  },
  {
    title: "Servicios",
    description: "Gestión de clientes, contratos y operaciones recurrentes a escala.",
    Icon: Briefcase,
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Lexpro entendió nuestro negocio desde el primer día. La automatización que entregaron nos liberó horas críticas cada semana.",
    name: "María Hernández",
    role: "Gerente de Operaciones",
    company: "Distribuidora Andes",
    initials: "MH",
  },
  {
    quote:
      "Pasamos de hojas de cálculo a una plataforma SaaS robusta en pocos meses. El acompañamiento fue impecable.",
    name: "Carlos Rivero",
    role: "Director de Tecnología",
    company: "Grupo Caribe",
    initials: "CR",
  },
  {
    quote:
      "La integración con nuestro ERP era el cuello de botella. Lexpro lo resolvió con criterio técnico y comercial.",
    name: "Andrea Pérez",
    role: "CEO",
    company: "LogiPro Venezuela",
    initials: "AP",
  },
];

export type Metric = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export const METRICS: Metric[] = [
  { value: 50, prefix: "+", label: "Proyectos entregados" },
  { value: 98, suffix: "%", label: "Satisfacción del cliente" },
  { value: 24, suffix: "/7", label: "Soporte disponible" },
  { value: 30, prefix: "+", suffix: "%", label: "Eficiencia promedio lograda" },
];

export const TRUST_LOGOS = [
  "client-1",
  "client-2",
  "client-3",
  "client-4",
  "client-5",
  "client-6",
];
