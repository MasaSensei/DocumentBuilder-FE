"use client";

import { notFound, useParams } from "next/navigation";
import CommandMenu, { commandMenuSchema } from "./commandMenu";
import { z } from "zod";
import { AuthMenu } from "@/features/menus/authMenu";
import { AuthStore } from "@/features/store/authStore";

const fields = [
  {
    name: "title",
    type: "text",
    label: "Title",
    placeholder: "Enter Menu Title",
  },
  {
    name: "name",
    type: "text",
    label: "Name",
    placeholder: "Enter Menu Name",
  },
  {
    name: "icon",
    type: "text",
    label: "Icon",
    placeholder: "Enter Menu Icon",
  },
  {
    name: "path",
    type: "text",
    label: "Path",
    placeholder: "Enter Path Name",
  },
  {
    name: "isSubmenu",
    type: "select",
    label: "Submenu",
    placeholder: "Enter Path Name",
    options: [
      {
        value: "true",
        label: "true",
      },
      {
        value: "false",
        label: "false",
      },
    ],
  },
  {
    name: "parent_name",
    type: "text",
    label: "Parent Name",
    placeholder: "Enter Parent Name",
  },
];

const MenusCrud = () => {
  const params = useParams();
  const { PostData } = AuthMenu();

  const { token } = AuthStore((s) => ({
    token: s.token,
  }));

  const { title, is_submenu, path, parent_name, name } = AuthMenu((s) => ({
    title: s.title,
    is_submenu: s.is_submenu,
    path: s.path,
    parent_name: s.parent_name,
    name: s.name,
  }));

  const onSubmitCreateMenu = async (
    data: z.infer<typeof commandMenuSchema>
  ) => {
    const newData = {
      name: data.name,
      title: data.title,
      path: data.path,
      icon_name: data.icon,
      parent_name: data.parent_name === "" ? null : data.parent_name,
      is_submenu: data.isSubmenu === "true" ? true : false,
    };
    try {
      await PostData(newData, token);
      console.log(newData);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {params.menu[0] === "create" ? (
        <CommandMenu
          title="Create"
          desription="Create Menu"
          fields={fields}
          defaultValues={{}}
          onSubmit={onSubmitCreateMenu as any}
        />
      ) : (
        notFound()
      )}
    </>
  );
};

export default MenusCrud;
