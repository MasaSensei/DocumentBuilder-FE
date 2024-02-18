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

interface EditRoleProps {
  fields: {
    name: string;
    type: string;
    label: string;
    placeholder: string;
  }[];
  defaultValues: any;
}

const AdminEditRole: React.FC<EditRoleProps> = (props) => {
  const { fields, defaultValues } = props;
  const { PostData, UpdateData } = AuthRole();
  const router = useRouter();
  const {
    handleSubmit: handleCreateRoleSubmit,
    control: createRoleControl,
    formState: { errors: createRoleErrors },
  } = useForm<z.infer<typeof createRoleSchema>>({
    resolver: zodResolver(createRoleSchema),
  });

  const onSubmit = async (data: z.infer<typeof createRoleSchema>) => {
    try {
      const defaultData = defaultValues.name;
      console.log(defaultData);
      const newData = data.name !== "" ? data.name : defaultValues.name;
      console.log({ name: newData });
      console.log(data);
      const token = sessionStorage.getItem("token");
      // await UpdateData(data.name, token);
      // router.push("/admin/roles");
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
                defaultValue={defaultValues[field.name]}
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

export default AdminEditRole;
