import { create } from "zustand";
import axios from "axios";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthMenu {
  name?: string | null;
  title?: string | null;
  path?: string | null;
  icon_name?: string | null;
  parent_name?: string | null;
  is_submenu?: boolean | null;
  GetData: (token: any) => Promise<any>;
  PostData: (data: any, token: any) => Promise<any>;
}

export const AuthMenu = create(
  persist<AuthMenu>(
    (set) => ({
      name: "",
      title: "",
      path: "",
      icon_name: "",
      parent_name: "",
      is_submenu: false,
      GetData: async (token: any) => {
        try {
          const response = await axios.get(
            `${process.env.DEV_LOCAL}/api/v1/crud/menu`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.status === 200) {
            console.log(response);
            return response;
          } else {
            console.log(response);
          }
        } catch (error) {
          console.log(error);
        }
      },
      PostData: async (data: any, token: any) => {
        try {
          const response = await axios.post(
            `${process.env.DEV_LOCAL}/api/v1/crud/menu`,
            data,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.status === 200) {
            console.log(response);
            return response;
          } else {
            console.log(response);
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
    {
      name: "auth-menu",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
