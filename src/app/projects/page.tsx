import { projects } from "@/lib/content";
import { ProjectCard } from "@/components/content-card";

export default function ProjectsPage() {
  return (
    <div className="narrow">
      <p className="section-label">01 / Projects</p>
      <h1>Work in public.</h1>
      <p className="lede">
        Projects and their description.
      </p>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.slug} />
        ))}
      </div>
    </div>
  );
}
