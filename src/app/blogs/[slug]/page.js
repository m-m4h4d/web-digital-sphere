import { notFound } from "next/navigation";
import BlogPost from "@/views/BlogPost";
import posts, { getPost } from "@/data/blog";

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

// Only the posts in src/data/blog.js exist; any other slug is a 404.
export const dynamicParams = false;

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default function BlogPostPage({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();
  return <BlogPost post={post} />;
}
