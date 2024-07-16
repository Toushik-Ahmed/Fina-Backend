'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
// import { addtransaction, getAlltransactions } from '@/services/apiServices';
import { useEffect, useState } from 'react';
import { IoIosRefresh } from 'react-icons/io';
import { IoAdd } from 'react-icons/io5';

import { addTransaction, getAllTransaction } from '@/services/apiServices';
import { Button } from '../ui/button';
import TransactionInfo from './TransactionInfo';
import { TransactionCard, TransactionCardWithForm } from './transactionCard/TransactionCard';

type Props = {};

const Transaction = (props: Props) => {
  const [transactionInfo, setTransactionInfo] = useState<TransactionCard[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  useEffect(() => {
    const getallTransactions = async () => {
      try {
        const allUsers = await getAllTransaction();
        setTransactionInfo(allUsers);
        console.log(transactionInfo);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    getallTransactions();
  }, []);
  const handleCloseForm = async (value: TransactionCard) => {
    try {
      const addedTransaction = await addTransaction(value); // Call addTransaction function with TransactionCard
      console.log('Transaction added:', addedTransaction);
      setTransactionInfo((prevTransactions) => [
        ...prevTransactions,
        addedTransaction,
      ]);
      setDialogOpen(false);
    } catch (error) {
      console.error('Error adding Transaction:', error);
    }
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
              className="flex text-white hover:text-white gap-2 bg-green-500 hover:bg-green-600"
            >
              <IoAdd className="h-4 w-4" /> Add transaction
            </Button>
          </DialogTrigger>

          <Button
            variant="outline"
            size="icon"
            className="text-green-500 border-green-500 hover:text-green-500"
          >
            <IoIosRefresh className="h-4 w-4" />
          </Button>
        </div>
        <TransactionInfo transactionInfo={transactionInfo} />
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
