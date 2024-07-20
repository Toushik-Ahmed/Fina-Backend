"use client";
// BudgetCardWithForm.tsx

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export interface BudgetCard {
  category: string;
  budget: number;
}

type Props = {
  onSubmit: (val: BudgetCard) => void; // Callback to close the form
};

export function BudgetCardWithForm({ onSubmit }: Props) {
  const [cardInfo, setCardInfo] = useState<BudgetCard>({
    category: "",
    budget: 0,
  });

  const onValueChange = (key: keyof BudgetCard, value: any) => {
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
              <Label htmlFor="category">Category</Label>
              <Input
                value={cardInfo.category}
                onChange={(ev) => onValueChange("category", ev.target.value)}
                id="category"
                placeholder="Enter Category"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="budget">Budget</Label>
              <Input
                value={cardInfo.budget}
                onChange={(ev) => onValueChange("budget", ev.target.value)}
                id="budget"
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
