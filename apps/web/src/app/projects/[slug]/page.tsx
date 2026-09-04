import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hasCaseStudy, projects } from "@/data/portfolio";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.filter(hasCaseStudy).map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return { title: project ? `${project.title} | Portfolio` : "Proyecto | Portfolio" };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project || !hasCaseStudy(project)) notFound();

  return (
    <div className="project-detail-page">
      <header className="project-detail-header">
        <Link href="/#projects" className="project-back"><span aria-hidden="true">&larr;</span> Volver a proyectos</Link>
        <span className="beyond-mark">MR<span aria-hidden="true">&middot;</span></span>
      </header>
      <main>
        <section className="project-detail-hero section-shell">
          <p className="eyebrow">{project.type}</p>
          <h1>{project.title}</h1>
          <p className="project-detail-lead">{project.description}</p>
          <div className="project-detail-actions">
            {project.demo ? <a className="button button-primary" href={project.demo} target="_blank" rel="noreferrer">Visitar el sitio</a> : null}
            {project.github ? <a className="button button-secondary" href={project.github} target="_blank" rel="noreferrer">Ver GitHub <span aria-hidden="true">&nearr;</span></a> : null}
            {project.instagram ? <a className="button button-secondary" href={project.instagram} target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">&nearr;</span></a> : null}
          </div>
        </section>

        <section className="section-shell project-detail-content" aria-label="Información del proyecto">
          {project.image ? <div className="project-detail-cover"><Image src={project.image} alt={`Vista de ${project.title}`} fill priority sizes="(max-width: 900px) 100vw, 70vw" /></div> : null}
          <div className="project-detail-grid">
            <article><p className="eyebrow">01 / Problema</p><p>{project.problem}</p></article>
            <article><p className="eyebrow">02 / Solución</p><p>{project.solution}</p></article>
          </div>
          <div className="project-detail-columns">
            <div><p className="eyebrow">03 / Funcionalidades</p><ul className="detail-list">{project.features?.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div><p className="eyebrow">04 / Arquitectura y stack</p><ul className="detail-list">{project.architecture?.map((item) => <li key={item}>{item}</li>)}</ul><ul className="tag-list detail-tags">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </div>
          <div className="project-detail-result"><p className="eyebrow">05 / Resultado</p><p>{project.outcome}</p></div>
          {project.roadmap?.length ? <div className="project-detail-result"><p className="eyebrow">06 / Próximos pasos</p><ul className="detail-list">{project.roadmap.map((item) => <li key={item}>{item}</li>)}</ul></div> : null}
        </section>
      </main>
      <footer className="site-footer"><span>Portfolio profesional</span><Link href="/#contact">Hablemos</Link></footer>
    </div>
  );
}