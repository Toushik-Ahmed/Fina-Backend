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
    <div className='p-10' >
       <div className="text-slate-800 mb-8 font-bold">
        Plan Your Basic Budget Here
      </div>
      <Table className="w-[50vw] h-fit-content ">
        <TableCaption>Expense by Category with Budget </TableCaption>
        <TableHeader>
          <TableRow className="">
            <TableHead className="w-[25vw]">Category</TableHead>
            <TableHead className="w-[25vw]">Amount</TableHead>
            <TableHead>Budget</TableHead>
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
