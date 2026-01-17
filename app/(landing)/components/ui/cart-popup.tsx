import PriceConverter from "@/app/utils/price-converter";
import Image from "next/image";
import { FiTrash2 } from "react-icons/fi";
import Button from "../ui/button";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

export const cartList = [
  {
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: 329000,
    qty: 2,
    imgUrl: "shoes 2.png",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 105000,
    qty: 1,
    imgUrl: "racket.png",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 105000,
    qty: 1,
    imgUrl: "racket.png",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 105000,
    qty: 1,
    imgUrl: "racket.png",
  },
];

const CartPopup = () => {
  const { push } = useRouter();

  const totalPrice = cartList.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  const handleCheckout = () => {
    push("/checkout");
  };

  return (
    <div className="absolute bg-white right-0 top-12 shadow-xl shadow-black/10 border border-gray-200 w-90 z-10">
      <div className="p-4 border-b border-gray-200 font-bold text-center">
        Shopping Cart
      </div>
      {cartList.map((item, index) => (
        <div className="border-b border-gray-200 p-4 flex gap-3   " key={index}>
          <div className="bg-primary-light aspect-square w-16 flex justify-center items-center ">
            <Image
              src={`/images/product/${item.imgUrl}`}
              width={63}
              height={63}
              alt={item.name}
              className="object-contain aspect-square"
            ></Image>
          </div>
          <div className="self-center ">
            <div className="text-sm font-medium">{item.name}</div>
            <div className="flex gap-3 font-medium text-xs">
              <div>{item.qty}x</div>
              <div className="text-primary">{PriceConverter(item.price)}</div>
            </div>
          </div>
          <Button
            size="small"
            variant="ghost"
            className="w-7 h-7 p-0! self-center ml-auto"
          >
            <FiTrash2></FiTrash2>
          </Button>
        </div>
      ))}
      <div className="border-t border-gray-200 py-4 px-4">
        <div className="flex justify-between">
          <div className="font-sm ">Total</div>
          <div className="text-primary text-xs">
            {PriceConverter(totalPrice)}
          </div>
        </div>
        <Button
          variant="dark"
          size="small"
          className="w-full mt-4"
          onClick={handleCheckout}
        >
          Checkout Now <FiArrowRight></FiArrowRight>
        </Button>
      </div>
    </div>
  );
};

export default CartPopup;
