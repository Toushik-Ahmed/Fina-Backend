// "use client";

// import { MerchantCard } from "@/components/marchent/MarchentCard";
// import { createContext, ReactNode, useContext, useState } from "react";

// interface BudgetData {
//   id?: number;
//   category: string;
//   amount?: number;
//   budget: number;
// }

// interface TransactionData {
//   id?: number;
//   category: string;
//   amount: number;
//   merchantId?: number;
// }

// interface BudgetContextType {
//   budgets: BudgetData[];
//   setBudgets: React.Dispatch<React.SetStateAction<BudgetData[]>>;
//   transactions: TransactionData[];
//   setTransactions: React.Dispatch<React.SetStateAction<TransactionData[]>>;
//   merchantInfo: MerchantCard[];
//   setMerchantInfo: React.Dispatch<React.SetStateAction<MerchantCard[]>>;
// }

// const BudgetContext = createContext<BudgetContextType | undefined>(undefined);

// export const BudgetProvider = ({ children }: { children: ReactNode }) => {
//   const [budgets, setBudgets] = useState<BudgetData[]>([]);
//   const [transactions, setTransactions] = useState<TransactionData[]>([]);
//   const [merchantInfo, setMerchantInfo] = useState<MerchantCard[]>([]);

//   return (
//     <BudgetContext.Provider
//       value={{
//         budgets,
//         setBudgets,
//         transactions,
//         setTransactions,
//         merchantInfo,
//         setMerchantInfo,
//       }}
//     >
//       {children}
//     </BudgetContext.Provider>
//   );
// };

// export const useBudget = (): BudgetContextType => {
//   const context = useContext(BudgetContext);
//   if (!context) {
//     throw new Error("useBudget must be used within a BudgetProvider");
//   }
//   return context;
// };
