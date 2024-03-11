import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="block relative w-full overflow-x-hidden">
      <div className="bg-white flex w-full flex-wrap">
        <div className="py-20 max-w-full px-8 w-full mx-auto flex items-start justify-between flex-wrap">
          <div className="p-2.5">
            <p className="text-slate-800 text-lg font-bold mt-0 mx-0 mb-8">
              Footer
            </p>
            <ul className="list-none flex flex-wrap w-full m-0 p-0">
              <li className="w-full">
                <Link
                  href={"/"}
                  className="text-slate-500 py-2.5 px-0 text-base inline-block"
                >
                  Create a Form
                </Link>
              </li>
            </ul>
          </div>
          <div className="p-2.5">
            <p className="text-slate-800 text-lg font-bold mt-0 mx-0 mb-8">
              Marketplace
            </p>
          </div>
          <div className="p-2.5">
            <p className="text-slate-800 text-lg font-bold mt-0 mx-0 mb-8">
              Support
            </p>
          </div>
          <div className="p-2.5">
            <p className="text-slate-800 text-lg font-bold mt-0 mx-0 mb-8">
              Company
            </p>
          </div>
          <div className="p-2.5">
            <p className="text-slate-800 text-lg font-bold mt-0 mx-0 mb-8">
              Apps
            </p>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 py-6 flex flex-wrap w-full">
        <div className="items-center max-w-full py-0 px-8 w-full flex flex-wrap justify-between mx-auto">
          <div className="flex flex-row items-center flex-wrap p-2.5 w-full">
            <div className="w-auto">
              <Image
                src={"/images/Rudeus Greyrat - Mushoku Tensei II icons.jpeg"}
                width={59}
                height={53}
                alt=""
                className="rounded-full"
              />
            </div>
            <div className="pl-7 text-slate-600">
              <div>
                <address className="relative mb-3">
                  4 Embarcadero Center, Suite 780, San Francisco CA 94111
                </address>
              </div>
              <p className="mt-2.5 mx-0 mb-0 text-sm">
                © 2024 Jotform Inc. The name "Jotform" and the Jotform logo are
                registered trademarks of Jotform Inc.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-400 py-2.5 px-1.5 flex flex-wrap w-full">
        <div className="w-full flex py-0 px-8 mx-auto items-start justify-between flex-wrap">
          <ul className="flex items-center justify-center flex-wrap p-2.5 m-0">
            <li className="lg:before:bg-gray-900 lg:before:w-px lg:before:first:w-0 lg:before:content-[''] lg:before:inline-block lg:before:h-7 inline-flex items-center text-slate-600">
              <Link href={"/"} className="block text-base py-1.5 px-4">
                Term & Condition
              </Link>
            </li>
            <li className="lg:before:bg-gray-900 lg:before:w-px lg:before:first:w-0 lg:before:content-[''] lg:before:inline-block lg:before:h-7 inline-flex items-center text-slate-600">
              <Link href={"/"} className="block text-base py-1.5 px-4">
                Term & Condition
              </Link>
            </li>
            <li className="lg:before:bg-gray-900 lg:before:w-px lg:before:first:w-0 lg:before:content-[''] lg:before:inline-block lg:before:h-7 inline-flex items-center text-slate-600">
              <Link href={"/"} className="block text-base py-1.5 px-4">
                Term & Condition
              </Link>
            </li>
            <li className="lg:before:bg-gray-900 lg:before:w-px lg:before:first:w-0 lg:before:content-[''] lg:before:inline-block lg:before:h-7 inline-flex items-center text-slate-600">
              <Link href={"/"} className="block text-base py-1.5 px-4">
                Term & Condition
              </Link>
            </li>
          </ul>
          <ul className="flex items-center justify-center flex-wrap p-2.5 m-0"></ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
