"use client";
// MerchantCardWithForm.tsx

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export interface MerchantCard {
  id?: number;
  merchantName: string;
  type: string;
  category: string;
}

type Props = {
  onSubmit: (val: MerchantCard) => void; // Callback to close the form
};

export function MerchantCardWithForm({ onSubmit }: Props) {
  const [cardInfo, setCardInfo] = useState<MerchantCard>({
    merchantName: "",
    type: "",
    category: "",
  });

  const onValueChange = (key: keyof MerchantCard, value: any) => {
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
              <Input
                value={cardInfo.merchantName}
                onChange={(ev) =>
                  onValueChange("merchantName", ev.target.value)
                }
                id="merchantName"
                placeholder="Enter Merchant Name"
              />
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
              <Input
                value={cardInfo.type}
                onChange={(ev) => onValueChange("type", ev.target.value)}
                id="type"
                placeholder="static/auto"
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
