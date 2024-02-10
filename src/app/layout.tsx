"use client";

import Layouts from "@/components/layouts";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = (props) => {
  const { children } = props;
  const path = usePathname();
  const disablePath = ["/login", "/register"];

  return (
    <html lang="en">
      <body className={inter.className}>
        {!disablePath.includes(path) && <Layouts.Header />}
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
