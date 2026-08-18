import { DeveloperConsole } from "@/components/developer-console";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { experiences, projects, skillGroups } from "@/data/portfolio";

export default function Home() {
  return (
    <div id="top" className="site-page">
      <SiteHeader />
      <main>
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Software Development / IT Analysis</p>
            <h1 id="hero-title">Full Stack Developer</h1>
            <p className="hero-subtitle">IT Analyst <span>·</span> Software Development <span>·</span> Automation</p>
            <p className="hero-description">Desarrollo aplicaciones y soluciones de software combinando frontend, backend, bases de datos, automatización e integración de sistemas.</p>
            <p className="hero-signature">TypeScript <span>·</span> React <span>·</span> Angular <span>·</span> Next.js <span>·</span> Python <span>·</span> Django <span>·</span> Node.js <span>·</span> SQL <span>·</span> PostgreSQL <span>·</span> REST APIs</p>
            <p className="hero-current">Actualmente: Python <span>·</span> SAP Business One <span>·</span> SAP HANA <span>·</span> SQL</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">Ver proyectos <span aria-hidden="true">→</span></a><a className="button button-secondary" href="#contact">Contacto</a></div>
          </div>
          <aside className="hero-panel" aria-label="Áreas de enfoque">
            <p className="panel-label">Áreas de enfoque</p>
            <ul><li><span>01</span> Full Stack Development</li><li><span>02</span> Automatización e integraciones</li><li><span>03</span> Bases de datos y APIs</li><li><span>04</span> IT e infraestructura</li></ul>
            <p className="panel-footer">Disponible para desafíos tecnológicos.</p>
          </aside>
        </section>

        <section id="about" className="section-shell content-section" aria-labelledby="about-title">
          <SectionHeading eyebrow="01 / Sobre mí" title="Desarrollo de software con mirada integral de IT." />
          <div className="about-grid"><p id="about-title" className="lead-text">Perfil híbrido entre Full Stack Development, análisis de IT, automatización, infraestructura y resolución de problemas.</p><div className="about-copy"><p>Combino frontend, backend, bases de datos y APIs para crear soluciones de software claras y mantenibles.</p><p>La experiencia previa en soporte e IT aporta contexto técnico para integrar sistemas y abordar incidencias de punta a punta.</p></div><div className="about-photo-slot" aria-hidden="true" /></div>
        </section>

        <section id="stack" className="section-shell content-section" aria-labelledby="stack-title">
          <SectionHeading eyebrow="02 / Tech stack" title="Herramientas para construir e integrar." description="Tecnologías utilizadas en desarrollo web, datos y entornos empresariales." />
          <div id="stack-title" className="stack-grid">{skillGroups.map((group) => <article className="stack-card" key={group.title}><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
        </section>

        <section id="experience" className="section-shell content-section" aria-labelledby="experience-title">
          <SectionHeading eyebrow="03 / Experiencia" title="Evolución entre IT, software y sistemas empresariales." />
          <ol id="experience-title" className="timeline">{experiences.map((experience) => <li className={experience.current ? "timeline-item is-current" : "timeline-item"} key={experience.title}><div className="timeline-period">{experience.period}</div><article className="experience-card"><p className="organization">{experience.organization}</p><h3>{experience.title}</h3><p>{experience.summary}</p><ul>{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></article></li>)}</ol>
        </section>

        <section id="projects" className="section-shell content-section" aria-labelledby="projects-title">
          <SectionHeading eyebrow="04 / Proyectos" title="Productos y soluciones en evolución." description="Una selección inicial de proyectos; cada caso podrá incorporar enlaces, imágenes y detalle técnico." />
          <div id="projects-title" className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.title}><p className="project-number">0{index + 1}</p><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><ul className="tag-list">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul><span className="project-status">{project.status}</span></article>)}</div>
        </section>

        <section id="console" className="section-shell content-section console-section" aria-labelledby="console-title">
          <SectionHeading eyebrow="05 / Developer console" title="Explorá el perfil desde la terminal." description="Una consola local e interactiva: sólo ejecuta comandos predefinidos del portfolio." />
          <div id="console-title"><DeveloperConsole /></div>
        </section>

        <section id="contact" className="section-shell contact-section" aria-labelledby="contact-title">
          <p className="eyebrow">06 / Contacto</p>
          <div className="contact-grid"><h2 id="contact-title">¿Hablamos de tu próximo desafío?</h2><div><p>Para oportunidades, colaboración o consultas profesionales, el canal de contacto puede incorporarse aquí en la próxima iteración.</p><a className="button button-primary" href="#top">Volver al inicio <span aria-hidden="true">↑</span></a></div></div>
        </section>
      </main>
      <footer className="site-footer"><span>Portfolio profesional</span><span>Full Stack Development · IT Analysis</span></footer>
    </div>
  );
}
