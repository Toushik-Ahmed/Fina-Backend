import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function CardWithForm() {
  return (
    <Card className="w-[350px] ">
      <CardHeader>
        <CardTitle>Transfer Your Money</CardTitle>
        <CardDescription>
          Add money from any existing card or bank .
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="accountName">Account Name</Label>
              <Input id="accountName" placeholder="Credit card-xxx" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="bankName">Bank Name</Label>
              <Input id="bankName" placeholder="Bank name " />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="accountType">Account Type</Label>
              <Select>
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
              <Label htmlFor="transferedMoney">Transferd Money</Label>
              <Input id="transferedMoney" placeholder="0$" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Add</Button>
      </CardFooter>
    </Card>
  );
}
