import ImageUploadPreview from "../ui/image-upload-preview";
import Modal from "../ui/modal";
import Button from "@/app/(landing)/components/ui/button";
import { useState } from "react";

type TbankModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const bankModal = ({ isOpen, onClose }: TbankModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Bank Account">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 w-full">
          <div className="input-group-admin">
            <label htmlFor="bankName">Bank Name</label>
            <input
              type="text"
              id="bankName"
              name="bankName"
              placeholder="e. g. BCA, Mandiri"
            />
          </div>
          <div className="input-group-admin">
            <label htmlFor="accountNumber">Account Number</label>
            <input
              name="accountNumber"
              id="accountNumber"
              placeholder="125215125"
            ></input>
          </div>
          <div className="input-group-admin">
            <label htmlFor="accountName">Account Holder</label>
            <input
              name="accountName"
              id="accountName"
              placeholder="Holder Name as registered on the account"
            ></input>
          </div>
          <Button className="ml-auto mt-8 rounded-lg">Add Bank Account</Button>
        </div>
      </div>
    </Modal>
  );
};
export default bankModal;
