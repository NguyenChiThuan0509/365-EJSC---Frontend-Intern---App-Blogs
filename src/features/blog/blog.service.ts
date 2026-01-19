import { api } from "@/lib/api";
import type { Blog } from "@/types/blog.types";

function mapPostToBlog(post: Blog)  {
  return {
    id: String(post.id),
    title: post.title,
    content: post.content,
    author: "Admin",
    status: "published",
    createdAt: new Date().toISOString(),
  };
}

export const blogService = {
  async getBlogs(): Promise<Blog[]> {
    const res = await api.get<Blog[]>("/posts");
    return res.data.slice(0, 10).map(mapPostToBlog);
  },
};
