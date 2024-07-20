"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { addBudget, getAllBudget } from "@/services/apiServices";
import { useEffect, useState } from "react";
import { IoIosRefresh } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import LoadingSpinner from "../common/LoadingSpinner";
import { Button } from "../ui/button";

import { BudgetCard, BudgetCardWithForm } from "./BudgetCard";
import BudgetInfo from "./BudgetInfo";

type Props = {};

const Budget = (props: Props) => {
  const [budgetInfo, setBudgetInfo] = useState<BudgetCard[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const getallBudgetsFn = async () => {
    setLoading(true);
    try {
      const allBudegts = await getAllBudget();
      setBudgetInfo(allBudegts);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching events:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getallBudgetsFn();
  }, []);
  const handleCloseForm = async (value: BudgetCard) => {
    console.log("budgets value:" + value.budget + value.category);
    try {
      const addedBudget = await addBudget(value);
      console.log(addedBudget);
      setBudgetInfo((prevBudgets) => [...prevBudgets, addedBudget]);
      console.log(budgetInfo);
      setDialogOpen(false);
    } catch (error) {
      console.error("Error adding Budgets:", error);
    }
  };

  const handleRefresh = async () => {
    getallBudgetsFn();
  };

  return (
    <div>
      <Dialog
        open={dialogOpen}
        onOpenChange={(ev) => {
          setDialogOpen(ev);
          console.log(ev);
        }}
      >
        <div className="flex justify-end gap-2">
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="flex gap-2 bg-green-500 text-white hover:bg-green-600 hover:text-white"
            >
              <IoAdd className="h-4 w-4" /> Add Budget
            </Button>
          </DialogTrigger>

          <Button
            variant="outline"
            size="icon"
            className="border-green-500 text-green-500 hover:text-green-500"
            onClick={handleRefresh}
          >
            <IoIosRefresh className="h-4 w-4" />
          </Button>
        </div>
        {loading ? <LoadingSpinner /> : <BudgetInfo budgetInfo={budgetInfo} />}
        <div className="mt-5 flex flex-col items-center">
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-2">Add Budget</DialogTitle>
              <DialogDescription asChild>
                <BudgetCardWithForm onSubmit={handleCloseForm} />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
};

export default Budget;
