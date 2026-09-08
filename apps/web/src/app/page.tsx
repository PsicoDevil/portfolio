import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { DeveloperConsole } from "@/components/developer-console";
import { SectionHeading } from "@/components/section-heading";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteHeader } from "@/components/site-header";
import { contactLinks, experiences, hasCaseStudy, projects, skillGroups } from "@/data/portfolio";

export default function Home() {
  return (
    <div id="top" className="site-page">
      <SiteHeader />
      <main>
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy hero-stagger">
            <p className="eyebrow">DEVELOPER / IT ANALYST</p>
            <h1 id="hero-title">Full Stack Developer</h1>
            <p className="hero-subtitle">IT Analyst <span>&middot;</span> Software Development <span>&middot;</span> Automation</p>
            <p className="hero-description">Convierto necesidades de negocio en soluciones de software claras, mantenibles y conectadas con la realidad operativa.</p>
            <p className="hero-signature">TypeScript <span>&middot;</span> React <span>&middot;</span> Angular <span>&middot;</span> Next.js <span>&middot;</span> Python <span>&middot;</span> Django <span>&middot;</span> Node.js <span>&middot;</span> SQL <span>&middot;</span> PostgreSQL <span>&middot;</span> REST APIs</p>
            <p className="hero-current">Actualmente: Python <span>&middot;</span> SAP Business One <span>&middot;</span> SAP HANA <span>&middot;</span> SQL</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">Ver proyectos <span aria-hidden="true">&rarr;</span></a><a className="button button-secondary" href="#contact">Contacto</a></div>
          </div>
          <aside className="hero-panel hero-panel-motion" aria-label="Areas de enfoque">
            <p className="panel-label">Areas de enfoque</p>
            <ul><li><span>01</span> Full Stack Development</li><li><span>02</span> Automatizacion e integraciones</li><li><span>03</span> Bases de datos y APIs</li><li><span>04</span> IT e infraestructura</li></ul>
            <p className="panel-footer">Disponible para desafios tecnologicos.</p>
          </aside>
        </section>

        <ScrollReveal><section id="about" className="section-shell content-section" aria-labelledby="about-title">
          <SectionHeading eyebrow="01 / Sobre mi" title="Desarrollo de software con mirada integral de IT." />
          <div className="about-grid reveal-stagger">
            <p id="about-title" className="lead-text">
  Full Stack Developer e IT Analyst con mas de siete años de experiencia en tecnologia, desarrollo de software y soporte IT.
</p>
            <div className="about-copy"><p>Combino desarrollo web y de aplicaciones con soporte tecnico, automatizacion e integracion de sistemas para abordar problemas de punta a punta.</p><p>Actualmente desarrollo aplicaciones Python para CONFECAT S.A., junto con scripts de automatizacion y mantenimiento de soluciones internas. Tambien trabajo en soluciones web y de automatizacion propias para negocios, como el proyecto de e-commerce Food Club y la solucion IG Auto, actualmente en desarrollo.</p><div className="about-actions"><a className="text-link" href="/CV-Marcelo-Rojas.pdf" download>Descargar CV <span aria-hidden="true">&darr;</span></a><a className="text-link" href="https://www.linkedin.com/in/marcelo-rojas-a00616233/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">&nearr;</span></a></div></div>
            <div className="about-photo-slot"><Image src="/profile.png" alt="Marcelo Rojas" width={1254} height={1254} /></div>
          </div>
        </section></ScrollReveal>

        <ScrollReveal><section id="stack" className="section-shell content-section" aria-labelledby="stack-title">
          <SectionHeading eyebrow="02 / Tech stack" title="Herramientas para construir e integrar." description="Tecnologias utilizadas en desarrollo web, datos y entornos empresariales." />
          <div id="stack-title" className="stack-grid reveal-stagger">{skillGroups.map((group) => <article className={`stack-card${group.title === "Professional Skills" ? " stack-card-wide" : ""}`} key={group.title}><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
        </section></ScrollReveal>

        <ScrollReveal className="timeline-reveal"><section id="experience" className="section-shell content-section" aria-labelledby="experience-title">
          <SectionHeading eyebrow="03 / Experiencia" title="De soporte IT y operaciones de campo a desarrollo de software." />
          <ol id="experience-title" className="timeline reveal-stagger">{experiences.map((experience) => <li className={experience.current ? "timeline-item is-current" : "timeline-item"} key={`${experience.organization}-${experience.title}`}><div className="timeline-period">{experience.period}</div><article className="experience-card"><p className="organization">{experience.organization}</p><h3>{experience.title}</h3><p style={{ whiteSpace: "pre-line" }}>{experience.summary}</p><ul>{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></article></li>)}</ol>
        </section></ScrollReveal>

        <ScrollReveal><section id="projects" className="section-shell content-section" aria-labelledby="projects-title">
          <SectionHeading eyebrow="04 / Proyectos seleccionados" title="Proyectos seleccionados" description="Una seleccion de proyectos personales, academicos y profesionales en los que participe durante mi recorrido como desarrollador." />
          <div id="projects-title" className="project-grid reveal-stagger">{projects.map((project, index) => <article className="project-card" key={`${project.title}-${project.type}`}>
            {project.image ? <div className="project-image-wrap"><Image src={project.image} alt={project.title} width={1200} height={820} /></div> : null}
            <p className="project-number">0{index + 1}</p>
            <p className="project-type">{project.type}</p>
            <h3>{project.title}</h3>
            {project.context ? <p className="project-context">{project.context}</p> : null}
            <p>{project.description}</p>
            {project.stack.length > 0 ? <ul className="tag-list">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul> : <div className="project-spacer" />}
            {hasCaseStudy(project) || project.github || project.demo || project.instagram ? (
              <div className="project-actions">
              {hasCaseStudy(project) ? <a className="text-link" href={`/projects/${project.slug}`}>Ver caso <span aria-hidden="true">&rarr;</span></a> : null}
              {(project.github || project.demo || project.instagram) ? (
                <div className="about-actions">
                {project.github ? <a className="text-link" href={project.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a> : null}
                {project.demo ? <a className="text-link" href={project.demo} target="_blank" rel="noreferrer">Demo <span aria-hidden="true">↗</span></a> : null}
                {project.instagram ? <a className="text-link" href={project.instagram} target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a> : null}
                </div>
              ) : null}
              </div>
            ) : null}
            <span className="project-status">{project.status}</span>
          </article>)}</div>
        </section></ScrollReveal>

        <ScrollReveal><section id="console" className="section-shell content-section console-section" aria-labelledby="console-title">
          <SectionHeading eyebrow="05 / Developer console" title="Explora el perfil desde la terminal." description="Una consola local e interactiva: solo ejecuta comandos predefinidos del portfolio." />
          <div id="console-title"><DeveloperConsole /></div>
        </section></ScrollReveal>

        <ScrollReveal><section className="section-shell content-section" aria-labelledby="beyond-title">
          <div className="about-grid beyond-grid" style={{ alignItems: "center" }}>
            <div>
              <p className="eyebrow">06 / Personal</p>
              <h2 id="beyond-title">Más allá del código</h2>
              <p className="hero-subtitle" style={{ margin: "0.5rem 0 0.75rem" }}>Música · Gaming · Cine</p>
              <p className="lead-text" style={{ marginBottom: 0 }}>Un vistazo a las cosas que también forman parte de mí.</p>
            </div>
            <div className="beyond-teaser">
              <div className="beyond-teaser-top"><span>PERSONAL INDEX</span><span>03 INTERESTS</span></div>
              <div className="beyond-interest-grid">
                <div className="beyond-interest beyond-interest-music">
                  <div className="beyond-interest-image"><Image src="/syncrologo.png" alt="" fill sizes="(max-width: 900px) 33vw, 180px" /></div>
                  <span>01</span><strong>MUSIC</strong><i />
                </div>
                <div className="beyond-interest beyond-interest-gaming">
                  <div className="beyond-interest-image"><Image src="/witcher.webp" alt="" fill sizes="(max-width: 900px) 33vw, 180px" /></div>
                  <span>02</span><strong>GAMING</strong><i />
                </div>
                <div className="beyond-interest beyond-interest-cinema">
                  <div className="beyond-interest-image"><Image src="/pulp.jpg" alt="" fill sizes="(max-width: 900px) 33vw, 180px" /></div>
                  <span>03</span><strong>CINEMA</strong><i />
                </div>
              </div>
              <a className="beyond-explore" href="/beyond">Explorar sección <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section></ScrollReveal>

        <ScrollReveal><section id="contact" className="section-shell contact-section" aria-labelledby="contact-title">
          <p className="eyebrow">07 / Contacto</p>
          <div className="contact-grid"><div><h2 id="contact-title">Hablemos de tu proximo desafio.</h2><p>Contame qué necesitás construir, mejorar o conectar.</p><ul className="contact-links">{contactLinks.map((link) => <li key={link.label}><span>{link.label}</span><a href={link.href} download={link.label === "Curriculum"} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined}>{link.value} <span aria-hidden="true">{link.external ? "↗" : "↓"}</span></a></li>)}</ul></div><ContactForm /></div>
        </section></ScrollReveal>
      </main>
      <footer className="site-footer"><div className="site-footer-content"><span>Portfolio profesional</span><span>Full Stack Developer <span aria-hidden="true">&middot;</span> IT Analyst</span></div></footer>
    </div>
  );
}
