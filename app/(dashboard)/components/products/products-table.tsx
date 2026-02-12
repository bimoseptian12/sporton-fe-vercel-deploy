import { getImageUrl } from "@/app/lib/api";
import { Product } from "@/app/types";
import PriceConverter from "@/app/utils/price-converter";
import Image from "next/image";
import { FiEdit, FiTrash } from "react-icons/fi";

type TProductTableProps = {
  products: Product[];
  onDelete?: (id: string) => void;
  onEdit?: (product: Product) => void;
};

const ProductTable = ({ products, onDelete, onEdit }: TProductTableProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <table className="w-full text-left border-collapse">
        <thead className="">
          <tr className="border-b border-gray-200">
            <th className="px-6 py-4 font-semibold">Product</th>
            <th className="px-6 py-4 font-semibold">Category</th>
            <th className="px-6 py-4 font-semibold">Price</th>
            <th className="px-6 py-4 font-semibold">Stok</th>
            <th className="px-6 py-4 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((data, index) => (
            <tr
              key={data._id}
              className="border-b border-gray-200 last:border-b-0"
            >
              <td className="px-6 py-4 font-medium">
                <div className="flex gap-2 items-center ">
                  <div className="aspect-square bg-gray-100 rounded-md">
                    <Image
                      className="aspect-square object-contain"
                      src={getImageUrl(data.imageUrl)}
                      alt=""
                      width={52}
                      height={52}
                    ></Image>
                  </div>
                  <span className="">{data.name}</span>
                </div>
              </td>

              <td className="px-6 py-4  font-medium">
                <div className="rounded-md bg-gray-200 px-2 py-1 w-fit">
                  {data.category.name}
                </div>
              </td>
              <td className="px-6 py-4 font-medium">
                {PriceConverter(data.price)}
              </td>
              <td className="px-6 py-4 font-medium">{data.stock} Units</td>
              <td className="px-6 py-7.5 flex gap-3 items-center h-full text-gray-600">
                <button
                  onClick={() => onEdit?.(data)}
                  className="cursor-pointer"
                >
                  <FiEdit size={20}></FiEdit>
                </button>
                <button
                  onClick={() => onDelete?.(data._id)}
                  className="cursor-pointer"
                >
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
export default ProductTable;
