import { Category } from '../types/blog';

interface BlogPostMetaProps {
  date: string;
  datetime: string;
  category: Category;
}

export default function BlogPostMeta({ date, datetime, category }: BlogPostMetaProps) {
  return (
    <div className="mt-8 flex items-center gap-x-4 text-xs">
      <time dateTime={datetime} className="text-gray-500">
        {date}
      </time>
      <a
        href={category.href}
        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
      >
        {category.title}
      </a>
    </div>
  );
}