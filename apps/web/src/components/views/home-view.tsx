import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { DeveloperConsole } from "@/components/developer-console";
import { SectionHeading } from "@/components/section-heading";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteHeader } from "@/components/site-header";
import { contactLinks, experiences, hasCaseStudy, projects, skillGroups } from "@/data/portfolio";
import { getDictionary } from "@/i18n";
import { localePath, pick, pickItems, pickList, pickText, type Locale } from "@/i18n/config";

export function HomeView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <div id="top" className="site-page">
      <SiteHeader locale={locale} />
      <main>
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy hero-stagger">
            <p className="eyebrow">DEVELOPER / IT ANALYST</p>
            <h1 id="hero-title">Full Stack Developer</h1>
            <p className="hero-subtitle">IT Analyst <span>&middot;</span> Software Development <span>&middot;</span> Automation</p>
            <p className="hero-description">{dict.hero.description}</p>
            <p className="hero-signature">TypeScript <span>&middot;</span> React <span>&middot;</span> Angular <span>&middot;</span> Next.js <span>&middot;</span> Python <span>&middot;</span> Django <span>&middot;</span> Node.js <span>&middot;</span> SQL <span>&middot;</span> PostgreSQL <span>&middot;</span> REST APIs</p>
            <p className="hero-current">{dict.hero.currentLabel} Python <span>&middot;</span> SAP Business One <span>&middot;</span> SAP HANA <span>&middot;</span> SQL</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">{dict.hero.primaryCta} <span aria-hidden="true">&rarr;</span></a><a className="button button-secondary" href="#contact">{dict.hero.secondaryCta}</a></div>
          </div>
          <aside className="hero-panel hero-panel-motion" aria-label={dict.a11y.heroPanel}>
            <p className="panel-label">{dict.hero.panelLabel}</p>
            <ul><li><span>01</span> {dict.hero.panelItems[0]}</li><li><span>02</span> {dict.hero.panelItems[1]}</li><li><span>03</span> {dict.hero.panelItems[2]}</li><li><span>04</span> {dict.hero.panelItems[3]}</li></ul>
            <p className="panel-footer">{dict.hero.panelFooter}</p>
          </aside>
        </section>

        <ScrollReveal><section id="about" className="section-shell content-section" aria-labelledby="about-title">
          <SectionHeading eyebrow={dict.about.eyebrow} title={dict.about.title} />
          <div className="about-grid reveal-stagger">
            <p id="about-title" className="lead-text">
  {dict.about.lead}
