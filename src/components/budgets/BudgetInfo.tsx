import { Button } from "@/components/ui/button";
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
  onEdit: (budget: BudgetCard) => void;
  onDelete: (id: number) => void;
  // onRefresh: () => void;
};

const BudgetInfo = ({ budgetInfo, onEdit, onDelete }: Props) => {
  const handleEdit = (budget: BudgetCard) => {
    onEdit(budget);
  };

  const handleDelete = (id: number) => {
    onDelete(id);
    console.log(id);
  };

  return (
    <div className="m-4 rounded-lg bg-gray-900  text-white">
      <Table>
        <TableCaption>All Your Budget Information.</TableCaption>
        <TableHeader>
          <TableRow className="border-b border-gray-700">
            <TableHead className="w-[25%] text-left text-gray-300">
              Category
            </TableHead>
            <TableHead className="w-[25%] text-right text-gray-300">
              Budget
            </TableHead>
            <TableHead className="w-[25%] text-right text-gray-300 pr-8">
              Edit
            </TableHead>
            <TableHead className="w-[25%] text-right text-gray-300 pr-8">
              Delete
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {budgetInfo?.map((budget) => (
            <TableRow key={budget.id} className="border-b border-gray-700">
              <TableCell className="font-medium">{budget.category}</TableCell>
              <TableCell className='text-right'>${budget.budget}</TableCell>
              <TableCell className='text-right'>
                <Button
                  variant="outline"
                  className="bg-gray-500"
                  onClick={() => handleEdit(budget)}
                >
                  Edit
                </Button>
              </TableCell>
              <TableCell className="text-right">
                <Button
                  variant="outline"
                  className="bg-red-400"
                  onClick={() => handleDelete(budget.id!)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BudgetInfo;
