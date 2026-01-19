import type { Blog } from "@/types/blog.types";

interface Props {
  blog: Blog;
  canEdit?: boolean;
  canDelete?: boolean;
}

export default function BlogCard({ blog }: Props) {
  return (
    <div className="rounded-lg border bg-white p-4 space-y-2">
      <h3 className="text-lg font-semibold">{blog.title}</h3>

      <p className="text-sm text-muted-foreground line-clamp-2">
        {blog.content}
      </p>

      <div className="text-xs text-muted-foreground">
        By {blog.author} • {new Date(blog.createdAt).toLocaleDateString()}
      </div>
    </div>
  );
}