</p>
            <div className="about-copy"><p>{dict.about.paragraph1}</p><p>{dict.about.paragraph2}</p><div className="about-actions"><a className="text-link" href="/CV-Marcelo-Rojas.pdf" download>{dict.about.downloadCv} <span aria-hidden="true">&darr;</span></a><a className="text-link" href="https://www.linkedin.com/in/marcelo-rojas-a00616233/" target="_blank" rel="noreferrer">{dict.about.linkedin} <span aria-hidden="true">&nearr;</span></a></div></div>
            <div className="about-photo-slot"><Image src="/profile.png" alt="Marcelo Rojas" width={1254} height={1254} /></div>
          </div>
        </section></ScrollReveal>

        <ScrollReveal><section id="stack" className="section-shell content-section" aria-labelledby="stack-title">
          <SectionHeading eyebrow={dict.stack.eyebrow} title={dict.stack.title} description={dict.stack.description} />
          <div id="stack-title" className="stack-grid reveal-stagger">{skillGroups.map((group) => <article className={`stack-card${group.title === "Professional Skills" ? " stack-card-wide" : ""}`} key={group.title}><h3>{group.title}</h3><ul>{pickItems(group.items, locale).map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
        </section></ScrollReveal>

        <ScrollReveal className="timeline-reveal"><section id="experience" className="section-shell content-section" aria-labelledby="experience-title">
          <SectionHeading eyebrow={dict.experience.eyebrow} title={dict.experience.title} />
          <ol id="experience-title" className="timeline reveal-stagger">{experiences.map((experience) => <li className={experience.current ? "timeline-item is-current" : "timeline-item"} key={`${experience.organization}-${experience.title}`}><div className="timeline-period">{pick(experience.period, locale)}</div><article className="experience-card"><p className="organization">{experience.organization}</p><h3>{experience.title}</h3><p style={{ whiteSpace: "pre-line" }}>{pick(experience.summary, locale)}</p><ul>{pickList(experience.highlights, locale).map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></article></li>)}</ol>
        </section></ScrollReveal>

        <ScrollReveal><section id="projects" className="section-shell content-section" aria-labelledby="projects-title">
          <SectionHeading eyebrow={dict.projects.eyebrow} title={dict.projects.title} description={dict.projects.description} />
          <div id="projects-title" className="project-grid reveal-stagger">{projects.map((project, index) => <article className="project-card" key={`${project.title}-${pickText(project.type, locale)}`}>
            {project.image ? <div className="project-image-wrap"><Image src={project.image} alt={project.title} width={1200} height={820} /></div> : null}
            <p className="project-number">0{index + 1}</p>
            <p className="project-type">{pickText(project.type, locale)}</p>
            <h3>{project.title}</h3>
            {project.context ? <p className="project-context">{pickText(project.context, locale)}</p> : null}
            <p>{pickText(project.description, locale)}</p>
            {project.stack.length > 0 ? <ul className="tag-list">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul> : <div className="project-spacer" />}
            {hasCaseStudy(project) || project.github || project.demo || project.instagram ? (
              <div className="project-actions">
              {hasCaseStudy(project) ? <a className="text-link" href={localePath(`/projects/${project.slug}`, locale)}>{dict.projects.viewCase} <span aria-hidden="true">&rarr;</span></a> : null}
              {(project.github || project.demo || project.instagram) ? (
                <div className="about-actions">
                {project.github ? <a className="text-link" href={project.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a> : null}
                {project.demo ? <a className="text-link" href={project.demo} target="_blank" rel="noreferrer">Demo <span aria-hidden="true">↗</span></a> : null}
                {project.instagram ? <a className="text-link" href={project.instagram} target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a> : null}
                </div>
              ) : null}
              </div>
            ) : null}
            <span className="project-status">{pickText(project.status, locale)}</span>
          </article>)}</div>
        </section></ScrollReveal>

        <ScrollReveal><section id="console" className="section-shell content-section console-section" aria-labelledby="console-title">
          <SectionHeading eyebrow={dict.consoleSection.eyebrow} title={dict.consoleSection.title} description={dict.consoleSection.description} />
          <div id="console-title"><DeveloperConsole content={dict.console} /></div>
        </section></ScrollReveal>

        <ScrollReveal><section className="section-shell content-section" aria-labelledby="beyond-title">
          <div className="about-grid beyond-grid" style={{ alignItems: "center" }}>
            <div>
              <p className="eyebrow">{dict.beyondTeaser.eyebrow}</p>
              <h2 id="beyond-title">{dict.beyondTeaser.title}</h2>
              <p className="hero-subtitle" style={{ margin: "0.5rem 0 0.75rem" }}>{dict.beyondTeaser.subtitle}</p>
              <p className="lead-text" style={{ marginBottom: 0 }}>{dict.beyondTeaser.lead}</p>
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
              <a className="beyond-explore" href={localePath("/beyond", locale)}>{dict.beyondTeaser.explore} <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section></ScrollReveal>

        <ScrollReveal><section id="contact" className="section-shell contact-section" aria-labelledby="contact-title">
          <p className="eyebrow">{dict.contact.eyebrow}</p>
          <div className="contact-grid"><div><h2 id="contact-title">{dict.contact.title}</h2><p>{dict.contact.subtitle}</p><ul className="contact-links">{contactLinks.map((link) => <li key={link.href}><span>{pickText(link.label, locale)}</span><a href={link.href} download={Boolean(link.download)} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined}>{pickText(link.value, locale)} <span aria-hidden="true">{link.external ? "↗" : "↓"}</span></a></li>)}</ul></div><ContactForm content={dict.contact.form} /></div>
        </section></ScrollReveal>
      </main>
      <footer className="site-footer"><div className="site-footer-content"><span>{dict.footer.portfolio}</span><span>Full Stack Developer <span aria-hidden="true">&middot;</span> IT Analyst</span></div></footer>
    </div>
  );
}
