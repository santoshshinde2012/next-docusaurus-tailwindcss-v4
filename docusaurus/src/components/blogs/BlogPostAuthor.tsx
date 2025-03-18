import { Author } from '../types/blog';

interface BlogPostAuthorProps {
  author: Author;
}

export default function BlogPostAuthor({ author }: BlogPostAuthorProps) {
  return (
    <div className="relative mt-8 flex items-center gap-x-4">
      <img alt="" src={author.imageUrl} className="size-10 rounded-full bg-gray-100" />
      <div className="text-sm/6">
        <p className="font-semibold text-gray-900">
          <a href={author.href}>
            <span className="absolute inset-0" />
            {author.name}
          </a>
        </p>
        <p className="text-gray-600">{author.role}</p>
      </div>
    </div>
  );
}