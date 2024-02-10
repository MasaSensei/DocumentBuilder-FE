"use client";

import { FaArrowRight } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import Fragments from "@/fragments";

const SideBar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="w-full lg:w-60 shrink-0 z-10">
      <div className="relative flex w-full gap-4 sm:gap-10 items-start justify-between flex-col sm:flex-row">
        <button
          className="md:hidden w-full btn flex justify-between px-4 relative"
          onClick={handleShow}
        >
          <span className="grow text-start">Kategori</span>
          <span className="shink-0 flex">
            <FaArrowRight />
          </span>
        </button>
      </div>
      <aside
        className={`fixed inset-0 overflow-scroll md:overflow-visible px-4 py-12 bg-white md:block md:bg-transparent md:py-0 md:px-0 md:inset-auto md:static ease-out duration-300 transform md:translate-y-0 md:translate-x-0 ${
          show ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {show && (
          <button
            className="btn btn-square btn-outline md:hidden my-5"
            onClick={handleShow}
          >
            <ImCross />
          </button>
        )}
        <div className="p-6 md:p-0 w-full">
          <Fragments.SidebarMenuList />
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
