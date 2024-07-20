import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MerchantCard } from "./MarchentCard";

type Props = {
  merchantInfo: MerchantCard[];
};

const MerchantInfo = ({ merchantInfo }: Props) => {
  return (
    <div>
      <Table>
        <TableCaption>All Your merchant Information.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[15vw]">Merchant Name </TableHead>
            <TableHead className="w-[15vw]">Type</TableHead>

            <TableHead className="w-[15vw]">Category</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {merchantInfo?.map((merchant, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                {merchant.merchantName}
              </TableCell>
              <TableCell>{merchant.type}</TableCell>
              <TableCell>{merchant.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MerchantInfo;
