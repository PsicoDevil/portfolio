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

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

export const navigation = [
  { label: "Sobre mi", href: "#about" },
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
    period: "2026 - Actualidad",
    title: "Python Developer",
    organization: "CONFECAT",
    summary: "Desarrollo y mantenimiento de aplicaciones Python para SAP Business One, con foco en automatizacion y aplicaciones internas.",
    highlights: ["Python", "SAP Business One", "SQL Server", "Automatizacion", "Testing y documentacion tecnica"],
    current: true,
  },
  {
    period: "Julio 2018 - Actualidad",
    title: "IT Analyst / IT Field Support",
    organization: "Galmes Digital / Apex America BPO",
    summary: "Coordinacion de operaciones IT, soporte de nivel 1 y 2, mantenimiento de hardware y software, e implementacion y prueba de aplicaciones internas.",
    highlights: ["Soporte IT L1/L2", "Infraestructura", "Portales internos", "TeamViewer y AnyDesk", "Imaging de Windows"],
  },
  {
    period: "Mayo 2012 - Actualidad",
    title: "Computer Repair Technician",
    organization: "Servicio tecnico independiente",
    summary: "Reparacion de PC y notebooks, tanto de software como de hardware.",
    highlights: ["Hardware", "Software", "Diagnostico tecnico"],
  },
];

export const projects: Project[] = [
  { title: "Game Mate", type: "Web social", description: "Aplicacion web para conectar gamers segun sus preferencias de videojuegos.", stack: ["Angular", "Django"], status: "Proyecto academico - ISPC" },
  { title: "Game Mate", type: "E-commerce", description: "Tienda online de productos gamer con gestion de productos, carrito y pagos simulados.", stack: [], status: "Proyecto academico - ISPC" },
  { title: "Recording Studio Website", type: "Sitio web", description: "Sitio para servicios de grabacion y produccion musical con diseno responsive.", stack: [], status: "Proyecto academico - ISPC" },
  { title: "Triviador", type: "Aplicacion Android", description: "Aplicacion de trivia sobre videojuegos, enfocada en experiencia de usuario y logica de preguntas y respuestas.", stack: ["Android Studio"], status: "Proyecto final - ISPC" },
];

export const contactLinks: ContactLink[] = [
  { label: "Email", value: "chelolmesec@gmail.com", href: "mailto:chelolmesec@gmail.com" },
  { label: "LinkedIn", value: "marcelo-rojas-a00616233", href: "https://www.linkedin.com/in/marcelo-rojas-a00616233/", external: true },
  { label: "Curriculum", value: "Descargar CV (PDF)", href: "/CV-Marcelo-Rojas.pdf" },
];

export const consoleCommands = ["help", "about", "skills", "stack", "projects", "experience", "contact", "clear"] as const;
export type ConsoleCommand = (typeof consoleCommands)[number];
