import PriceConverter from "@/app/utils/price-converter";
import Image from "next/image";
import { FiEdit, FiTrash, FiEye } from "react-icons/fi";

const transactionData = [
  {
    date: "23/02/2026 19:32",
    customer: "John Doe",
    contact: +1250120581,
    total: 150000,
    status: "Pending",
  },
  {
    date: "23/02/2026 19:32",
    customer: "John Doe",
    contact: +1250120581,
    total: 150000,
    status: "Rejected",
  },
  {
    date: "23/02/2026 19:32",
    customer: "John Doe",
    contact: +1250120581,
    total: 150000,
    status: "Paid",
  },
];

type TCategoryTableProps = {
  onViewDetails: () => void;
};

const CategoryTable = ({ onViewDetails }: TCategoryTableProps) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-600 border-yellow-300";
      case "rejected":
        return "bg-red-100 text-red-600 border-red-300";
      case "paid":
        return "bg-green-100 text-green-600 border-green-300";
    }
  };
  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <table className="w-full text-left border-collapse">
        <thead className="">
          <tr className="border-b border-gray-200">
            <th className="px-6 py-4 font-semibold">Date</th>
            <th className="px-6 py-4 font-semibold">Customer</th>
            <th className="px-6 py-4 font-semibold">Contact</th>
            <th className="px-6 py-4 font-semibold">Total</th>
            <th className="px-6 py-4 font-semibold">Status</th>
            <th className="px-6 py-4 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactionData.map((data, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <td className="px-6 py-4 font-medium">
                <div className="flex gap-2 items-center ">
                  <span className="">{data.date}</span>
                </div>
              </td>

              <td className="px-6 py-4 font-medium">{data.customer}</td>
              <td className="px-6 py-4 font-medium">{data.contact}</td>
              <td className="px-6 py-4 font-medium">
                {PriceConverter(data.total)}
              </td>
              <td className="px-6 py-4 font-medium">
                <div
                  className={`px-4 py-1 rounded-full border text-center ${getStatusColor(data.status)}`}
                >
                  {data.status}
                </div>
              </td>
              <td className="px-6 py-7.5 flex gap-3 items-center h-full text-gray-600">
                <button
                  onClick={onViewDetails}
                  className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 w-fit py-1 px-2 rounded-md"
                >
                  <FiEye size={18}></FiEye>View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CategoryTable;
