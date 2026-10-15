import { notFound } from "next/navigation";
import { projects } from "@/lib/content";
import { ProjectCaseStudy } from "@/components/project-case-study";

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <ProjectCaseStudy project={project} />;
}
