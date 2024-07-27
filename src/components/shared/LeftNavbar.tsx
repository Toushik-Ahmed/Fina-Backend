"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getCurrentUserData, User } from "@/services/authServices";
import { removeToken } from "@/services/TokenService";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import {
  FaMoneyCheckAlt,
  FaBalanceScale,
  FaChartLine,
  FaMoneyBill,
  FaUser,
} from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

type Props = {};

function LeftNavbar({}: Props) {
  const router = useRouter();
  const currentPath = usePathname();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const getCurrentUserDataFn = async () => {
      try {
        const currUser = await getCurrentUserData();
        setUser(currUser);
      } catch (error) {
        console.log(error);
      }
    };
    getCurrentUserDataFn();
  }, []);

  const handleLogout = () => {
    removeToken();
    router.push("/login");
  };

  return (
    <div className="sticky top-[0px] h-[100vh] w-[300px] flex-shrink-0 bg-[#0f1111]">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant={"ghost"} className="mt-2 w-full">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center">
                <CgProfile className="mr-2 h-4 w-4" />
                {user?.username || "Loading..."}
              </div>
              <RiArrowDropDownLine className="h-4 w-4" />
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] bg-white p-0 text-white">
          <PopoverClose asChild>
            <Button variant={"ghost"} className="w-full" onClick={handleLogout}>
              <div className="flex items-center gap-2 text-red-600">
                <CiLogout className="h-4 w-4" /> Logout
              </div>
            </Button>
          </PopoverClose>
        </PopoverContent>
      </Popover>

      <ul className="mt-16 font-bold text-white">
        <li className="mb-[2vh] rounded duration-300 ease-in-out hover:bg-green-600 hover:shadow">
          <Link
            href="/l/accounts"
            className={
              "flex items-center px-[2vw] py-[2vh] " +
              (currentPath === "/l/accounts" ? "bg-white text-black" : "")
            }
          >
            <MdOutlineSpaceDashboard className="mr-[1vw] inline-block h-[2vh] w-[2vw]" />
            Dashboard
          </Link>
        </li>
        <li className="mb-[2vh] rounded duration-300 ease-in-out hover:bg-green-600 hover:shadow">
          <Link
            href="/l/personal"
            className={
              "flex items-center px-[2vw] py-[2vh] " +
              (currentPath === "/l/personal" ? "bg-white text-black" : "")
            }
          >
            <FaUser className="mr-[1vw] inline-block h-[2vh] w-[2vw]" />
            Personal
          </Link>
        </li>
        <li className="mb-[2vh] rounded duration-300 ease-in-out hover:bg-green-600 hover:shadow">
          <Link
            href="/l/basicBudgeting"
            className={
              "flex items-center px-[2vw] py-[2vh] " +
              (currentPath === "/l/basicBudgeting" ? "bg-white text-black" : "")
            }
          >
            <FaMoneyBill className="mr-[1vw] inline-block h-[2vh] w-[2vw]" />
            Basic Budgeting
          </Link>
        </li>
        <li className="mb-[2vh] rounded duration-300 ease-in-out hover:bg-green-600 hover:shadow">
          <Link
            href="/l/cashOverFlow"
            className={
              "flex items-center px-[2vw] py-[2vh] " +
              (currentPath === "/l/cashOverFlow" ? "bg-white text-black" : "")
            }
          >
            <FaChartLine className="mr-[1vw] inline-block h-[2vh] w-[2vw]" />
            Basic Cashflow Overview
          </Link>
        </li>

        <li className="mb-[2vh] rounded duration-300 ease-in-out hover:bg-green-600 hover:shadow">
          <Link
            href="/l/netWorth"
            className={
              "flex items-center px-[2vw] py-[2vh] " +
              (currentPath === "/l/netWorth" ? "bg-white text-black" : "")
            }
          >
            <FaBalanceScale className="mr-[1vw] inline-block h-[2vh] w-[2vw]" />
            Net Worth Overview
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default LeftNavbar;
