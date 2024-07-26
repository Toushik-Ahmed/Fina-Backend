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
    <div>
      <Table>
        <TableCaption>All Your Budget Information.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[15vw]">Category</TableHead>
            <TableHead className="w-[15vw]">Budget</TableHead>
            <TableHead className="w-[15vw]">Edit</TableHead>
            <TableHead className="w-[15vw]">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {budgetInfo?.map((budget) => (
            <TableRow key={budget.id}>
              <TableCell className="font-medium">{budget.category}</TableCell>
              <TableCell>{budget.budget}</TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  className="bg-gray-500"
                  onClick={() => handleEdit(budget)}
                >
                  Edit
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  className="bg-red-600"
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
