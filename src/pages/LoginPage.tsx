import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/features/auth/auth.store";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = () => {
    login({ id: 1, name: "Admin", role: "admin" }, "fake-jwt-token");
    navigate("/admin");
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex justify-center ">LOGIN</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="enter your password"
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full" onClick={handleLogin}>
          Login
        </Button>
        <p className="text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="font-medium underline"
          >
            Register
          </button>
        </p>
      </CardFooter>
    </Card>
  );
}
