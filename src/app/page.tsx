"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="block">
      <section className="flex flex-wrap items-center justify-center flex-col py-11 px-6 container relative overflow-hidden">
        <h1 className="w-full mt-0 mx-0 mb-3 text-lime-500 text-center text-xl">
          EASIEST ONLINE FORM BUILDER
        </h1>
        <h2 className="m-0 lg:text-5xl text-2xl text-slate-900 font-bold text-center">
          Powerful forms get it done.
        </h2>
        <p className="mt-8 mx-0 mb-0 text-2xl text-gray-600 text-center">
          We believe the right form makes all the difference. Go from busywork
          to less work with powerful forms that use conditional logic, accept
          payments, generate reports, and automate workflows.
        </p>
        <div className="relative w-full my-6 mx-0 grid lg:grid-cols-3 grid-cols-1">
          <div className="relative my-0 mx-auto max-w-full col-start-2 flex flex-wrap justify-center text-center w-auto p-6 rounded-lg border border-gray-200 shadow">
            <Button className="py-3 px-6 min-h-14 text-xl mb-3 relative flex items-center justify-center cursor-pointer w-full border-none bg-sky-500 font-medium rounded-md transition duration-200 text-center group hover:bg-sky-600">
              <span className="relative w-full mr-4 border rounded-full bg-white p-2.5">
                <FaGoogle className="text-lime-600" />
              </span>
              <span>Login with Google</span>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
