"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { addAccount, getAllAccounts } from "@/services/apiServices";
import { useEffect, useState } from "react";
import { IoIosRefresh } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import { CardInfo, CardWithForm } from "../addCard/CardWithForm";
import { Button } from "../ui/button";
import AccountInfo from "./AccountInfo";

type Props = {};

function Accounts({}: Props) {
  const [accountInfo, setaccountInfo] = useState<CardInfo[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    getallaccountsFn();
  }, []);

  const getallaccountsFn = async () => {
    try {
      const allUsers = await getAllAccounts();
      setaccountInfo(allUsers);
      console.log(accountInfo);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleCloseForm = async (value: CardInfo) => {
    try {
      const addedAccount = await addAccount(value); // Call addAccount function with CardInfo
      console.log("Account added:", addedAccount);
      setaccountInfo((prevAccounts) => [...prevAccounts, addedAccount]);
      setDialogOpen(false);
    } catch (error) {
      console.error("Error adding account:", error);
    }
  };

  const handleRefresh = async () => {
    // setaccountInfo([]);
    // setTimeout(() => getallaccountsFn(), 200);
    getallaccountsFn();
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
              <IoAdd className="h-4 w-4" /> Add Account
            </Button>
          </DialogTrigger>

          <Button
            variant="outline"
            size="icon"
            className="text-green-500 border-green-500 hover:text-green-500"
            onClick={handleRefresh}
          >
            <IoIosRefresh className="h-4 w-4" />
          </Button>
        </div>
        <AccountInfo accountInfo={accountInfo} />
        <div className="mt-5 flex flex-col items-center">
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-2">Add Account</DialogTitle>
              <DialogDescription asChild>
                <CardWithForm onSubmit={handleCloseForm} />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}

export default Accounts;
