import Image from "next/image";
import { DeveloperConsole } from "@/components/developer-console";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { contactLinks, experiences, projects, skillGroups } from "@/data/portfolio";

export default function Home() {
  return (
    <div id="top" className="site-page">
      <SiteHeader />
      <main>
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Software Development / IT Analysis</p>
            <h1 id="hero-title">Full Stack Developer</h1>
            <p className="hero-subtitle">IT Analyst <span>&middot;</span> Software Development <span>&middot;</span> Automation</p>
            <p className="hero-description">Desarrollo aplicaciones y soluciones de software combinando frontend, backend, bases de datos, automatizacion e integracion de sistemas.</p>
            <p className="hero-signature">TypeScript <span>&middot;</span> React <span>&middot;</span> Angular <span>&middot;</span> Next.js <span>&middot;</span> Python <span>&middot;</span> Django <span>&middot;</span> Node.js <span>&middot;</span> SQL <span>&middot;</span> PostgreSQL <span>&middot;</span> REST APIs</p>
            <p className="hero-current">Actualmente: Python <span>&middot;</span> SAP Business One <span>&middot;</span> SAP HANA <span>&middot;</span> SQL</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">Ver proyectos <span aria-hidden="true">&rarr;</span></a><a className="button button-secondary" href="#contact">Contacto</a></div>
          </div>
          <aside className="hero-panel" aria-label="Areas de enfoque">
            <p className="panel-label">Areas de enfoque</p>
            <ul><li><span>01</span> Full Stack Development</li><li><span>02</span> Automatizacion e integraciones</li><li><span>03</span> Bases de datos y APIs</li><li><span>04</span> IT e infraestructura</li></ul>
            <p className="panel-footer">Disponible para desafios tecnologicos.</p>
          </aside>
        </section>

        <section id="about" className="section-shell content-section" aria-labelledby="about-title">
          <SectionHeading eyebrow="01 / Sobre mi" title="Desarrollo de software con mirada integral de IT." />
          <div className="about-grid">
            <p id="about-title" className="lead-text">
  Full Stack Developer e IT Analyst con mas de siete años de experiencia en tecnologia, desarrollo de software y soporte IT.
</p>
            <div className="about-copy"><p>Combino desarrollo web y de aplicaciones con soporte tecnico, automatizacion e integracion de sistemas para abordar problemas de punta a punta.</p><p>Actualmente desarrollo aplicaciones Python para SAP Business One, junto con scripts de automatizacion y mantenimiento de soluciones internas.</p><div className="about-actions"><a className="text-link" href="/CV-Marcelo-Rojas.pdf" download>Descargar CV <span aria-hidden="true">&darr;</span></a><a className="text-link" href="https://www.linkedin.com/in/marcelo-rojas-a00616233/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">&nearr;</span></a></div></div>
            <div className="about-photo-slot"><Image src="/profile.png" alt="Marcelo Rojas" width={1254} height={1254} /></div>
          </div>
        </section>

        <section id="stack" className="section-shell content-section" aria-labelledby="stack-title">
          <SectionHeading eyebrow="02 / Tech stack" title="Herramientas para construir e integrar." description="Tecnologias utilizadas en desarrollo web, datos y entornos empresariales." />
          <div id="stack-title" className="stack-grid">{skillGroups.map((group) => <article className="stack-card" key={group.title}><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
        </section>

        <section id="experience" className="section-shell content-section" aria-labelledby="experience-title">
          <SectionHeading eyebrow="03 / Experiencia" title="De soporte IT y operaciones de campo a desarrollo de software." />
          <ol id="experience-title" className="timeline">{experiences.map((experience) => <li className={experience.current ? "timeline-item is-current" : "timeline-item"} key={`${experience.organization}-${experience.title}`}><div className="timeline-period">{experience.period}</div><article className="experience-card"><p className="organization">{experience.organization}</p><h3>{experience.title}</h3><p>{experience.summary}</p><ul>{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></article></li>)}</ol>
        </section>

        <section id="projects" className="section-shell content-section" aria-labelledby="projects-title">
          <SectionHeading eyebrow="04 / Proyectos" title="Proyectos academicos de desarrollo web y aplicaciones." description="Cada tarjeta esta preparada para incorporar enlaces, imagenes y case studies cuando esten disponibles." />
          <div id="projects-title" className="project-grid">{projects.map((project, index) => <article className="project-card" key={`${project.title}-${project.type}`}><p className="project-number">0{index + 1}</p><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p>{project.stack.length > 0 ? <ul className="tag-list">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul> : <div className="project-spacer" />}<span className="project-status">{project.status}</span></article>)}</div>
        </section>

        <section id="console" className="section-shell content-section console-section" aria-labelledby="console-title">
          <SectionHeading eyebrow="05 / Developer console" title="Explora el perfil desde la terminal." description="Una consola local e interactiva: solo ejecuta comandos predefinidos del portfolio." />
          <div id="console-title"><DeveloperConsole /></div>
        </section>

        <section id="contact" className="section-shell contact-section" aria-labelledby="contact-title">
          <p className="eyebrow">06 / Contacto</p>
          <div className="contact-grid"><h2 id="contact-title">Hablemos de tu proximo desafio.</h2><div><p>Disponible para oportunidades en desarrollo de software, Full Stack e IT.</p><ul className="contact-links">{contactLinks.map((link) => <li key={link.label}><span>{link.label}</span><a href={link.href} download={link.label === "Curriculum"} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined}>{link.value} <span aria-hidden="true">{link.external ? "↗" : "↓"}</span></a></li>)}</ul></div></div>
        </section>
      </main>
      <footer className="site-footer"><span>Portfolio profesional</span><span>Full Stack Development &middot; IT Analysis</span></footer>
    </div>
  );
}
