import { Outlet } from "react-router-dom";
import Navbar from "@/components/pages/NavBar";
import ProtectedRoute from "@/router/ProtectedRoute";

export default function PrivateLayout() {
  return (
    <ProtectedRoute requiredRole="admin">
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex flex-1 items-center justify-center bg-[#EEEEEE]">
          <Outlet />
        </main>
      </div>
    </ProtectedRoute>
  );
}
