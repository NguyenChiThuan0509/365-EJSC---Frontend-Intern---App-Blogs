import { Link } from "react-router-dom";
import type { Blog } from "@/types/blog.types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const plainContent =
    blog.excerpt ?? blog.content?.replace(/<[^>]+>/g, "").slice(0, 150);

  return (
    <Card className="transition hover:shadow-md mt-5 mb-5">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg leading-snug line-clamp-2">
          <Link to={`/blogs/${blog.slug}`} className="hover:underline">
            {blog.title}
          </Link>
        </CardTitle>

        <CardDescription className="text-xs text-muted-foreground">
          By {blog.author?.name ?? "Unknown"}
          {blog.createdAt && (
            <> • {new Date(blog.createdAt).toLocaleDateString()}</>
          )}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {plainContent ? `${plainContent}...` : "Không có nội dung"}
        </p>
      </CardContent>
    </Card>
  );
}
