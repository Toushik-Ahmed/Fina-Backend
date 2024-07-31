import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TransactionCard } from "./transactionCard/TransactionCard";
import { DateTime } from 'luxon';

type Props = {
  transactionInfo: TransactionCard[];
};

const TransactionInfo = ({ transactionInfo }: Props) => {
  return (
    <div className="m-4 rounded-lg bg-gray-900 p-6 text-white">
      <Table>
        <TableCaption className="mt-4 text-gray-400">
          All Your Transaction Information.
        </TableCaption>
        <TableHeader>
          <TableRow className="border-b border-gray-700">
            <TableHead className="text-left text-gray-300">
              Merchant Name{" "}
            </TableHead>
            <TableHead className="text-left text-gray-300">Type</TableHead>
            <TableHead className="text-left text-gray-300">Amount</TableHead>
            <TableHead className="text-left text-gray-300">Category</TableHead>
            <TableHead className="text-left text-gray-300">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactionInfo?.map((transaction, index) => (
            <TableRow key={index} className="border-b border-gray-700 text-left">
              <TableCell className="font-medium">
                {transaction.merchantName}
              </TableCell>

              <TableCell>{transaction.type}</TableCell>
              <TableCell>${transaction.amount}</TableCell>
              <TableCell>{transaction.category}</TableCell>
              <TableCell>{DateTime.fromISO(transaction.timestamp||"").toFormat('yyyy LLL dd')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionInfo;
