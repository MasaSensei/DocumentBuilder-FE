"use client";

import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

const SidebarMenuList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        className="btn w-full flex items-center justify-between text-sm lg:text-md leading-3 border-b border-gray-200"
        style={{ margin: "24px 8px" }}
        onClick={handleOpen}
      >
        <strong className="font-bold text-left">Kategori</strong>
        <span className="ml-auto flex items-center">
          <span className="shrink-0 text-sm" style={{ paddingRight: "20px" }}>
            Baru
          </span>
          <i className="ml-4 flex">
            {isOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
          </i>
        </span>
      </button>
      {isOpen && (
        <ul className="pb-6 text-sm lg:text-md lg:leading-3 border-b border-gray-200">
          <li style={{ marginLeft: "8px" }}>
            <label
              htmlFor="popular"
              className="flex items-center"
              style={{ padding: "8px" }}
            >
              <input type="radio" name="popular" id="popular" />
              <span className="text-lime-100" style={{ marginLeft: "10px" }}>
                Populer
              </span>
            </label>
          </li>
          <li style={{ marginLeft: "8px" }}>
            <label
              htmlFor="baru"
              className="flex items-center"
              style={{ padding: "8px" }}
            >
              <input type="radio" name="baru" id="baru" />
              <span className="text-lime-100" style={{ marginLeft: "10px" }}>
                Baru
              </span>
            </label>
          </li>
        </ul>
      )}
    </>
  );
};

export default SidebarMenuList;
