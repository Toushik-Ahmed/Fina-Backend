import { getAllBudget, getTransactionByDate } from "@/services/apiServices";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { BudgetCard } from "../budgets/BudgetCard";
import { TransactionCard } from "../transaction/transactionCard/TransactionCard";

interface BarChartDataForDateTransaction {
  categoryName: string;
  Amount: number;
  Budget: number;
}

function DailyTransaction() {
  const [barChartData, setBarChartData] = useState<
    BarChartDataForDateTransaction[]
  >([]);

  const getTodaysData = async () => {
    const todaysDataPromise = [
      getTransactionByDate(new Date()),
      getAllBudget(),
    ];
    try {
      const [transactions, budgets] = await Promise.all(todaysDataPromise);
      setBarChartData(
        transformTransactionsToBarChartData(transactions, budgets),
      );
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  const transformTransactionsToBarChartData: (
    transactionData: TransactionCard[],
    budgetData: BudgetCard[],
  ) => BarChartDataForDateTransaction[] = (transactionData, budgetData) => {
    const dataObj = transactionData.reduce<{
      [key: string]: number;
    }>((acc, curr) => {
      return {
        ...acc,
        [curr.category]: (acc[curr.category] || 0) + curr.amount,
      };
    }, {});
    return Object.entries(dataObj).map(([categoryName, Amount]) => {
      return {
        Amount,
        Budget:
          budgetData.find((el) => el.category === categoryName)?.budget || 0,
        categoryName,
      };
    });
  };

  useEffect(() => {
    getTodaysData();
  }, []);
  return (
    <div className="h-[40vh] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={barChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="categoryName" />
          <YAxis />
          <Tooltip
            formatter={(value) => {
              return `$${value}`;
            }}
          />
          <Legend />
          <Bar dataKey="Amount" fill="#8884d8" />
          {/* <Bar dataKey="Budget" fill="#82ca9d" /> */}
        </BarChart>
      </ResponsiveContainer>
      <div className="font-bold">Daily exnpenses By category</div>
    </div>
  );
}

export default DailyTransaction;
