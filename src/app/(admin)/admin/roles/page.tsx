"use client";

import Layouts from "@/components/layouts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AuthRole } from "@/features/roles/authRole";

const AdminDashboardRolesPage = () => {
  const [data, setData] = useState<any[]>([]);
  const [header, setHeader] = useState<any[]>([]);
  const [link, setLink] = useState<any[]>([]);
  const { GetData } = AuthRole();
  const token = sessionStorage.getItem("token");

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
          setData(filteredData);
          setHeader(newHeaders);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [token]);

  return (
    <>
      <Layouts.AdminBodyHeader className="items-center justify-between md:flex-row">
        <div className="mb-4 md:mb-0 md:w-1/4">
          <h2 className="before:content-[''] text-white relative text-lg font-semibold text-heading before:absolute before:-top-0.5 before:h-8 before:rounded-tr-md before:rounded-br-md before:bg-white before:-left-8 md:before:w-1">
            Roles
          </h2>
        </div>
        <div className="flex flex-col w-full items-center ms-auto md:w-3/4 md:flex-row xl:w-2/4">
          <Button
            asChild
            className="rounded-full bg-white text-black hover:bg-lime-500 hover:text-white"
          >
            <Link
              className="inline-flex items-center justify-center shrink-0 font-medium leading-none rounded-full px-5 py-0 h-12 text-[15px] ld:text-base mt-5 h-12 w-full md:mt-0 md:w-auto md:ms-auto"
              href="/admin/roles/create"
            >
              + Add Role
            </Link>
          </Button>
        </div>
      </Layouts.AdminBodyHeader>
      <div>
        <Layouts.MyTable
          link={`/admin/roles`}
          linkProperty="id"
          headers={header}
          cells={data}
        />
      </div>
    </>
  );
};

export default AdminDashboardRolesPage;
