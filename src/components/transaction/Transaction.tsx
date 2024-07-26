"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import { addtransaction, getAlltransactions } from '@/services/apiServices';
import { useEffect, useState } from "react";
import { IoIosRefresh } from "react-icons/io";
import { IoAdd } from "react-icons/io5";

import { addTransaction, getAllTransaction } from "@/services/apiServices";
import { io } from "socket.io-client";
import LoadingSpinner from "../common/LoadingSpinner";
import { Button } from "../ui/button";
import TransactionInfo from "./TransactionInfo";
import {
  TransactionCard,
  TransactionCardWithForm,
} from "./transactionCard/TransactionCard";

type Props = {};

const Transaction = (props: Props) => {
   const [transactions, setTransactions] = useState<TransactionCard[]>([]);
  // const { transactions, setTransactions } = useBudget();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const getallTransactionsFn = async () => {
    setLoading(true);
    try {
      const allUsers = await getAllTransaction();
      setTransactions(allUsers);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching events:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getallTransactionsFn();
  }, []);

  useEffect(() => {
    const socket = io(
      process.env.NEXT_PUBLIC_BASE_URI || "http://localhost:5000",
    );

    socket.on("connected", (data) => {
      console.log(data);
    });

    socket.on("new-transaction", () => {
      getallTransactionsFn();
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleCloseForm = async (value: TransactionCard) => {
    try {
      const addedTransaction = await addTransaction(value); // Call addTransaction function with TransactionCard
      console.log("Transaction added:", addedTransaction);
      setTransactions((prevTransactions) => [
        ...prevTransactions,
        addedTransaction,
      ]);
      setDialogOpen(false);
    } catch (error) {
      console.error("Error adding Transaction:", error);
    }
  };

  const handleRefresh = async () => {
    getallTransactionsFn();
  };

  return (
    <div>
      <Dialog
        open={dialogOpen}
        onOpenChange={(ev) => {
          setDialogOpen(ev);
          console.log(ev);
        }}
      >
        <div className="flex justify-end gap-2">
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="flex gap-2 bg-green-500 text-white hover:bg-green-600 hover:text-white"
            >
              <IoAdd className="h-4 w-4" /> Add transaction
            </Button>
          </DialogTrigger>

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
          <TransactionInfo transactionInfo={transactions} />
        )}
        <div className="mt-5 flex flex-col items-center">
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-2">Add transaction</DialogTitle>
              <DialogDescription asChild>
                <TransactionCardWithForm onSubmit={handleCloseForm} />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
};

export default Transaction;
