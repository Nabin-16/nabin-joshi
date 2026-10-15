import { site } from "@/data/site";

export default function AboutPage() {
  return (
    <article className="contact-page">
      <p className="section-label">03 / About</p>
      <h1>Let&apos;s connect.</h1>
      <p className="lede contact-intro">
          I&apos;m always happy to connect with people working on interesting
          ideas, discuss research, collaborate on projects, or simply exchange
          thoughts about technology.
        {/* I&apos;m Nabin Joshi, a computer science undergraduate interested in
        AI/ML, robotics, and building things that solve interesting problems. */}
      </p>
      <section className="contact-section">
        {/* <p>
          I&apos;m always happy to connect with people working on interesting
          ideas, discuss research, collaborate on projects, or simply exchange
          thoughts about technology.
        </p> */}
        <p className="muted">
          If something here catches your attention, feel free to reach out.
        </p>
      </section>
      <section className="contact-section">
        <p className="section-label">Find me around the web</p>
        <ul className="contact-links">
          <li>
            <a href={`mailto:${site.email}`}>
              <span>Email</span>
              <span>{site.email} ↗</span>
            </a>
          </li>
          <li>
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              <span>GitHub</span>
              <span>@Nabin-16 ↗</span>
            </a>
          </li>
          <li>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              <span>LinkedIn</span>
              <span>Connect ↗</span>
            </a>
          </li>
          <li>
            <a href={site.kaggle} target="_blank" rel="noopener noreferrer">
              <span>Kaggle</span>
              <span>admantium ↗</span>
            </a>
          </li>
          <li>
            <a href={site.bearblog} target="_blank" rel="noopener noreferrer">
              <span>Bear Blog</span>
              <span>Personal notes ↗</span>
            </a>
          </li>
        </ul>
      </section>
      <section className="contact-section contact-signoff">
        <p className="section-label">Currently curious about</p>
        <p>
          AI safety, Model evaluation, practical ML/DL, robotics, and the
          space where thoughtful software meets the physical world.
        </p>
      </section>
    </article>
  );
}
