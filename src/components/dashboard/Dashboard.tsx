"use client";

import {
  getAllAccounts,
  getAllBudget,
  getAllTransaction,
} from "@/services/apiServices";
import { getCurrentUserData, User } from "@/services/authServices";
import { useEffect, useState } from "react";
import {
  FaBalanceScale,
  FaChartLine,
  FaExclamationTriangle,
  FaWallet,
} from "react-icons/fa";
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

  type CategoryTotals = {
    [key: string]: number;
  };

  const categoryTotals: CategoryTotals = transactions.reduce(
    (acc: CategoryTotals, tx: TransactionCard) => {
      acc[tx.category] = (acc[tx.category] || 0) + tx.amount;
      return acc;
    },
    {},
  );

  const topThreeMostExpensiveCategories = Object.entries(categoryTotals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  const mostExpensiveCategory = Object.keys(categoryTotals).reduce(
    (a, b) => (categoryTotals[a] > categoryTotals[b] ? a : b),
    "",
  );

  const remainingBalance = totalCash - totalExpense;
  const mostExpensiveAmount = categoryTotals[mostExpensiveCategory] || 0;

  const overflowedCategories = budgets
    .filter((budget) => categoryTotals[budget.category] > budget.budget)
    .map((budget) => ({
      category: budget.category,
      amount: categoryTotals[budget.category],
      budget: budget.budget,
    }));

  return (
    <div className="min-h-100% p-8">
      <div className="mx-auto max-w-[70vw]">
        <h2 className="mb-2 text-3xl font-bold text-white">
          Welcome back, <span className="text-green-500">{user?.username}</span>
          !
        </h2>
        <p className="mb-8 text-white">
          Here's your financial snapshot. Stay on top of your finances with this
          overview.
        </p>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-5">
          <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center gap-6">
              <h3 className="text-lg font-semibold text-gray-700">
                Total Added Cash
              </h3>
              <FaWallet className="text-green-500" />
            </div>
            <p className="text-3xl font-bold text-green-500">
              ${totalCash.toLocaleString()}
            </p>
          </div>

          <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center justify-between gap-6">
              <h3 className="text-lg font-semibold text-red-500">
                Total Expense
              </h3>
              <FaChartLine className="text-red-500" />
            </div>
            <p className="text-3xl font-bold text-red-500">
              ${totalExpense.toLocaleString()}
            </p>
          </div>

          <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center justify-between gap-6">
              <h3 className="text-lg font-semibold text-gray-700">
                Most Expensive Category
              </h3>
              <FaExclamationTriangle className="text-yellow-500" />
            </div>
            <p className="text-3xl font-bold text-gray-800">
              {mostExpensiveCategory || "None"}
            </p>
            <p className="mt-1 text-sm text-green-500">
              ${mostExpensiveAmount.toLocaleString()}
            </p>
          </div>

          <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center justify-between gap-6">
              <h3 className="text-lg font-semibold text-gray-700">
                Remaining Balance
              </h3>
              <FaBalanceScale className="text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-gray-800">
              ${remainingBalance.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              Overflowed Categories
            </h3>
            {overflowedCategories.length > 0 ? (
              overflowedCategories.map((category, index) => (
                <div key={index} className="mb-4">
                  <p className="text-lg font-semibold text-red-500">
                    {category.category}
                  </p>
                  <p className="text-sm text-gray-600">
                    Amount: ${category.amount.toLocaleString()} / Budget: $
                    {category.budget.toLocaleString()}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-lg text-green-500">
                No overflowed categories. Great job!
              </p>
            )}
          </div>

          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              Top 3 Most Expensive Categories
            </h3>
            {topThreeMostExpensiveCategories.length > 0 ? (
              topThreeMostExpensiveCategories.map((category, index) => (
                <div key={index} className="mb-4">
                  <p className="text-lg font-semibold text-gray-800">
                    {category[0]}
                  </p>
                  <p className="text-sm text-gray-600">
                    Expense: ${category[1].toLocaleString()}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-lg text-green-500">No expenses.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
