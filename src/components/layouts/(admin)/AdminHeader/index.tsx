import Core from "@/components/core";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ImCross } from "react-icons/im";

const AdminHeader = () => {
  return (
    <header className="fixed top-0 z-40 w-full bg-slate-800 shadow">
      <nav className="flex items-center px-5 md:px-8">
        <div className="relative flex w-full flex-1 items-center">
          <div className="flex items-center">
            <div className="flex h-16 shrink-0 transition-[width] duration-300 me-4 lg:h-[76px] lg:border-solid lg:border-white lg:me-8 lg:border-e lg:w-[257px]">
              <Link className="relative overflow-hidden" href={"/admin"}>
                <span className="relative overflow-hidden">
                  <Image
                    src={"/google-color-icon.svg"}
                    alt={"logo"}
                    objectFit={"contain"}
                    fill
                    sizes="(max-width: 768px) 100vw"
                  />
                </span>
              </Link>
            </div>
            <Button className="group hidden h-full w-6 shrink-0 cursor-pointer flex-col justify-center space-y-1 me-6 lg:flex">
              <ImCross />
            </Button>
          </div>
          <Button className="relative ml-auto mr-1.5 flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-gray-100 py-4 text-gray-600 hover:border-gray-200 hover:bg-white hover:text-black sm:mr-6 lg:hidden">
            Test
          </Button>
          <div className="relative hidden w-full max-w-[710px] py-4 me-6 lg:block xl:me-auto">
            <div className="relative w-full max-w-lg rounded-2xl">
              <Core.Input
                InputclassName="block rounded-3xl text-sm placeholder:text-white text-white focus:border-lime-500 focus:bg-slate-800 bg-gray-600"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="relative inline-block shrink-0 grow-0 basis-auto py-2 text-left ps-1.5 sm:border-solid sm:border-white sm:py-3 sm:ps-6 sm:border-s lg:py-4 xl:py-2">
          <button className="bg-none flex max-w[150px] items-center gap-2 focus:outline-none lg:py-0.5 xl:py-2">
            <Avatar className="inline-flex w-[40px] h-[40px] items-center justify-center flex-shrink-0 border text-white overflow-hidden relative rounded-full shrink-0 grow-0 basis-auto drop-shadow">
              <AvatarImage
                src={"/images/Rudeus Greyrat - Mushoku Tensei II icons.jpeg"}
              ></AvatarImage>
            </Avatar>
            <div className="hidden w-full flex-col items-start space-y-0.5 truncate text-sm xl:flex">
              <span className="w-full truncate font-bold capitalize text-white">
                Masayoshi
              </span>
              <span className="w-full truncate text-xs capitalize text-slate-400">
                super admin
              </span>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default AdminHeader;
