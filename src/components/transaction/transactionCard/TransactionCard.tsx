"use client";
// TransactionCardWithForm.tsx

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { DialogClose } from "@/components/ui/dialog";
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

export interface TransactionCard {
  merchantName?: string;
  type?: string;
  amount: number;
  category: string;
  merchantId?: number;
}

type Props = {
  onSubmit: (val: TransactionCard) => void; // Callback to close the form
};

export function TransactionCardWithForm({ onSubmit }: Props) {
  const [cardInfo, setCardInfo] = useState<TransactionCard>({
    merchantName: "",
    type: "",
    amount: 0,
    category: "",
  });

  const onValueChange = (key: keyof TransactionCard, value: any) => {
    console.log(key, value);
    setCardInfo({
      ...cardInfo,
      [key]: value,
    });
  };

  const handleAdd = () => {
    console.log(cardInfo);
    onSubmit(cardInfo);
  };

  return (
    <Card className="w-full">
      {/* <CardHeader className="text-center">
        <CardTitle>Transfer Your Money</CardTitle>
        <CardDescription>
          Add money from any existing card or bank.
        </CardDescription>
      </CardHeader> */}
      <CardContent className="mt-4">
        <form>
          <div className="grid w-full items-center gap-4">
            {/* <div className="flex flex-col space-y-1.5">
              <Label htmlFor="merchantId">Merchant Id</Label>
              <Input
                value={cardInfo.merchantName}
                onChange={(ev) => {
                  onValueChange('merchantName', ev.target.value);
                }}
                id="merchantId"
                placeholder="Merchant Id"
              />
            </div> */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="marchantname">Merchant Name</Label>
              <Select
                value={cardInfo.merchantName}
                onValueChange={(val) => onValueChange("merchantName", val)}
              >
                <SelectTrigger id="merchantname">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="arong">arong</SelectItem>
                  <SelectItem value="wallmart">wallmart</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="category">Category</Label>
              <Input
                value={cardInfo.category}
                onChange={(ev) => onValueChange("category", ev.target.value)}
                id="category"
                placeholder="Enter Category"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="type">Type</Label>
              <Select
                value={cardInfo.type}
                onValueChange={(val) => onValueChange("type", val)}
              >
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="card">Card</SelectItem>
                  <SelectItem value="manual">Manual</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="amount">Amount</Label>
              <Input
                onFocus={(ev) => ev.target.select()}
                value={cardInfo.amount}
                onChange={(ev) => onValueChange("amount", ev.target.value)}
                id="amount"
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
