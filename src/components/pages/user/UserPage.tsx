import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/features/auth/auth.store";

export default function UserPage() {
  const logout = useAuthStore((state) => state.logout);

  return (
    <div>
      <h1>User Page</h1>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
}
