"use client";

import Core from "@/components/core";
import Fragments from "@/components/fragments";
import Layouts from "@/components/layouts";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthRole } from "@/features/roles/authRole";
import { useRouter } from "next/navigation";

export const commandRoleSchema = z.object({
  name: z.string(),
});

interface CommandRoleProps {
  fields: {
    name: string;
    type: string;
    label: string;
    placeholder: string;
  }[];
  defaultValues: any;
  onSubmit: () => void;
  title: string;
  desription: string;
}

const CommandRole: React.FC<CommandRoleProps> = (props) => {
  const { fields, defaultValues, onSubmit, title, desription } = props;
  const {
    handleSubmit: handleCommandRoleSubmit,
    control: commandRoleControl,
    formState: { errors: commandRoleErrors },
  } = useForm<z.infer<typeof commandRoleSchema>>({
    resolver: zodResolver(commandRoleSchema),
  });
  return (
    <>
      <Core.AdminBreadcrumbs>Create New Role</Core.AdminBreadcrumbs>
      <Layouts.Form onSubmit={handleCommandRoleSubmit(onSubmit)}>
        <Layouts.AdminCommandDataTabel>
          <Fragments.AdminFormDataTabel title={title} desription={desription}>
            {fields.map((field) => (
              <Fragments.ControllerInput
                key={field.name}
                {...field}
                control={commandRoleControl}
                defaultValue={defaultValues[field.name]}
                errors={commandRoleErrors}
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

export default CommandRole;
