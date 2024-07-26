"use client";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useBudget } from "@/context/BudgetContextType";

type Props = {};

const BasicBudgeting = (props: Props) => {
  const { budgets, transactions } = useBudget();

  const chooseProgressColor = (val: number) => {
    if (val > 90) return "bg-red-600";
    if (val > 60) return "bg-yellow-300";
    return "bg-green-500";
  };

  const calculateTotalAmount = () => {
    return transactions.reduce((total, tx) => total + (tx.amount ?? 0), 0);
  };

  return (
    <div className="p-10">
      <div className="mb-8 font-bold text-slate-800">
        Budget vs Expense Chart
      </div>
      <Table className="mx-auto w-[50vw]">
        <TableCaption>Expense by Category with Budget</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[25vw]">Category</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className="w-[25vw]"></TableHead>
            <TableHead>Budget</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {budgets.map((val, idx) => {
            const amount = val.amount ?? 0; // Default to 0 if undefined
            const budget = val.budget ?? 0; // Default to 0 if undefined
            const progressValue =
              budget > 0 ? ((amount * -1) / budget) * 100 : 0; // Avoid division by zero

            return (
              <TableRow key={idx}>
                <TableCell className="font-medium">{val.category}</TableCell>
                <TableCell>{amount}$</TableCell>
                <TableCell>
                  <Progress
                    value={progressValue}
                    indicatorColor={chooseProgressColor(progressValue)}
                  />
                </TableCell>
                <TableCell className="text-right">{budget}$</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default BasicBudgeting;
