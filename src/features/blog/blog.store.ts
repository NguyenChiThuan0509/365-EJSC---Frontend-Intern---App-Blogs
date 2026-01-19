import { create } from "zustand";
import type { Blog } from "../../types/blog.types";
import { blogService } from "@/features/blog/blog.service";

interface BlogState {
  blogs: Blog[];
  loading: boolean;
  error: string | null;

  fetchBlogs: () => Promise<void>;
}

export const useBlogStore = create<BlogState>((set) => ({
  blogs: [],
  loading: false,
  error: null,

  fetchBlogs: async () => {
  try {
    set({ loading: true, error: null });
    const blogs = await blogService.getBlogs();
    set({ blogs, loading: false });
  } catch (err) {
    set({
      loading: false,
      error: err instanceof Error ? err.message : "Something went wrong",
    });
  }
},

  
}));
