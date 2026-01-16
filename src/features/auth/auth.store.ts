import { create } from "zustand";
import type { User } from "@/types/user";

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
}

const STORAGE_KEY = "auth";

export const useAuthStore = create<AuthState>((set) => {
  const storedAuth = localStorage.getItem(STORAGE_KEY);
  const parsed = storedAuth ? JSON.parse(storedAuth) : null;

  return {
    user: parsed?.user ?? null,
    token: parsed?.token ?? null,
    isAuthenticated: Boolean(parsed?.token),

    login: (user, token) => {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ user, token })
      );

      set({
        user,
        token,
        isAuthenticated: true,
      });
    },

    logout: () => {
      localStorage.removeItem(STORAGE_KEY);
      set({
        user: null,
        token: null,
        isAuthenticated: false,
      });
    },
  };
});
