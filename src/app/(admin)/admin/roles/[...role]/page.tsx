"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import AdminCreateRole from "./createRole";
import { AuthRole } from "@/features/roles/authRole";
import AdminEditRole from "./editRole";

const fields = [
  {
    name: "name",
    type: "text",
    label: "Name",
    placeholder: "Enter Role Name",
  },
];

const CommandRoles = () => {
  const { GetDataById } = AuthRole();
  const param = useParams();
  const id = param.role[0];
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      if (id && token) {
        try {
          const response = await GetDataById(id, token);

          console.log(response);
        } catch (err) {
          console.log(err);
        }
      }
    };
    fetchData();
  }, [id, token]);
  return (
    <>
      {param.role[0] === "create" ? (
        <AdminCreateRole />
      ) : param.role[1] === "edit" ? (
        <h1>Edit</h1>
      ) : (
        <h1>404</h1>
      )}
    </>
  );
};

export default CommandRoles;
