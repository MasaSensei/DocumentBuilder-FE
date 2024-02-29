import { create } from "zustand";
import axios from "axios";

interface AuthRole {
  GetData: (token: any) => Promise<any>;
  PostData: (token: any, data: any) => Promise<any>;
  GetDataById: (token: any, id: any) => Promise<any>;
  UpdateData: (token: any, id: any, data: any) => Promise<any>;
  DeleteData?: (token: any, id: any) => Promise<any>;
}

export const AuthRole = create<AuthRole>((set) => ({
  GetData: async (token: any) => {
    try {
      const response = await axios.get(
        `${process.env.DEV_LOCAL}/api/v1/crud/role`,
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
  PostData: async (role_name: any, token: any) => {
    try {
      const response = await axios.post(
        `${process.env.DEV_LOCAL}/api/v1/crud/role`,
        {
          role_name,
        },
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
  GetDataById: async (id: any, token: any) => {
    try {
      const response = await axios.get(
        `${process.env.DEV_LOCAL}/api/v1/crud/role/${id}`,
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
  UpdateData: async (id: any, role_name: string, token: string) => {
    try {
      const response = await axios.patch(
        `${process.env.DEV_LOCAL}/api/v1/crud/role/${id}`,
        {
          role_name,
        },
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
  DeleteData: async (id: string, token: string) => {
    try {
      const response = await axios.delete(
        `${process.env.DEV_LOCAL}/api/v1/crud/role/${id}`,
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
