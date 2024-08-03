"use client";
import LogIn from "@/components/login/LogIn";
import { getToken } from "@/services/TokenService";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";

type Props = {};

function page({}: Props) {
  useLayoutEffect(() => {
    const curUser = getToken();
    if (curUser) {
      redirect("/l/accounts");
    }
  }, []);

  return <LogIn />;
}

export default page;
