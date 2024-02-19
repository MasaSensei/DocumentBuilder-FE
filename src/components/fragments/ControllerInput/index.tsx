import Core from "@/components/core";
import { Controller, FieldValues } from "react-hook-form";
import { cn } from "@/lib/utils";
import { FaEye, FaEyeSlash } from "react-icons/fa";

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
  seePassword?: () => void | undefined;
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
    seePassword,
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
              <div className="relative">
                <Core.Input
                  {...field}
                  type={type}
                  placeholder={placeholder}
                  InputclassName={inputClassName}
                  defaultValue={defaultValue}
                />
                {placeholder.toLocaleLowerCase().includes("password") && (
                  <Core.Label
                    LabelclassName="absolute z-10 cursor-pointer top-5 -mt-2 end-4"
                    name={name}
                    onClick={seePassword}
                  >
                    {type === "password" ? <FaEyeSlash /> : <FaEye />}
                  </Core.Label>
                )}
              </div>
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
