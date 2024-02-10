import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface MyLabelProps {
  LabelclassName?: string;
  children: React.ReactNode;
  name: string;
}

const MyLabel: React.FC<MyLabelProps> = (props) => {
  const { LabelclassName, children, name } = props;
  return (
    <>
      <Label htmlFor={name} className={cn(LabelclassName)}>
        {children}
      </Label>
    </>
  );
};

export default MyLabel;
