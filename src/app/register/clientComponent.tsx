"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Layouts from "@/layouts";
import { Button } from "@/components/ui/button";
import Fragments from "@/fragments";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

const formSchema = z
  .object({
    email: z.string().email({
      message: "Invalid email address.",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
    confirmPassword: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match.",
        path: ["confirmPassword"],
      });
    }
  });

const RegisterPageClientComponent = () => {
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const fields = [
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Email",
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Password",
    },
    {
      name: "confirmPassword",
      type: "password",
      label: "Confirm Password",
      placeholder: "Confirm Password",
    },
  ];

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const newData = { ...data, openID: "email" };
    console.log(newData);
  };

  const onSubmitWithGoogle = () => {
    const data = { openId: "google" };
    console.log(data);
  };

  return (
    <>
      <section className="w-full bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white w-4/5 min-h-4/5 rounded-lg flex flex-col items-center border border-gray-200 py-12 px-2 my-0 mx-auto">
          <h2 className="lg:text-3xl text-xl text-slate-900 font-bold my-2 mx-auto">
            Register
          </h2>
          <div className="mt-6 mx-auto mb-0">
            <p className="text-start text-slate-500 text-sm mt-0 mx-0 mb-2">
              Sign up with
            </p>
            <div className="flex w-full">
              <Button
                onClick={onSubmitWithGoogle}
                className="border border-gray-200 rounded-lg items-center justify-center flex flex-col text-slate-900 bg-slate-100 hover:bg-slate-200 py-2 px-4 h-50 "
              >
                <Image
                  src={"/google-color-icon.svg"}
                  width={50}
                  height={50}
                  alt=""
                  className="my-2 w-7 h-7 "
                />
                <p className="text-sm">Google</p>
              </Button>
            </div>
          </div>
          <div className="h-[1px] w-full max-w-[324px] bg-slate-900 my-7 mx-0 relative">
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white py-0 px-5">
              OR
            </span>
          </div>
          <div className="mt-4 mb-0 mx-auto max-w-[324px] w-full">
            <Layouts.Form onSubmit={handleSubmit(onSubmit)}>
              {fields.map((field) => (
                <Fragments.ControllerInput
                  key={field.name}
                  {...field}
                  control={control}
                  errors={errors}
                  type={field.type}
                  inputClassName="mt-2 mb-5"
                  labelClassName="my-5"
                />
              ))}
              <Button
                className="mt-5 w-full mt-4 h-10 text-lg text-white bg-sky-500 hover:bg-lime-500 border-none rounded-lg transition-colors duration-300 ease-in-out"
                type="submit"
              >
                Register
              </Button>
              <div className="text-slate-500 text-center text-sm mt-2 mx-auto mb-0">
                Already have an account?
                <Link
                  href={"/login"}
                  className="text-sky-500 hover:text-lime-500 ml-2 font-bold"
                >
                  Log In
                </Link>
              </div>
            </Layouts.Form>
          </div>
          <div className="lg:w-1/2 w-full mx-auto container pt-5 text-left">
            <Button
              className=" text-xl bg-sky-500 hover:bg-lime-500 text-white"
              onClick={() => {
                router.back();
              }}
            >
              <FaArrowLeft />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterPageClientComponent;
