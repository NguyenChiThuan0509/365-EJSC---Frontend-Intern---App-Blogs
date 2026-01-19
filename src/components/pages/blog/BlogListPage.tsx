import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import { useBlogStore } from "@/features/blog/blog.store";
import BlogCard from "@/components/pages/blog/BlogCard";
import Pagination from "@/components/pages/Pagination";

const PAGE_SIZE = 6;

export default function BlogListPage() {
  const { blogs, loading, error, fetchBlogs } = useBlogStore();
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  /* ---------- pagination ---------- */
  const totalPages = Math.ceil(blogs.length / PAGE_SIZE);

  const paginatedBlogs = blogs.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  if (error) {
    return (
      <div className="space-y-2">
        <p className="text-red-500">{error}</p>
        <Button onClick={fetchBlogs}>Retry</Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* ---------- loading state ---------- */}
      {loading && <p className="text-muted-foreground">Loading blogs...</p>}

      {/* ---------- list ---------- */}
      {!loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginatedBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}

      {/* ---------- empty ---------- */}
      {!loading && blogs.length === 0 && (
        <p className="text-muted-foreground">
          No blogs yet. Create your first blog ✨
        </p>
      )}

      {/* ---------- pagination ---------- */}
      {!loading && totalPages > 1 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}
    </div>
  );
}
