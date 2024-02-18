"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import AdminCreateRole from "./createRole";
import { AuthRole } from "@/features/roles/authRole";
import { z } from "zod";
import CommandRole, { commandRoleSchema } from "./commandRole";
import { useRouter } from "next/navigation";

const fields = [
  {
    name: "name",
    type: "text",
    label: "Name",
    placeholder: "Enter Role Name",
  },
];

const CommandRoles = () => {
  const [name, setName] = useState("");
  const router = useRouter();
  const { GetDataById, UpdateData } = AuthRole();
  const param = useParams();
  const id = param.role[0];
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      if (id && token) {
        try {
          const response = await GetDataById(id, token);
          setName(response.data.data.role_name);
          console.log(response);
        } catch (err) {
          console.log(err);
        }
      }
    };
    fetchData();
  }, [id, token]);

  const onSubmitEditRole = async (data: z.infer<typeof commandRoleSchema>) => {
    try {
      const defaultData = name;
      console.log(defaultData);
      const newData = data.name !== "" ? data.name : defaultData;
      const token = sessionStorage.getItem("token");
      await UpdateData(id, newData, token);
      router.push("/admin/roles");
    } catch {
      console.log("error");
    }
  };
  return (
    <>
      {param.role[0] === "create" ? (
        <AdminCreateRole />
      ) : param.role[1] === "edit" ? (
        <CommandRole
          fields={fields}
          defaultValues={{ name }}
          title="Edit Role"
          desription="Edit your role details and necessary information from here"
          onSubmit={onSubmitEditRole as any}
        />
      ) : (
        <h1>404</h1>
      )}
    </>
  );
};

export default CommandRoles;