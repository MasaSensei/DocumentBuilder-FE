"use client";

import { notFound, useParams } from "next/navigation";
import CommandMenu, { commandMenuSchema } from "./commandMenu";
import { z } from "zod";

const fields = [
  {
    name: "name",
    type: "text",
    label: "Name",
    placeholder: "Enter Menu Name",
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
];

const onSubmit = async (data: z.infer<typeof commandMenuSchema>) => {
  const newData = {
    name: data.name,
    path: data.path,
    is_submenu: data.isSubmenu === "true" ? true : false,
  };
  console.log(newData);
};

const MenusCrud = () => {
  const params = useParams();

  return (
    <>
      {params.menu[0] === "create" ? (
        <CommandMenu
          title="Create"
          desription="Create Menu"
          fields={fields}
          defaultValues={{}}
          onSubmit={onSubmit as any}
        />
      ) : (
        notFound()
      )}
    </>
  );
};

export default MenusCrud;
