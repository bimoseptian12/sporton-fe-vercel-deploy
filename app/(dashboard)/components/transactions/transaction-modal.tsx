import Modal from "../ui/modal";
import Button from "@/app/(landing)/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import PriceConverter from "@/app/utils/price-converter";
import { FiCheck, FiX } from "react-icons/fi";
import { Transaction } from "@/app/types";
import { getImageUrl } from "@/app/lib/api";

type TtransactionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  transaction: Transaction | null;
  onStatusChange: (id: string, status: "paid" | "rejected") => Promise<void>;
};

const TransactionModal = ({
  isOpen,
  onClose,
  transaction,
  onStatusChange,
}: TtransactionModalProps) => {
  const [isUpdating, setIsUpdating] = useState(false);

  if (!transaction) return null;

  const handleStatusUpdate = async (status: "paid" | "rejected") => {
    setIsUpdating(true);
    try {
      await onStatusChange(transaction._id, status);
    } catch (error) {
      console.error(error);
    } finally {
      setIsUpdating(false);
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Verify Transactions">
      <div className="flex gap-6  ">
        <div className="min-w-50 ">
          <h4 className="font-semibold text-sm mb-2">Payment Proof</h4>
          {transaction.paymentProof ? (
            <Image
              src={getImageUrl(transaction.paymentProof)}
              alt="payment proof"
              width={200}
              height={401}
            ></Image>
          ) : (
            <div className="text-center p-4">
              <p className="text-sm">No Payment proof uploaded</p>
            </div>
          )}
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-2">Order Details</h4>
          <div className="bg-gray-100 rounded-md p-4 flex flex-col gap-2.5 text-sm mb-5">
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Date</div>
              <div className="text-right">
                {new Date(transaction.createdAt).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Customer</div>
              <div className="text-right">{transaction.customerName}</div>
            </div>
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Contact</div>
              <div className="text-right">{transaction.customerContact}</div>
            </div>
            <div className="flex justify-between font-medium gap-10">
              <div className="opacity-50 whitespace-nowrap">
                Shipping Address
              </div>
              <div className="text-right">{transaction.customerAddress}</div>
            </div>
          </div>
          <h4 className="font-semibold text-sm mb-2">Item Purchased</h4>
          <div className="space-y-3">
            {transaction.purchasedItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-2 flex items-center gap-2"
              >
                <div className="bg-gray-100 rounded aspect-square w-8 h-8">
                  <Image
                    src={getImageUrl(item.productId.imageUrl)}
                    alt=""
                    width={30}
                    height={30}
                  ></Image>
                </div>
                <div className="font-medium text-sm">{item.productId.name}</div>
                <div className="font-medium ml-auto text-sm">
                  {item.qty} Units
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm mt-6">
            <h4 className="font-semibold">Total</h4>
            <div className="text-primary font-semibold">
              {PriceConverter(parseInt(transaction.totalPayment))}
            </div>
          </div>
          <div className="flex justify-end gap-5 mt-10">
            {isUpdating ? (
              <div className="text-cente">Updating...</div>
            ) : (
              <>
                <Button
                  className="text-primary! bg-primary-light! rounded-md"
                  size="small"
                  onClick={() => handleStatusUpdate("rejected")}
                  disabled={isUpdating}
                >
                  <FiX size={24} />
                  Rejected
                </Button>
                <Button
                  className="text-white! bg-[#50C252]! rounded-md"
                  size="small"
                  onClick={() => handleStatusUpdate("paid")}
                  disabled={isUpdating}
                >
                  <FiCheck size={24} />
                  Approve
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default TransactionModal;
