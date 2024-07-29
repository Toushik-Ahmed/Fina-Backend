import { getAllBudget, getAllTransaction } from "@/services/apiServices";
import { useEffect, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { BudgetCard } from "../budgets/BudgetCard";
import { TransactionCard } from "../transaction/transactionCard/TransactionCard";

interface RemainingBudgetPercentage {
  categoryName: string;
  remainingPercentage: number;
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

interface CustomizedLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: CustomizedLabelProps) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      style={{ fontSize: "12px", fontWeight: "bold" }}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function BudgetGraph() {
  const [budget, setBudget] = useState<BudgetCard[]>([]);
  const [transaction, setTransaction] = useState<TransactionCard[]>([]);
  const [remainingBudgetPercentage, setRemainingBudgetPercentage] = useState<
    RemainingBudgetPercentage[]
  >([]);

  const fetchAllData = async () => {
    try {
      const allBudget = await getAllBudget();
      const allTransaction = await getAllTransaction();
      setBudget(allBudget);
      setTransaction(allTransaction);
    } catch (error) {
      console.log(error);
    }
  };

  const calculateRemainingBudgetPercentage = (
    budgets: BudgetCard[],
    transactions: TransactionCard[],
  ): RemainingBudgetPercentage[] => {
    const transactionAmounts = transactions.reduce<{ [key: string]: number }>(
      (acc, curr) => {
        return {
          ...acc,
          [curr.category]: (acc[curr.category] || 0) + curr.amount,
        };
      },
      {},
    );

    return budgets.map((budget) => {
      const spentAmount = transactionAmounts[budget.category] || 0;
      const remainingPercentage =
        ((budget.budget - spentAmount) / budget.budget) * 100;
      return {
        categoryName: budget.category,
        remainingPercentage: Math.max(remainingPercentage, 0), // Ensure no negative values
      };
    });
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  useEffect(() => {
    if (budget.length > 0 && transaction.length > 0) {
      const remainingPercentages = calculateRemainingBudgetPercentage(
        budget,
        transaction,
      );
      setRemainingBudgetPercentage(remainingPercentages);
    }
  }, [budget, transaction]);

  return (
    <div className="h-[40vh] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={remainingBudgetPercentage}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="remainingPercentage"
          >
            {remainingBudgetPercentage.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BudgetGraph;
