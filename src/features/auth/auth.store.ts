import { create } from "zustand";
import type { User } from "@/types/user";
import { ADMIN_EMAIL } from "@/features/auth/fakeEmail";

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
}

const STORAGE_KEY = "auth";

export const useAuthStore = create<AuthState>((set) => {
  const stored = localStorage.getItem(STORAGE_KEY);
  const parsed = stored ? JSON.parse(stored) : null;

  return {
    user: parsed?.user ?? null,
    token: parsed?.token ?? null,
    isAuthenticated: !!parsed?.token,

    login: (user, token) => {
      // ---------- fake admin email----------------
      const finalUser: User =
        user.email === ADMIN_EMAIL ? { ...user, role: "admin" } : user;
      // -------------------------------------------
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ user: finalUser, token }),
      );

      set({
        user: finalUser,
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
