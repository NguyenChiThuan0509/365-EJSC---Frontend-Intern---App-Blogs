import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  createPostService,
  updatePostService,
  getPostsService,
} from "@/features/blog/blog.service";

import type { PostStatus } from "@/types/blog.types";

import DOMPurify from "dompurify";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
import RichTextEditor from "@/components/ui/RichTextEditor";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface PostForm {
  title: string;
  excerpt: string;
  content: string;
  status: PostStatus;
}

export default function AdminPostFormPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const [form, setForm] = useState<PostForm>({
    title: "",
    excerpt: "",
    content: "",
    status: "draft",
  });

  useEffect(() => {
    if (!isEdit) return;

    getPostsService({ includeDraft: true }).then((posts) => {
      const post = posts.find((p) => p.id === Number(id));
      if (!post) return;

      setForm({
        title: post.title,
        excerpt: post.excerpt ?? "",
        content: post.content
          ? post.content.startsWith("<")
            ? post.content
            : `<p>${post.content}</p>`
          : "",
        status: post.status,
      });
    });
  }, [id, isEdit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const sanitizedContent = DOMPurify.sanitize(form.content, {
      USE_PROFILES: { html: true },
    });

    const payload = {
      ...form,
      content: sanitizedContent,
    };

    if (isEdit) {
      await updatePostService(Number(id), payload);
    } else {
      await createPostService(payload);
    }

    navigate("/admin/posts");
  };

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>{isEdit ? "Edit Post" : "New Post"}</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label>Title</Label>
            <Input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Post title"
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Excerpt</Label>
            <Input
              value={form.excerpt}
              onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
              placeholder="Short description"
            />
          </div>

          <div className="space-y-2">
            <Label>Content</Label>
            <RichTextEditor
              value={form.content}
              onChange={(html) =>
                setForm({
                  ...form,
                  content: html,
                })
              }
            />
          </div>

          <div className="space-y-2">
            <Label>Status</Label>
            <Select
              value={form.status}
              onValueChange={(value) =>
                setForm({
                  ...form,
                  status: value as PostStatus,
                })
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Published</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/admin/posts")}
            >
              Cancel
            </Button>

            <Button type="submit">{isEdit ? "Update" : "Create"}</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
