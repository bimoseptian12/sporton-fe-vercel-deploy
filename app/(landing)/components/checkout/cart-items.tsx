"use client";

import Image from "next/image";
import { FiTrash2, FiArrowRight, FiCreditCard } from "react-icons/fi";
import Button from "../ui/button";
import PriceConverter from "@/app/utils/price-converter";
import { cartList } from "../ui/cart-popup";
import CardWithHeader from "../ui/card-with-header";
import { useRouter } from "next/navigation";

const CartItems = () => {
  const { push } = useRouter();

  const totalPrice = cartList.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );
  return (
    <CardWithHeader title="Cart Items">
      <div className="overflow-auto max-h-[300px]">
        {cartList.map((item, index) => (
          <div
            className="border-b border-gray-200 p-4 flex gap-3   "
            key={index}
          >
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
      </div>
      <div className="border-t border-gray-200 py-4 px-4">
        <div className="flex justify-between">
          <div className="font-sm ">Total</div>
          <div className="text-primary text-xs">
            {PriceConverter(totalPrice)}
          </div>
        </div>
        <Button
          variant="dark"
          className="w-full mt-4"
          onClick={() => push("/payment")}
        >
          <FiCreditCard></FiCreditCard> Proceed to Payment
        </Button>
      </div>
    </CardWithHeader>
  );
};
export default CartItems;
