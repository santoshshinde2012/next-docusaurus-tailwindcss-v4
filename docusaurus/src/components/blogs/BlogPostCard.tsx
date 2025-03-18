import { BlogPost } from '../types/blog'
import BlogPostImage from './BlogPostImage'
import BlogPostMeta from './BlogPostMeta'
import BlogPostContent from './BlogPostContent'
import BlogPostAuthor from './BlogPostAuthor'

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="flex flex-col items-start justify-between">
      <BlogPostImage imageUrl={post.imageUrl} />
      <div className="max-w-xl">
        <BlogPostMeta date={post.date} datetime={post.datetime} category={post.category} />
        <BlogPostContent title={post.title} href={post.href} description={post.description} />
        <BlogPostAuthor author={post.author} />
      </div>
    </article>
  );
}