import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface MyLabelProps {
  LabelclassName?: string;
  children: React.ReactNode;
  name: string;
  onClick?: () => void;
}

const MyLabel: React.FC<MyLabelProps> = (props) => {
  const { LabelclassName, children, name, onClick } = props;
  return (
    <>
      <Label htmlFor={name} onClick={onClick} className={cn(LabelclassName)}>
        {children}
      </Label>
    </>
  );
};

export default MyLabel;
