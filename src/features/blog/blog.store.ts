import { create } from "zustand";
import type { Blog } from "@/types/blog.types";
import {
  getPostsService,
  getPostBySlugService,
} from "@/features/blog/blog.service";

interface BlogState {
  blogs: Blog[];
  currentBlog: Blog | null;
  loading: boolean;
  error: string | null;

  fetchBlogs: () => Promise<void>;
  fetchBlogBySlug: (slug: string) => Promise<void>;
}

export const useBlogStore = create<BlogState>((set) => ({
  blogs: [],
  currentBlog: null,
  loading: false,
  error: null,

  fetchBlogs: async () => {
    try {
      set({ loading: true, error: null });
      const blogs = await getPostsService();
      set({ blogs });
    } catch {
      set({ error: "Không thể tải danh sách bài viết" });
    } finally {
      set({ loading: false });
    }
  },

  fetchBlogBySlug: async (slug) => {
    try {
      set({ loading: true, error: null, currentBlog: null });
      const blog = await getPostBySlugService(slug);
      set({ currentBlog: blog });
    } catch {
      set({ error: "Không thể tải bài viết" });
    } finally {
      set({ loading: false });
    }
  },
}));
