"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Layouts from "@/components/layouts";
import { Button } from "@/components/ui/button";
import Fragments from "@/components/fragments";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { AuthStore } from "@/features/store/authStore";
import { signIn } from "next-auth/react";
import { useState } from "react";

const loginFormSchema = z.object({
  email: z.string(),
  password: z.string(),
});

const forgotPasswordFormSchema = z.object({
  email: z.string(),
});

const LoginPageClientComponent = () => {
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();
  const { forgotPassword, login } = AuthStore();
  const {
    handleSubmit: handleLoginSubmit,
    control: loginControl,
    formState: { errors: loginErrors },
    reset: resetLogin,
  } = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
  });

  const {
    handleSubmit: handleForgetPasswordSubmit,
    control: forgotPasswordControl,
    formState: { errors: forgotPasswordErrors },
    reset: resetForgotPassword,
  } = useForm<z.infer<typeof forgotPasswordFormSchema>>({
    resolver: zodResolver(forgotPasswordFormSchema),
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
  ];

  const forgetPassword = () => {
    setIsClicked(true);
  };

  const onSubmit = async (data: z.infer<typeof loginFormSchema>) => {
    try {
      await login(data.email, data.password);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitWithGoogle = () => {
    signIn("google", {
      callbackUrl: "/",
      redirect: false,
    });
  };

  const onSubmitForgetPassword = async (
    data: z.infer<typeof forgotPasswordFormSchema>
  ) => {
    try {
      const res: any = await forgotPassword(data.email);
      const response = res.hash_id;

      localStorage.setItem("hashId", response);
      localStorage.setItem("email", data.email);

      resetForgotPassword();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="w-full bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white w-4/5 min-h-4/5 rounded-lg flex flex-col items-center border border-gray-200 py-12 px-2 my-0 mx-auto">
          <h2 className="lg:text-3xl text-xl text-slate-900 font-bold my-2 mx-auto">
            {isClicked ? "Forgot Password" : "Login"}
          </h2>
          {!isClicked && (
            <>
              <div className="mt-6 mx-auto mb-0">
                <p className="text-start text-slate-500 text-sm mt-0 mx-0 mb-2">
                  Login With
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
            </>
          )}
          <div className="mt-4 mb-0 mx-auto max-w-[324px] w-full">
            <Layouts.Form
              onSubmit={
                !isClicked
                  ? handleLoginSubmit(onSubmit)
                  : handleForgetPasswordSubmit(onSubmitForgetPassword)
              }
            >
              {isClicked && (
                <Fragments.ControllerInput
                  {...fields[0]}
                  control={forgotPasswordControl}
                  errors={forgotPasswordErrors}
                  type={fields[0].type}
                  inputClassName="mt-2"
                  labelClassName="my-5"
                />
              )}
              {fields.map(
                (field) =>
                  !isClicked && (
                    <Fragments.ControllerInput
                      key={field.name}
                      {...field}
                      control={
                        !isClicked ? loginControl : forgotPasswordControl
                      }
                      errors={!isClicked ? loginErrors : forgotPasswordErrors}
                      type={field.type}
                      inputClassName="mt-2 mb-5"
                      labelClassName="my-5"
                    />
                  )
              )}
              {!isClicked && (
                <div
                  className="border-none cursor-pointer mt-2 mr-0 mb-0 ml-auto text-slate-500 bg-transparent inline-block text-sm"
                  onClick={forgetPassword}
                >
                  Forgot Password?
                </div>
              )}
              <Button
                className="mt-5 w-full mt-4 h-10 text-lg text-white bg-sky-500 hover:bg-lime-500 border-none rounded-lg transition-colors duration-300 ease-in-out"
                type="submit"
              >
                {!isClicked ? "Login" : "Send Reset Email"}
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
              onClick={
                !isClicked ? () => router.back() : () => setIsClicked(false)
              }
            >
              <FaArrowLeft /> <span className="text-sm ml-2">Go Back</span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPageClientComponent;
