import { Outlet } from "react-router-dom";
import Navbar from "@/components/pages/NavBar";

export default function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 items-center justify-center bg-[#EEEEEE]">
        <Outlet />
      </main>
    </div>
  );
}
