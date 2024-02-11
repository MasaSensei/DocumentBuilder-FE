"use client";

import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { Input } from "@/components/ui/input";
import Link from "next/link";

const SidebarMenuList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState("");

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (e: any) => {
    setIsSelected(e.target.value);
  };

  return (
    <>
      <Button
        className="w-full flex items-center bg-transparent hover:bg-transparent shadow-none text-slate-800 justify-between text-sm lg:text-md leading-3 border-b rounded-none border-gray-200 py-6 px-2"
        onClick={handleOpen}
      >
        <strong className="font-bold text-left">Kategori</strong>
        <span className="ml-auto flex items-center">
          <span className="shrink-0 text-sm pr-6 text-slate-400">Baru</span>
          <i className="ml-4 flex">
            {isOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
          </i>
        </span>
      </Button>
      {isOpen && (
        <ul className="py-6 text-sm lg:text-md lg:leading-3 border-b border-gray-200">
          <li>
            <Label
              htmlFor="baru"
              className={`flex items-center justify-start p-1 rounded-lg ${
                isSelected === "baru"
                  ? "bg-lime-500 hover:bg-lime-600"
                  : "bg-transparent"
              }`}
            >
              <Input
                id="baru"
                type={"radio"}
                value="baru"
                className="w-4"
                onChange={handleSelect}
                name="options"
              />
              <span
                className={`${
                  isSelected !== "baru" ? "text-black" : "text-lime-100"
                } ml-2.5 accent-neutral-600`}
              >
                Baru
              </span>
            </Label>
          </li>
          <li>
            <Label
              htmlFor="popular"
              className={`flex items-center justify-start p-1 rounded-lg ${
                isSelected === "popular"
                  ? "bg-lime-500 hover:bg-lime-600"
                  : "bg-transparent"
              }`}
            >
              <Input
                id="popular"
                type={"radio"}
                value="popular"
                className="w-4"
                onChange={handleSelect}
                name="options"
              />
              <span
                className={`${
                  isSelected !== "popular" ? "text-black" : "text-lime-100"
                } ml-2.5 accent-neutral-600`}
              >
                Popular
              </span>
            </Label>
          </li>
        </ul>
      )}
      <Button
        className="flex items-center my-10 md:my-6 p-3 bg-slate-700 hover:bg-slate-800 text-white rounded-lg"
        asChild
      >
        <Link href={"/"}>My Documents</Link>
      </Button>
    </>
  );
};

export default SidebarMenuList;
