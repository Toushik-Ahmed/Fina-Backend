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
import valid from "card-validator";
import { useState } from "react";
import { DialogClose } from "../ui/dialog";

export interface CardInfo {
  accountname: string;
  bankname: string;
  accounttype: "Credit" | "Debit";
  totalmoney: number;
}

type Props = {
  onSubmit: (val: CardInfo) => void; // Callback to close the form
};

export function CardWithForm({ onSubmit }: Props) {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    accountname: "",
    bankname: "",
    accounttype: "Credit",
    totalmoney: 0,
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
    const isCreditValid = valid.number(cardInfo.accountname);
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
              <Label htmlFor="accountname">Account Name</Label>
              <Input
                value={cardInfo.accountname}
                onChange={(ev) => {
                  onValueChange("accountname", ev.target.value);
                  setInvalidCardNumber(false);
                }}
                id="accountname"
                placeholder="Credit card-xxx"
              />
              {invalidCardnumber && (
                <div className="ml-2 left-align text-xs text-red-500">
                  Invalid Card Number
                </div>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="bankname">Bank Name</Label>
              <Input
                value={cardInfo.bankname}
                onChange={(ev) => onValueChange("bankname", ev.target.value)}
                id="bankname"
                placeholder="Bank name "
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="accounttype">Account Type</Label>
              <Select
                value={cardInfo.accounttype}
                onValueChange={(val) => onValueChange("accounttype", val)}
              >
                <SelectTrigger id="accounttype">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="Credit">Credit</SelectItem>
                  <SelectItem value="Debit">Debit</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="transferedMoney">Transferred Money</Label>
              <Input
                onFocus={(ev) => ev.target.select()}
                value={cardInfo.totalmoney}
                onChange={(ev) => onValueChange("totalmoney", ev.target.value)}
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
