import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-name" aria-label={`${site.name} home`}>
          ᓚᘏᗢ
        </p>
        <p className="muted">
          [m.son] Compiling the future, one segfault at a time.
        </p>
      </div>
      <nav className="footer-links" aria-label="Social links">
        <a href={site.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a
          href={`mailto:${site.email}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </a>
      </nav>
      <p className="footer-meta">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
