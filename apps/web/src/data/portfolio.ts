import type { Localized, LocalizedList, LocalizedText } from "@/i18n/config";

export type SkillGroup = { title: string; items: LocalizedText[] };

export type ExperienceItem = {
  period: Localized<string>;
  title: string;
  organization: string;
  summary: Localized<string>;
  highlights: LocalizedList;
  current?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  type: LocalizedText;
  description: LocalizedText;
  stack: string[];
  status: LocalizedText;
  image?: string;
  github?: string;
  instagram?: string;
  demo?: string;
  context?: LocalizedText;
  problem?: LocalizedText;
  solution?: LocalizedText;
  features?: Localized<string[]>;
  architecture?: Localized<string[]>;
  outcome?: LocalizedText;
  roadmap?: Localized<string[]>;
};

export function hasCaseStudy(project: Project): boolean {
  return Boolean(project.problem && project.solution);
}

export type ContactLink = {
  label: LocalizedText;
  value: LocalizedText;
  href: string;
  external?: boolean;
  download?: boolean;
};

export const navigation: { label: LocalizedText; href: string }[] = [
  { label: { es: "Sobre mi", en: "About me" }, href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: { es: "Experiencia", en: "Experience" }, href: "#experience" },
  { label: { es: "Proyectos", en: "Projects" }, href: "#projects" },
  { label: "Beyond", href: "/beyond" },
  { label: "Console", href: "#console" },
  { label: { es: "Contacto", en: "Contact" }, href: "#contact" },
];

export const skillGroups: SkillGroup[] = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Angular", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
  { title: "Backend", items: ["Python", "Django", "Django REST Framework", "Node.js"] },
  { title: "Databases", items: ["SQL", "PostgreSQL", "MySQL", "SQL Server", "Prisma ORM"] },
  { title: "Enterprise", items: ["SAP Business One", "Service Layer"] },
  { title: "Tools", items: ["Git", "GitHub", "Postman", "JIRA", "Odoo", "npm"] },
  { title: "DevOps & Infrastructure", items: ["Docker", "Linux", "Hostinger", "Windows imaging", "TeamViewer", "AnyDesk", "Netlify", "Neon"] },
  { title: "Productivity & IT", items: ["Google Workspace", "Microsoft 365", "Microsoft Word", "Microsoft Excel", "SharePoint", "Power Automate", { es: "Sistemas de ticket", en: "Ticketing systems" }] },
  { title: "APIs & Methods", items: ["REST", "JSON", "XML", "Agile / SCRUM", "Kanban", "UML"] },
  { title: "Professional Skills", items: ["Requirements Analysis", "Client Communication", "Needs Discovery", "Solution Design", "Technical Presentation", "Stakeholder Collaboration", "Problem Solving", "Adaptability", "Iterative Development", "UX-Oriented Thinking", "Business Requirements -> Technical Solutions"] },
];

