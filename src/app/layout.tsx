"use client";

import Layouts from "@/components/layouts";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

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
        <SessionProvider>
          {!disablePath.includes(path) && <Layouts.Header />}
          {children}
        </SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
