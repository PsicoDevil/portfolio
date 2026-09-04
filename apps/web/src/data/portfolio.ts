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
  slug: string;
  title: string;
  type: string;
  description: string;
  stack: string[];
  status: string;
  image?: string;
  github?: string;
  instagram?: string;
  demo?: string;
  context?: string;
  problem?: string;
  solution?: string;
  features?: string[];
  architecture?: string[];
  outcome?: string;
  roadmap?: string[];
};

export function hasCaseStudy(project: Project): boolean {
  return Boolean(project.problem && project.solution);
}

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
  { label: "Beyond", href: "/beyond" },
  { label: "Console", href: "#console" },
  { label: "Contacto", href: "#contact" },
];

export const skillGroups: SkillGroup[] = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Angular", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
  { title: "Backend", items: ["Python", "Django", "Django REST Framework", "Node.js"] },
  { title: "Databases", items: ["SQL", "PostgreSQL", "MySQL", "SQL Server", "Prisma ORM"] },
  { title: "Enterprise", items: ["SAP Business One", "Service Layer"] },
  { title: "Tools", items: ["Git", "GitHub", "Postman", "JIRA", "Odoo", "npm"] },
  { title: "DevOps & Infrastructure", items: ["Docker", "Linux", "Hostinger", "Windows imaging", "TeamViewer", "AnyDesk", "Netlify", "Neon"] },
  { title: "Productivity & IT", items: ["Google Workspace", "Microsoft 365", "Microsoft Word", "Microsoft Excel", "SharePoint", "Power Automate", "Sistemas de ticket"] },
  { title: "APIs & Methods", items: ["REST", "JSON", "XML", "Agile / SCRUM", "Kanban", "UML"] },
  { title: "Professional Skills", items: ["Requirements Analysis", "Client Communication", "Needs Discovery", "Solution Design", "Technical Presentation", "Stakeholder Collaboration", "Problem Solving", "Adaptability", "Iterative Development", "UX-Oriented Thinking", "Business Requirements -> Technical Solutions"] },
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
    period: "2024 - Actualidad",
    title: "Full Stack Developer / Freelancer",
    organization: "Freelance / Proyectos propios",
    summary: "Desarrollo soluciones web y de automatizacion para negocios, desde la idea y el analisis de necesidades hasta la construccion e iteracion del producto.",
    highlights: ["Food Club - e-commerce en desarrollo", "IG Auto - automatizacion de publicaciones en desarrollo", "Soluciones web para negocios", "Automatizacion de procesos"],
  },
  {
    period: "Julio 2018 - 2025",
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
  {
    slug: "club-veggie",
    title: "Club Veggie",
    type: "E-commerce / Full Stack",
    description: "Proyecto de e-commerce y plataforma de pedidos para un emprendimiento real de productos veganos.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Neon", "Netlify"],
    status: "Publicado / Demo disponible",
    image: "/gabs.png",
    demo: "https://clubveggie.netlify.app/",
    context: "Primer caso real de validación de una idea de producto más grande.",
    problem: "El emprendimiento necesitaba mostrar su catálogo, administrar disponibilidad y recibir pedidos sin depender exclusivamente de redes sociales o procesos manuales.",
    solution: "Construí una experiencia de compra mobile-first con catálogo dinámico, variantes, stock, carrito y un panel administrativo para operar productos y pedidos.",
    features: ["Catálogo y categorías", "Variantes, precios y disponibilidad", "Carrito responsive", "Creación y seguimiento de pedidos", "Panel administrativo protegido", "SEO y deployment en producción"],
    architecture: ["Next.js 16 con App Router", "Route Handlers para productos, pedidos y autenticación", "PostgreSQL en Neon con Prisma 7", "Deployment conectado a GitHub mediante Netlify"],
    outcome: "Una primera implementación funcional utilizada para validar el flujo de e-commerce, detectar fricciones y obtener aprendizajes para futuras iteraciones.",
    roadmap: ["Mejoras del flujo de compra y pedidos", "Validación continua con usuarios reales", "Evolución de la arquitectura a partir del aprendizaje del producto"],
  },
  {
    slug: "web-confecat",
    title: "Web CONFECAT",
    type: "Sitio web / Aplicación web",
    description: "Sitio web desarrollado para CONFECAT.",
    stack: [],
    status: "Publicado / Demo disponible",
    image: "/projects/confecat.jpg",
    demo: "https://confecat.netlify.app/",
  },
  {
    slug: "syncro22",
    title: "SYNCRO22",
    type: "Sitio web / Proyecto personal / Música",
    description: "Sitio web oficial de mi banda SYNCRO22, desarrollado como proyecto personal y creativo, combinando desarrollo web, identidad visual y contenido multimedia.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    status: "Publicado / En desarrollo continuo",
    image: "/projects/syncro22.png",
    demo: "https://syncro22.netlify.app/",
    instagram: "https://www.instagram.com/syncro22_band/",
    github: "https://github.com/PsicoDevil/SYNCRO22",
  },
  {
    slug: "food-club",
    title: "Food Club",
    type: "Plataforma / SaaS / E-commerce",
    description: "Plataforma reutilizable de pedidos y comercio electrónico pensada como producto para pequeños comercios y emprendimientos.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    status: "En desarrollo",
  },
  {
    slug: "instauto",
    title: "InstaAuto",
    type: "Automatización / Software",
    description: "Proyecto de automatización para gestión y procesamiento de contenido para redes sociales.",
    stack: [],
    status: "En desarrollo",
  },
  {
    slug: "asistencia-rrhh",
    title: "AsistenciaRRHH",
    type: "Sistema de control de asistencia y acceso biométrico",
    description: "Sistema de control de asistencia y RRHH orientado a integrar dispositivos biométricos con un núcleo de negocio reutilizable y desacoplado del cliente y del fabricante.",
    stack: ["Python 3.12", "FastAPI", "SQLAlchemy 2.x", "Alembic", "Pydantic", "pyodbc", "httpx", "pytest", "Ruff", "SQL Server 2022"],
    status: "En desarrollo / Proyecto profesional privado",
  },
  {
    slug: "game-mate",
    title: "Game Mate",
    type: "Web Full Stack",
    description: "Aplicacion web orientada a conectar gamers segun sus preferencias y experiencias de juego.",
    stack: ["Angular", "Django", "REST API"],
    status: "Proyecto academico - ISPC",
    github: "https://github.com/TrianaDevia/Game-Mate-Modulo-Programador-Web-2023",
    problem: "Encontrar compañeros de juego compatibles puede depender de comunidades dispersas y conversaciones difíciles de organizar.",
    solution: "Desarrollamos una aplicación web full stack para conectar jugadores según sus preferencias y experiencias.",
    features: ["Perfiles de jugadores", "Preferencias de juego", "Frontend en Angular", "Backend con Django y REST API"],
    architecture: ["Angular para la interfaz", "Django para la lógica de servidor", "REST API como contrato entre frontend y backend"],
    outcome: "Proyecto académico colaborativo que permitió practicar integración frontend-backend y diseño de una API.",
  },
  {
    slug: "triviador",
    title: "Triviador",
    type: "Aplicación Android",
    description: "Aplicacion de trivia sobre videojuegos desarrollada como proyecto academico.",
    stack: ["Android Studio"],
    status: "Proyecto académico / ISPC",
    github: "https://github.com/matiasp23/proyecto-app-movil-ispc-2023",
  },
  {
    slug: "portfolio",
    title: "Portfolio",
    type: "Portfolio profesional",
    description: "Este sitio web: portfolio profesional desarrollado como proyecto personal.",
    stack: ["Next.js", "React", "TypeScript", "CSS"],
    status: "En desarrollo / próximo lanzamiento",
    github: "https://github.com/PsicoDevil/portfolio",
  },
];

export const contactLinks: ContactLink[] = [
  { label: "Email", value: "chelolmesec@gmail.com", href: "mailto:chelolmesec@gmail.com" },
  { label: "LinkedIn", value: "marcelo-rojas-a00616233", href: "https://www.linkedin.com/in/marcelo-rojas-a00616233/", external: true },
  { label: "Curriculum", value: "Descargar CV (PDF)", href: "/CV-Marcelo-Rojas.pdf" },
];

export const consoleCommands = ["help", "about", "skills", "stack", "projects", "experience", "contact", "clear"] as const;
export type ConsoleCommand = (typeof consoleCommands)[number];
