import { FiCreditCard } from "react-icons/fi";
import CardWithHeader from "../ui/card-with-header";

const PaymentList = [
  {
    bank_name: "BCA",
    account_number: "1234567890",
    account_holder: "PT. Sport Indonesia",
  },
  {
    bank_name: "BRI",
    account_number: "1234567890",
    account_holder: "PT. Sport Indonesia",
  },
  {
    bank_name: "BNI",
    account_number: "1234567890",
    account_holder: "PT. Sport Indonesia",
  },
];

const PaymentOptions = () => {
  return (
    <CardWithHeader title="Payment Options">
      {PaymentList.map((payment, index) => (
        <div key={index}>
          <div className="border-b border-gray-200">
            <div className="flex gap-5 p-4">
              <div className="bg-blue-100 p-4 text-blue-500">
                <FiCreditCard size={24}></FiCreditCard>
              </div>

              <div className="self-center flex-1">
                <div className="font-bold">{payment.bank_name}</div>
                <div className="">{payment.account_number}</div>
                <div className="opacity-70 text-xs">
                  {payment.account_holder}
                </div>
              </div>

              <div className="bg-blue-100 self-center p-1 ">
                <p className="text-xs font-light">Bank Transfer</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </CardWithHeader>
  );
};
export default PaymentOptions;
