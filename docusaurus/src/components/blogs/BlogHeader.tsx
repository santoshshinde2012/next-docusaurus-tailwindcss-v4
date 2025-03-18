import { BlogPost } from '../types/blog'

interface BlogHeaderProps {
  title: string;
  description: string;
}

export default function BlogHeader({ title, description }: BlogHeaderProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
        {title}
      </h2>
      <p className="mt-2 text-lg/8 text-gray-600">{description}</p>
    </div>
  );
}