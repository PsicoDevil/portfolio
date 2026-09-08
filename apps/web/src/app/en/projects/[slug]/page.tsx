import { notFound } from "next/navigation";
import { ProjectDetailView } from "@/components/views/project-detail-view";
import { hasCaseStudy, projects } from "@/data/portfolio";
import { getDictionary } from "@/i18n";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.filter(hasCaseStudy).map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  const dict = getDictionary("en");
  return {
    title: project ? `${project.title} | Portfolio` : dict.caseStudy.fallbackTitle,
    alternates: { languages: { es: `/projects/${slug}`, en: `/en/projects/${slug}` } },
  };
}

export default async function EnglishProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project || !hasCaseStudy(project)) notFound();

  return <ProjectDetailView locale="en" project={project} />;
}
