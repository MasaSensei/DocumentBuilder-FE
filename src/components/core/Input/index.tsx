import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

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
        className={cn("w-full border rounded-md py-0 px-6 h-9", InputclassName)}
        onChange={onChange}
        type={type}
        defaultValue={defaultValue}
      />
    </>
  );
};

export default MyInput;
