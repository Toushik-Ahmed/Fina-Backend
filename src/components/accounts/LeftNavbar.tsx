'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaBalanceScale,
  FaChartLine,
  FaMoneyBill,
  FaUser,
} from 'react-icons/fa';
import { MdOutlineSpaceDashboard } from 'react-icons/md';

type Props = {};

function LeftNavbar({}: Props) {
  const currentPath = usePathname();
  return (
    <div className="bg-gray-800 h-[100vh] sticky top-[0px]">
      <div className="">
        <h1 className="text-xl text-white  font-bold  py-[2vh] px-[2vw]">
          Users Name
        </h1>
      </div>

      <ul className="mt-[3vh] text-white font-bold">
        <li className="mb-[2vh] rounded hover:shadow hover:bg-green-600 ease-in-out duration-300 ">
          <Link
            href="/l/accounts"
            className={
              'flex items-center px-[2vw] py-[2vh] ' +
              (currentPath === '/l/accounts' ? 'bg-white text-black' : '')
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
              'flex items-center px-[2vw] py-[2vh] ' +
              (currentPath === '/l/personal' ? 'bg-white text-black' : '')
            }
          >
            <FaUser className="inline-block w-[2vw] h-[2vh] mr-[1vw]" />
            Personal
          </Link>
        </li>
        <li className="mb-[2vh] rounded hover:shadow hover:bg-green-600 ease-in-out duration-300 ">
          <Link href="" className="flex items-center px-[2vw] py-[2vh]">
            <FaMoneyBill className="inline-block w-[2vw] h-[2vh] mr-[1vw]" />
            Basic Budgeting
          </Link>
        </li>
        <li className="mb-[2vh] rounded hover:shadow hover:bg-green-600 ease-in-out duration-300 ">
          <Link href="" className="flex items-center px-[2vw] py-[2vh]">
            <FaChartLine className="inline-block w-[2vw] h-[2vh] mr-[1vw]" />
            Basic Cashflow Overflow
          </Link>
        </li>
        <li
          className="mb-[2vh] rounded hover:shadow hover:bg-green-600 ease-in-out"
          duration-300
        >
          <Link href="" className="flex items-center px-[2vw]  py-[2vh]">
            <FaBalanceScale className="inline-block w-[2vw] h-[2vh] mr-[1vw]" />
            Net Worth Overview
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default LeftNavbar;
