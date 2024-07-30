import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineAccountBalance } from "react-icons/md";
import Budget from "../budgets/Budget";
import Merchants from "../marchent/Marchent";
import Transaction from "../transaction/Transaction";
import Accounts from "./Accounts";

type Props = {};

function PersonalPage({}: Props) {
  return (
    <div className="p-8">
      <div className="mb-8 text-xl font-semibold text-white">
        Personal Accounts and Transactions
        <div className="text-lg font-normal">
          Add money to your <span className="text-green-500">Fina</span>{" "}
          card.You can also keep tab manually.Configure your merchants and budgets to keep track of your money.
        </div>
      </div>
      <Tabs defaultValue="account" className="mx-auto max-w-3xl">
        <TabsList className="w-full">
          <TabsTrigger asChild value="account" className="flex-grow">
            <button className="flex items-center gap-2 border-b-2 border-solid border-transparent data-[state=active]:border-green-500">
              <MdOutlineAccountBalance className="h-4 w-4" /> Account
            </button>
          </TabsTrigger>
          <TabsTrigger asChild value="transaction" className="flex-grow">
            <button className="flex items-center gap-2 border-b-2 border-solid border-transparent data-[state=active]:border-green-500">
              <GrTransaction className="h-4 w-4" /> Transaction
            </button>
          </TabsTrigger>
          <TabsTrigger asChild value="merchants" className="flex-grow">
            <button className="flex items-center gap-2 border-b-2 border-solid border-transparent data-[state=active]:border-green-500">
              <BiSolidCategoryAlt className="h-4 w-4" /> Merchants
            </button>
          </TabsTrigger>
          <TabsTrigger asChild value="budget" className="flex-grow">
            <button className="flex items-center gap-2 border-b-2 border-solid border-transparent data-[state=active]:border-green-500">
              <FaMoneyCheckAlt className="h-4 w-4" /> Budgets
            </button>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Accounts />
        </TabsContent>
        <TabsContent value="transaction">
          <Transaction />
        </TabsContent>
        <TabsContent value="merchants">
          <Merchants />
        </TabsContent>
        <TabsContent value="budget">
          <Budget />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default PersonalPage;
