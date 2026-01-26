import type { User } from "@/types/user";

export interface AuthApiResponse {
  success: boolean;
  data: {
    token: string;
    user: User;
  };
  message: string;
}

export function mapAuthResponse(res: AuthApiResponse) {
  return {
    token: res.data.token,
    user: res.data.user,
  };
}
