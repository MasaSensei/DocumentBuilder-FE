"use client";

import Core from "@/components/core";
import Fragments from "@/components/fragments";
import Layouts from "@/components/layouts";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const formTemplateSchema = z.object({
  name: z.string(),
});

const FormTemplatesPage = () => {
  const [showFirstSection, setShowFirstSection] = useState(false);
  const router = useRouter();
  const secondSectionRef = useRef<HTMLDivElement>(null);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof formTemplateSchema>>({
    resolver: zodResolver(formTemplateSchema),
  });

  const onSubmit = (data: z.infer<typeof formTemplateSchema>) => {
    console.log(data);
    router.push(`/form-templates/search/${data.name}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      const secondSection = secondSectionRef.current;
      if (secondSection) {
        const { top } = secondSection.getBoundingClientRect();
        setShowFirstSection(top > 0);
      }
    };

    // Panggil handleScroll saat komponen dimuat
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: showFirstSection ? -100 : 0,
          opacity: showFirstSection ? 0 : 1,
        }}
        transition={{ duration: 0.5 }}
        className={`bg-white border-b border-gray-300 shadow-2xl fixed top-0 left-0 w-full z-[999] block`}
      >
        <div className="container flex items-center max-w-xl  mx-auto lg:px-11 px-5 h-14 lg:h-20 gap-2">
          <Layouts.Form className="grow" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center gap-3 md:max-w-11/12 md:px-4 mx-auto">
              <Fragments.ControllerInput
                name="name"
                type="text"
                placeholder="Search in all Form Templates"
                className="w-full"
                inputClassName="relative z-0 h-12 border border-transparent focus:border-lime-500 focus:outline-2 focus:outline-sky-200 focus:bg-white bg-lime-200 placeholder-slate-400 text-lg px-4"
                control={control}
                errors={errors}
                defaultValue={""}
              />
              <Button
                type="submit"
                size={"icon"}
                className="h-full w-12 bg-lime-500 hover:bg-lime-600"
              >
                <FaMagnifyingGlass className="w-full h-full p-2" />
              </Button>
            </div>
          </Layouts.Form>
        </div>
      </motion.div>

      <section
        ref={secondSectionRef}
        className="container-fluid pt-8 pb-5 md:pb-20 "
      >
        <div className="container max-w-full mx-auto px-5 lg:px-8">
          <div className="flex text-center items-center relative lg:max-w-3xl max-w-full mx-auto">
            <div className="w-full lg:shrink-0 lg:px-6">
              <h1 className="text-3xl my-5 font-bold">Form Templates</h1>
              <h2 className=" mb-8 mx-auto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
                earum accusamus excepturi odio et esse iusto vero voluptate,
                quaerat alias!
              </h2>
              <Layouts.Form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-center gap-3 md:max-w-11/12 md:px-4 mx-auto">
                  <Fragments.ControllerInput
                    name="name"
                    type="text"
                    placeholder="Search in all Form Templates"
                    className="w-full mb-5"
                    inputClassName="relative z-0 h-12 border border-transparent focus:border-lime-500 focus:outline-2 focus:outline-sky-200 focus:bg-white bg-lime-200 placeholder-slate-400 text-lg px-4"
                    control={control}
                    errors={errors}
                    defaultValue={""}
                  />
                  <Button
                    type="submit"
                    size={"icon"}
                    className="h-full w-12 bg-lime-500 mb-5 hover:bg-lime-600"
                  >
                    <FaMagnifyingGlass className="w-full h-full p-2" />
                  </Button>
                </div>
              </Layouts.Form>
            </div>
          </div>
        </div>
      </section>
      <section className="second-section">
        <div className="container max-w-full mx-auto px-5 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <Layouts.SideBar />
            <div className="w-full grow sm:mb-20">
              <section className="mt-4 flex flex-col w-full">
                <div className="md:-mt-8 sm:mt-5">
                  <div className="relative flex flex-wrap grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-strech justify-start mx-auto">
                    <Core.Card />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormTemplatesPage;
