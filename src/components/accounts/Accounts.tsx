import LeftNavbar from "../shared/LeftNavbar";
import { Button } from "../ui/button";
import { IoAdd } from "react-icons/io5";
import { IoIosRefresh } from "react-icons/io";

type Props = {};

function Accounts({}: Props) {
  return (
    <div>
      <div className="flex justify-end gap-2">
        <Button
          variant={"outline"}
          className="flex text-white hover:text-white gap-2 bg-green-500 hover:bg-green-600"
        >
          <IoAdd className="h-4 w-4" /> Add Account
        </Button>
        <Button
          variant={"outline"}
          size={"icon"}
          className="text-green-500 border-green-500 hover:text-green-500"
        >
          <IoIosRefresh className="h-4 w-4" />
        </Button>
      </div>
      <div>All the account content here</div>
    </div>
  );
}

export default Accounts;
