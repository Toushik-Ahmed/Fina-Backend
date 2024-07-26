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

type Props = {
  transactionInfo: TransactionCard[];
};

const TransactionInfo = ({ transactionInfo }: Props) => {
  return (
    <div>
      <Table>
        <TableCaption>All Your Transaction Information.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[15vw]">Merchant Name </TableHead>
            <TableHead className="w-[15vw]">Type</TableHead>
            <TableHead className="w-[15vw]">Amount</TableHead>
            <TableHead className="w-[15vw]">Category</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactionInfo?.map((transaction, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                {transaction.merchantName}
              </TableCell>

              <TableCell>{transaction.type}</TableCell>
              <TableCell>${transaction.amount}</TableCell>
              <TableCell>{transaction.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionInfo;
