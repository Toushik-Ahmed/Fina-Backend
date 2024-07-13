"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { Button } from "../ui/button";
import { DummyBudget, dummyCategories } from "./dummyBudget";
import { BudgetCardData, UpdateBudgetCard } from "./UpdateBudgetCard";

export interface BudgetData {
  id?: number;
  category: string;
  amount: number;
  budget: number;
}

type Props = {};

const BasicBudgeting = (props: Props) => {
  const [budgetData, setBudgetData] = useState(DummyBudget);
  const [categories, setCategories] = useState(dummyCategories);

  const chooseProgressColor = (val: number) => {
    if (val > 90) return "bg-red-600";
    if (val > 60) return "bg-yellow-300";
    return "bg-green-500";
  };

  const updateBudgetRow = (data: BudgetCardData, id: number) => {
    // Backend call
    console.log(data);
  };

  return (
    <div className="p-10">
      <div className="text-slate-800 mb-8 font-bold">
        Plan Your Basic Budget Here
      </div>
      <Table className="w-[50vw] mx-auto">
        <TableCaption>Expense by Category with Budget </TableCaption>
        <TableHeader>
          <TableRow className="">
            <TableHead className="w-[25vw]">Category</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className="w-[25vw]"></TableHead>
            <TableHead>Budget</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {budgetData.map((val, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-medium">{val.category}</TableCell>
              <TableCell>{val.amount}$</TableCell>
              <TableCell>
                <Progress
                  value={((val.amount * -1) / val.budget) * 100}
                  indicatorColor={chooseProgressColor(
                    ((val.amount * -1) / val.budget) * 100
                  )}
                />
              </TableCell>
              <TableCell className="text-right">{val.budget}$</TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button type="button" variant={"outline"} size={"icon"}>
                      <CiEdit className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit Budget</DialogTitle>
                      <DialogDescription asChild>
                        <UpdateBudgetCard
                          allCategories={dummyCategories}
                          onSubmit={(data) => updateBudgetRow(data, idx)}
                          previousData={val}
                        />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BasicBudgeting;
