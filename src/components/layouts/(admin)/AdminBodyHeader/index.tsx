import { cn } from "@/lib/utils";

interface AdminBodyHeaderProps {
  className?: string;
  children?: React.ReactNode;
}

const AdminBodyHeader: React.FC<AdminBodyHeaderProps> = (props) => {
  const { className, children } = props;
  return (
    <div
      className={cn(
        " rounded bg-slate-800 p-5 shadow md:p-8 mb-8 flex flex-col",
        className
      )}
    >
      {children}
    </div>
  );
};

export default AdminBodyHeader;
