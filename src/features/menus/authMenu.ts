import { create } from "zustand";
import axios from "axios";

interface AuthMenu {
  GetData: (token: any) => Promise<any>;
}

export const AuthMenu = create<AuthMenu>((set) => ({
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
}));
