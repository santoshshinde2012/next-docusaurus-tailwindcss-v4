import BlogHeader from './blogs/BlogHeader'
import BlogPostCard from './blogs/BlogPostCard'
import { posts } from './blogs/blogData'

export default function Blogs() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <BlogHeader 
          title="From the blog" 
          description="Learn how to grow your business with our expert advice." 
        />
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}