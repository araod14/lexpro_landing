import {
  Code2,
  Workflow,
  Lightbulb,
  FileBarChart,
  FolderKanban,
  Fuel,
  Zap,
  Building2,
  Mountain,
  Factory,
  Briefcase,
  Users,
  ShieldCheck,
  ClipboardList,
  Rocket,
  HeartHandshake,
  TrendingUp,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Industrias", href: "#industrias" },
  { label: "Sobre Nosotros", href: "#por-que" },
  { label: "Trabaja con Nosotros", href: "#empleo" },
  { label: "Contacto", href: "#contacto" },
];

export type Service = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    title: "Consultoría y Asesoría Estratégica",
    description:
      "Acompañamiento experto para tomar decisiones de negocio con criterio técnico y visión de industria.",
    Icon: Lightbulb,
  },
  {
    title: "Estudios de Factibilidad Técnica y Económica",
    description:
      "Evaluamos la viabilidad de tus proyectos con análisis riguroso de riesgos, costos y retorno de inversión.",
    Icon: FileBarChart,
  },
  {
    title: "Gestión de Proyectos y Contratos",
    description:
      "Planificación, control y administración de proyectos y contratos para entregar en tiempo, alcance y presupuesto.",
    Icon: FolderKanban,
  },
  {
    title: "Tecnología y Automatización",
    description:
      "Automatización de procesos, integración de sistemas y soluciones tecnológicas que optimizan tu operación.",
    Icon: Workflow,
  },
  {
    title: "Soluciones de Software",
    description:
      "Desarrollo de software a medida y plataformas que se adaptan a la operación real de tu empresa.",
    Icon: Code2,
  },
];

export type WhyBullet = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

export const WHY_BULLETS: WhyBullet[] = [
  {
    title: "Experiencia en la industria venezolana",
    description:
      "Conocimiento profundo de los sectores clave del país, con especial foco en petróleo y energía.",
    Icon: Users,
  },
  {
    title: "Rigor técnico y económico",
    description:
      "Estudios de factibilidad y análisis que sustentan cada decisión con datos y buenas prácticas de ingeniería.",
    Icon: ShieldCheck,
  },
  {
    title: "Gestión integral de proyectos y contratos",
    description:
      "Control de alcance, tiempo y costo para que tus proyectos avancen con transparencia y previsibilidad.",
    Icon: ClipboardList,
  },
  {
    title: "Tecnología a la medida de tu operación",
    description:
      "Automatización y software que se integran a tus procesos reales, no al revés.",
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
    title: "Diagnóstico y asesoría",
    description:
      "Entendemos tu negocio y objetivos, mapeamos el contexto y definimos el reto a resolver.",
  },
  {
    step: "02",
    title: "Factibilidad y diseño",
    description:
      "Evaluamos viabilidad técnica y económica, y diseñamos la solución antes de ejecutar.",
  },
  {
    step: "03",
    title: "Ejecución y gestión",
    description:
      "Implementamos y gestionamos el proyecto con control de alcance, tiempo, costo y calidad.",
  },
  {
    step: "04",
    title: "Operación y soporte",
    description:
      "Puesta en marcha, capacitación de tu equipo y acompañamiento continuo para garantizar resultados.",
  },
];

export type Industry = {
  title: string;
  description: string;
  Icon: LucideIcon;
  image: string;
  imageAlt: string;
};

