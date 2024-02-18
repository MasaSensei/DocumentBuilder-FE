import { Label } from "@/components/ui/label";
import Core from "@/components/core";
import { Controller, FieldValues } from "react-hook-form";
import { cn } from "@/lib/utils";

interface Option {
  value: string;
  label: string;
}

interface ControllerInputProps {
  name: string;
  label: string;
  control: any;
  placeholder: string;
  errors: any;
  inputClassName?: string;
  labelClassName?: string;
  className?: string;
  type?: string;
  defaultValue?: string;
  onChange?: (e: any) => void;
}

const ControllerInput: React.FC<ControllerInputProps> = (props) => {
  const {
    name,
    label,
    control,
    placeholder,
    errors,
    type,
    inputClassName,
    onChange,
    labelClassName,
    className,
    defaultValue,
  } = props;
  return (
    <div className={cn("mb-5", className)}>
      <Core.Label name={name} LabelclassName={labelClassName}>
        {label}
      </Core.Label>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }: { field: FieldValues }) => (
          <div>
            {field.type === "select" ? (
              <select {...field}>
                {field.options.map((item: Option) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            ) : field.type === "file" ? (
              <Core.Input
                {...field}
                InputclassName={inputClassName}
                placeholder={placeholder}
                onChange={onChange}
              />
            ) : (
              <Core.Input
                {...field}
                type={type}
                placeholder={placeholder}
                InputclassName={inputClassName}
                defaultValue={defaultValue}
              />
            )}
          </div>
        )}
      />
      {errors[name] && (
        <span className="text-red-500">{errors[name].message}</span>
      )}
    </div>
  );
};

export default ControllerInput;
