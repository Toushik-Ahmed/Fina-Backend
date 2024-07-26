import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

export interface BudgetCard {
  id?: number;
  category: string;
  budget: number;
  amount?: number;
}

type Props = {
  onSubmit: (val: BudgetCard) => void;
  initialData?: BudgetCard | null;
};

export function BudgetCard({ onSubmit, initialData }: Props) {
  const [cardInfo, setCardInfo] = useState<BudgetCard>({
    category: "",
    budget: 0,
    id: undefined,
  });

  useEffect(() => {
    if (initialData) {
      setCardInfo(initialData);
    }
  }, [initialData]);

  const onValueChange = (key: keyof BudgetCard, value: any) => {
    setCardInfo({
      ...cardInfo,
      [key]: value,
    });
  };

  const handleAdd = () => {
    onSubmit(cardInfo);
  };

  return (
    <Card className="w-full">
      <CardContent className="mt-4">
        <form>
          <div className="grid w-full items-center gap-4">
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
                type="number"
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
        <Button onClick={handleAdd}>Save</Button>
      </CardFooter>
    </Card>
  );
}
