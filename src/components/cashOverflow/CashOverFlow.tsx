"use client";

import DailyTransaction from "./DailyTransaction";
import WeeklyTransactionTrend from "./WeeklyTransactionTrend";

type Props = {};

const CashOverFlow = (props: Props) => {
  return (
    <div>
      <DailyTransaction />
      <WeeklyTransactionTrend />
    </div>
  );
};

export default CashOverFlow;
