import { Outlet } from "react-router-dom";
import Navbar from "@/components/pages/NavBar";
import ProtectedRoute from "@/router/ProtectedRoute";

export default function AdminLayout() {
  return (
    <ProtectedRoute requiredRole="admin">
      <div className="flex min-h-screen flex-col">
        <Navbar />

        <main className="flex flex-1 justify-center bg-[#EEEEEE] p-6">
          <Outlet />
        </main>
      </div>
    </ProtectedRoute>
  );
}
