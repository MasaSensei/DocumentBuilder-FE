"use client";

import Core from "@/components/core";
import Layouts from "@/components/layouts";
import { AuthStore } from "@/features/store/authStore";
import { useEffect, useState } from "react";
import { AuthMenu } from "@/features/menus/authMenu";

const AdminDashboardMenusPage = () => {
  const [originData, setOriginData] = useState<any[]>([]);
  const [data, setData] = useState<any[]>([]);
  const [header, setHeader] = useState<any[]>([]);
  const { token } = AuthStore((s) => ({
    token: s.token,
  }));
  const { GetData } = AuthMenu();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await GetData(token || "");
        if (data && data.data && Array.isArray(data.data.list_data)) {
          const filteredData = data.data.list_data.map((item: any) => {
            const { created_at, updated_at, deleted_at, ...filterItem } = item;
            for (const key in filterItem) {
              if (filterItem[key] === null || filterItem[key] === false) {
                filterItem[key] = "-";
              }
            }
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
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [token]);

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
        <Layouts.AdminBodyHeaderItems link="/admin/menus/create">
          <Core.Input
            InputclassName="block rounded-lg text-sm placeholder:text-white text-white focus:border-lime-500 focus:bg-slate-800 bg-gray-600"
            placeholder="Search By Name"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </Layouts.AdminBodyHeaderItems>
      </Layouts.AdminBodyHeader>
      <div>
        <Layouts.MyTable
          link={"/admin/menus"}
          linkProperty="id"
          headers={header}
          cells={data}
        />
      </div>
    </>
  );
};

export default AdminDashboardMenusPage;
