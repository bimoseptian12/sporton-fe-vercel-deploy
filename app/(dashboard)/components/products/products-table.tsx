import PriceConverter from "@/app/utils/price-converter";
import Image from "next/image";
import { FiEdit, FiTrash } from "react-icons/fi";

const productData = [
  {
    name: "SportOn Product 1",
    imageUrl: "/images/product/racket.png",
    category: "Running",
    price: 289000,
    stock: 3,
  },
  {
    name: "SportOn Product 2",
    imageUrl: "/images/product/shoes 2.png",
    category: "Running",
    price: 126000,
    stock: 3,
  },
  {
    name: "SportOn Product 3",
    imageUrl: "/images/product/sportshirt 1.png",
    category: "Running",
    price: 150000,
    stock: 3,
  },
];

const ProductTable = () => {
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
          {productData.map((data, index) => (
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

              <td className="px-6 py-4  font-medium">
                <div className="rounded-md bg-gray-200 px-2 py-1 w-fit">
                  {data.category}
                </div>
              </td>
              <td className="px-6 py-4 font-medium">
                {PriceConverter(data.price)}
              </td>
              <td className="px-6 py-4 font-medium">{data.stock} Units</td>
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
export default ProductTable;
