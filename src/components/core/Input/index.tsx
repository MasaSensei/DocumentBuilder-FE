import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Core from "..";

interface MyInputProps {
  InputclassName?: string;
  placeholder: string;
  onChange?: (e: any) => void;
  type?: string;
  defaultValue?: string;
}
const MyInput: React.FC<MyInputProps> = (props) => {
  const { InputclassName, placeholder, defaultValue, onChange, type } = props;
  return (
    <>
      <Input
        placeholder={placeholder}
        className={cn(
          "w-full border rounded-md py-0 pr-6 pl-2 h-9",
          InputclassName
        )}
        onChange={onChange}
        type={type}
        defaultValue={defaultValue}
      />
    </>
  );
};

export default MyInput;
