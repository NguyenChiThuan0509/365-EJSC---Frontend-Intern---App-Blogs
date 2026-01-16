import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import ProtectedRoute from "@/components/ProtectedRoute";

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