export const experiences: ExperienceItem[] = [
  {
    period: { es: "2026 - Actualidad", en: "2026 - Present" },
    title: "Python Developer | SAP Business One Technical Developer | Full Stack Developer",
    organization: "CONFECAT",
    summary: {
      es: "Desarrollo web, desarrollo de software, automatización con Python y soluciones técnicas sobre SAP Business One en un entorno empresarial.\n• Desarrollo de aplicaciones web y soluciones internas utilizando React, Next.js, TypeScript, JavaScript, HTML y CSS.\n• Desarrollo de soluciones de automatización con Python para optimizar procesos operativos y administrativos repetitivos.\n• Diseño e integración de APIs REST y conexión de aplicaciones con sistemas empresariales y servicios externos.\n• Desarrollo de lógica backend y estructuras de bases de datos para aplicaciones empresariales y sistemas internos.\n• Trabajo con SAP Business One, incluyendo análisis técnico, resolución de problemas, mejora de procesos e integraciones de sistemas.\n• Desarrollo de consultas SQL y SAP HANA para reportes, validación de datos y análisis empresarial.\n• Análisis de requerimientos de negocio y traducción de los mismos en soluciones técnicas prácticas.\n• Testing, resolución de problemas y validación de aplicaciones e integraciones junto con los usuarios.\n• Identificación de oportunidades de automatización y mejora continua de procesos empresariales.\n\nTechnologies\n\nReact · Next.js · TypeScript · JavaScript · Python · Node.js · REST APIs · SQL · SAP Business One · SAP HANA · Git · HTML · CSS · JSON · PowerShell · Windows Server",
      en: "Web development, software development, Python automation and technical solutions on SAP Business One in a business environment.\n• Web application and internal solutions development using React, Next.js, TypeScript, JavaScript, HTML and CSS.\n• Python automation solutions to streamline repetitive operational and administrative processes.\n• Design and integration of REST APIs, connecting applications with enterprise systems and external services.\n• Backend logic and database structures for business applications and internal systems.\n• Work with SAP Business One, including technical analysis, troubleshooting, process improvements and system integrations.\n• SQL and SAP HANA queries for reporting, data validation and business analysis.\n• Business requirements analysis translated into practical technical solutions.\n• Testing, troubleshooting and validation of applications and integrations together with users.\n• Identification of automation opportunities and continuous improvement of business processes.\n\nTechnologies\n\nReact · Next.js · TypeScript · JavaScript · Python · Node.js · REST APIs · SQL · SAP Business One · SAP HANA · Git · HTML · CSS · JSON · PowerShell · Windows Server",
    },
    highlights: {
      es: ["Python", "SAP Business One", "SQL Server", "Automatizacion", "Testing y documentacion tecnica"],
      en: ["Python", "SAP Business One", "SQL Server", "Automation", "Testing and technical documentation"],
    },
    current: true,
  },
  {
    period: { es: "2024 - Actualidad", en: "2024 - Present" },
    title: "Full Stack Developer / Freelancer",
    organization: "Freelance / Proyectos propios",
    summary: {
      es: "Desarrollo soluciones web y de automatizacion para negocios, desde la idea y el analisis de necesidades hasta la construccion e iteracion del producto.",
      en: "I build web and automation solutions for businesses, from the initial idea and needs analysis through to building and iterating on the product.",
    },
    highlights: {
      es: ["Food Club - e-commerce en desarrollo", "IG Auto - automatizacion de publicaciones en desarrollo", "Soluciones web para negocios", "Automatizacion de procesos"],
      en: ["Food Club - e-commerce in development", "IG Auto - social media post automation in development", "Web solutions for businesses", "Process automation"],
    },
  },
  {
    period: { es: "Julio 2018 - 2025", en: "July 2018 - 2025" },
    title: "IT Analyst / IT Field Support",
    organization: "Galmes Digital / Apex America BPO",
    summary: {
      es: "Coordinacion de operaciones IT, soporte de nivel 1 y 2, mantenimiento de hardware y software, e implementacion y prueba de aplicaciones internas.",
      en: "IT operations coordination, level 1 and 2 support, hardware and software maintenance, plus implementation and testing of internal applications.",
    },
    highlights: {
      es: ["Soporte IT L1/L2", "Infraestructura", "Portales internos", "TeamViewer y AnyDesk", "Imaging de Windows"],
      en: ["IT support L1/L2", "Infrastructure", "Internal portals", "TeamViewer and AnyDesk", "Windows imaging"],
    },
  },
  {
    period: { es: "Mayo 2012 - Actualidad", en: "May 2012 - Present" },
    title: "Computer Repair Technician",
    organization: "Servicio tecnico independiente",
    summary: {
      es: "Reparacion de PC y notebooks, tanto de software como de hardware.",
      en: "PC and laptop repair, covering both software and hardware.",
    },
    highlights: {
      es: ["Hardware", "Software", "Diagnostico tecnico"],
      en: ["Hardware", "Software", "Technical diagnostics"],
    },
  },
];

