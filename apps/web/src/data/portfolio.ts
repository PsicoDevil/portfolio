export type SkillGroup = { title: string; items: string[] };

export type ExperienceItem = {
  period: string;
  title: string;
  organization: string;
  summary: string;
  highlights: string[];
  current?: boolean;
};

export type Project = {
  title: string;
  type: string;
  description: string;
  stack: string[];
  status: string;
};

export const navigation = [
  { label: "Sobre mí", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#projects" },
  { label: "Console", href: "#console" },
  { label: "Contacto", href: "#contact" },
];

export const skillGroups: SkillGroup[] = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Angular", "JavaScript", "HTML", "CSS"] },
  { title: "Backend", items: ["Python", "Django", "Django REST Framework", "Node.js"] },
  { title: "Databases", items: ["SQL", "PostgreSQL", "MySQL", "SQL Server"] },
  { title: "Enterprise", items: ["SAP Business One", "Service Layer"] },
  { title: "Tools", items: ["Git", "GitHub", "Postman"] },
];

export const experiences: ExperienceItem[] = [
  {
    period: "Actualidad",
    title: "Python Developer / SAP Business One Developer / IT Analyst",
    organization: "CONFECAT",
    summary: "Desarrollo y análisis orientados a procesos empresariales, automatización e integración de sistemas.",
    highlights: ["Desarrollo con Python", "SAP Business One", "Análisis y resolución de problemas tecnológicos"],
    current: true,
  },
  {
    period: "Experiencia previa",
    title: "IT Support / IT Analyst",
    organization: "IT",
    summary: "Soporte técnico, análisis de incidencias y acompañamiento a usuarios y sistemas en entornos de tecnología.",
    highlights: ["Soporte técnico", "Análisis de incidencias", "Sistemas empresariales"],
  },
];

export const projects: Project[] = [
  { title: "GameMate", type: "E-commerce Full Stack", description: "Proyecto de comercio electrónico desarrollado para explorar una arquitectura full stack y una experiencia de compra web.", stack: ["Angular", "Django"], status: "Case study en preparación" },
  { title: "TriviaGamer", type: "Aplicación Android", description: "Aplicación móvil centrada en una experiencia de preguntas y respuestas para usuarios de videojuegos.", stack: ["Android"], status: "Detalles próximamente" },
  { title: "Integraciones SAP Business One", type: "Automatización empresarial", description: "Desarrollos orientados a la automatización de procesos e integración con SAP Business One mediante Service Layer.", stack: ["Python", "SAP Business One", "Service Layer"], status: "Proyectos ampliables" },
];

export const consoleCommands = ["help", "about", "skills", "stack", "projects", "experience", "contact", "clear"] as const;
export type ConsoleCommand = (typeof consoleCommands)[number];
