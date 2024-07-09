import { FaExchangeAlt, FaListAlt, FaUser } from 'react-icons/fa';

type Props = {};

function AccountstopNavbar({}: Props) {
  return (
    <div className="ml-[18vw] w-full h-[8.3vh] py-[2vh] bg-gray-800 text-white">
      <div className="flex items-center">
        <a href="" className="flex items-center px-[4vw]">
          <FaUser className="mr-[1vw]" />
          Accounts
        </a>
        <a href="" className="flex items-center px-[4vw]">
          <FaExchangeAlt className="mr-[1vw]" />
          Transactions
        </a>
        <a href="" className="flex items-center px-[4vw]">
          <FaListAlt className="mr-[1vw]" />
          Categories
        </a>
        <button className="bg-green-800 px-[1vw] py-[0.5vh] ml-[25vw] rounded">
          Add Account
        </button>
      </div>
    </div>
  );
}

export default AccountstopNavbar;
