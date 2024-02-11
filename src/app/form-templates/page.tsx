import Core from "@/components/core";
import Layouts from "@/components/layouts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Form Templates",
};

const FormTemplatesPage = () => {
  return (
    <>
      <section className="conainer-fluid pt-8 pb-5 md:pb-20">
        <div className="container max-w-full mx-auto px-5 lg:px-8">
          <div className="flex text-center items-center relative lg:max-w-xl max-w-full mx-auto">
            <div className="w-full lg:shrink-0 lg:px-6">
              <h1 className="text-3xl my-5 font-bold">Form Templates</h1>
              <h2 className=" mb-8 mx-auto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
                earum accusamus excepturi odio et esse iusto vero voluptate,
                quaerat alias!
              </h2>
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