export const projects: Project[] = [
  {
    slug: "club-veggie",
    title: "Club Veggie",
    type: "E-commerce / Full Stack",
    description: {
      es: "Proyecto de e-commerce y plataforma de pedidos para un emprendimiento real de productos veganos.",
      en: "E-commerce and ordering platform project for a real vegan products business.",
    },
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Neon", "Netlify"],
    status: { es: "Publicado / Demo disponible", en: "Published / Demo available" },
    image: "/gabs.png",
    demo: "https://clubveggie.netlify.app/",
    context: {
      es: "Primer caso real de validación de una idea de producto más grande.",
      en: "First real-world validation of a bigger product idea.",
    },
    problem: {
      es: "El emprendimiento necesitaba mostrar su catálogo, administrar disponibilidad y recibir pedidos sin depender exclusivamente de redes sociales o procesos manuales.",
      en: "The business needed to showcase its catalog, manage availability and receive orders without relying exclusively on social media or manual processes.",
    },
    solution: {
      es: "Construí una experiencia de compra mobile-first con catálogo dinámico, variantes, stock, carrito y un panel administrativo para operar productos y pedidos.",
      en: "I built a mobile-first shopping experience with a dynamic catalog, variants, stock, cart and an admin panel to manage products and orders.",
    },
    features: {
      es: ["Catálogo y categorías", "Variantes, precios y disponibilidad", "Carrito responsive", "Creación y seguimiento de pedidos", "Panel administrativo protegido", "SEO y deployment en producción"],
      en: ["Catalog and categories", "Variants, prices and availability", "Responsive cart", "Order creation and tracking", "Protected admin panel", "SEO and production deployment"],
    },
    architecture: {
      es: ["Next.js 16 con App Router", "Route Handlers para productos, pedidos y autenticación", "PostgreSQL en Neon con Prisma 7", "Deployment conectado a GitHub mediante Netlify"],
      en: ["Next.js 16 with App Router", "Route Handlers for products, orders and authentication", "PostgreSQL on Neon with Prisma 7", "Deployment connected to GitHub through Netlify"],
    },
    outcome: {
      es: "Una primera implementación funcional utilizada para validar el flujo de e-commerce, detectar fricciones y obtener aprendizajes para futuras iteraciones.",
      en: "A first functional implementation used to validate the e-commerce flow, detect friction and gather learnings for future iterations.",
    },
    roadmap: {
      es: ["Mejoras del flujo de compra y pedidos", "Validación continua con usuarios reales", "Evolución de la arquitectura a partir del aprendizaje del producto"],
      en: ["Improvements to the shopping and order flow", "Continuous validation with real users", "Architecture evolution based on product learnings"],
    },
  },
  {
    slug: "web-confecat",
    title: "Web CONFECAT",
    type: { es: "Sitio web / Aplicación web", en: "Website / Web application" },
    description: {
      es: "Sitio web desarrollado para CONFECAT.",
      en: "Website developed for CONFECAT.",
    },
    stack: [],
    status: { es: "Publicado / Demo disponible", en: "Published / Demo available" },
    image: "/projects/confecat.jpg",
    demo: "https://confecat.netlify.app/",
  },
  {
    slug: "syncro22",
    title: "SYNCRO22",
    type: { es: "Sitio web / Proyecto personal / Música", en: "Website / Personal project / Music" },
    description: {
      es: "Sitio web oficial de mi banda SYNCRO22, desarrollado como proyecto personal y creativo, combinando desarrollo web, identidad visual y contenido multimedia.",
      en: "Official website of my band SYNCRO22, built as a personal and creative project combining web development, visual identity and multimedia content.",
    },
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    status: { es: "Publicado / En desarrollo continuo", en: "Published / Continuous development" },
    image: "/projects/syncro22.png",
    demo: "https://syncro22.netlify.app/",
    instagram: "https://www.instagram.com/syncro22_band/",
    github: "https://github.com/PsicoDevil/SYNCRO22",
  },
  {
    slug: "food-club",
    title: "Food Club",
    type: { es: "Plataforma / SaaS / E-commerce", en: "Platform / SaaS / E-commerce" },
    description: {
      es: "Plataforma reutilizable de pedidos y comercio electrónico pensada como producto para pequeños comercios y emprendimientos.",
      en: "Reusable ordering and e-commerce platform designed as a product for small shops and entrepreneurs.",
    },
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    status: { es: "En desarrollo", en: "In development" },
  },
  {
    slug: "instauto",
    title: "InstaAuto",
    type: { es: "Automatización / Software", en: "Automation / Software" },
    description: {
      es: "Proyecto de automatización para gestión y procesamiento de contenido para redes sociales.",
      en: "Automation project for social media content management and processing.",
    },
    stack: [],
    status: { es: "En desarrollo", en: "In development" },
  },
  {
    slug: "asistencia-rrhh",
    title: "AsistenciaRRHH",
    type: { es: "Sistema de control de asistencia y acceso biométrico", en: "Attendance and biometric access control system" },
    description: {
      es: "Sistema de control de asistencia y RRHH orientado a integrar dispositivos biométricos con un núcleo de negocio reutilizable y desacoplado del cliente y del fabricante.",
      en: "Attendance and HR management system designed to integrate biometric devices with a reusable business core, decoupled from both client and hardware vendor.",
    },
    stack: ["Python 3.12", "FastAPI", "SQLAlchemy 2.x", "Alembic", "Pydantic", "pyodbc", "httpx", "pytest", "Ruff", "SQL Server 2022"],
    status: { es: "En desarrollo / Proyecto profesional privado", en: "In development / Private professional project" },
  },
  {
    slug: "game-mate",
    title: "Game Mate",
    type: { es: "Web Full Stack", en: "Full Stack Web App" },
    description: {
      es: "Aplicacion web orientada a conectar gamers segun sus preferencias y experiencias de juego.",
      en: "Web application designed to connect gamers based on their preferences and gaming experiences.",
    },
    stack: ["Angular", "Django", "REST API"],
    status: { es: "Proyecto academico - ISPC", en: "Academic project - ISPC" },
    github: "https://github.com/TrianaDevia/Game-Mate-Modulo-Programador-Web-2023",
    problem: {
      es: "Encontrar compañeros de juego compatibles puede depender de comunidades dispersas y conversaciones difíciles de organizar.",
      en: "Finding compatible teammates can depend on scattered communities and conversations that are hard to organize.",
    },
    solution: {
      es: "Desarrollamos una aplicación web full stack para conectar jugadores según sus preferencias y experiencias.",
      en: "We developed a full stack web application to connect players according to their preferences and experiences.",
    },
    features: {
      es: ["Perfiles de jugadores", "Preferencias de juego", "Frontend en Angular", "Backend con Django y REST API"],
      en: ["Player profiles", "Game preferences", "Angular frontend", "Django backend with REST API"],
    },
    architecture: {
      es: ["Angular para la interfaz", "Django para la lógica de servidor", "REST API como contrato entre frontend y backend"],
      en: ["Angular for the user interface", "Django for server-side logic", "REST API as the contract between frontend and backend"],
    },
    outcome: {
      es: "Proyecto académico colaborativo que permitió practicar integración frontend-backend y diseño de una API.",
      en: "Collaborative academic project that allowed us to practice frontend-backend integration and API design.",
    },
  },
  {
    slug: "triviador",
    title: "Triviador",
    type: { es: "Aplicación Android", en: "Android application" },
    description: {
      es: "Aplicacion de trivia sobre videojuegos desarrollada como proyecto academico.",
      en: "Video game trivia application developed as an academic project.",
    },
    stack: ["Android Studio"],
    status: { es: "Proyecto académico / ISPC", en: "Academic project / ISPC" },
    github: "https://github.com/matiasp23/proyecto-app-movil-ispc-2023",
  },
];

export const contactLinks: ContactLink[] = [
  { label: "Email", value: "chelolmesec@gmail.com", href: "mailto:chelolmesec@gmail.com" },
  { label: "LinkedIn", value: "marcelo-rojas-a00616233", href: "https://www.linkedin.com/in/marcelo-rojas-a00616233/", external: true },
  { label: { es: "Curriculum", en: "CV" }, value: { es: "Descargar CV (PDF)", en: "Download CV (PDF)" }, href: "/CV-Marcelo-Rojas.pdf", download: true },
];

export const consoleCommands = ["help", "about", "skills", "stack", "projects", "experience", "contact", "clear"] as const;
export type ConsoleCommand = (typeof consoleCommands)[number];
