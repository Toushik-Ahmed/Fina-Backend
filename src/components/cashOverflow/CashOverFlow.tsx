"use client";

import BudgetGraph from "./BudgetGraph";
import DailyTransaction from "./DailyTransaction";
import MonthlyBudgetVsEx from "./MonthlyBudgetVsEx";
import MonthlyTransactionTrend from "./MonthlyTransaction";
import WeeklyTransactionTrend from "./WeeklyTransactionTrend";

type Props = {};

const CashOverFlow = (props: Props) => {
  return (
    <div className="flex w-[40vw] flex-col gap-10">
      <DailyTransaction />
      <WeeklyTransactionTrend />
      <MonthlyTransactionTrend />
      <MonthlyBudgetVsEx />
      <BudgetGraph />
    </div>
  );
};

export default CashOverFlow;
