import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { CardInfo } from '../addCard/CardWithForm';

type Props = {
  accountInfo: CardInfo[];
};

const AccountInfo = ({ accountInfo }: Props) => {
  return (
    <div>
      <Table>
        <TableCaption>All Your Account Information.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[15vw]">Account </TableHead>
            <TableHead className="w-[15vw]">Bank</TableHead>
            <TableHead className="w-[15vw]">Type</TableHead>
            <TableHead className="w-[15vw]">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {accountInfo?.map((account, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                {account.accountname}
              </TableCell>
              <TableCell>{account.bankname}</TableCell>
              <TableCell>{account.accounttype}</TableCell>
              <TableCell>${account.totalmoney.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AccountInfo;
