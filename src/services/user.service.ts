// import axios from 'axios';
import type { User } from "@/types/user";

// const API_URL = "https://jsonplaceholder.typicode.com/users";

interface ApiUser {
  id: number;
  name: string;
  email: string;
  // password: string;
}

export function mapUser(apiUser: ApiUser): User {
  return {
    id: apiUser.id,
    name: apiUser.name,
    email: apiUser.email,
    // password: apiUser.password,
    role: apiUser.email === "admin@gmail.com" ? "admin" : "user",
  };
}


