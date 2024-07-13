"use client";
// CardWithForm.tsx

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { DialogClose } from "../ui/dialog";
import valid from "card-validator";

export interface CardInfo {
  cardNumber: string;
  bankName: string;
  accountType: "credit" | "debit";
  transfarredAmount: number;
}

type Props = {
  onSubmit: (val: CardInfo) => void; // Callback to close the form
};

export function CardWithForm({ onSubmit }: Props) {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    cardNumber: "",
    bankName: "",
    accountType: "credit",
    transfarredAmount: 0,
  });

  const [invalidCardnumber, setInvalidCardNumber] = useState(false);

  const onValueChange = (key: keyof CardInfo, value: any) => {
    console.log(key, value);
    setCardInfo({
      ...cardInfo,
      [key]: value,
    });
  };

  const handleAdd = () => {
    const isCreditValid = valid.number(cardInfo.cardNumber);
    setInvalidCardNumber(!isCreditValid.isValid);
    if (!isCreditValid.isValid) return;

    onSubmit(cardInfo);
  };

  return (
    <Card className="w-full ">
      {/* <CardHeader className="text-center">
        <CardTitle>Transfer Your Money</CardTitle>
        <CardDescription>
          Add money from any existing card or bank.
        </CardDescription>
      </CardHeader> */}
      <CardContent className="mt-4">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="accountName">Account Name</Label>
              <Input
                value={cardInfo.cardNumber}
                onChange={(ev) => {
                  onValueChange("cardNumber", ev.target.value);
                  setInvalidCardNumber(false);
                }}
                id="cardNumber"
                placeholder="Credit card-xxx"
              />
              {invalidCardnumber && (
                <div className="ml-2 left-align text-xs text-red-500">
                  Invalid Card Number
                </div>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="bankName">Bank Name</Label>
              <Input
                value={cardInfo.bankName}
                onChange={(ev) => onValueChange("bankName", ev.target.value)}
                id="bankName"
                placeholder="Bank name "
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="accountType">Account Type</Label>
              <Select
                value={cardInfo.accountType}
                onValueChange={(val) => onValueChange("accountType", val)}
              >
                <SelectTrigger id="accountType">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="credit">Credit</SelectItem>
                  <SelectItem value="debit">Debit</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="transferedMoney">Transferred Money</Label>
              <Input
                onFocus={(ev) => ev.target.select()}
                value={cardInfo.transfarredAmount}
                onChange={(ev) =>
                  onValueChange("transfarredAmount", ev.target.value)
                }
                id="transferedMoney"
                placeholder="0$"
                type="number"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <Button onClick={handleAdd}>Add</Button>
      </CardFooter>
    </Card>
  );
}
