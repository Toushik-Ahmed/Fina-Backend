import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CardInfo } from '../addCard/CardWithForm';

type Props = {
  accountInfo: CardInfo[];
};

const AccountInfo = ({ accountInfo }: Props) => {
  return (
    <div className="rounded-lg bg-gray-900 p-6 text-white m-4">
      <Table className="w-full">
        <TableCaption className="mt-4 text-gray-400">
          All Your Account Information.
        </TableCaption>
        <TableHeader>
          <TableRow className="border-b border-gray-700">
            <TableHead className="w-[25%] text-left text-gray-300">
              Account
            </TableHead>
            <TableHead className=" text-left text-gray-300">
              Bank
            </TableHead>
            <TableHead className=" text-left text-gray-300">
              Type
            </TableHead>
            <TableHead className=" text-left text-gray-300">
              Amount
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {accountInfo?.map((account, index) => (
            <TableRow key={index} className="border-b border-gray-700 text-left">
              <TableCell className="font-medium">
                {account.accountname}
              </TableCell>
              <TableCell>{account.bankname}</TableCell>
              <TableCell>{account.accounttype}</TableCell>
              <TableCell >
                ${account.totalmoney.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AccountInfo;
