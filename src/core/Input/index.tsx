import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface MyInputProps {
  InputclassName?: string;
  placeholder: string;
  onChange?: (e: any) => void;
  type?: string;
}
const MyInput: React.FC<MyInputProps> = (props) => {
  const { InputclassName, placeholder, onChange, type } = props;
  return (
    <>
      <Input
        placeholder={placeholder}
        className={cn("w-full border rounded-md py-0 px-6 h-9", InputclassName)}
        onChange={onChange}
        type={type}
      />
    </>
  );
};

export default MyInput;
