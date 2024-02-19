import { cn } from "@/lib/utils";

interface CommandDataTabelProps {
  className?: string;
  children?: React.ReactNode;
}

const AdminCommandDataTabel: React.FC<CommandDataTabelProps> = (props) => {
  const { className, children } = props;
  return (
    <div className={cn("flex flex-wrap my-5 sm:my-8", className)}>
      {children}
    </div>
  );
};

export default AdminCommandDataTabel;
