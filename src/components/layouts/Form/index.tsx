import { cn } from "@/lib/utils";

interface FormProps {
  className?: string;
  onSubmit?: () => void;
  children?: React.ReactNode;
}

const Form: React.FC<FormProps> = (props) => {
  const { className, onSubmit, children } = props;
  return (
    <>
      <form onSubmit={onSubmit} className={cn(className)}>
        {children}
      </form>
    </>
  );
};

export default Form;
