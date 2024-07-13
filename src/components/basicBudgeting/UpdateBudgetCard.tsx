"use client";

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
export interface BudgetCardData {
  category: string;
  amount: number;
  budget: number;
}

type Props = {
  allCategories: string[];
  previousData: BudgetCardData;
  onSubmit: (val: BudgetCardData) => void;
};

export function UpdateBudgetCard({
  allCategories,
  previousData,
  onSubmit,
}: Props) {
  const [budgetData, setBudgetData] = useState<BudgetCardData>(previousData);

  const onValueChange = (key: keyof BudgetCardData, value: any) => {
    console.log(key, value);
    setBudgetData({
      ...budgetData,
      [key]: value,
    });
  };

  const handleSubmit = () => {
    onSubmit(budgetData);
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
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="accountType">Account Type</Label>
            <Select
              value={budgetData.category}
              onValueChange={(val) => onValueChange("category", val)}
            >
              <SelectTrigger id="category">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper">
                {allCategories.map((val, idx) => (
                  <SelectItem value={val} key={idx}>
                    {val}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="amount">Amount</Label>
              <Input
                value={budgetData.amount}
                onChange={(ev) => {
                  onValueChange("amount", ev.target.value);
                }}
                id="amount"
                placeholder="Amount"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="budget">Budget</Label>
              <Input
                value={budgetData.budget}
                onChange={(ev) => onValueChange("budget", ev.target.value)}
                id="budget"
                placeholder="Budget"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <Button onClick={handleSubmit}>Update</Button>
      </CardFooter>
    </Card>
  );
}
