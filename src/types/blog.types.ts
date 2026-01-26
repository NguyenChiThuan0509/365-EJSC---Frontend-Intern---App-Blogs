export type PostStatus = "draft" | "published";
export interface Blog {
  id: number;
  title: string;
  slug: string;
  content?: string;
  excerpt?: string;
  status: PostStatus;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  author?: {
    id: number;
    name: string;
  };
}
