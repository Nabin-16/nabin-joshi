import { notFound } from "next/navigation";
import { posts } from "@/data/blog";
import { BlogPost } from "@/components/blog-post";

export const dynamicParams = false;
export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();
  return <BlogPost post={post} />;
}
