import LoginPageClientComponent from "./clientComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

const LoginPage = () => {
  return (
    <>
      <LoginPageClientComponent />
    </>
  );
};

export default LoginPage;
