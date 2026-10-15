import type { BlogPost, BlogSection } from "@/data/blog";
import Image from "next/image";

function BlogSectionContent({ section }: { section: BlogSection }) {
  return (
    <section className="article-section">
      <h2>{section.title}</h2>
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {section.list && (
        <ul>
          {section.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {section.table && (
        <div className="article-table-wrap">
          <table>
            <thead>
              <tr>
                {section.table.headers.map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row) => (
                <tr key={row.join("-")}>
                  {row.map((cell, index) => (
                    <td key={`${row[0]}-${index}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {section.note && <p className="article-note">{section.note}</p>}
      {section.image && (
        <Image
          className="article-inline-image"
          src={section.image.src}
          alt={section.image.alt}
          width={section.image.width}
          height={section.image.height}
        />
      )}
    </section>
  );
}

export function BlogPost({ post }: { post: BlogPost }) {
  return (
    <article className="blog-article">
      <header className="blog-article-header">
        <p className="section-label">Writing / {post.date}</p>
        <h1>{post.title}</h1>
        <p className="blog-article-description">{post.description}</p>
        <div className="blog-article-meta">
          <time dateTime={post.dateValue}>{post.date}</time>
          <span>{post.readingTime}</span>
        </div>
        {post.image && (
          <Image
            className="blog-article-image"
            src={post.image.src}
            alt={post.image.alt}
            width={post.image.width}
            height={post.image.height}
          />
        )}
      </header>
      <div className="blog-article-body">
        <p className="article-intro">{post.intro}</p>
        {post.sections.map((section) => (
          <BlogSectionContent key={section.title} section={section} />
        ))}
        <section className="article-section article-links">
          <h2>{post.linksTitle ?? "Explore this project"}</h2>
          <ul>
            {post.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
          {post.closingNote && (
            <p className="article-note">{post.closingNote}</p>
          )}
        </section>
      </div>
    </article>
  );
}
