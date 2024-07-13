"use client";
import { getCurrentUserData, User } from "@/services/authServices";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaBalanceScale,
  FaChartLine,
  FaMoneyBill,
  FaUser,
} from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Button } from "@/components/ui/button";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose
} from "@/components/ui/popover";
import { removeToken } from "@/services/TokenService";

type Props = {};

function LeftNavbar({}: Props) {
  const router = useRouter()
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
    router.push('/login')
  }

  return (
    <div className="bg-gray-800 h-[100vh] sticky top-[0px] w-[230px] flex-shrink-0">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant={"ghost"} className="w-full mt-2">
            <div className="flex justify-between items-center w-full">
              <div className="flex  items-center">
                <CgProfile className="mr-2 h-4 w-4" />
                {user?.username || "Loading..."}
              </div>
              <RiArrowDropDownLine className="h-4 w-4" />
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[230px] bg-white text-white p-0">
          <PopoverClose asChild>
            <Button variant={"ghost"} className="w-full " onClick={handleLogout}>
              <div className=" text-red-600 flex gap-2 items-center" >
                <CiLogout className="w-4 h-4" /> Logout
              </div>
            </Button>
          </PopoverClose>
        </PopoverContent>
      </Popover>

      <ul className="mt-16 text-white font-bold">
        <li className="mb-[2vh] rounded hover:shadow hover:bg-green-600 ease-in-out duration-300 ">
          <Link
            href="/l/accounts"
            className={
              "flex items-center px-[2vw] py-[2vh] " +
              (currentPath === "/l/accounts" ? "bg-white text-black" : "")
            }
          >
            <MdOutlineSpaceDashboard className="inline-block w-[2vw] h-[2vh] mr-[1vw]" />
            Dashboard
          </Link>
        </li>
        <li className="mb-[2vh] rounded hover:shadow hover:bg-green-600 ease-in-out duration-300 ">
          <Link
            href="/l/personal"
            className={
              "flex items-center px-[2vw] py-[2vh] " +
              (currentPath === "/l/personal" ? "bg-white text-black" : "")
            }
          >
            <FaUser className="inline-block w-[2vw] h-[2vh] mr-[1vw]" />
            Personal
          </Link>
        </li>
        <li className="mb-[2vh] rounded hover:shadow hover:bg-green-600 ease-in-out duration-300 ">
          <Link
            href="/l/basicBudgeting"
            className={
              "flex items-center px-[2vw] py-[2vh] " +
              (currentPath === "/l/basicBudgeting" ? "bg-white text-black" : "")
            }
          >
            <FaMoneyBill className="inline-block w-[2vw] h-[2vh] mr-[1vw]" />
            Basic Budgeting
          </Link>
        </li>
        <li className="mb-[2vh] rounded hover:shadow hover:bg-green-600 ease-in-out duration-300 ">
          <Link
            href="/l/cashOverFlow"
            className={
              "flex items-center px-[2vw] py-[2vh] " +
              (currentPath === "/l/cashOverFlow" ? "bg-white text-black" : "")
            }
          >
            <FaChartLine className="inline-block w-[2vw] h-[2vh] mr-[1vw]" />
            Basic Cashflow Overflow
          </Link>
        </li>
        <li className="mb-[2vh] rounded hover:shadow hover:bg-green-600 ease-in-out duration-300">
          <Link
            href="/l/netWorth"
            className={
              "flex items-center px-[2vw] py-[2vh] " +
              (currentPath === "/l/netWorth" ? "bg-white text-black" : "")
            }
          >
            <FaBalanceScale className="inline-block w-[2vw] h-[2vh] mr-[1vw]" />
            Net Worth Overview
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default LeftNavbar;
