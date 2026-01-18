import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  const navigate = useNavigate();

  const handleRegister = () => {
    console.log("Register success");

    // Redirect về login
    navigate("/login");
  };

  return (
    <Card className="w-95">
      <CardHeader className="flex justify-center">
        <CardTitle>REGISTER</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="your name" />
        </div>

        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@email.com" />
        </div>

        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="enter your password"
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="enter your password again"
          />
        </div>

        <Button className="w-full" onClick={handleRegister}>
          Register
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="font-medium underline"
          >
            Login
          </button>
        </p>
      </CardContent>
    </Card>
  );
}
