import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type Props = {};

const BasicBudgeting = (props: Props) => {
  return (
    <div>
      <Table className='w-[50vw]'>
        <TableCaption>Expense by Category with Budget </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Category</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className="text-right">Budget</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">groceries</TableCell>
            <TableCell>200$</TableCell>
            <TableCell className="text-right">600$</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">groceries</TableCell>
            <TableCell>200$</TableCell>
            <TableCell className="text-right">600$</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">groceries</TableCell>
            <TableCell>200$</TableCell>
            <TableCell className="text-right">600$</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">groceries</TableCell>
            <TableCell>200$</TableCell>
            <TableCell className="text-right">600$</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">groceries</TableCell>
            <TableCell>200$</TableCell>
            <TableCell className="text-right">600$</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">groceries</TableCell>
            <TableCell>200$</TableCell>
            <TableCell className="text-right">600$</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">groceries</TableCell>
            <TableCell>200$</TableCell>
            <TableCell className="text-right">600$</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">groceries</TableCell>
            <TableCell>200$</TableCell>
            <TableCell className="text-right">600$</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">groceries</TableCell>
            <TableCell>200$</TableCell>
            <TableCell className="text-right">600$</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">groceries</TableCell>
            <TableCell>200$</TableCell>
            <TableCell className="text-right">600$</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">groceries</TableCell>
            <TableCell>200$</TableCell>
            <TableCell className="text-right">600$</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default BasicBudgeting;
