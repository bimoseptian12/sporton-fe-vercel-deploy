import Modal from "../ui/modal";
import Button from "@/app/(landing)/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import PriceConverter from "@/app/utils/price-converter";
import { FiCheck, FiX } from "react-icons/fi";

type TtransactionModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const TransactionModal = ({ isOpen, onClose }: TtransactionModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Verify Transactions">
      <div className="flex gap-6">
        <div>
          <h4 className="font-semibold text-sm mb-2">Payment Proof</h4>
          <Image
            src="/images/payment-proof-dummy.png"
            alt="payment proof"
            width={200}
            height={401}
          ></Image>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-2">Order Details</h4>
          <div className="bg-gray-100 rounded-md p-4 flex flex-col gap-2.5 text-sm mb-5">
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Date</div>
              <div className="text-right">23/02/2026 19:32</div>
            </div>
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Customer</div>
              <div className="text-right">John Doe</div>
            </div>
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Contact</div>
              <div className="text-right">+141414</div>
            </div>
            <div className="flex justify-between font-medium gap-10">
              <div className="opacity-50 whitespace-nowrap">
                Shipping Address
              </div>
              <div className="text-right">
                Merdeka Street, Jakarta, Indonesia 10630
              </div>
            </div>
          </div>
          <h4 className="font-semibold text-sm mb-2">Item Purchased</h4>
          <div className="border border-gray-200 rounded-lg p-2 flex items-center gap-2">
            <div className="bg-gray-100 rounded aspect-square w-8 h-8">
              <Image
                src="/images/product/racket.png"
                alt=""
                width={30}
                height={30}
              ></Image>
            </div>
            <div className="font-medium text-sm">SportOn Hyperfast Shoes</div>
            <div className="font-medium ml-auto text-sm">3 Units</div>
          </div>
          <div className="flex justify-between text-sm mt-6">
            <h4 className="font-semibold">Total</h4>
            <div className="text-primary font-semibold">
              {PriceConverter(450000)}
            </div>
          </div>
          <div className="flex justify-end gap-5 mt-10">
            <Button
              className="text-primary! bg-primary-light! rounded-md"
              size="small"
            >
              <FiX size={24}> </FiX>Reject
            </Button>
            <Button
              className="text-white! bg-[#50C252]! rounded-md"
              size="small"
            >
              <FiCheck size={24}> </FiCheck>Approve
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default TransactionModal;
