"use client";

import Button from "../ui/button";
import { FiAlertCircle, FiRefreshCw } from "react-icons/fi";

const OrderRejected = () => {
  return (
    <div className="bg-white w-160 p-16 flex flex-col justify-center items-center mx-auto">
      <div className="w-16 h-16 bg-primary-light rounded-full mx-auto p-3 flex justify-center items-center text-primary mb-5">
        <FiAlertCircle size={52}></FiAlertCircle>
      </div>
      <h2 className="text-2xl font-semibold mb-2">Order Rejected !!</h2>
      <p className="text-xs py-4 text-center mb-8">
        I'm Sorry your order is rejected. because your payment proof is not
        valid
      </p>
      <Button className="w-full" variant="dark">
        <FiRefreshCw></FiRefreshCw>Refresh Order Status
      </Button>
    </div>
  );
};
export default OrderRejected;
