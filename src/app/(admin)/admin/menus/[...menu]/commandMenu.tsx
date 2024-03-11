"use client";

import Core from "@/components/core";
import Layouts from "@/components/layouts";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Fragments from "@/components/fragments";

export const commandMenuSchema = z.object({
  name: z.string(),
  path: z.string(),
  isSubmenu: z.string(),
});

interface Option {
  value: any;
  label: string;
}

interface CommandMenuProps {
  fields: {
    name: string;
    type: string;
    label: string;
    placeholder: string;
    options?: Option[];
  }[];
  title: string;
  desription: string;
  defaultValues: any;
  onSubmit: () => void;
}

const CommandMenu: React.FC<CommandMenuProps> = (props) => {
  const { title, desription, fields, defaultValues, onSubmit } = props;
  const {
    handleSubmit: handleCommandMenuSubmit,
    control: commandMenuControl,
    formState: { errors: commandMenuErrors },
  } = useForm<z.infer<typeof commandMenuSchema>>({
    resolver: zodResolver(commandMenuSchema),
  });
  return (
    <>
      <Core.AdminBreadcrumbs>{title}</Core.AdminBreadcrumbs>
      <Layouts.Form onSubmit={handleCommandMenuSubmit(onSubmit)}>
        <Layouts.AdminCommandDataTabel>
          <Fragments.AdminFormDataTabel title={title} desription={desription}>
            {fields.map((field) => (
              <Fragments.ControllerInput
                key={field.name}
                {...field}
                control={commandMenuControl}
                defaultValue={defaultValues[field.name]}
                errors={commandMenuErrors}
                options={field.options}
                inputClassName="focus:border-lime-500 rounded mt-3"
              />
            ))}
          </Fragments.AdminFormDataTabel>
        </Layouts.AdminCommandDataTabel>
        <Core.AdminDataTabelButton
          link="/admin/menus"
          name="Add New Menu"
          type="submit"
        />
      </Layouts.Form>
    </>
  );
};

export default CommandMenu;
