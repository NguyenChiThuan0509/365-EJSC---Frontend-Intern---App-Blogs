import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { useBlogStore } from "@/features/blog/blog.store";

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { currentBlog, loading, error, fetchBlogBySlug } = useBlogStore();

  useEffect(() => {
    if (slug) {
      fetchBlogBySlug(slug);
    }
  }, [slug, fetchBlogBySlug]);

  const safeContent = useMemo(() => {
    const clean = DOMPurify.sanitize(currentBlog?.content ?? "");
    console.log("SANITIZED HTML:", clean);
    return clean;
  }, [currentBlog?.content]);

  if (loading) {
    return (
      <div className="flex justify-center py-10 text-muted-foreground">
        Đang tải bài viết...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center py-10 text-red-500">{error}</div>
    );
  }

  if (!currentBlog) {
    return (
      <div className="flex justify-center py-10 text-muted-foreground">
        Không tìm thấy bài viết
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">{currentBlog.title}</h1>

        <p className="text-sm text-muted-foreground">
          By {currentBlog.author?.name ?? "Unknown"} •{" "}
          {new Date(currentBlog.createdAt).toLocaleDateString()}
        </p>
      </header>

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: safeContent }}
      />
    </article>
  );
}
