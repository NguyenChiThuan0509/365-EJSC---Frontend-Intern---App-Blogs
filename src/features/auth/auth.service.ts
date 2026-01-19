import type { User } from "@/types/user";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

const MOCK_USERS: Array<User & { password: string }> = [
  {
    id: 1,
    name: "Admin",
    email: "admin@gmail.com",
    password: "123456",
    role: "admin",
  },
  {
    id: 2,
    name: "User",
    email: "user@gmail.com",
    password: "123456",
    role: "user",
  },
];

export async function loginService(
  payload: LoginPayload
): Promise<LoginResponse> {

  await new Promise((resolve) => setTimeout(resolve, 800)); // Mock time-out

  const foundUser = MOCK_USERS.find(
    (u) =>
      u.email === payload.email &&
      u.password === payload.password
  );

  if (!foundUser) {
    throw new Error("Email hoặc mật khẩu không đúng");
  }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, ...user } = foundUser;

  return {
    user,
    token: "fake-jwt-token",
  };
}
