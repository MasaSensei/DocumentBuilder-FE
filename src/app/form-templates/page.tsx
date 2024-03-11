"use client";

import Core from "@/components/core";
import Fragments from "@/components/fragments";
import Layouts from "@/components/layouts";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { FaMagnifyingGlass } from "react-icons/fa6";

const formTemplateSchema = z.object({
  name: z.string(),
});

const FormTemplatesPage = () => {
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
  };
  return (
    <>
      <section className="container-fluid pt-8 pb-5 md:pb-20">
        <div className="container max-w-full mx-auto px-5 lg:px-8">
          <div className="flex text-center items-center relative lg:max-w-3xl max-w-full mx-auto">
            <div className="w-full lg:shrink-0 lg:px-6">
              <h1 className="text-3xl my-5 font-bold">Form Templates</h1>
              <h2 className=" mb-8 mx-auto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
                earum accusamus excepturi odio et esse iusto vero voluptate,
                quaerat alias!
              </h2>
              <Layouts.Form>
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
      <section>
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