export const INDUSTRIES: Industry[] = [
  {
    title: "Petróleo y Gas",
    description:
      "Consultoría, factibilidad, gestión de proyectos y tecnología para el sector hidrocarburos.",
    Icon: Fuel,
    image: "/images/ind-petroleo.jpg",
    imageAlt: "Torre de refinería del sector petrolero",
  },
  {
    title: "Energía y Electricidad",
    description: "Estudios, proyectos y soluciones para generación, transmisión y distribución.",
    Icon: Zap,
    image: "/images/ind-energia.jpg",
    imageAlt: "Subestación eléctrica de alta tensión",
  },
  {
    title: "Manufactura e Industria",
    description: "Optimización de procesos, automatización e integración para la producción.",
    Icon: Factory,
    image: "/images/ind-manufactura.jpg",
    imageAlt: "Ingenieros en una planta de manufactura",
  },
  {
    title: "Construcción e Infraestructura",
    description: "Gestión de proyectos y contratos para obras e infraestructura de gran escala.",
    Icon: Building2,
    image: "/images/ind-construccion.jpg",
    imageAlt: "Trabajadores de construcción en obra",
  },
  {
    title: "Minería",
    description: "Asesoría técnica, factibilidad y control de proyectos para el sector minero.",
    Icon: Mountain,
    image: "/images/ind-mineria.jpg",
    imageAlt: "Camión minero en un yacimiento a cielo abierto",
  },
  {
    title: "Comercio y Servicios",
    description: "Software, automatización y gestión para operaciones comerciales y de servicios.",
    Icon: Briefcase,
    image: "/images/ind-comercio.jpg",
    imageAlt: "Almacén logístico con montacargas",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
};

// Datos de ejemplo — reemplazar con testimonios reales.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "El estudio de factibilidad de Lexpro nos dio la claridad técnica y económica que necesitábamos para aprobar el proyecto con confianza.",
    name: "María Hernández",
    role: "Gerente de Proyectos",
    company: "Operadora Andes",
    initials: "MH",
  },
  {
    quote:
      "La gestión de contratos y el control de obra fueron impecables. Entregaron dentro de presupuesto y sin sorpresas.",
    name: "Carlos Rivero",
    role: "Director de Ingeniería",
    company: "Grupo Energético Caribe",
    initials: "CR",
  },
  {
    quote:
      "Automatizaron procesos críticos de nuestra operación y nos acompañaron con criterio técnico de principio a fin.",
    name: "Andrea Pérez",
    role: "Gerente de Operaciones",
    company: "Industrias del Orinoco",
    initials: "AP",
  },
];

export type Metric = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

// Datos de ejemplo — reemplazar con métricas reales.
export const METRICS: Metric[] = [
  { value: 50, prefix: "+", label: "Proyectos gestionados" },
  { value: 98, suffix: "%", label: "Satisfacción de clientes" },
  { value: 15, prefix: "+", label: "Años de experiencia sectorial" },
  { value: 6, prefix: "+", label: "Industrias atendidas" },
];

export type CareerBenefit = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

export const CAREER_BENEFITS: CareerBenefit[] = [
  {
    title: "Excelente ambiente laboral",
    description:
      "Un equipo colaborativo, respetuoso y motivado, donde tu trabajo se valora y tus ideas se escuchan.",
    Icon: HeartHandshake,
  },
  {
    title: "Buenas remuneraciones",
    description:
      "Compensación competitiva y acorde a tu experiencia, con reconocimiento a tu desempeño.",
    Icon: TrendingUp,
  },
  {
    title: "Crecimiento profesional",
    description:
      "Formación continua y oportunidades reales de desarrollo dentro de una firma en expansión.",
    Icon: GraduationCap,
  },
  {
    title: "Proyectos retadores",
    description:
      "Participa en proyectos de alto impacto en la industria venezolana, especialmente en el sector petrolero.",
    Icon: Rocket,
  },
];

// Puestos disponibles para postulación en la sección "Trabaja con Nosotros".
export const JOB_POSITIONS: string[] = [
  "Gerente de Proyecto",
  "Administrador de Contratos",
  "Coordinador de Planificación (Planificador)",
  "Coordinador de SHIO",
  "Coordinador de Calidad",
  "Coordinador Ambiental",
  "Ingeniero Eléctrico",
  "Ingeniero Mecánico",
  "Ingeniero de Instrumentación",
  "Inspector Eléctrico",
  "Inspector de Instrumentación",
  "Técnico Electricista",
  "Técnico de Instrumentación",
  "Mecánico de Equipos",
  "Soldador Calificado",
  "Operador de Equipos",
  "Ayudante de Electricista",
  "Ayudante de Mecánico",
  "Obrero Calificado",
  "Desarrollador Web",
  "Desarrollador de Software (Backend)",
  "Desarrollador de Software (Frontend)",
  "Analista de Datos / Business Intelligence (BI)",
  "Especialista en Automatización de Procesos",
  "Especialista en Ciberseguridad",
  "Recursos Humanos",
  "Recursos Laborales",
  "Contador",
  "Asistente Administrativo",
  "Asistente Contable",
  "Asistente de Recursos Humanos",
  "Asistente de Logística",
  "Ejecutivo de Ventas",
  "Agente Comercial",
];

