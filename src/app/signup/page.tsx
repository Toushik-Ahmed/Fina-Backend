"use client";
import SignUp from "@/components/signup/SignUp";
import { getToken } from "@/services/TokenService";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";

type Props = {};

function Page({}: Props) {
  useLayoutEffect(() => {
    const curUser = getToken();
    if (curUser) {
      redirect("/l/accounts");
    }
  }, []);

  return <SignUp />;
}

export default Page;
