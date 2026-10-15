import { posts } from "@/data/blog";
import { PostCard } from "@/components/content-card";

export default function BlogPage() {
  return (
    <div className="blog-index">
      <header className="blog-index-header">
        <p className="section-label">02 / Blog</p>
        <h1>  ⋆.˚ </h1>
        <p className="lede">
          Writing about experiments, models, tools, and the decisions that I
          made during a project.
        </p>
      </header>
      <div className="post-list">
        {posts.map((post, index) => (
          <PostCard post={post} index={index} showDate key={post.slug} />
        ))}
      </div>
    </div>
  );
}
