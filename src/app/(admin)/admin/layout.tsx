import Layouts from "@/components/layouts";
import React from "react";

interface AdminDashboardLayoutProps {
  children: React.ReactNode;
}

const AdminDashboardLayout: React.FC<AdminDashboardLayoutProps> = (props) => {
  const { children } = props;
  return (
    <>
      <div className="flex min-h-screen flex-col bg-slate-200 transition-colors duration-300">
        <Layouts.AdminHeader />
        <div className="flex flex-1">
          <aside className="fixed bottom-0 z-10 hidden h-full w-72 bg-slate-800 shadow transition-[width] duration-300 left-0 right-auto lg:block pt-20 lg:w-72">
            <Layouts.AdminSidebar />
          </aside>
          <main className="relative flex w-full flex-col justify-start transition-[padding] duration-300 pt-[72px] lg:pt-20 lg:pl-72 lg:pl-0">
            <div className="h-full p-5 md:p-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardLayout;
