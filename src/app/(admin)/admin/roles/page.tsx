"use client";

import Layouts from "@/components/layouts";
import { useEffect, useState } from "react";
import { AuthRole } from "@/features/roles/authRole";
import { AuthStore } from "@/features/store/authStore";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";

import "react-toastify/dist/ReactToastify.css";
import Core from "@/components/core";

const AdminDashboardRolesPage = () => {
  const { token } = AuthStore((s) => ({
    token: s.token,
  }));
  const router = useRouter();
  const [originData, setOriginData] = useState<any[]>([]);
  const [data, setData] = useState<any[]>([]);
  const [header, setHeader] = useState<any[]>([]);
  const { GetData, DeleteData } = AuthRole();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await GetData(token || "");
        if (data && data.data && Array.isArray(data.data.list_data)) {
          const filteredData = data.data.list_data.map((item: any) => {
            const { created_at, updated_at, deleted_at, ...filterItem } = item;
            return filterItem;
          });

          const headers = Object.keys(filteredData[0]);
          const newHeaders = headers.map((header) => {
            return header
              .split("_")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ");
          });
          setOriginData(filteredData);
          setData(filteredData);
          setHeader(newHeaders);
        }
        router.refresh();
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [token]);

  const handleDelete = async (id: string) => {
    try {
      const data = await DeleteData?.(id, token || "");
      if (data?.data?.code === 200) {
        toast.success("Delete Success", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        router.refresh();
      } else {
        toast.warning("Delete Failed", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (searchItem: string) => {
    const filteredData = originData.filter((item) =>
      Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(searchItem.toLowerCase())
    );
    setData(filteredData);
  };

  return (
    <>
      <Layouts.AdminBodyHeader className="items-center justify-between md:flex-row">
        <Layouts.AdminBodyHeaderItems link="/admin/roles/create">
          <Core.Input
            InputclassName="block rounded-lg text-sm placeholder:text-white text-white focus:border-lime-500 focus:bg-slate-800 bg-gray-600"
            placeholder="Search By Name"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </Layouts.AdminBodyHeaderItems>
      </Layouts.AdminBodyHeader>
      <div>
        <Layouts.MyTable
          link={`/admin/roles`}
          linkProperty="id"
          headers={header}
          cells={data}
          onClick={handleDelete as any}
        />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  );
};

export default AdminDashboardRolesPage;
