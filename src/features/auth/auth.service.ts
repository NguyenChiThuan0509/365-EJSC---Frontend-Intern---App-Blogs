import { api } from "@/api/api";
import { mapAuthResponse, type AuthApiResponse } from "./auth.mapper";

/* ---------- LOGIN ---------- */
export interface LoginPayload {
  email: string;
  password: string;
}

export async function loginService(payload: LoginPayload) {
  const res = await api.post<AuthApiResponse>(
    "/api/auth/login",
    payload
  );

  return mapAuthResponse(res.data);
}

/* ---------- REGISTER ---------- */
export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}

export async function registerService(payload: RegisterPayload) {
  const res = await api.post<AuthApiResponse>(
    "/api/auth/register",
    payload
  );

  return mapAuthResponse(res.data);
}
