"use client";
import Dashboard from "@/components/dashboard/Dashboard";

type Props = {};

function page({}: Props) {
  return (
    <div className="m-10 flex justify-center">
      <Dashboard />
    </div>
  );
}

export default page;
