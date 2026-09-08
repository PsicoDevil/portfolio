import Image from "next/image";
import Link from "next/link";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { type Project } from "@/data/portfolio";
import { getDictionary } from "@/i18n";
import { localePath, pick, pickText, type Locale } from "@/i18n/config";

type ProjectDetailViewProps = {
  locale: Locale;
  project: Project;
};

export function ProjectDetailView({ locale, project }: ProjectDetailViewProps) {
  const dict = getDictionary(locale);
  const caseStudy = dict.caseStudy;

  return (
    <div className="project-detail-page">
      <header className="project-detail-header">
        <Link href={localePath("/#projects", locale)} className="project-back"><span aria-hidden="true">&larr;</span> {caseStudy.back}</Link>
        <LocaleSwitcher locale={locale} ariaLabel={dict.a11y.langSwitcher} />
        <span className="beyond-mark">MR<span aria-hidden="true">&middot;</span></span>
      </header>
      <main>
        <section className="project-detail-hero section-shell">
          <p className="eyebrow">{pickText(project.type, locale)}</p>
          <h1>{project.title}</h1>
          <p className="project-detail-lead">{pickText(project.description, locale)}</p>
          <div className="project-detail-actions">
            {project.demo ? <a className="button button-primary" href={project.demo} target="_blank" rel="noreferrer">{caseStudy.visitSite}</a> : null}
            {project.github ? <a className="button button-secondary" href={project.github} target="_blank" rel="noreferrer">{caseStudy.viewGithub} <span aria-hidden="true">&nearr;</span></a> : null}
            {project.instagram ? <a className="button button-secondary" href={project.instagram} target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">&nearr;</span></a> : null}
          </div>
        </section>

        <section className="section-shell project-detail-content" aria-label={caseStudy.infoAria}>
          {project.image ? <div className="project-detail-cover"><Image src={project.image} alt={caseStudy.coverAltTemplate.replace("{title}", project.title)} fill priority sizes="(max-width: 900px) 100vw, 70vw" /></div> : null}
          <div className="project-detail-grid">
            <article><p className="eyebrow">{caseStudy.problem}</p><p>{project.problem ? pickText(project.problem, locale) : null}</p></article>
            <article><p className="eyebrow">{caseStudy.solution}</p><p>{project.solution ? pickText(project.solution, locale) : null}</p></article>
          </div>
          <div className="project-detail-columns">
            <div><p className="eyebrow">{caseStudy.features}</p><ul className="detail-list">{project.features ? pick(project.features, locale).map((item) => <li key={item}>{item}</li>) : null}</ul></div>
            <div><p className="eyebrow">{caseStudy.architecture}</p><ul className="detail-list">{project.architecture ? pick(project.architecture, locale).map((item) => <li key={item}>{item}</li>) : null}</ul><ul className="tag-list detail-tags">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </div>
          <div className="project-detail-result"><p className="eyebrow">{caseStudy.outcome}</p><p>{project.outcome ? pickText(project.outcome, locale) : null}</p></div>
          {project.roadmap ? <div className="project-detail-result"><p className="eyebrow">{caseStudy.roadmap}</p><ul className="detail-list">{pick(project.roadmap, locale).map((item) => <li key={item}>{item}</li>)}</ul></div> : null}
        </section>
      </main>
      <footer className="site-footer"><span>{caseStudy.footerPortfolio}</span><Link href={localePath("/#contact", locale)}>{caseStudy.letsTalk}</Link></footer>
    </div>
  );
}
