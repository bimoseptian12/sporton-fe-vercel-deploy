"use client";

import {
  FiArrowRight,
  FiShoppingBag,
  FiChevronUp,
  FiChevronDown,
} from "react-icons/fi";
import Button from "../ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { Product } from "@/app/types";

type TProductActionsProps = {
  product: Product;
  stock: number;
};

const ProductActions = ({ product, stock }: TProductActionsProps) => {
  const { addItem } = useCartStore();
  const { push } = useRouter();
  const [qty, setQty] = useState(1);

  const handleAddToCart = () => {
    addItem(product, qty);
  };

  const handleCheckout = () => {
    addItem(product, qty);
    push("/checkout");
  };

  return (
    <div className="flex gap-5">
      <div className="border border-gray-500 inline-flex w-fit min-w-20.5">
        <div className="aspect-square text-xl font-medium border-r border-gray-500 flex justify-center items-center">
          <span>{qty}</span>
        </div>
        <div className="flex flex-col">
          <button
            className="border-b border-gray-500 cursor-pointer h-1/2 aspect-square flex justify-center items-center"
            onClick={() => setQty(qty < stock ? qty + 1 : qty)}
          >
            <FiChevronUp></FiChevronUp>
          </button>
          <button
            className=" border-gray-500 cursor-pointer h-1/2 aspect-square flex justify-center items-center"
            onClick={() => setQty(qty > 1 ? qty - 1 : qty)}
          >
            <FiChevronDown></FiChevronDown>
          </button>
        </div>
      </div>
      <Button className="px-20 w-full" onClick={handleAddToCart}>
        <FiShoppingBag></FiShoppingBag>Add to Cart
      </Button>
      <Button variant="dark" className="px-20 w-full " onClick={handleCheckout}>
        Checkout Now<FiArrowRight></FiArrowRight>
      </Button>
    </div>
  );
};

export default ProductActions;
