"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AdminBodyHeaderItemsProps {
  children?: React.ReactNode;
  link: string;
}

const AdminBodyHeaderItems: React.FC<AdminBodyHeaderItemsProps> = (props) => {
  const { children, link } = props;
  const pathname = usePathname();
  const paths = pathname?.split("/");
  const lastVariabel = paths[paths?.length - 1];
  return (
    <>
      <div className="mb-4 md:mb-0 md:w-1/4">
        <h2 className="before:content-[''] text-white capitalize relative text-lg font-semibold text-heading before:absolute before:-top-0.5 before:h-8 before:rounded-tr-md before:rounded-br-md before:bg-white before:-left-8 md:before:w-1">
          {lastVariabel}
        </h2>
      </div>
      <div className="flex flex-col w-full items-center justify-center gap-4 ms-auto md:w-3/4 md:flex-row xl:w-2/4">
        <>
          {children}
          <Button
            asChild
            className="rounded-full bg-white text-black hover:bg-lime-500 hover:text-white"
          >
            <Link
              className="inline-flex items-center capitalize justify-center shrink-0 font-medium leading-none rounded-full px-5 py-0 h-12 text-[15px] ld:text-base mt-5 h-12 w-full md:mt-0 md:w-auto md:ms-auto"
              href={link}
            >
              + Add {lastVariabel}
            </Link>
          </Button>
        </>
      </div>
    </>
  );
};

export default AdminBodyHeaderItems;
