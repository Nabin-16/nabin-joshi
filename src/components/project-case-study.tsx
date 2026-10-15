import Image from "next/image";
import type { ReactNode } from "react";
import type { Project } from "@/lib/content";

type ProjectSectionProps = {
  label: string;
  title: string;
  children: ReactNode;
};

function ProjectSection({ label, title, children }: ProjectSectionProps) {
  return (
    <section className="case-study-section">
      <div>
        <p className="section-label">{label}</p>
        <h2>{title}</h2>
      </div>
      <div className="case-study-section-content">{children}</div>
    </section>
  );
}

type ProjectCaseStudyProps = {
  project: Project;
};

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  return (
    <article className="case-study">
      <header className="case-study-header">
        <p className="section-label">Project / Case study</p>
        <h1>{project.title}</h1>
      </header>

      <div className="case-study-intro">
        <div className="case-study-primary">
          <p className="lede">{project.description}</p>
          <div className="case-study-meta">
            <p className="section-label">At a glance</p>
            <p className="case-study-status">{project.status}</p>
            <ul className="tag-list">
              {project.stack.map((item) => (
                <li className="tag" key={item}>
                  {item}
                </li>
              ))}
            </ul>
            {project.repoUrl && (
              <a
                className="button-link"
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View the repository ↗
              </a>
            )}
          </div>
        </div>

        <div className="case-study-media">
          {project.image ? (
            <Image
              className="project-cover"
              src={project.image}
              alt={project.imageAlt ?? ""}
              width={800}
              height={450}
              priority
            />
          ) : (
            <div
              className="project-cover project-cover-placeholder"
              role="img"
              aria-label="Project image pending"
            >
              Project visual pending
            </div>
          )}
        </div>
      </div>

      <div className="case-study-sections">
        <ProjectSection label="01 / Research question" title="What it asks">
          <p>{project.details.question}</p>
        </ProjectSection>
        <ProjectSection label="02 / Experimental design" title="Scope">
          <p>{project.details.scope}</p>
        </ProjectSection>
        <ProjectSection label="03 / Evaluation" title="How it measures">
          <p>{project.details.outcome}</p>
        </ProjectSection>
      </div>
    </article>
  );
}
