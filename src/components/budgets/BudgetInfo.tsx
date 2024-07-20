import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BudgetCard } from "./BudgetCard";

type Props = {
  budgetInfo: BudgetCard[];
};

const BudgetInfo = ({ budgetInfo }: Props) => {
  return (
    <div>
      <Table>
        <TableCaption>All Your budget Information.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[15vw]">Category</TableHead>
            <TableHead className="w-[15vw]">Budget</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {budgetInfo?.map((budget, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{budget.category}</TableCell>
              <TableCell>{budget.budget}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BudgetInfo;
