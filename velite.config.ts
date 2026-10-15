import { defineConfig, s } from "velite";

export default defineConfig({
  root: "content",
  collections: {
    projects: {
      name: "Project",
      pattern: "projects/**/*.mdx",
      schema: s.object({
        title: s.string(),
        summary: s.string(),
        description: s.string(),
        stack: s.array(s.string()),
        status: s.enum(["placeholder", "active", "complete"]),
        content: s.markdown(),
      }),
    },
    posts: {
      name: "Post",
      pattern: "posts/**/*.mdx",
      schema: s.object({
        title: s.string(),
        description: s.string(),
        date: s.isodate(),
        tags: s.array(s.string()),
        content: s.markdown(),
      }),
    },
    now: {
      name: "Now",
      pattern: "now.md",
      schema: s.object({ title: s.string(), updated: s.isodate(), content: s.markdown() }),
    },
  },
});
