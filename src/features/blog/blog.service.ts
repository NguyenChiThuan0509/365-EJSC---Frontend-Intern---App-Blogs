import { api } from "@/api/api";
import type { Blog, PostStatus } from "@/types/blog.types";

/* ---------- GET LIST ---------- */
export async function getPostsService(params?: { includeDraft?: boolean }) {
  const res = await api.get("/api/posts", {
    params,
  });
  return res.data.data as Blog[];
}


/* ---------- GET BY SLUG ---------- */
export async function getPostBySlugService(slug: string) {
  const res = await api.get(`/api/posts/slug/${slug}`);
  return res.data.data as Blog;
}

/* ---------- CREATE ---------- */
export interface CreatePostPayload {
  title: string;
  content: string;
  excerpt: string;
  status: PostStatus;
}

export async function createPostService(payload: CreatePostPayload) {
  const res = await api.post("/api/posts", payload);
  return res.data.data;
}

/* ---------- UPDATE ---------- */
export async function updatePostService(
  id: number,
  payload: CreatePostPayload
) {
  const res = await api.put(`/api/posts/${id}`, payload);
  return res.data.data;
}

/* ---------- DELETE ---------- */
export async function deletePostService(id: number) {
  await api.delete(`/api/posts/${id}`);
}
