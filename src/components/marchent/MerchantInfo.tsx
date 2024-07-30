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
    <div className="m-4 rounded-lg bg-gray-900 p-6 text-white">
      <Table>
        <TableCaption>All Your merchant Information.</TableCaption>
        <TableHeader>
          <TableRow className="border-b border-gray-700">
            <TableHead className="w-[25%] text-left text-gray-300">
              Merchant Name{" "}
            </TableHead>
            <TableHead className="w-[25%] text-left text-gray-300">
              Type
            </TableHead>

            <TableHead className="w-[25%] text-left text-gray-300">
              Category
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {merchantInfo?.map((merchant, index) => (
            <TableRow key={index} className="border-b border-gray-700">
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
