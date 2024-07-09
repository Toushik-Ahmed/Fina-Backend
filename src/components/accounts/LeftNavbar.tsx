import {
  FaBalanceScale,
  FaChartLine,
  FaHome,
  FaMoneyBill,
  FaUser,
} from 'react-icons/fa';

type Props = {};

function LeftNavbar({}: Props) {
  return (
    <div className="w-[18vw] bg-gray-800 fixed h-full">
      <div className="">
        <h1 className="text-xl text-white  font-bold  py-[2vh] px-[2vw]">
          Users Name
        </h1>
      </div>

      <ul className="mt-[3vh] text-white font-bold">
        <li className="mb-[2vh] rounded hover:shadow hover:bg-green-600 py-[2vh]">
          <a href="" className="flex items-center px-[2vw]">
            <FaHome className="inline-block w-[2vw] h-[2vh] mr-[1vw]" />
            Home
          </a>
        </li>
        <li className="mb-[2vh] rounded hover:shadow hover:bg-green-600 py-[2vh]">
          <a href="" className="flex items-center px-[2vw]">
            <FaUser className="inline-block w-[2vw] h-[2vh] mr-[1vw]" />
            Personal
          </a>
        </li>
        <li className="mb-[2vh] rounded hover:shadow hover:bg-green-600 py-[2vh]">
          <a href="" className="flex items-center px-[2vw]">
            <FaMoneyBill className="inline-block w-[2vw] h-[2vh] mr-[1vw]" />
            Basic Budgeting
          </a>
        </li>
        <li className="mb-[2vh] rounded hover:shadow hover:bg-green-600 py-[2vh]">
          <a href="" className="flex items-center px-[2vw]">
            <FaChartLine className="inline-block w-[2vw] h-[2vh] mr-[1vw]" />
            Basic Cashflow Overflow
          </a>
        </li>
        <li className="mb-[2vh] rounded hover:shadow hover:bg-green-600 py-[2vh]">
          <a href="" className="flex items-center px-[2vw]">
            <FaBalanceScale className="inline-block w-[2vw] h-[2vh] mr-[1vw]" />
            Net Worth Overview
          </a>
        </li>
      </ul>
    </div>
  );
}

export default LeftNavbar;
