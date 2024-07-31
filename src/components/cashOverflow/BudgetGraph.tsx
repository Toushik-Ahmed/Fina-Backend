import {
  getAllBudget,
  getTransactionForDateRange,
} from "@/services/apiServices";
import { groupBy } from "lodash";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { BudgetCard } from "../budgets/BudgetCard";
import { TransactionCard } from "../transaction/transactionCard/TransactionCard";

interface RemainingBudgetPercentage {
  name: string;
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

function BudgetGraph() {
  const [budget, setBudget] = useState<BudgetCard[]>([]);
  const [transaction, setTransaction] = useState<TransactionCard[]>([]);
  const [remainingBudgetPercentage, setRemainingBudgetPercentage] = useState<
    RemainingBudgetPercentage[]
  >([]);

  const fetchAllData = async () => {
    const today = DateTime.now().endOf("month");
    const firstDayOfMonth = today.startOf("month");
    try {
      const allBudget = await getAllBudget();
      const currentMonthsTransaaction = await getTransactionForDateRange(
        firstDayOfMonth.toJSDate(),
        today.toJSDate(),
      );
      setBudget(allBudget);
      setTransaction(currentMonthsTransaaction);
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
    const totalBudget = budgets.reduce((acc, curr) => acc + curr.budget, 0);
    return budgets.map((budget) => {
      const spentAmount = transactionAmounts[budget.category] || 0;
      const remainingPercentage = (spentAmount / totalBudget) * 100;
      return {
        name: budget.category,
        remainingPercentage: Math.trunc(Math.max(remainingPercentage, 0)), // Ensure no negative values
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
      const groupByPecentage = groupBy(
        remainingPercentages,
        "remainingPercentage",
      );
      const uniqueValues: RemainingBudgetPercentage[] = Object.entries(
        groupByPecentage,
      ).map(([val, items]) => {
        return {
          name: items.map((el) => el.name).join(" & "),
          remainingPercentage: items.reduce(
            (acc, curr) => acc + curr.remainingPercentage,
            0,
          ),
        };
      });
      const spentPercentage = uniqueValues.reduce(
        (acc, curr) => acc + curr.remainingPercentage,
        0,
      );
      if (100 - spentPercentage > 0) {
        uniqueValues.push({
          name: "Unspent Amount",
          remainingPercentage: 100 - spentPercentage,
        });
      }
      setRemainingBudgetPercentage(uniqueValues);
    }
  }, [budget, transaction]);

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: CustomizedLabelProps) => {
    const radius =
      outerRadius +
      ((midAngle > 60 && midAngle < 120) || (midAngle > 240 && midAngle < 300)
        ? 20
        : 80);

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
        {`${remainingBudgetPercentage[index].name}: ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

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
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="font-bold">
        Overview of total remaining budget & spent categories
      </div>
    </div>
  );
}

export default BudgetGraph;
