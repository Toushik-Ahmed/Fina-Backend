import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import { GrTransaction } from 'react-icons/gr';
import { MdOutlineAccountBalance } from 'react-icons/md';
import Accounts from './Accounts';
import Transaction from '../transaction/Transaction';

type Props = {};

function PersonalPage({}: Props) {
  return (
    <div className="p-8 ">
      <div className="text-gray-400 mb-8">
        Personal Accounts and Transactions
      </div>
      <Tabs defaultValue="account" className="max-w-3xl mx-auto">
        <TabsList className="w-full">
          <TabsTrigger asChild value="account" className="flex-grow">
            <button className="border-b-2 border-transparent border-solid data-[state=active]:border-green-500 flex gap-2 items-center">
              <MdOutlineAccountBalance className="h-4 w-4" /> Account
            </button>
          </TabsTrigger>
          <TabsTrigger asChild value="transaction" className="flex-grow">
            <button className="border-b-2 border-transparent border-solid data-[state=active]:border-green-500 flex gap-2 items-center">
              <GrTransaction className="h-4 w-4" /> Transaction
            </button>
          </TabsTrigger>
          <TabsTrigger asChild value="categories" className="flex-grow">
            <button className="border-b-2 border-transparent border-solid data-[state=active]:border-green-500 flex gap-2 items-center">
              <BiSolidCategoryAlt className="h-4 w-4" /> Categories
            </button>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Accounts />
        </TabsContent>
        <TabsContent value="transaction">
          <Transaction />
        </TabsContent>
        <TabsContent value="categories">Categories</TabsContent>
      </Tabs>
    </div>
  );
}

export default PersonalPage;
