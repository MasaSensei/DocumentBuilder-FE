"use client";

import { useParams } from "next/navigation";
import ForgotPasswordClientComponent from "./clientComponent";

const ForgotPasswordPage = () => {
  const params = useParams();

  const storages = {
    email: localStorage.getItem("email"),
    hashId: localStorage.getItem("hashId"),
  };

  return (
    <>
      {(!storages.email && !storages.hashId) ||
      storages.hashId !== `${params.hash_id[0]}` ||
      params.hash_id[1] !== "reset" ? (
        <h1>404</h1>
      ) : (
        <ForgotPasswordClientComponent />
      )}
    </>
  );
};

export default ForgotPasswordPage;
