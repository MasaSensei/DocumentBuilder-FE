import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectInputProps {
  InputclassName?: string;
  placeholder: string;
  children?: React.ReactNode;
  onValueChange?: (e: any) => void;
  defaultValue?: string | any;
}

const SelectInput: React.FC<SelectInputProps> = (props) => {
  const { InputclassName, placeholder, children, defaultValue, onValueChange } =
    props;
  return (
    <Select onValueChange={onValueChange} defaultValue={defaultValue}>
      <SelectTrigger
        className={cn(
          "w-full border rounded-md py-0 pr-6 pl-2 h-9",
          InputclassName
        )}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>{children}</SelectContent>
    </Select>
  );
};

export default SelectInput;
