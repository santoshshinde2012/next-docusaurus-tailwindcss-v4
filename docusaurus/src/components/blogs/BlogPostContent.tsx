interface BlogPostContentProps {
  title: string;
  href: string;
  description: string;
}

export default function BlogPostContent({ title, href, description }: BlogPostContentProps) {
  return (
    <div className="group relative">
      <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
        <a href={href}>
          <span className="absolute inset-0" />
          {title}
        </a>
      </h3>
      <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{description}</p>
    </div>
  );
}