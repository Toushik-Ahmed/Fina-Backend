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
import {
  getAllBudget,
  getTransactionForDateRange,
} from "@/services/apiServices";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { BudgetCard } from "../budgets/BudgetCard";
import LoadingSpinner from "../common/LoadingSpinner";
import { TransactionCard } from "../transaction/transactionCard/TransactionCard";

type Props = {};

const BasicBudgeting = (props: Props) => {
  const [transactions, setTransactions] = useState<TransactionCard[]>([]);
  const [budgets, setBudgets] = useState<BudgetCard[]>([]);
  const [loading, setLoading] = useState(false);

  const getThisMonthsTransaction = async () => {
    const today = DateTime.now().endOf("month");
    const firstDayOfMonth = today.startOf("month");
    try {
      const currentData = await getTransactionForDateRange(
        firstDayOfMonth.toJSDate(),
        today.toJSDate(),
      );
      setTransactions(currentData);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  const getallBudgetsFn = async () => {
    setLoading(true);
    try {
      const allBudgets = await getAllBudget();
      setBudgets(allBudgets);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching budgets:", error);
    }
  };
  useEffect(() => {
    getallBudgetsFn();
    getThisMonthsTransaction();
  }, []);

  const chooseProgressColor = (val: number) => {
    if (val > 90) return "bg-red-600";
    if (val > 60) return "bg-yellow-300";
    return "bg-green-500";
  };

  // Group transactions by category
  const calculateTotalAmount = (category: string) => {
    return transactions
      .filter((tx: TransactionCard) => tx.category === category)
      .reduce((total, tx) => total + (tx.amount ?? 0), 0);
  };

  return (
    <div className="p-10">
      <div className="mb-8 text-xl font-semibold text-white">
        Expense vs Budget
        <div className="font-medium text-green-300">
          Here you can keep track of your expenses and budgets of all categories{" "}
        </div>
      </div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Table className="mx-auto w-[50vw]">
          <TableCaption className="font-medium text-white">
            Expense by Category with Budget
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[25vw] font-bold text-white">
                Category
              </TableHead>
              <TableHead className="font-bold text-white">Amount</TableHead>
              <TableHead className="w-[25vw]"></TableHead>
              <TableHead className="font-bold text-white">Budget</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {budgets.map((val, idx) => {
              const amount = calculateTotalAmount(val.category); // Calculate amount based on category
              const budget = val.budget ?? 0; // Default to 0 if undefined
              const progressValue =
                budget > 0 ? Math.min((amount / budget) * 100, 100) : 0; // Ensure progressValue is between 0 and 100

              return (
                <TableRow key={idx}>
                  <TableCell className="font-medium">{val.category}</TableCell>
                  <TableCell>${amount}</TableCell>
                  <TableCell>
                    <Progress
                      value={progressValue}
                      indicatorColor={chooseProgressColor(progressValue)}
                    />
                  </TableCell>
                  <TableCell className="text-right">${budget}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default BasicBudgeting;
