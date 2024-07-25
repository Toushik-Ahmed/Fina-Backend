"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  addBudget,
  deleteBudget,
  getAllBudget,
  updateBudget,
} from "@/services/apiServices";
import { useEffect, useState } from "react";
import { IoIosRefresh } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import LoadingSpinner from "../common/LoadingSpinner";
import { Button } from "../ui/button";
import { BudgetCard } from "./BudgetCard";
import BudgetInfo from "./BudgetInfo";

const Budget = () => {
  const [budgetInfo, setBudgetInfo] = useState<BudgetCard[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editData, setEditData] = useState<BudgetCard | null>(null);

  const getallBudgetsFn = async () => {
    setLoading(true);
    try {
      const allBudgets = await getAllBudget();
      setBudgetInfo(allBudgets);
    } catch (error) {
      console.error("Error fetching budgets:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getallBudgetsFn();
  }, []);

  const handleCloseForm = async (value: BudgetCard) => {
    try {
      if (editData) {
        await updateBudget(value.id!, value);
      } else {
        await addBudget(value);
      }
      setBudgetInfo((prevBudgets) =>
        editData
          ? prevBudgets.map((b) => (b.id === value.id ? value : b))
          : [...prevBudgets, value],
      );
      setDialogOpen(false);
      setEditData(null);
    } catch (error) {
      console.error("Error saving budget:", error);
    }
  };

  const handleRefresh = () => {
    getallBudgetsFn();
  };

  const handleEdit = (budget: BudgetCard) => {
    setEditData(budget);
    setDialogOpen(true);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteBudget(id);
      setBudgetInfo((prevBudgets) => prevBudgets.filter((b) => b.id !== id));
    } catch (error) {
      console.error("Error deleting budget:", error);
    }
  };

  return (
    <div>
      <Dialog open={dialogOpen} onOpenChange={(ev) => setDialogOpen(ev)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-2">
              {editData ? "Edit Budget" : "Add Budget"}
            </DialogTitle>
            <DialogDescription>
              <BudgetCard
                onSubmit={handleCloseForm}
                initialData={editData || { category: "", budget: 0 }} // Pass edit data or default
              />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div className="mb-4 flex justify-end gap-2">
        <Button
          variant="outline"
          className="flex gap-2 bg-green-500 text-white hover:bg-green-600 hover:text-white"
          onClick={() => setDialogOpen(true)}
        >
          <IoAdd className="h-4 w-4" /> Add Budget
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="border-green-500 text-green-500 hover:text-green-500"
          onClick={handleRefresh}
        >
          <IoIosRefresh className="h-4 w-4" />
        </Button>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <BudgetInfo
          budgetInfo={budgetInfo}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onRefresh={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      )}
    </div>
  );
};

export default Budget;