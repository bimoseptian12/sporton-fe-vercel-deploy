import Image from "next/image";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import Button from "../ui/button";

const ProductList = [
  {
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: 329000,
    imgUrl: "shoes 2.png",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 99999,
    imgUrl: "racket.png",
  },
  {
    name: "SportsOn Slowlivin",
    category: "Running",
    price: 119000,
    imgUrl: "sportshirt 1.png",
  },
  {
    name: "SportsOn HyperSoccer v2",
    category: "Football",
    price: 458000,
    imgUrl: "football-shoes (1) 1-1.png",
  },
  {
    name: "SportsOn HyperSoccer v2",
    category: "Football",
    price: 458000,
    imgUrl: "football-shoes (1) 1-1.png",
  },

  {
    name: "SportsOn Slowlivin v2",
    category: "Running",
    price: 119000,
    imgUrl: "sportshirt 1-1.png",
  },
  {
    name: "SportsOn Hyperfast Shoes v2",
    category: "Running",
    price: 329000,
    imgUrl: "shoes 2-1.png",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 999999,
    imgUrl: "Group 12.png",
  },
];

const ProductSelection = () => {
  return (
    <section className="pt-16">
      <div className="container mx-auto text-center">
        <h2 className="font-[700] text-4xl italic">
          OUR <span className="text-primary">PRODUCT</span>
        </h2>
      </div>
      <div className="pt-8 container mx-auto pb-24">
        <div className="grid grid-cols-4 gap-5">
          {ProductList.map((product, index) => (
            <Link href="#" key={index} className="p-1">
              <div className="p-1.5 border-1 text-primary-light rounded-1 h-[389px]">
                <div className="bg-primary-light flex mx-auto items-center mb-[10px] relative">
                  <Image
                    src={`/images/product/${product.imgUrl}`}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="aspect-square object-contain flex mx-auto"
                  ></Image>
                  <Button className="w-10 h-10 p-2! absolute top-2 right-2 ">
                    <FiPlus size={24} />
                  </Button>
                </div>
                <div className="text-dark text-medium text-[18px] mb-1.5">
                  {product.name}
                </div>
                <div className="flex justify-between text-gray-500">
                  {product.category}
                  <h3 className="text-primary">
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      maximumSignificantDigits: 3,
                    }).format(product.price)}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
  1;
  11;
};
export default ProductSelection;
