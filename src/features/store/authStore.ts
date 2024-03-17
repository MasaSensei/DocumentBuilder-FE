import { create } from "zustand";
import axios from "axios";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthStore {
  hashId: string | null;
  email: string | null;
  token?: string | null;
  register: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (
    email: string,
    new_password: string,
    hash_id: string
  ) => Promise<void>;
}

export const AuthStore = create(
  persist<AuthStore>(
    (set, get) => ({
      email: "",
      hashId: "",
      token: "",
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
      login: async (email, password) => {
        try {
          const response = await axios.post(
            `${process.env.DEV_LOCAL}/api/v1/login-or-register`,
            {
              email,
              open_id: "email",
              password,
              type_action: "login",
            }
          );
          if (response.status === 200) {
            set({
              token: response.data.data.token,
              email: response.data.data.email,
              hashId: response.data.data.hash_id,
            });
          } else {
            console.log(response);
          }
        } catch (error) {
          console.log(error);
        }
      },
      forgotPassword: async (email) => {
        try {
          const response = await axios.post(
            `${process.env.DEV_LOCAL}/api/v1/forgot-password`,
            {
              email,
            }
          );
          if (response?.status === 200) {
            const res = await response?.data?.data;
            set({
              email: email,
              hashId: res.hash_id,
            });
          }
        } catch (error) {
          console.log(error);
        }
        return undefined;
      },
      resetPassword: async (email, new_password, hash_id) => {
        try {
          const response = await axios.post(
            `${process.env.DEV_LOCAL}/api/v1/reset-password`,
            {
              email,
              new_password,
              hash_id,
            }
          );
          if (response?.status === 200) {
            const res = await response?.data;
            return res;
          }
        } catch (error) {
          console.log(error);
        }
        return undefined;
      },
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
