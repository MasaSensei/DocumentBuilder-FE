import RegisterPageClientComponent from "./clientComponent";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Register"
}

const RegisterPage = () => {
  return (
    <>
      <RegisterPageClientComponent />
    </>
  );
};

export default RegisterPage;
