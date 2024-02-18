import { Button } from "@/components/ui/button";
import Link from "next/link";

interface AdminDataTabelButtonProps {
  link: string;
  onClick?: () => void;
  name: string;
  type: any;
}

const AdminDataTabelButton: React.FC<AdminDataTabelButtonProps> = (props) => {
  const { link, onClick, name, type } = props;
  return (
    <div className="sticky bottom-0 -mx-5 py-3 px-5 text-end md:py-5 lg:-mx-8 lg:px-8 z-0">
      <div className="text-end">
        <Button
          variant={"outline"}
          asChild
          className="bg-transparent border-slate-800 me-4 hover:bg-lime-500 hover:border-lime-500 hover:text-white text-slate-800"
        >
          <Link href={link}>Back</Link>
        </Button>
        <Button
          variant={"default"}
          className="bg-lime-500 hover:bg-lime-600 hover:border-lime-600 text-white"
          onClick={onClick}
          type={type}
        >
          {name}
        </Button>
      </div>
    </div>
  );
};

export default AdminDataTabelButton;
