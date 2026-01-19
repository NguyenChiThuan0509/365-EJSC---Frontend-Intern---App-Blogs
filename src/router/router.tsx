import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "@/layouts/PublicLayout";
import PrivateLayout from "@/layouts/PrivateLayout";

import HomePage from "@/components/pages/HomePage";
import LoginPage from "@/components/pages/LoginPage";
import RegisterPage from "@/components/pages/RegisterPage";
import AdminPage from "@/components/pages/user/AdminPage";
import UserPage from "@/components/pages/user/UserPage";
import NotFoundPage from "@/components/pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/user", element: <UserPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
  {
    element: <PrivateLayout />,
    children: [{ path: "/admin", element: <AdminPage /> }],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
