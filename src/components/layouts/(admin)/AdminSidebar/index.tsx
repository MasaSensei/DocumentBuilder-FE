import { Label } from "@/components/ui/label";
import Link from "next/link";

const AdminSidebar = () => {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <div className="relative overflow-hidden flex items-stretch flex-row flex-nowrap">
        <div className="relative flex mx-0 mb-0 top-0 right-auto left-0 w-full p-0 overflow-y-scroll overflow-hidden">
          <div className="flex flex-col w-full px-5 pt-6 pb-3">
            <Label className="px-3 pb-5 text-xs font-semibold uppercase tracking-wider text-white">
              Main
            </Label>
            <div className="space-y-2">
              <Link
                href={"/admin"}
                className="group flex w-full items-center gap-2.5 rounded-md px-3 py-2.5 text-sm text-white text-start focus:text-white hover:bg-lime-500 font-medium"
              >
                <span className="transition"></span>
                <span>Dashboard</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
