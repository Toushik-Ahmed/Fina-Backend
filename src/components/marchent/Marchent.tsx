"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import { addMerchant, getAllMerchants } from "@/services/apiServices";
import { useBudget } from "@/context/BudgetContextType";
import { addMerchant, getAllMerchants } from "@/services/apiServices";
import { useEffect, useState } from "react";
import { IoIosRefresh } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import LoadingSpinner from "../common/LoadingSpinner";
import { Button } from "../ui/button";
import { MerchantCard, MerchantCardWithForm } from "./MarchentCard";
import MerchantInfo from "./MerchantInfo";

type Props = {};

function Merchants({}: Props) {
  // const [merchantInfo, setMerchantInfo] = useState<MerchantCard[]>([]);
  const { merchantInfo, setMerchantInfo } = useBudget();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getallMerchantsFn();
  }, []);

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

  const handleCloseForm = async (value: MerchantCard) => {
    console.log("marchants value:" + value);
    try {
      const addedMerchant = await addMerchant(value); // Call addMerchant function with MerchantCard
      setMerchantInfo((prevMerchants) => [...prevMerchants, addedMerchant]);
      setDialogOpen(false);
    } catch (error) {
      console.error("Error adding Merchant:", error);
    }
  };

  const handleRefresh = async () => {
    getallMerchantsFn();
  };

  return (
    <div>
      <Dialog
        open={dialogOpen}
        onOpenChange={(ev) => {
          setDialogOpen(ev);
          console.log(ev);
        }}
      >
        <div className="flex justify-end gap-2">
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="flex gap-2 bg-green-500 text-white hover:bg-green-600 hover:text-white"
            >
              <IoAdd className="h-4 w-4" /> Add Merchant
            </Button>
          </DialogTrigger>

          <Button
            variant="outline"
            size="icon"
            className="border-green-500 text-green-500 hover:text-green-500"
            onClick={handleRefresh}
          >
            <IoIosRefresh className="h-4 w-4" />
          </Button>
        </div>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <MerchantInfo merchantInfo={merchantInfo} />
        )}
        <div className="mt-5 flex flex-col items-center">
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-2">Add Merchant</DialogTitle>
              <DialogDescription asChild>
                <MerchantCardWithForm onSubmit={handleCloseForm} />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}

export default Merchants;
