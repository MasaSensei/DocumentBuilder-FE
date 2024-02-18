"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Layouts from "@/components/layouts";
import { Button } from "@/components/ui/button";
import Fragments from "@/components/fragments";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { AuthStore } from "@/features/store/authStore";

const loginFormSchema = z
  .object({
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
    confirmPassword: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match.",
      });
    }
  });

const ForgotPasswordClientComponent = () => {
  const router = useRouter();
  const [seePassword, setSeePassword] = useState(false);
  const { resetPassword } = AuthStore();
  const { email, hashId } = AuthStore((s) => ({
    email: s.email,
    hashId: s.hashId,
  }));

  const {
    handleSubmit: handleLoginSubmit,
    control: loginControl,
    formState: { errors: loginErrors },
    reset: resetLogin,
  } = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
  });

  const fields = [
    {
      name: "password",
      type: seePassword ? "text" : "password",
      label: "Password",
      placeholder: "Password",
    },
    {
      name: "confirmPassword",
      type: seePassword ? "text" : "password",
      label: "Confirm Password",
      placeholder: "Confirm Password",
    },
  ];

  const onSubmit = async (data: z.infer<typeof loginFormSchema>) => {
    try {
      await resetPassword(email as string, data.password, hashId as string);
      router.push("/login");
      resetLogin();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSeePassword = () => {
    setSeePassword(!seePassword);
  };

  return (
    <>
      <section className="w-full bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white w-4/5 min-h-4/5 rounded-lg flex flex-col items-center border border-gray-200 py-12 px-2 my-0 mx-auto">
          <h2 className="lg:text-3xl text-xl text-slate-900 font-bold my-2 mx-auto">
            Reset Password
          </h2>
          <div className="mt-4 mb-0 mx-auto max-w-[324px] w-full">
            <Layouts.Form onSubmit={handleLoginSubmit(onSubmit)}>
              {fields.map((field) => (
                <Fragments.ControllerInput
                  key={field.name}
                  {...field}
                  control={loginControl}
                  errors={loginErrors}
                  type={field.type}
                  inputClassName="mt-2 mb-5"
                  labelClassName="my-5"
                  seePassword={handleSeePassword}
                />
              ))}

              <Button
                className="mt-5 w-full mt-4 h-10 text-lg text-white bg-sky-500 hover:bg-lime-500 border-none rounded-lg transition-colors duration-300 ease-in-out"
                type="submit"
              >
                Send Reset Password
              </Button>
              <div className="text-slate-500 text-center text-sm mt-2 mx-auto mb-0">
                Dont have an account?
                <Link
                  href={"/register"}
                  className="text-sky-500 hover:text-lime-500 ml-2 font-bold"
                >
                  Register
                </Link>
              </div>
            </Layouts.Form>
          </div>
          <div className="lg:w-1/2 w-full mx-auto container pt-5 text-left">
            <Button
              className=" text-xl bg-sky-500 hover:bg-lime-500 text-white"
              onClick={() => router.push("/login")}
            >
              <FaArrowLeft /> <span className="text-sm ml-2">Go Back</span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPasswordClientComponent;
