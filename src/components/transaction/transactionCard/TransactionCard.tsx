"use client";
import { MerchantCard } from "@/components/marchent/MarchentCard";
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
import { getAllMerchants } from "@/services/apiServices";
import { useEffect, useState } from "react";

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
  const [merchantInfo, setMerchantInfo] = useState<MerchantCard[]>([]);
  const [loading, setLoading] = useState(false);

  const getallMerchantsFn = async () => {
    setLoading(true);
    try {
      const allMerchants = await getAllMerchants();
      setMerchantInfo(allMerchants);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching events:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getallMerchantsFn();
  }, []);

  const [cardInfo, setCardInfo] = useState<TransactionCard>({
    merchantName: "",
    type: "",
    amount: 0,
    category: "",
    merchantId: undefined,
  });

  const onValueChange = (key: keyof TransactionCard, value: any) => {
    console.log(key, value);
    setCardInfo({
      ...cardInfo,
      [key]: value,
    });
  };

  const handleAdd = () => {
    // Set the merchantId based on the selected merchantName
    const selectedMerchant = merchantInfo.find(
      (el) => el.merchantName === cardInfo.merchantName,
    );
    if (selectedMerchant) {
      cardInfo.merchantId = selectedMerchant.id;
    }
    console.log(cardInfo);
    onSubmit(cardInfo);
  };

  return (
    <Card className="w-full">
      <CardContent className="mt-4">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="merchantname">Merchant Name</Label>
              <Select
                value={cardInfo.merchantName}
                onValueChange={(val) => onValueChange("merchantName", val)}
              >
                <SelectTrigger id="merchantname">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {merchantInfo.map((el) => (
                    <SelectItem key={el.id} value={el.merchantName}>
                      {el.merchantName}
                    </SelectItem>
                  ))}
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
