"use client";
// Accounts.tsx

import { useState } from "react";
import { IoIosRefresh } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import { CardInfo, CardWithForm } from "../addCard/CardWithForm";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {};

function Accounts({}: Props) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCloseForm = (value: CardInfo) => {
    // Backend Call with card info
    console.log("In accounts", value);
    setDialogOpen(false);
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
          >
            <IoIosRefresh className="h-4 w-4" />
          </Button>
        </div>
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
