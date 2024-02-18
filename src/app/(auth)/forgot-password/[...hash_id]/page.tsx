"use client";

import { useParams } from "next/navigation";
import ForgotPasswordClientComponent from "./clientComponent";
import { AuthStore } from "@/features/store/authStore";

const ForgotPasswordPage = () => {
  const params = useParams();
  console.log(params);
  const { email, hashId } = AuthStore((s) => ({
    email: s.email,
    hashId: s.hashId,
  }));

  console.log(email);
  console.log(hashId);

  return (
    <>
      {(!email && !hashId) ||
      hashId !== `${params.hash_id[0]}` ||
      params.hash_id[1] !== "reset" ? (
        <h1>404</h1>
      ) : (
        <ForgotPasswordClientComponent />
      )}
    </>
  );
};

export default ForgotPasswordPage;
