import { useEffect } from "react";
import { useBlogStore } from "@/features/blog/blog.store";
import BlogCard from "./BlogCard";

export default function BlogListPage() {
  const { blogs, loading, error, fetchBlogs } = useBlogStore();

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  if (loading) {
    return (
      <div className="flex justify-center py-8 text-muted-foreground">
        Đang tải bài viết...
      </div>
    );
  }

  if (error) {
    return <div className="flex justify-center py-8 text-red-500">{error}</div>;
  }

  if (blogs.length === 0) {
    return (
      <div className="flex justify-center py-8 text-muted-foreground">
        Chưa có bài viết nào
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-4 px-4">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
