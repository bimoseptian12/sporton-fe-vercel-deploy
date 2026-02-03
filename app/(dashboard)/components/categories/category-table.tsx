import PriceConverter from "@/app/utils/price-converter";
import Image from "next/image";
import { FiEdit, FiTrash } from "react-icons/fi";

const categoryData = [
  {
    name: "Running",
    imageUrl: "/images/category/category-running.png",
    description: "lorem ipsum",
  },

  {
    name: "Football",
    imageUrl: "/images/category/category-football.png",
    description: "lorem ipsum",
  },
];

const CategroryTable = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <table className="w-full text-left border-collapse">
        <thead className="">
          <tr className="border-b border-gray-200">
            <th className="px-6 py-4 font-semibold">Category Name</th>
            <th className="px-6 py-4 font-semibold">Description</th>
            <th className="px-6 py-4 font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {categoryData.map((data, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <td className="px-6 py-4 font-medium">
                <div className="flex gap-2 items-center ">
                  <div className="aspect-square bg-gray-100 rounded-md">
                    <Image
                      className="aspect-square object-contain"
                      src={data.imageUrl}
                      alt=""
                      width={52}
                      height={52}
                    ></Image>
                  </div>
                  <span className="">{data.name}</span>
                </div>
              </td>

              <td className="px-6 py-4 font-medium">{data.description}</td>

              <td className="px-6 py-7.5 flex gap-3 items-center h-full text-gray-600">
                <button>
                  <FiEdit size={20}></FiEdit>
                </button>
                <button>
                  <FiTrash size={20}></FiTrash>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CategroryTable;
