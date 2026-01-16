import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/features/auth/auth.store";

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuthStore();

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b bg-white px-6 py-3">
      <Link to="/" className="text-lg font-bold">
        Blogs App
      </Link>

      <div className="flex items-center gap-3">
        {!isAuthenticated && (
          <>
            <Button variant="outline" asChild>
              <Link to="/login">Login</Link>
            </Button>

            <Button asChild>
              <Link to="/register">Register</Link>
            </Button>
          </>
        )}

        {isAuthenticated && (
          <>
            {user?.role === "admin" && (
              <Button variant="ghost" asChild>
                <Link to="/admin">Admin</Link>
              </Button>
            )}

            <Button variant="outline" onClick={logout}>
              Logout
            </Button>
          </>
        )}
      </div>
    </nav>
  );
}
