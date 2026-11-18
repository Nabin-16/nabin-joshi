import Link from "next/link";
import { featuredProjects } from "@/lib/content";
import { featuredPosts } from "@/data/blog";
import { PostCard, ProjectCard } from "@/components/content-card";
import { SkillsSection } from "@/components/skills-section";
import Image from "next/image";
import profileImage from "@/assets/images/profile.jpeg";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="hero-greeting">Hi!</p>
          <h1>
            <span>I&apos;m</span>
            <span>Nabin Joshi</span>
          </h1>
          <p className="lede">
            A computer engineering student in Nepal. Learning in public through
            robotics, data, and the small experiments that become useful tools.
            Chasing questions that start with “what if.”
          </p>
          <div className="hero-actions">
            <Link className="button-link" href="/projects/">
              See the builds
            </Link>
            <a
              className="quiet-link"
              href="https://mson.bearblog.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              A little from me <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div
          className="workbench"
          aria-label={"A snapshot of Nabin's current work"}
        >
          <Image
            className="profile-image"
            src={profileImage}
            alt="Nabin Joshi outdoors in a garden"
            placeholder="blur"
            priority
          />
          <div className="workbench-grid" aria-hidden="true" />
          <div className="workbench-shade" aria-hidden="true" />
          <p className="workbench-caption">somewhere in between</p>
        </div>
      </section>
      <SkillsSection />
      <section className="section projects-section">
        <div className="section-heading">
          <p className="section-label">02 / Work notes</p>
          <Link href="/projects/">All projects ↗</Link>
        </div>
        <div className="project-list">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              project={project}
              index={index}
              description={project.summary}
              key={project.slug}
            />
          ))}
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <p className="section-label">03 / Blogs</p>
          <Link href="/blog/">All writing ↗</Link>
        </div>
        <div className="post-list">
          {featuredPosts.map((post, index) => (
            <PostCard post={post} index={index} key={post.slug} />
          ))}
        </div>
      </section>
    </>
  );
}
