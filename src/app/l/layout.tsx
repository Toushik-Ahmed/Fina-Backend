"use client";
import LeftNavbar from "@/components/shared/LeftNavbar";
import { getToken } from "@/services/TokenService";
import { redirect } from "next/navigation";
import { useLayoutEffect, useState } from "react";

export default function AccountLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const [confirmedAuth, setConfirmedAuth] = useState(false);
  useLayoutEffect(() => {
    const curUser = getToken();
    if (!curUser) {
      redirect("/login");
    } else {
      setConfirmedAuth(true);
    }
  }, []);

  return (
    <>
      {confirmedAuth && (
        <section className="flex">
          <LeftNavbar />
          <div className="nested-routes flex-grow overflow-x-auto">
            {children}
          </div>
        </section>
      )}
    </>
  );
}
