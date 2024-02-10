import { create } from "zustand";
import axios from "axios";

interface AuthStore {
  token?: string | null;
  register: (email: string, password: string) => Promise<void>;
  login?: (email: string, password: string) => Promise<void>;
}

export const AuthStore = create<AuthStore>((set) => ({
  register: async (email, password) => {
    try {
      const response = await axios.post(
        `${process.env.DEV_LOCAL}/api/v1/login-or-register`,
        {
          email,
          open_id: "email",
          password,
        }
      );
      if (response.status === 200) {
        set({ token: response.data.data.token });
        sessionStorage.setItem("token", response.data.data.token);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  },
}));
