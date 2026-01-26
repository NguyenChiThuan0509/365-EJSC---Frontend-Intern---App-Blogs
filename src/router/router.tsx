import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "@/layouts/PublicLayout";
import AdminLayout from "@/layouts/AdminLayout";
import UserLayout from "@/layouts/UserLayout";

import HomePage from "@/components/pages/HomePage";
import LoginPage from "@/components/pages/LoginPage";
import RegisterPage from "@/components/pages/RegisterPage";
import BlogListPage from "@/components/pages/blog/BlogListPage";
import BlogDetailPage from "@/components/pages/blog/BlogDetailPage";
import UserPage from "@/components/pages/user/UserPage";
import NotFoundPage from "@/components/pages/NotFoundPage";

import AdminPostListPage from "@/components/pages/admin/AdminPostListPage";
import AdminPostFormPage from "@/components/pages/admin/AdminPostFormPage";

export const router = createBrowserRouter([
  /* ---------- PUBLIC ---------- */
  {
    element: <PublicLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/blogs", element: <BlogListPage /> },
      { path: "/blogs/:slug", element: <BlogDetailPage /> },
    ],
  },

  /* ---------- ADMIN ---------- */
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "posts",
        children: [
          { index: true, element: <AdminPostListPage /> },
          { path: "new", element: <AdminPostFormPage /> },
          { path: ":id/edit", element: <AdminPostFormPage /> },
        ],
      },
    ],
  },

  /* ---------- USER ---------- */
  {
    path: "/user",
    element: <UserLayout />,
    children: [{ index: true, element: <UserPage /> }],
  },

  /* ---------- 404 ---------- */
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
