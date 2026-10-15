import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import type { Project } from "@/lib/content";

function CardNumber({ index }: { index: number }) {
  return <span className="number">{String(index + 1).padStart(2, "0")}</span>;
}

export function ProjectCard({
  project,
  index,
  description,
}: {
  project: Project;
  index: number;
  description?: string;
}) {
  return (
    <Link
      className="project-card"
      href={`/projects/${project.slug}/`}
    >
      <CardNumber index={index} />
      {project.image ? (
        <Image
          className="project-thumb"
          src={project.image}
          alt={project.imageAlt ?? ""}
          width={320}
          height={180}
        />
      ) : (
        <span
          className="project-thumb project-thumb-placeholder"
          aria-label="Project image pending"
        >
          visual pending
        </span>
      )}
      <div>
        <h3>{project.title}</h3>
        <p>{description ?? project.description}</p>
      </div>
      <span className="meta">{project.status}</span>
    </Link>
  );
}

export function PostCard({
  post,
  index,
  showDate = false,
}: {
  post: BlogPost;
  index: number;
  showDate?: boolean;
}) {
  return (
    <Link className="post-card" href={`/blog/${post.slug}/`}>
      <CardNumber index={index} />
      <div>
        {showDate ? <h2>{post.title}</h2> : <h3>{post.title}</h3>}
        <p>{post.description}</p>
      </div>
      <span className="meta">{showDate ? post.date : post.readingTime}</span>
    </Link>
  );
}
