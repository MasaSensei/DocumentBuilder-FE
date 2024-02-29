import Core from "@/components/core";
import Layouts from "@/components/layouts";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AdminDashboardMenusPage = () => {
  return (
    <>
      <Layouts.AdminBodyHeader className="items-center justify-between md:flex-row">
        <div className="mb-4 md:mb-0 md:w-1/4">
          <h2 className="before:content-[''] text-white relative text-lg font-semibold text-heading before:absolute before:-top-0.5 before:h-8 before:rounded-tr-md before:rounded-br-md before:bg-white before:-left-8 md:before:w-1">
            Menus
          </h2>
        </div>
        <div className="flex flex-col w-full items-center justify-center gap-4 ms-auto md:w-3/4 md:flex-row xl:w-2/4">
          <Core.Input
            InputclassName="block rounded-lg text-sm placeholder:text-white text-white focus:border-lime-500 focus:bg-slate-800 bg-gray-600"
            placeholder="Search By Name"
          />
          <Button
            asChild
            className="rounded-full bg-white text-black hover:bg-lime-500 hover:text-white"
          >
            <Link
              className="inline-flex items-center justify-center shrink-0 font-medium leading-none rounded-full px-5 py-0 h-12 text-[15px] ld:text-base mt-5 h-12 w-full md:mt-0 md:w-auto md:ms-auto"
              href="/admin/menus/create"
            >
              + Add Menu
            </Link>
          </Button>
        </div>
      </Layouts.AdminBodyHeader>
    </>
  );
};

export default AdminDashboardMenusPage;
