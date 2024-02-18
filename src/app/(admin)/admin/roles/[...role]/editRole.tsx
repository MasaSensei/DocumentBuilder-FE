"use client";

import Core from "@/components/core";
import Fragments from "@/components/fragments";
import Layouts from "@/components/layouts";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthRole } from "@/features/roles/authRole";
import { useRouter } from "next/navigation";

const createRoleSchema = z.object({
  name: z.string(),
});

const AdminCreateRole = () => {
  const { PostData } = AuthRole();
  const router = useRouter();
  const {
    handleSubmit: handleCreateRoleSubmit,
    control: createRoleControl,
    formState: { errors: createRoleErrors },
  } = useForm<z.infer<typeof createRoleSchema>>({
    resolver: zodResolver(createRoleSchema),
  });

  const fields = [
    {
      name: "name",
      type: "text",
      label: "Name",
      placeholder: "Enter Role Name",
    },
  ];

  const onSubmit = async (data: z.infer<typeof createRoleSchema>) => {
    try {
      const token = sessionStorage.getItem("token");
      await PostData(data.name, token);
      router.push("/admin/roles");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Core.AdminBreadcrumbs>Create New Role</Core.AdminBreadcrumbs>
      <Layouts.Form onSubmit={handleCreateRoleSubmit(onSubmit)}>
        <Layouts.AdminCommandDataTabel>
          <Fragments.AdminFormDataTabel
            title="Description"
            desription="Add your category details and necessary information from here"
          >
            {fields.map((field) => (
              <Fragments.ControllerInput
                key={field.name}
                {...field}
                control={createRoleControl}
                errors={createRoleErrors}
                inputClassName="focus:border-lime-500 rounded mt-3"
              />
            ))}
          </Fragments.AdminFormDataTabel>
        </Layouts.AdminCommandDataTabel>
        <Core.AdminDataTabelButton
          link="/admin/roles"
          name="Add New Role"
          type="submit"
        />
      </Layouts.Form>
    </>
  );
};

export default AdminCreateRole;
