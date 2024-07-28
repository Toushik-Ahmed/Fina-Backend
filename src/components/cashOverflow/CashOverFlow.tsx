"use client";

import DailyTransaction from "./DailyTransaction";
import MonthlyBudgetVsEx from "./MonthlyBudgetVsEx";
import MonthlyTransactionTrend from "./MonthlyTransaction";
import WeeklyTransactionTrend from "./WeeklyTransactionTrend";

type Props = {};

const CashOverFlow = (props: Props) => {
  return (
    <div className="w-[40vw] flex flex-col gap-10">
      <DailyTransaction />
      <WeeklyTransactionTrend />
      <MonthlyTransactionTrend />
      <MonthlyBudgetVsEx />
    </div>
  );
};

export default CashOverFlow;
