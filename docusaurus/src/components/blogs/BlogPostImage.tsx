interface BlogPostImageProps {
  imageUrl: string;
}

export default function BlogPostImage({ imageUrl }: BlogPostImageProps) {
  return (
    <div className="relative w-full">
      <img
        alt=""
        src={imageUrl}
        className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
      />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
    </div>
  );
}