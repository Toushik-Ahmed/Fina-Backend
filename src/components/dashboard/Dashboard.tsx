"use client";

import {
  getAllAccounts,
  getAllBudget,
  getAllTransaction,
} from "@/services/apiServices";
import { getCurrentUserData, User } from "@/services/authServices";
import { useEffect, useState } from "react";
import { CardInfo } from "../addCard/CardWithForm";
import { BudgetCard } from "../budgets/BudgetCard";
import { TransactionCard } from "../transaction/transactionCard/TransactionCard";

function Dashboard() {
  const [accounts, setAccounts] = useState<CardInfo[]>([]);
  const [transactions, setTransactions] = useState<TransactionCard[]>([]);
  const [budgets, setBudgets] = useState<BudgetCard[]>([]);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const getCurrentUserDataFn = async () => {
      try {
        const currUser = await getCurrentUserData();
        setUser(currUser);
      } catch (error) {
        console.log(error);
      }
    };
    getCurrentUserDataFn();
  }, []);

  const getallAccountsFn = async () => {
    try {
      const allAccounts = await getAllAccounts();
      const allTransactions = await getAllTransaction();
      const allBudgets = await getAllBudget();
      setAccounts(allAccounts);
      setTransactions(allTransactions);
      setBudgets(allBudgets);
    } catch (error) {
      console.error("Error fetching accounts:", error);
    }
  };

  useEffect(() => {
    getallAccountsFn();
  }, []);

  const totalCash = accounts.reduce((acc, el) => acc + el.totalmoney, 0);
  const totalExpense = transactions.reduce((acc, tx) => acc + tx.amount, 0);

  // Define the type for category totals
  type CategoryTotals = {
    [key: string]: number;
  };

  // Aggregate amounts by category
  const categoryTotals: CategoryTotals = transactions.reduce(
    (acc: CategoryTotals, tx: TransactionCard) => {
      acc[tx.category] = (acc[tx.category] || 0) + tx.amount;
      return acc;
    },
    {},
  );

  // Find the category with the highest total
  const mostExpensiveCategory = Object.keys(categoryTotals).reduce(
    (a, b) => (categoryTotals[a] > categoryTotals[b] ? a : b),
    "",
  );

  const remainingBalance = totalCash - totalExpense;
  const mostExpensiveAmount = categoryTotals[mostExpensiveCategory] || 0;

  // Find categories with overflowed budgets
  const overflowedCategories = budgets
    .filter((budget) => categoryTotals[budget.category] > budget.budget)
    .map((budget) => ({
      category: budget.category,
      amount: categoryTotals[budget.category],
      budget: budget.budget,
    }));

  return (
    <div>
      <div className="">
        <h2 className="text-2xl font-bold text-green-600">
          Hi! {user?.username} welcome.
        </h2>
        <div className="font-semibold">
          Here you will have a simple overview of all information.
        </div>
      </div>

      <div className="m-20 grid w-fit grid-cols-2 gap-10">
        <div className="flex w-72 flex-col justify-center rounded-lg bg-gray-800 p-6 text-center text-white shadow-lg">
          <div className="mb-4">
            <h3 className="text-xl">Total Added Cash</h3>
          </div>
          <div className="mb-4">
            <h1 className="text-4xl text-green-500">${totalCash}</h1>
          </div>
        </div>
        <div className="flex w-72 flex-col justify-center rounded-lg bg-gray-800 p-6 text-center text-white shadow-lg">
          <div className="mb-4">
            <h3 className="text-xl">Total Expense</h3>
          </div>
          <div className="mb-4">
            <h1 className="text-4xl text-green-500">${totalExpense}</h1>
          </div>
        </div>
        <div className="flex w-72 flex-col justify-center rounded-lg bg-gray-800 p-6 text-center text-white shadow-lg">
          <div className="mb-4">
            <h3 className="text-xl">Most Expensive Category</h3>
          </div>
          <div className="mb-4">
            <p className="text-2xl text-red-400">
              {mostExpensiveCategory || "None"}
            </p>
            <h1 className="text-4xl text-green-500">${mostExpensiveAmount}</h1>
          </div>
        </div>
        <div className="flex w-72 flex-col justify-center rounded-lg bg-gray-800 p-6 text-center text-white shadow-lg">
          <div className="mb-4">
            <h3 className="text-xl">Remaining Balance</h3>
          </div>
          <div className="mb-4">
            <h1 className="text-4xl text-green-500">${remainingBalance}</h1>
          </div>
        </div>
        <div className="col-span-2 flex flex-col justify-center rounded-lg bg-gray-800 p-6 text-center text-white shadow-lg">
          <div className="mb-4">
            <h3 className="text-xl">Overflowed Categories</h3>
          </div>
          {overflowedCategories.length > 0 ? (
            <div>
              {overflowedCategories.map((category, index) => (
                <div key={index} className="mb-2">
                  <p className="text-xl text-red-400">{category.category}</p>
                  <p className="text-sm">
                    Amount: ${category.amount} / Budget: ${category.budget}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-2xl text-green-500">None</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
